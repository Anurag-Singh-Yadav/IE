    "use client"

    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        isSignPagePopup: false,
        isLogin: false,
        isLight: true,
        isSignup:true,
        articleLoading: true,
        userDetails: {
            email: '',
            userHandle: '',
            name:'',
            avatar:'',
        },
    }

    export const GlobalStateSlice = createSlice({
        name:'globalState',
        initialState,

        reducers: {
            setLogin: (state, value) => {
                state.isLogin = value.payload;
                return state;
            },
            toggleLight: (state , value) => {
                state.isLight = value.payload;
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
            setUserDetails: (state, action) => {
                state.userDetails = {
                    ...state.userDetails,
                    ...action.payload
                };
                return state;
            }
        }
    })

    export const {setLogin , toggleLight,toggleSignPagePopup,setSignInBtn,setArticleLoading,setUserDetails} = GlobalStateSlice.actions;
    export default GlobalStateSlice.reducer;