const authUser = {
    name: "Dmitry",
    rooms: ["67rdca3eeb7f6fgeed471815", "67rdca3eeb7f6fgeed471816"],
    _id: "64afaukto3445fasr15515"
}



const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("AuthUser")));
        }, 2000);
    });
