import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface EditorSlice {
  value: String
}

// Define the initial state using that type
const initialState: EditorSlice = {
  value: "",
}
export const editorFetch=createAsyncThunk('',()=>{

})
export const editorSlice = createSlice({
  name: 'editor',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    getValue: (state, action: PayloadAction<String>) => {
      console.log(action.payload);
      state.value = action.payload
      console.log(state.value);
    },
  },
})

export const { getValue } = editorSlice.actions

export default editorSlice.reducer