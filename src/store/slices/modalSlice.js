import { createSlice } from "@reduxjs/toolkit";

export const SHOW_IMAGE = 'SHOW_IMAGE'
export const SIGN_IN = 'SIGN_IN'
export const CHANGE_INFO = 'CHANGE_INFO'

const initialState = {
    isOpen: false,
    type: null,
    linkPhoto: undefined,
    infoText: ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setStateModal: (state, action) => {
            state.isOpen = action.payload.open
            state.type = action.payload.type
            if('linkPhoto' in action.payload) state.linkPhoto = action.payload.linkPhoto
            if('text' in action.payload) state.infoText = action.payload.text
        }
    }
})
export const {setStateModal} = modalSlice.actions
export default modalSlice.reducer