class Persona {
    // Atributos
    nombre = '';
    apellido = ''
    // Constructor
    constructor(nombre, apellido){
        this.nombre =  nombre;
        this.apellido = apellido;
        console.log('Hola desde el constructor');
    }
    // Methods
    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

export default Persona