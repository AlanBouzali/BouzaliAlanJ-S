
export let dBusuarios = [{ id: 1, usuario: 'Alan Bou', contraseña: '1234', admin: true}];

//cargo usuario en localStorage va a buscar si esta creado. y si no se crea.
JSON.parse( localStorage.getitem( 'usuarios')) || localStorage.setitem( 'usuarios', JSON.stringify(dbusuarios));
//si esto existe se crea                       || sino existe pasa esto