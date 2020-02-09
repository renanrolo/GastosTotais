import { toastr } from 'react-redux-toastr'
import axios from 'axios'

import consts from '../../consts'

export function adicionarLancamento(lancamento) {

    axios.get(`${consts.API_URL}/lancamentos`)
        .then(resp => {
            console.log("teste", resp.data)
        })
        .catch(e =>  console.log("teste erro", e))


    console.log("olha eu aqui");
    return { type: 'ADICIONAR_LANCAMENTO', payload: lancamento }
}