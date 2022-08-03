

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }


    get MostrarNombre(){
        return this.nombre;
    }
}

class Agenda {
    constructor(numero){
        this.contactos = [];
        this.numeros = numero;  
    }

    aniadirContacto(Contacto){

        for (let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i].nombre == Contacto.nombre){
                return alert(`Ese contacto ya existe`);
            }
        }

        if(this.contactos.length == this.numeros){
            alert(`AGENDA LLENA`);
        }
        else{
            this.contactos.push(Contacto);
            console.log(this.contactos[3]);
        }
        
    }

    mostrarDat(){
        for (let i = 0; i < this.contactos.length; i++) {
            document.write(`contacto = ${this.contactos[i].nombre} numero = ${this.contactos[i].telefono} <br>`)
            console.log(this.contactos[i])
        }
    }

    existeContacto(Contacto){
   
        for (let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i] == Contacto){
                return document.write(`Si existe <br>`);
                
            }
        }
         return document.write(`No existe <br>`);
        
    }

    buscarContacto(nombre){
        for (let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i].nombre == nombre){
                return document.write(`Si existe y su numero es ${this.contactos[i].telefono} <br>`);
                
            }
        }
         return document.write(`No existe <br>`);
    }

    elminarContacto(Contacto){
        for (let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i] == Contacto){
                
                this.contactos.splice(i-1,1);
                 document.write(`CONTACTO ELIMINADO <br>`);
                
            }
        }
    }

    // agendaLlena(){
    //     if(this.contactos.length == this.numeros){
    //             document.write(`Agenda llena`);
    //     }
    // }

    huecosLibres(){
        let n = this.numeros - this.contactos.length;
        console.log(n);
        return document.write(`Cantidad de huecos libres ${n}`);
    }
}



let x = new Agenda(parseInt(prompt(`Ingrese la cantidad de contactos`)));

let hugo = new Contacto(`Hugo`,32312);

let mario = new Contacto(`chris`,3222312);
let paro = new Contacto(`carl`,32312);

x.aniadirContacto(hugo);
x.aniadirContacto(mario);
x.aniadirContacto(paro);
x.mostrarDat();
x.elminarContacto(hugo);
x.mostrarDat();
x.huecosLibres();
