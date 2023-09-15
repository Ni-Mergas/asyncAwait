

function calcular(a, b, operacion){

    return new Promise( (resolve, reject) =>{

        if (operacion === `suma`){

            const resultado = a + b;
            resolve(`El resultado de la operacion ${operacion} de ${a} y ${b} es: ${resultado}`);
        }else if(operacion === `resta`){
            const resultado = a - b ;
            resolve(`El resultado de la operacion ${operacion} de ${a} y ${b} es: ${resultado}`);
        }else if(operacion === `multiplicacion`){
            const resultado = a * b;
            resolve(`El resultado de la operacion ${operacion} de ${a} y ${b} es: ${resultado}`);
        }else if ( operacion === `division`){
            const resultado = a / b;
            resolve (`El resultado de la operacion ${operacion} de ${a} y ${b} es: ${resultado}`);
        }else{
            reject(`La promesa fue rechazada`);
        }

    });
}

const getCalcular = async ( a, b, operacion) =>{

    try{
        const op = await calcular(a,b,operacion);
        return op;
    }catch(err){
        throw(err);
    }

}

const a = 3;
const b = 4;
const operacion = `multiplicacion`;

getCalcular(a, b, operacion)
.then((msje) => console.log(msje))
.catch(err => console.log(err));