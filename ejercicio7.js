const a = 8 ;
const b = 3;

function comparar(a,b){

    return new Promise( (resolve, reject ) =>{

        if( a > b){

            const resultado =  `El número ${a}, es mayor que el número  ${b}`;

            resolve (resultado);

        } else if (b > a){

            const resultado = `El número ${b}, es mayor que el número ${a}`

            resolve(resultado);

        }else{

            const resultado = `El número ${a}, y el número ${b} tienen el mismo valor`

            reject(resultado);

        }

    });

}

const getComparar = async(a, b) =>{

    try{

        const resultado = await comparar(a,b);
       
        return (resultado);
    }catch(err){
        console.log(err);
    }

} 

getComparar(a,b)
.then((msje) => console.log(msje))
.catch(err => console.log(err));