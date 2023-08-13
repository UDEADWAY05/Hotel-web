const hotelNumbers = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        about: "Информация о номере по запросу",
        available: false,
        // img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 1
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        about: "Информация о номере по запросу",
        available: false,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 2
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        about: "Информация о номере по запросу",
        available: true,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 3
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        about: "Информация о номере по запросу",
        available: true,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 4
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        about: "Информация о номере по запросу",
        available: true,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 5
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        about: "Информация о номере по запросу",
        available: true,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 6
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        about: "Информация о номере по запросу",
        available: true,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 7
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        about: "Информация о номере по запросу",
        available: true,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 8
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        about: "Информация о номере по запросу",
        available: true,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 9
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        about: "Информация о номере по запросу",
        available: true,
        img: "https://www.oloninterior.com/wp-content/uploads/2020/12/HOTELROOM-1.png",
        Room: 9
    }
]

if (!localStorage.getItem("Rooms")) {
    localStorage.setItem("Rooms", JSON.stringify(hotelNumbers));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("Rooms")));
        }, 2000);
    });

const update = (id, data) =>
    new Promise((resolve) => {
        const rooms = JSON.parse(localStorage.getItem("Rooms"));
        const roomIndex = rooms.findIndex((u) => u._id === id);
        rooms[roomIndex] = { ...rooms[roomIndex], ...data };
        localStorage.setItem("Rooms", JSON.stringify(rooms));
        resolve(rooms[roomIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("Rooms")).find(
                    (room) => room._id === id
                )
            );
        }, 1000);
    });

export default {
    fetchAll,
    getById,
    update
};
