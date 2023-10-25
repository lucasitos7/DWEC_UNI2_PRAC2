//export default 
class Grupo{
    constructor(codigoGrupo, numero){
        this.codigoGrupo=codigoGrupo;
        this.numero=numero;
    }

    set codigoGrupo(Grupo){
        this.codigoGrupo=Grupo;
    }
    get codigoGrupo(){
        return this.codigoGrupo;
    }
    set numero(num){
        this.numero=num;
    }
    get numero(){
        return this.numero;
    }

}

