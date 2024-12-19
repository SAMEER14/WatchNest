import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        //empty object
    },
    reducers : {
        cacheResults: (state, action) => {
            // {we will send object - like search - ip -["iphone","iphone 16"],......10 results}
            //how we will add
            // state = {...action.payload, ...state};
            //this will merge to understand more see ES6 spreadoperator
            //uisng object.assign instead of spread operator
            state = Object.assign(state,action.payload);
        }
    }
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;



//data structure for cache
/*
 DS - array - T.C => O(n)
 DS- map -> in javascript we call it oject -> O(1) -FAST way

 one more way is new Map() optimise way to search in object more faster way

BUT we will use for simplicity array of object


*/

// WE can use LRU cache result - Least Recently Used
//we can restrict our cache result like store 100 result then start removing from top , first ones , FIFO
//WE CAN DEVELOP IT is simple brainstorm it 