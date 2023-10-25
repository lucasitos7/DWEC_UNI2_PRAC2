//import {Grupo} from "./grupo.js";



class Grupo{
    constructor(codigoGrupo, numero){
        this._codigoGrupo=codigoGrupo;
        this._numero=numero;
    }

    set codigoGrupo(Grupo){
        this._codigoGrupo=Grupo;
    }
    get codigoGrupo(){
        return this._codigoGrupo;
    }
    set numero(num){
        this._numero=num;
    }
    get numero(){
        return this._numero;
    }

}

class Instituto extends Grupo{
    constructor(codigoInstituto, nombre, Grupo){
        this._codigoInstituto=codigoInstituto;
        this._nombre=nombre;
        this._grupos=new Grupo();
    }

    set CodigoInstituto(codigo){
        this._codigoInstituto=codigo;
    }
    get CodigoInstituto(){
        return this._codigoInstituto;
    }
    set Nombre(nom){
        this._nombre=nom;
    }
    get Nombre(){
        return this._nombre;
    }
    set Grupos(gru){
        this._grupos=gru;
    }
    get Grupos(){
        return this._grupos;
    }
    
}


function codigoInsti(){
    console.log("El código del instituto es:" ,Instituto.CodigoInstituto());
}


function numeroAlumnos(){
    console.log("El código del instituto es:" ,Grupo.numeroAlumnos());
}

function addGrupos(){
   
}


var grupo1=new Grupo(1,20);
var grupo2=new Grupo(2,15);
var grupo3=new Grupo(3,10);

var insti1=new Instituto(1,"Fleming",grupo1);
var insti2=new Instituto(1,"Fleming",grupo2);
var insti1=new Instituto(1,"Fleming",grupo3);

console.log(insti1.codigoInstituto);