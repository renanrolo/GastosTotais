import React from 'react'

import Adicionar from '../adicionar'

const mesNome = "Fevereiro 2020";

const Mes = () => (
    <div className="container-fluid">
        <br />
        <h4 className="text-center">{mesNome}</h4>
        <br />

        <div className="row">
            <div className="col-sm" >
                One of three columns
            </div>
            <div className="col-sm">
                One of three columns
            </div>
            <div className="col-sm">
                One of three columns
            </div>
        </div>

        <Adicionar />
    </div>
)

export default Mes