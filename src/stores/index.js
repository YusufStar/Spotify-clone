import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../stores/Player"

export default configureStore({
    reducer: {
        player: playerReducer
    },
})