

class Rectangulo{

    constructor(altura, ancho,p,a){
        this.altura = altura;
        this.ancho = ancho;
        this.p = p;
        this.a = a;
    }

    ingresarDatos(){
        this.altura = parseFloat(prompt(`Ingrese la altura`));
        console.log(this.altura);
        this.ancho = parseFloat(prompt(`Ingrese el ancho`));
        
        // this.p = (this.altura + this.ancho)*2;

        // this.a = (this.altura * this.ancho)/2;
    }

    perimetro(altura, ancho){
        this.p = (altura + ancho)*2;
    }

    area(altura,ancho){
        this.a = (altura * ancho)/2;
    }

    mostrarDatos(){
        document.write(`
        <ul>
            <li>Altura: ${this.altura}</li>
            <li>Ancho: ${this.ancho}</li>
            <li>Area: ${this.a}</li>
            <li>Perimetro: ${this.p}</li>
        </ul>`)
    }
}

let x1 = new Rectangulo();


x1.ingresarDatos();
x1.perimetro(x1.altura, x1.ancho);
x1.area(x1.altura, x1.ancho);
x1.mostrarDatos();

