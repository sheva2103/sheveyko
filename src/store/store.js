import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './slices/modalSlice'
import authSlice from './slices/authSlice'
import appSlice from './slices/appSlice'
import photosSlice from './slices/photosSlice'
import homeSlice from './slices/homeSlice'
import activitySlice from './slices/activitySlice'

export const store = configureStore({
    reducer: {
        modal: modalSlice,
        auth: authSlice,
        app: appSlice,
        photos: photosSlice,
        home: homeSlice,
        activity: activitySlice
    }
})