import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(fav => fav.id === action.id);
            if (existingIndex >= 0) {
                const favMeals = [ ...state.favoriteMeals ];
                favMeals.splice(existingIndex, 1);
                return {
                    ...state,
                    favoriteMeals: favMeals
                };
            } else {
                const meal = state.meals.find(meal => meal.id === action.id);
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal)
                };
            }
        case SET_FILTERS:
            const appliedFilter = action.filters;
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilter.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilter.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilter.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (appliedFilter.vegan && !meal.isVegan) {
                    return false;
                }
                return true;
            });
            return {
                ...state,
                filteredMeals: filteredMeals
            };
        default:
            return state;
    };
};

export default mealsReducer;