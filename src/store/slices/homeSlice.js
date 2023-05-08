import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { homeAPI } from "../../api/api"
import { setStateModal } from "./modalSlice"


const initialState = {
    p1: "",
    p2: ""
}

export const changeInfo = createAsyncThunk(
    'home/changeInfo',
    async (text, {dispatch}) => {
        try {
            await homeAPI.changeInfo(text)
            dispatch(setTextInfo(text))
            dispatch(setStateModal({open: false, type: null}))
        } catch(err) {
            console.log(err)
        }
    }
)

export const getHomeInfo = createAsyncThunk(
    'home/getHomeInfo',
    async(_, {dispatch}) => {
        try {
            const response = await homeAPI.getInfo()
            response.forEach(item => {
                if('p1' in item) dispatch(setTextInfo(item))
            })
        } catch(err) {
            console.log('Щось пiшло не так', err)
        }
    }
)

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setTextInfo: (state, action) => {
            state.p1 = action.payload.p1
            state.p2 = action.payload.p2
        }
    }
})

export const {setTextInfo} = homeSlice.actions
export default homeSlice.reducer