import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {

    const formatPresupuesto = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica aqui</p>
            </div>

            <div className='contenido-presupuesto'>
                <p><span>Presupuesto: </span> {formatPresupuesto(presupuesto)}</p>
                <p><span>Disponible: </span> {formatPresupuesto(0)}</p>
                <p><span>Gastado: </span> {formatPresupuesto(0)}</p>
            </div>
        </div>
    )
}

export default ControlPresupuesto