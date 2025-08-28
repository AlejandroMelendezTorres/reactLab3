import React from 'react'

export const Message = ({matricula, nombre, apellido, edad, universidad, carrera}) => {
  return (
    <>
        <p>Matricula: {matricula}</p>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Edad: {edad}</p>
        <p>Universidad: {universidad}</p>
        <p>Carrera: {carrera}</p>
    </>
  )
}