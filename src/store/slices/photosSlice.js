import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { photoAPI } from "../../api/api"
import { v4 } from "uuid"
import { loading } from "./appSlice"


const initialState = {
    photos: []
}

export const sendPhoto = createAsyncThunk(
    'photos/sendPhoto',
    async (link, {dispatch}) => {
        console.log(link)
        try {
            let photo = {id: v4(), link}
            await photoAPI.addPhoto(photo)
            dispatch(addPhoto(photo))
        } catch(err) {
            console.log('Что-то пошло не так >>>>>', err)
        }
    }
)

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async (_, {dispatch}) => {
        dispatch(loading(true))
        try {
            let response = await photoAPI.getPhotos()
            response.forEach(item => dispatch(addPhoto(item)))
            //dispatch(addPhoto(photo))
        } catch(err) {
            console.log('Что-то пошло не так >>>>>', err)
        } finally {
            dispatch(loading(false))
        }
    }
)

export const deletePhoto = createAsyncThunk(
    'photos/deletePhoto',
    async (id, {dispatch}) => {
        try {
            await photoAPI.deletPhoto(id)
            dispatch(deleteImg(id))
        } catch(err) {
            console.log(err, id)
        }
    }
)


const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        addPhoto: (state, action) => {
            state.photos.push(action.payload)
        },
        deleteImg: (state, action) => {
            state.photos = state.photos.filter(photo => photo.id !== action.payload)
        },
    }
})

export const {addPhoto, deleteImg} = photosSlice.actions
export default photosSlice.reducer