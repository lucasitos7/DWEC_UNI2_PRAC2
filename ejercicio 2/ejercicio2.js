//import {Grupo} from "./grupo.js";

class Grupo{
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
        let conta=0;
        for(let i=0;i<this.Grupos.length;i++){
            conta+=this.Grupos[i].Numero;
        }
        console.log("El numero de alumnos es: "+conta);

        /*              ASI NO FUNCIONA ???
        for(let i of this.Grupos){
            conta+=this.Grupos[i].Numero;
        }*/
    }
    addGrupos(gr){
        this.Grupos.push(gr);
    }
} 


var grupo1=new Grupo(1,20);
var grupo2=new Grupo(2,15);
var grupo3=new Grupo(3,10);

var grupos=[];
grupos.push(grupo1);
grupos.push(grupo3);
grupos.push(grupo2);

var insti1=new Instituto(1,"Fleming",[grupo1,grupo2]);
var insti2=new Instituto(1,"Fleming",grupos);
var insti3=new Instituto(1,"Fleming",grupos3=[]);


console.log(insti1);
console.log(insti2);

insti1.codigoInsti();
insti1.numeroAlumnos();
insti3.addGrupos(grupo3);
insti3.addGrupos(grupo2);
console.log(insti3);