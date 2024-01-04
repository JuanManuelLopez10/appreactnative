import { createStore, combineReducers, applyMiddleware,  } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth.reducer';
import usersReducer from './reducers/users.reduce';
import appReducer from './reducers/app.reduce';
import tasksReducer from './reducers/tasks.reduce';
import packsReducer from './reducers/packs.reduce';
import giftsReducer from './reducers/gifts.reduce';


const RootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    app: appReducer,
    tasks: tasksReducer,
    packs: packsReducer,
    gifts: giftsReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))