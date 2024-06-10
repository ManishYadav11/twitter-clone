import { createSlice } from '@reduxjs/toolkit';
import Profile from '../components/Profile';
import { act } from 'react';

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        otherUsers: null,
        profile : null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
        getMyProfile:(state , action) =>{
            state.profile =action.payload
        }
    }
});

export const { setUser, setOtherUsers , getMyProfile } = userSlice.actions;
export default userSlice.reducer;
