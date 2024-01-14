import { ACTION_TYPE } from "../constants/action-type";

const initialSearchState = {
  searchPhrase: "",
  status: "",
  updateSearch: false
};

export const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POSTPONED:
      return {
        ...state,
        updateSearch: !state.updateSearch,
        status: "postpone",      
      };
    case ACTION_TYPE.SET_ATWORK:
      return {
        ...state,
        updateSearch: !state.updateSearch,
        status: 'atWork',       
      };
    case ACTION_TYPE.SET_DONE:
      return {
        ...state,
        updateSearch: !state.updateSearch,
        status: 'done',      
      };  
    case ACTION_TYPE.SET_ALL_TODO:
      return {
        ...state,
        updateSearch: !state.updateSearch,
        status: '',      
      };  
    case ACTION_TYPE.SET_SEARCH_PHRASE:
      return {
        ...state,
        updateSearch: !state.updateSearch,
        searchPhrase: action.payload,
      };  
    case ACTION_TYPE.UPDATE_SEARCH:
      return {
        ...state,
        updateSearch: !state.updateSearch,       
      };  
    default:
      return state;
  }
};
