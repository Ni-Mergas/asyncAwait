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
        nombre:'Pepito',
        correo:'pepito@mail.com'
    }
]

function esperarSegundos(segundos, id) {
    return new Promise( ( resolve, reject) =>{

        setTimeout( () =>{

            const persona = personas.find( p => p.id === id);
            (persona)?
            resolve(persona)
            :reject(`No existe usuario registrado con id ${id}`);

        },segundos * 1000);
    })

}

const getInfoPersona = async (id) =>{
    try{
        console.log('Por favor espera unos segundos...');
        const tiempo = prompt('Escribe los segundos a esperar');
       //  const espera = await esperarSegundos(tiempo);
       const persona = await esperarSegundos(tiempo, id +1);
       const persona1 = await esperarSegundos(tiempo, id);
       const persona2 = await esperarSegundos(tiempo, id+2);
       console.log(`Gracias por esperar ${tiempo} segundos`)
        // return `El id asociado contiene el nombre de: ${persona.nombre} y el correo de ${persona.correo}`
        return {persona, persona1, persona2}
    } catch (err){
        throw(err);
    }
};

const id = 1;

getInfoPersona(id)
.then((mensaje) => console.log(mensaje))
.catch(err => console.log(err));