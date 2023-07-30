import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface EditorSlice {
  value: String,
  languages: String,
}

// Define the initial state using that type
const initialState: EditorSlice = {
  value: "",
  languages:"",
}
export const editorFetch=createAsyncThunk('',()=>{

})
export const editorSlice = createSlice({
  name: 'editor',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    getValue: (state, action: PayloadAction<String>) => {
      state.value = action.payload
    },

    getLangauges: (state, action: PayloadAction<String>)=>{
      state.languages = action.payload
    }
  },
})

export const { getValue, getLangauges } = editorSlice.actions

export default editorSlice.reducer