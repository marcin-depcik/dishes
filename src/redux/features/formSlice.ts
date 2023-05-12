import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface FormInputs {
  [key: string]: string | number
  type: string
}

const initialState: FormInputs = {
  type: '',
}

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    setInput: (
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: string; value: string | number }>
    ) => {
      state[name] = value
    },
  },
})

export const { setInput } = formSlice.actions
