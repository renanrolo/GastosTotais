import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';


function LandingPage() {
    return (
        <Container>
            <Jumbotron>
                <h1>Bem vindo ao controle de gastos do Rolo</h1>
                <h5>Anotações simples de gastos mensais da sua vida pessoa, 
                    facilitando anotar repetições.</h5>
            </Jumbotron>
        </Container>
    )
}

export default LandingPage;