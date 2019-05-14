import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Slideshow from './Slideshow';
import SportsCard from './SportsCard';
import MedalistDetails from './MedalistDetails';
import { Row, Col, Container } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Slideshow />
                        <Container>
                            <Row>
                                <Col>
                                    <Route path="/" exact component={SportsCard} />
                                    <Route path="/details" exact component={MedalistDetails} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;