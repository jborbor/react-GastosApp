import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>

            {gastos.map(gasto => (
                <Gasto
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    )
}

export default ListadoGastos
