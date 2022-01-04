import{
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import newsReducer from './reducers/newsReducer'
import thunk from 'redux-thunk'
const allReducers = combineReducers({
  news: newsReducer
})

const store = createStore(
  allReducers, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

console.log(store.getState());
export default store;