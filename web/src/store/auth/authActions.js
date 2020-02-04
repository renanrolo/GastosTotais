import { toastr } from 'react-redux-toastr'
import axios from 'axios'

import consts from '../../consts'

export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`)
}
export function signup(values) {
    return submit(values, `${consts.OAPI_URL}/signup`)
}
function submit(values, url) {
    return (dispatch) => {
        axios.put(url, values)
            .then(resp => {
                dispatch(
                    { type: 'USER_FETCHED', payload: resp.data }
                )
            })
            .catch(e => {
                if (e.response && e.response.data && e.response.data.errors) {
                    e.response.data.errors.map((erro) => {
                        toastr.warning("Erro:", erro)
                    })
                }
                else {
                    toastr.warning("Indisponível", "")
                }
                dispatch(
                    { type: 'USER_ERROR', payload: null }
                )
            })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${consts.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}


// export function helloworld() {
//     return dispatch({ type: "hello", message: "World" })
// }