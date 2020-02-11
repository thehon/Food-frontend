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

const Login = dispatch => ({email, password}) => {
    try {
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

const Search = dispatch => async (ingredients, dietPrefs) => {
    try {
        const resp = await api.get('/get_results');
        console.log('searching ingredients', resp);
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