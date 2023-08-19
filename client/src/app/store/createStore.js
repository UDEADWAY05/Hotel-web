import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import roomsReducer from "./rooms";

const rootReducer = combineReducers({
    users: usersReducer,
    rooms: roomsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
