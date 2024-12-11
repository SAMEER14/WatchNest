import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true, //this is the sidebar
    },
    reducers: {
        //create action
        toggleMenu: (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) =>{
            state.isMenuOpen = false 
            // on load of any other page than home page of youtube the side bar will collapse
        }
    }
})

export const  { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;