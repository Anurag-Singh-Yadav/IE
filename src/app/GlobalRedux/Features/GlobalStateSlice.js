    "use client"

    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        isSignPagePopup: false,
        isLogin: false,
        isLight: true,
        isSignup:true,
    }

    export const GlobalStateSlice = createSlice({
        name:'globalState',
        initialState,

        reducers: {
            toggleLogin: (state) => {
                state.isLogin = !state.isLogin;

                return state;
            },
            toggleLight: (state) => {
                state.isLight = !state.isLight;
                return state;
            },
            toggleSignPagePopup: (state) => {
                state.isSignPagePopup = !state.isSignPagePopup;
                return state;
            },
            setSignInBtn:(state, value) => {
                state.isSignup = value.payload;
                return state;
            }
        }
    })

    export const {toggleLogin , toggleLight,toggleSignPagePopup,setSignInBtn} = GlobalStateSlice.actions;
    export default GlobalStateSlice.reducer;