// src/components/Formulario.js
import React from 'react';
import Label from './Label';
import Select from './Select';
import Titulo from './Titulo';

export default function Formulario() {
    const options = ["Alicante", "Madrid", "Sevilla", "Valencia"];

    return (
        <form action="" method="get">
        <Titulo/>
              <div>

                <Label htmlFor="nombre" text="Nombre:" /> 
                <input type="text" name="nombre" id="nombre" maxLength="50" />
              </div>

                 <br></br>
            <div>

                <Label htmlFor="apellidos" text="Apellidos:" /> 
                <input type="text" name="apellidos" id="apellidos" maxLength="50" />
            </div>
     
                <br></br>

            <div>
                <label>Sexo:</label>
                <input type="radio" name="sexo" id="sexo-h" value="h" /> 
                <Label htmlFor="sexo-h" text="hombre" /> 
                <input type="radio" name="sexo" id="sexo-m" value="m" /> 
                <Label htmlFor="sexo-m" text="mujer" />

            </div>
           <br></br>
            <div>

                <Label htmlFor="correo" text="Correo:" /> 
                <input type="text" name="correo" id="correo" maxLength="100" />
       
            </div>
            <br></br>
            <div>
            <Label htmlFor="poblacion" text="Población:" />
            <Select name="poblacion" id="poblacion" options={options} /> 
            
            </div>
           <br></br>

        <div>

                <Label htmlFor="descripcion" text="Descripción:" />
                <textarea name="descripcion" id="descripcion" rows="6" cols="60"></textarea>
        </div>
        <br></br>  

     <div>

                <input type="checkbox" name="info" id="info"  /> 
                <Label htmlFor="info" text="Deseo recibir información sobre novedades y ofertas" />
       
     </div>
        <br></br>
         <div>

                <input type="checkbox" name="condiciones" id="condiciones" /> 
                <Label htmlFor="condiciones" text="Declaro haber leído y aceptar las condiciones generales del programa y la normativa sobre protección de datos" />
         </div>
          
        <br></br>
       <div>
                <input type="submit" value="Enviar" />

       </div>
        
        </form>
    );
}
