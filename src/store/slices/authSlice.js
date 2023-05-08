import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/api";
import { loading } from "./appSlice";
import { setStateModal } from "./modalSlice";

const initialState = {
    auth: false,
    user: null
}

export const signIn = createAsyncThunk('auth/signIn', async (auth, {rejectWithValue, dispatch}) => {
    dispatch(loading(true))
    auth.setError({...auth.error, login: false, password: false})
    try {
        const response = await authAPI.signIn(auth.login, auth.password)
        //console.log('RESPONSE',response)
        dispatch(setUser({user: response.user.email, auth: true}))
        dispatch(setStateModal({open: false, type: null}))
    } catch (error) {
        if(error.code === 'auth/wrong-password') {
            auth.setError({...auth.error, password: true})
        }
        if(error.code === 'auth/user-not-found') {
            auth.setError({...auth.error, login: true})
        }
    } finally {
        dispatch(loading(false))
    }
})

export const signOut = createAsyncThunk('auth/signOut', async (_, {rejectWithValue, dispatch}) => {
    try {
        await authAPI.signOut()
        dispatch(setUser({user: null, auth: false}))
    } catch (error) {
        console.log(error)
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.auth = action.payload.auth
            state.user = action.payload.user
        }
    },
    // extraReducers: {
    //     [signIn.fulfilled]: (state) => state.isFetching = false,
    //     [signIn.pending]: (state) => state.isFetching = true
    // }

})

export const {setUser} = authSlice.actions
export default authSlice.reducer