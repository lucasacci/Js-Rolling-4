class Libro{

    constructor(isbn, titulo, autor, pags){
        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        this.pags = pags
    }

    mostrarLibro(){
        document.write(`<br> El libro ${this.titulo}, con codigo isbn: ${this.isbn}, creado por el autor ${this.autor}, tiene páginas ${this.pags} <br>`);
    }

    set Nisbn(NuevoIsbn){
        this.isbn = NuevoIsbn;
    }
    get Nisbn(){
        return NuevoIsbn;
    }

    set Ntitulo(NuevoTitulo){
        this.titulo = NuevoTitulo;
    }
    get Ntitulo(){
        return NuevoTitulo;
    }

    set Nautor(NuevoAutor){
        this.autor = NuevoAutor;
    }
    get Nautor(){
        return NuevoAutor;
    }

    set Npags(NuevoPags){
        this.pags = NuevoPags;
    }
    get Npags(){
        return this.pags;
    }

    
}

let x1 = new Libro(211312, `Titulo1`, `Enrique`, 22222);
let x2 = new Libro(523253235, `Titulo2`, `Elias`, 502);

x1.mostrarLibro();
x2.mostrarLibro();

if(x1.Npags > x2.Npags){
    document.write(`<br> El libro ${x1.titulo} tiene mas paginas`);
}
else{
    document.write(`<br> El libro ${x2.titulo} tiene mas paginas`);
}