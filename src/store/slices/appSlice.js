import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isFetching: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        loading: (state, action) => {
            state.isFetching = action.payload
        }
    }
})

export const {loading} = appSlice.actions
export default appSlice.reducer