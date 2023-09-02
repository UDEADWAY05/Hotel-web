import httpService from "./http.servise";

const roomsEndPoint = "hotel/";

const roomsService = {
    get: async() => {
        const { data } = await httpService.get(roomsEndPoint);
        return data;
    },
    updateRooms: async(payload) => {
        const { data } = await httpService.patch(roomsEndPoint + payload._id, payload);
        return data;
    },
    deleteRoom: async(payload) => {
        const { data } = await httpService.delete(roomsEndPoint + payload);
        return data;
    },
    createdRoom: async(payload) => {
        const { data } = await httpService.post(roomsEndPoint, payload);
        return data;
    }
};

export default roomsService;
