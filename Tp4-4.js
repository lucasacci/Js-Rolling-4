class Producto{

    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDatos(){
        document.write(`
        <ul>
            <li>Codigo: ${this.codigo}</li>
            <li>Nombre: ${this.nombre}</li>
            <li>Precio: ${this.precio}$</li>
        </ul>`)
    }
}

let x = [];

x[0] = new Producto(22222,`Chris`,320);
x[1] = new Producto(33333,`Marta`,300);
x[2] = new Producto(44444,`Lucas`,200);

x[0].mostrarDatos();
x[1].mostrarDatos();
x[2].mostrarDatos();

