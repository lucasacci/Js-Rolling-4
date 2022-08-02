class Usuario{
    //un metodo que sabe construir el objeto
    constructor(nombreCompleto, email, dni, password, nombreUsuario){
        //este metodo sabe crear las propiedades del futuro objeto
        this.nombre =  nombreCompleto;
        this.email = email;
        this.dni = dni;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.estado = true; //propiedad por defecto
    }

    //agregar todos los metodos que consideremos necesarios
    iniciarSesion(){
        // agregar todo el codigo
    }

    cerrarSesion(){  
        // agregar todo el codigo
    }

    mostrarDatos(){
        document.write(`
        <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Email: ${this.email}</li>
            <li>DNI: ${this.dni}</li>
            <li>Nombre de usuario: ${this.nombreUsuario}</li>
        </ul>`)
    }
}

// usar la clase Usuario, crear un objeto, instancia de un objeto
let luciana = new Usuario('luciana soria','luciana@gmail.com', 40222333, 'Arsfsd234%', 'lucianaS');
let matias = new Usuario('matias Cardoso','matias@gmail.com', 40222333, 'Arsfsd234%', 'lucianaS');

console.log(luciana);

luciana.mostrarDatos();
matias.mostrarDatos();
matias.mostrarDatos();
matias.mostrarDatos();


class Alumno extends Usuario{

    constructor(nombreCompleto, email, dni, password, nombreUsuario, comision, curso, legajo){
        super(nombreCompleto, email, dni, password, nombreUsuario);
        this.comision = comision;
        this.curso = curso;
        this.calificacion = [];
        this.legajo = legajo;
        this.asistencia = 0;
    }

    subirTareas(){

    }

    registrarCalificacion(nota){
        this.calificacion.push(nota);
    }

    mostrarPromedio(){
        let cantidadNotas= this.calificacion.length;
        let sumaNotas = 0;

        for (let i = 0; i < cantidadNotas; i++) {
           sumaNotas += this.calificaciones[i];
        }
        let promedio = sumaNotas/cantidadNotas;
        document.write(`<p>El promedio del alumno: ${this.nombre} es ${promedio} </p>`);
    }
}