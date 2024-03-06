import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';


const store = configureStore({
    reducer: rootReducer,
})

export default store

// const store = configureStore({
//     reducer: rootReducer,
//     // Redux Thunk is included by default, no need to manually add it here
//   });
  