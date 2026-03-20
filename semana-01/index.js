import Persona from "./Persona.js";
import os from 'os'
import fs from 'fs/promises'
import { error } from "console";
const path = 'notas.txt';
const data = 'TExto nuevo';

fs.readFile( path).then( (data) => {
    console.log(data.toString());
}).catch( error => console.error(error))

fs.writeFile(path, data).then( () => {
    console.log('ARchivo guardado');
}).catch ( error => console.error(error))

/*
fs.readFile(path, (error, data) => {
    if(error){
        console.error(error);
    } else {
        console.log(data.toString());
    }

    fs.writeFile(path, data, ( error) => {
        if( error) {
            console.error(error);
        }else {
            console.log('Todo Correcto!');
        }
    } )


})
*/





/* console.log( os.platform());
console.log( os.arch() );
console.log( os.cpus() ); */


// const nombre = 'Sofia';
//console.log(`Hola ${nombre}`);


//const p1 = new Persona('Carlos', 'Ruiz');
//p1.saludar();