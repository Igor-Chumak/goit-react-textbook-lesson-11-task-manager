// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

//
//  Redux Toolkit
//
import { configureStore } from '@reduxjs/toolkit';
// import { filtersReducer } from './reducer';
import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
