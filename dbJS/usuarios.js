

export let dBusuarios = [
    {
        id: 1,
        usuario: "AlanMaster",
        contrasenia: "123456",
        admin: true,
    },
];


JSON.parse(localStorage.getItem("dBusuarios")) || localStorage.setItem("dBusuarios", JSON.stringify(dBusuarios));
