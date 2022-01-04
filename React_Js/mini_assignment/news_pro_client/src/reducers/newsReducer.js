import { HEADLINES, BUSINESS_NEWS, TECHNOLOGY_NEWS } from "../actions/types";

const initialState = {
  business_news:[],
  technology_news:[],
  headlines:[]
}

const  newsReducer = (state = initialState,action) => {

  const newState = {...state}
  switch(action.type){
    case BUSINESS_NEWS:
        newState.business_news = action.payload
        break;
    case TECHNOLOGY_NEWS:
        newState.technology_news = action.payload
        break;
    case HEADLINES:
        newState.headlines = action.payload
        break;
    default:
        return newState;
  }
  return newState;
}

export default newsReducer;