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
            const rooms = [...state.entities.filter(u => u._id !== action.payload._id), action.payload];
            const sorted = rooms.sort((user1, user2) => user1.Room > user2.Room ? 1 : -1);
            state.entities = sorted;
        },
        roomUpdateFailed: (state, action) => {
            state.error = action.payload;
        },
        roomDelete: (state, action) => {
            const rooms = [...state.entities.filter(u => u._id !== action.payload)];
            state.entities = rooms;
        },
        roomDeleteFailed: (state, action) => {
            state.error = action.payload;
        },
        roomCreated: (state, action) => {
            const rooms = [...state.entities, action.payload];
            const sorted = rooms.sort((user1, user2) => user1.Room > user2.Room ? 1 : -1);
            state.entities = sorted;
        },
        roomCreatedFailed: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { reducer: roomsReducer, actions } = roomsSlice;

const { roomsReceved, roomsRequested, roomsRequesFailed, roomUpdate, roomDelete, roomUpdateFailed, roomDeleteFailed, roomCreated, roomCreatedFailed } = actions;

function isOutdated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const loadRoomsList = () => async(dispatch, getState) => {
    const { lastFetch } = getState().rooms;
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
        dispatch(roomUpdate(content));
    } catch (error) {
        dispatch(roomUpdateFailed(error));
    }
};

export const createdRoom = (room) => async(dispatch) => {
    try {
        const { content } = await roomsService.createdRoom(room);
        dispatch(roomCreated(content));
    } catch (error) {
        dispatch(roomCreatedFailed(error));
    }
};

export const deleteRoom = (id) => async(dispatch) => {
    try {
        const { content } = await roomsService.deleteRoom(id);
        dispatch(roomDelete(content._id));
    } catch (error) {
        dispatch(roomDeleteFailed(error));
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
