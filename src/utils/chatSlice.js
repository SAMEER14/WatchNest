import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_COUNT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages : []
    },
    reducers: {
        addMessage: (state, action) =>{
            // state.messages.push(action.payload);
            // state.messages.unshift(action.payload);
            
            // HERE WE ARE PUSHING A LOT OF MESSAGE THROUGH TIME INTERVAL, WHICH WILL FREEZE THE DOM IN END
            //So setting limit and delete old messages after some set of message are there like 200 messages done then it start removing old messages
            // state.messages.splice(10,1);
            // state.messages.push(action.payload);
            
            // Limit the number of messages to 10
            // keep hard coded data in constant
            if (state.messages.length >= OFFSET_LIVE_COUNT) {
                // Remove the oldest message (index 0)
                state.messages.splice(0, 1);  
            }
            // Add the new message to the end of the array
            state.messages.push(action.payload);

        },
    }
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;