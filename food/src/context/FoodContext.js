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
            return { ...state, recipeResults: action.payload, searchIngredients: action.searchIngredients}
        case 'dashboard':
            return { ...state, dashboard: action.payload}
        case 'get_subs':
            return { ...state, subs: action.payload}

    }
}

const Login = dispatch => async ({email, password}) => {
    try {
        const resp = await api.post('/api/token-auth',{email,password})
        
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

const Signup = dispatch => async ({email, password}) => {
    try {
        const resp = await api.get('/create_user?email=' + email + "&password=" + password);
        
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
            
        }
        if (dietPrefs !== '') {
            var dietPrefsString = dietPrefs.toString();
            
        }
        const searchString = "q=" + searchItemsString + '&p=' + dietPrefsString;
        
        const resp = await api.get('/get_results?' + searchString);
        
        dispatch({type: "search", payload: resp.data.hits, searchIngredients: searchItems});
    } catch (e) {
        console.log('search errorL ', e);
    }
}

const Cooked = dispatch => async (recipe) => {
    try {
        var idstring = recipe.uri;
        var newString = idstring.split('recipe_');
        idstring = newString[1];
        var imgurl = recipe.image;
        var name = recipe.label;
        const weight = recipe.totalWeight;
        
        const resp = await api.get('/make_recipe?weight=' + weight + '&id=' + idstring + '&name=' + name + '&imageurl=' + imgurl + "&auth=" +'3acaa92243ea006be82085692fff8a8cd429a0e0' );        
        
    } catch (e) {
        console.log('cooked error: ', e);
    }
}

const Dashboard = dispatch => async () => {
    try {
         const resp = await api.get('/get_stats?auth=3acaa92243ea006be82085692fff8a8cd429a0e0');
         dispatch({type: 'dashboard', payload: resp});
    } catch (e) {
        console.log('erorr dashboard: ', e);
    }
}

const getSubs = dispatch => async (inputString, ingredients) => {
    try {
        var ingredientsArray = [];
        for (var key in ingredients) {
            ingredientsArray.push(ingredients[key].text);
        }
        var ingredientsString = ingredientsArray.join('|');
        
        var instring = inputString.toString();
        const resp = await api.get('/get_substitutes?inputs=' + instring + "&ingredients=" + ingredientsString);
        console.log("get subs respL ", resp.data.data);
        dispatch({type: 'get_subs', payload: resp.data.data})
    } catch {

    }
}

export const { Provider, Context } = createDataContext(
    FoodReducer,
    { Login, Logout, Signup, IngredientsPopulate, Search, Dashboard, Cooked, getSubs },
    {
        user: '',
        savedRecipes: [],
        preferences: [],
        autoCompleteIngredients: [],
        recipeResults: [],
        dashboard: [],
        searchIngredients: [],
        subs: []
    }
);