const personas = [

    {
        id:1,
        nombre:'Samuel',
        correo:'samuel@mail.com'
    },
    {
        id:2,
        nombre:'Daniel',
        correo:'daniel@mail.com',
    },
    {
        id:3,
        nombre:'Javier',
        correo:'javier@mail.com',
    },
    {
        id:4,
        nombre:'Pamplinas',
        correo:'pamplinas@mail.com',
    },
    {
        id:5,
        nombre:'Mergas',
        correo:'mergas@mail.com',
    },
    {
        id:6,
        nombre:'Seymourdiera',
        correo:'Seymourdiera@mail.com',
    },

]

function obtenerInformacion(id){
    return new Promise ( (resolve, reject) =>{

        const {nombre:nombre, correo:correo} = personas.find( p => p.id === id);
        (nombre, correo)?
        resolve({nombre,correo})
        :reject(`El id ${id}, no se encuentra registrado actualmente`);
    });
}

const getInfoPersona = async (id) => {

    try{
        const persona= await obtenerInformacion(id);

        return `La persona asociada al id ${id} es: ${persona.nombre}, y tiene el siguiente correo electrónico ${persona.correo}`
    }catch(err){

        throw(err);
    }
};

const id = 6;

getInfoPersona(id)
.then((msj) => console.log(msj))
.catch(err => console.log(err));