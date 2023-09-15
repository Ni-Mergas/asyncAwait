

function resolverPromesa(resuelve){
    return new Promise( (resolve, reject) =>{
    
        (resuelve)?
        resolve(resuelve)
        : reject(`La promesa fue rechazada`)

    });
}

const getPromesa = async (resuelve) =>{
    try{
        const promesa = await resolverPromesa(resuelve);
        return `La Promesa fue resuelta satisfactoriamente ${promesa}`;
    } catch(err){
        throw(err);
    }
}

const resuelve = true;

getPromesa(resuelve)
.then((msje) => console.log(msje))
.catch(err => console.log(err));

