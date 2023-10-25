import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './reducer/studentReducer';
import employeReducer from './reducer/employeReducer';

export const store = configureStore({
  reducer: {studentReducer, employeReducer},

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

});
