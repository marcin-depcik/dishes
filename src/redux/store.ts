import { configureStore } from '@reduxjs/toolkit'
import { formSlice } from '@/redux/features/formSlice'
import { reducer as formReducer } from 'redux-form'

export const store = configureStore({
  reducer: {
    formReducer: formSlice.reducer,
    form: formReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
