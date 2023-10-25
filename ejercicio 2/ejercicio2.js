//import {Grupo} from "./grupo.js";

class Grupo{
    codigoGrupo;
    numero;
    constructor(codigoGrupo, numero){
        this._codigoGrupo=codigoGrupo;
        this._numero=numero;
    }

    set CodigoGrupo(Grupo){
        this._codigoGrupo=Grupo;
    }
    get CodigoGrupo(){
        return this._codigoGrupo;
    }
    set Numero(num){
        this._numero=num;
    }
    get Numero(){
        return this._numero;
    }

}

class Instituto{
    codigoInstituto;
    nombre;
    grupos;
    constructor(codigoInstituto, nombre, grupos){
        this._codigoInstituto=codigoInstituto;
        this._nombre=nombre;
        this._grupos=grupos;
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

    codigoInsti(){
        console.log('El código del instituto es: '+ this.CodigoInstituto);
    }
    numeroAlumnos(){
        /*for(let i of this.Grupos){
            SUMATORIO DE TODOS, FALTA  QUE SE SUMEN Y AGREGARLOS
        }*/
        console.log("El numero de alumnos es: "+this.Grupos.Numero);
    }
    addGrupos(){
   
    }
    
} 


var grupo1=new Grupo(1,20);
var grupo2=new Grupo(2,15);
var grupo3=new Grupo(3,10);

var insti1=new Instituto(1,"Fleming",grupo1);
var insti2=new Instituto(1,"Fleming",grupo2);
var insti1=new Instituto(1,"Fleming",grupo3);

console.log(insti1.CodigoInstituto);
insti1.codigoInsti();
insti1.numeroAlumnos();