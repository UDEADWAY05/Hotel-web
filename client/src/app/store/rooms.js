import { createSlice } from "@reduxjs/toolkit";
import roomsService from "../services/rooms.service";

const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        roomsRequested: (state) => {
            state.isLoading = true;
        },
        roomsReceved: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        roomsRequesFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        roomUpdate: (state, action) => {
            state.entities = [...state.entities.filter(u => u._id !== action.payload._id), action.payload];
        },
        roomUpdateFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { reducer: roomsReducer, actions } = roomsSlice;

const { roomsReceved, roomsRequested, roomsRequesFailed, roomUpdate, roomUpdateFailed } = actions;

function isOutdated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const loadRoomsList = () => async(dispatch, getState) => {
    const { lastFetch } = getState().rooms;
    console.log(getState());
    if (isOutdated(lastFetch)) {
        dispatch(roomsRequested());
        try {
            const { content } = await roomsService.get();
            dispatch(roomsReceved(content));
        } catch (error) {
            dispatch(roomsRequesFailed(error.message));
        };
    }
};

export const updateRoom = (room) => async(dispatch) => {
    try {
        const { content } = await roomsService.updateRooms(room);
        console.log(content);
        dispatch(roomUpdate(content));
    } catch (error) {
        dispatch(roomUpdateFailed(error));
    }
};

export const getRooms = () => (state) => state.rooms.entities;
export const getRoomsLoadingStatus = () => (state) => state.rooms.isLoading;
export const getRoomById = (roomsId) => state => {
    if (state.rooms.entities) {
        return state.rooms.entities.find((q) => q._id === roomsId);
    }
};

export default roomsReducer;
