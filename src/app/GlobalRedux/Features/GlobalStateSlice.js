    "use client"

    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        
        isLogin: false,
        isLight: true,

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
            }
        }
    })

    export const {toggleLogin , toggleLight} = GlobalStateSlice.actions;
    export default GlobalStateSlice.reducer;