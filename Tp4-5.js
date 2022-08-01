class Persona {

    constructor(nombre,edad,dni,sexo,peso,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = this.generaDni();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    mostrarGen(){
        if(this.edad <= 28 ){
            document.write(`Generacion Z - Irreverencia`);
        }
        else if ( this.edad > 28 && this.edad <= 41){
            document.write(`Generacion Y - Frustracion`);
        }
        else if (this.edad > 41 && this.edad <= 53){
            document.write(`Generacion X - Obsesion por el exito`);
        }
        else if (this.edad > 53 && this.edad <= 73){
            document.write(`Generacion Baby Boom - Ambicion`);
        }
        else{
            document.write(`Silent Generation - Austeridad`);
        }
    }

    verificarEdad(){
        if(this.edad > 18){
            return (` <li>Mayor de edad: Es mayor de edad</li>`);
        }
        else{
            return (` <li>Mayor de edad: Es menor de edad</li>`);
            
        }
    }

    generaDni(){
        this.dni = (Math.floor(((Math.random()*99999999)+0)));
        return this.dni;
    }

    mostrarDatos(){
            document.write(`
            <ul>
                <li>Nombre: ${this.nombre}</li>
                <li>Edad: ${this.edad}</li>
                <li>DNI: ${this.dni}</li>
                <li>Sexo: ${this.sexo}</li>
                <li>Peso: ${this.peso}</li>
                <li>Altura: ${this.altura} Mts</li>
                ${this.verificarEdad()}
            </ul>`)
    }

    
}

const x = new Persona(`Luciano`,20,2,`H`,75,1.2);

x.mostrarDatos();
x.verificarEdad();
x.mostrarGen();