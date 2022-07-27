let auto = {
    color: ["rojo","azul","negro","blanco"],
    marca: "Audi",
    modelo: "2020",
    estado: `Apagado`,
    encender: () =>{
        document.write(`Encendiendo auto...`);
        estado = `Encendido`;
    },
    apagar: () =>{
        document.write(`<p>Apagando auto...</p>`);
        estado = `Apagado`;
    }
}

auto.encender();
auto.apagar();