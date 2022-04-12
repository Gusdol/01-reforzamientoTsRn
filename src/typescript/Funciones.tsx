import React from 'react'

const Funciones = () => {


    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <h3>funciones</h3>
            <span>El resultado es: {sumar(1,2)}</span>
        </>
    )
}

export default Funciones
