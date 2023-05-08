import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loading } from "./appSlice"
import { activityAPI } from "../../api/api"

const initialState = {
    presentation: [],
    creation: [],
    classActivity: []
}

export const sendPresentation = createAsyncThunk(
    'activity/sendPresentation',
    async(present, {dispatch}) => {
        dispatch(loading(true))
        try {
            await activityAPI.addPresentation(present)
            dispatch(addPresentation(present))
        } catch(err) {
            console.log(err)
        } finally {
            dispatch(loading(false))
        }
    }
)

export const getPresentations = createAsyncThunk(
    'activity/getPresentations',
    async (_, {dispatch}) => {
        dispatch(loading(true))
        try {
            let response = await activityAPI.getPresentations()
            response.forEach(item => dispatch(addPresentation(item)))
        } catch(err) {
            console.log('Что-то пошло не так >>>>>', err)
        } finally {
            dispatch(loading(false))
        }
    }
)

export const deletePresentation = createAsyncThunk(
    'activity/deletePresentation',
    async (id, {dispatch}) => {
        dispatch(loading(true))
        try {
            await activityAPI.deletPresentation(id)
            dispatch(deletePresentationInState(id))
        } catch(err) {
            console.log('Помилка, щось пішло не так...' ,err, id)
        } finally {
            dispatch(loading(false))
        }
    }
)


export const sendPublication = createAsyncThunk(
    'activity/sendPublication',
    async(publication, {dispatch}) => {
        dispatch(loading(true))
        try {
            await activityAPI.addPublication(publication)
            dispatch(addPublication(publication))
        } catch(err) {
            console.log(err)
        } finally {
            dispatch(loading(false))
        }
    }
)

export const getPublication = createAsyncThunk(
    'activity/getPublication',
    async (_, {dispatch}) => {
        dispatch(loading(true))
        try {
            let response = await activityAPI.getPublication()
            response.forEach(item => dispatch(addPublication(item)))
        } catch(err) {
            console.log('Что-то пошло не так >>>>>', err)
        } finally {
            dispatch(loading(false))
        }
    }
)

export const deletePublication = createAsyncThunk(
    'activity/deletePublication',
    async (id, {dispatch}) => {
        dispatch(loading(true))
        try {
            await activityAPI.deletePublication(id)
            dispatch(deletePublicationFromState(id))
        } catch(err) {
            console.log('Помилка, щось пішло не так...' ,err, id)
        } finally {
            dispatch(loading(false))
        }
    }
)

export const sendClassActivity = createAsyncThunk(
    'activity/sendClassActivity',
    async(activity, {dispatch}) => {
        dispatch(loading(true))
        try {
            await activityAPI.addClassActivity(activity)
            dispatch(addClassActivity(activity))
        } catch(err) {
            console.log(err)
        } finally {
            dispatch(loading(false))
        }
    }
)

export const getClassActivity = createAsyncThunk(
    'activity/getClassActivity',
    async (_, {dispatch}) => {
        dispatch(loading(true))
        try {
            let response = await activityAPI.getClassActivity()
            response.forEach(item => dispatch(addClassActivity(item)))
        } catch(err) {
            console.log('Что-то пошло не так >>>>>', err)
        } finally {
            dispatch(loading(false))
        }
    }
)

export const deleteClassActivity = createAsyncThunk(
    'activity/deleteClassActivity',
    async (id, {dispatch}) => {
        dispatch(loading(true))
        try {
            await activityAPI.deleteClassActivity(id)
            dispatch(deleteClassActivityFromSate(id))
        } catch(err) {
            console.log('Помилка, щось пішло не так...' ,err, id)
        } finally {
            dispatch(loading(false))
        }
    }
)

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        addPresentation: (state, action) => {
            state.presentation.push(action.payload)
        },
        deletePresentationInState: (state, action) => {
            state.presentation = state.presentation.filter(pres => pres.id !== action.payload)
        },
        addPublication: (state, action) => {
            state.creation.push(action.payload)
        },
        deletePublicationFromState: (state, action) => {
            state.creation = state.creation.filter(pub => pub.id !== action.payload)
        },
        addClassActivity: (state, action) => {
            state.classActivity.push(action.payload)
        },
        deleteClassActivityFromSate: (state, action) => {
            state.classActivity = state.classActivity.filter(item => item.id !== action.payload)
        }
    }
})

export const {addPresentation, deletePresentationInState, addPublication, deletePublicationFromState, addClassActivity, deleteClassActivityFromSate} = activitySlice.actions
export default activitySlice.reducer