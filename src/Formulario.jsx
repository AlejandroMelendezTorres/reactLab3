import React, { use, useEffect } from 'react'
import { Message } from './Message';

export const Formulario = () => {

    const [mostrar, setMostrar] = React.useState(false);
    
    const [formState, setFormState] = React.useState({
        matricula: '',
        nombre: '',
        apellido: '',
        edad: '',
        universidad: '',
        carrera: ''
    });

    const { matricula, nombre, apellido, edad, universidad, carrera } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return (
    <>
        <h1>Formulario</h1>
        <input type="text" className='form-control' placeholder='Matricula' name='matricula' value={matricula} onChange={onInputChange} />
        <input type="text" className='form-control' placeholder='Nombre' name='nombre' value={nombre} onChange={onInputChange} />
        <input type="text" className='form-control' placeholder='Apellido' name='apellido' value={apellido} onChange={onInputChange} />
        <input type="number" className='form-control' placeholder='Edad' name='edad' value={edad} onChange={onInputChange} />
        <input type="text" className='form-control' placeholder='Universidad' name='universidad' value={universidad} onChange={onInputChange} />
        <input type="text" className='form-control' placeholder='Carrera' name='carrera' value={carrera} onChange={onInputChange} />
        <button onClick={() => setMostrar(!mostrar)}>Mostrar Datos</button>
        {mostrar && (
            <Message matricula={matricula} nombre={nombre} apellido={apellido} edad={edad} universidad={universidad} carrera={carrera} />
        )}
    </>
  )
}