import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal, Button, Form, FormCheck } from 'react-bootstrap'

import * as GastosActions from '../../../../store/gastos/gastosActions'

import './style.css'

const Adicionar = ({ adicionarLancamento }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        clearForm();
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const [valorLancamento, setValorLancamento] = useState(0);
    const [dataVencimento, setDataVencimento] = useState('');
    const [switchEntradaSaida, setSwitchEntradaSaida] = useState(false);

    const handleSwitchToggle = () => {
        setSwitchEntradaSaida(!switchEntradaSaida)
    }

    const clearForm = () => {
        setValorLancamento(0);
        setDataVencimento('');
    }

    return (
        <>
            {/* Modal */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar lançamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="R$ ..."
                            value={valorLancamento}
                            onChange={setValorLancamento}
                            required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Data vencimento</Form.Label>
                        <Form.Control
                            type="date"
                            value={dataVencimento}
                            onChange={setDataVencimento} />
                    </Form.Group>

                    <Form.Group>
                        <FormCheck
                            id="switchEntradaSaida"
                            type="switch"
                            label="Entrada?"
                            checked={switchEntradaSaida}
                            onChange={handleSwitchToggle}
                        />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                </Button>
                </Modal.Footer>
            </Modal>

            <div className="btn-flutuante">
                <button onClick={handleShow} type="button" className="btn btn-success">Add</button>
            </div>
        </>
    )
}

const mapStateToProps = state => ({ gastos: state.gastos })
const mapDispatchToProps = dispatch => bindActionCreators(GastosActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Adicionar)