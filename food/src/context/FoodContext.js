import createDataContext from './CreateDataContext';
import api from '../api/FoodApi';

const FoodReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: ''}
        case 'ingredients_populate':
            return { ...state, autoCompleteIngredients: action.payload }
        case 'search':
            return { ...state, recipeResults: action.payload}

    }
}

const Login = dispatch => async ({email, password}) => {
    try {
        const resp = await api.post('/api/token-auth',{email,password})
        console.log("Login Response: ", resp);
        dispatch({type: 'login'});
    } catch (e) {
        console.log('error in login: ', e);
    }
}

const Logout = dispatch => {
    try {
        dispatch({type: 'logout'});
    } catch (e) {
        console.log('Error logging out', e);
    }
}

const Signup = dispatch => ({email, password}) => {
    try {
        const resp = await api.get('/create_user?email=' + email + "&password=" + password);
        console.log("Signup Response: ", resp);
        dispatch({type: 'signup'});
    } catch (e) {
        console.log('erorr signing up',e);
    }
}

const IngredientsPopulate = dispatch => async () => {
    
    try {
        const resp = await api.get('/food_item_ac?q=');
        dispatch({type: 'ingredients_populate', payload: resp.data});
    } catch (e) {
        console.log('error Populate Ingredients: ', e);
    }
}

const Search = dispatch => async (searchItems, dietPrefs) => {
    try { 
        if (searchItems !== '') {
            var searchItemsString = searchItems.toString();
            console.log('searchString: ', searchItemsString);
        }
        if (dietPrefs !== '') {
            var dietPrefsString = dietPrefs.toString();
            console.log('diestprefsstring: ', dietPrefsString);
        }
        const searchString = "q=" + searchItemsString + '&p=' + dietPrefsString;
        
        const resp = await api.get('/get_results?' + searchString);
        
        dispatch({type: "search", payload: resp.data.hits});
    } catch (e) {
        console.log('search errorL ', e);
    }
}

const cooked = dispatch => async (recipe) => {
    try {
        const resp = await api.get('/' + recipe);

    } catch (e) {
        console.log('cooked error: ', e);
    }
}


export const { Provider, Context } = createDataContext(
    FoodReducer,
    { Login, Logout, Signup, IngredientsPopulate, Search },
    {
        user: '',
        savedRecipes: [],
        preferences: [],
        autoCompleteIngredients: [],
        recipeResults: []
    }
);