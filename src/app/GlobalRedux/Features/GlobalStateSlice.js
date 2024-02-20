    "use client"

    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        isSignPagePopup: false,
        isLogin: false,
        isLight: true,
        isSignup:true,
        articleLoading: true,
        userEmail: '',
    }

    export const GlobalStateSlice = createSlice({
        name:'globalState',
        initialState,

        reducers: {
            setLogin: (state, value) => {
                state.isLogin = value.payload;
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
            },
            setArticleLoading:(state , value) => {
                state.articleLoading = value.payload;
                return state;
            },
            setUserEmail:(state, value) => {
                state.userEmail = value.payload;
                return state;
            }
        }
    })

    export const {setLogin , toggleLight,toggleSignPagePopup,setSignInBtn,setArticleLoading,setUserEmail} = GlobalStateSlice.actions;
    export default GlobalStateSlice.reducer;