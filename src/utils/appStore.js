import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import gptReducer from "./gptSlice"
import configSlice from "./configSlice";

import moviesReducer from "./moviesSlice"
const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies : moviesReducer,
            gpt : gptReducer,
            config: configSlice,
        },

    }
)

export default appStore;