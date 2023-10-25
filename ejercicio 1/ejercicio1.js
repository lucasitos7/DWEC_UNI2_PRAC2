
console.log(separarNumeros("Lucas"));
console.log(separarNumeros(12345));
console.log(separarNumeros("Lucas",123));
console.log(separarNumeros("Lucas",22,"Miguel"));
console.log(separarNumeros("Lucas",22452,"Miguel",1.1,new Date()));

function separarNumeros(...datos){
    var num=[];
    for(const arg of datos){
        if(typeof arg === 'number'){
            num.push(arg);
        }
    }
    console.log(num);   
}

        //OTRO METODO
/*function separarNumeros(...datos){
    datos.forEach((dato)=> typeof dato == 'number'? console.log(dato):null);
}*/