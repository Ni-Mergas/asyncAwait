

const numeros = [1,2,3,4,5,6,7,8];

function cuadradosNumeros(numeros){

    return new Promise( (resolve, reject) =>{

        if(numeros.length === 0){
            reject(`La lista de Números esta vacía`);
        }else{
            const resultado = [];
            for(const numero of numeros){
                resultado.push({
                    numero:numero,
                    cuadrado: numero * numero,
                });
            }
            resolve(resultado);
        }
    })

}

const getCuadradosNumeros = async(numeros) =>{

    try{
        const resultado = await cuadradosNumeros(numeros);
        return(resultado);

    }catch(err){
        console.log(err);
    }
}

getCuadradosNumeros(numeros)
.then((msje) => console.log(msje))
.catch(err => console.log(err));