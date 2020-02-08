import { toastr } from 'react-redux-toastr'
import axios from 'axios'

import consts from '../../consts'


export function adicionarLancamento(lancamento) {
    console.log("olha eu aqui");
    return { type: 'ADICIONAR_LANCAMENTO', payload: lancamento }
}