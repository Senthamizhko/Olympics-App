import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Table } from 'react-bootstrap';
import NocOverview from './NocOverview';
import Constants from '../constants';
const cardImage = [require('../images/card1.jpg'), require('../images/card2.jpg')]
const sample = require('../mocks/data.json');

class SportsCard extends React.Component {

    render() {
        return (
            <div>
                <NocOverview />
                {sample.SportList.map((val, index) => {
                    return (
                        <Card key={index} style={{ width: '30rem', float: 'left', margin: '36px' }}>
                            <Card.Img variant="top" src={cardImage[index]} />
                            <Card.Body>
                                <Card.Title>{val.Sport.c_Name}</Card.Title>
                                <Card.Text>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>{Constants.goldMedal}</th>
                                                <th>{Constants.silverMedal}</th>
                                                <th>{Constants.bronzeMedal}</th>
                                                <th>{Constants.totalMedal}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Link to={{ pathname: '/details', state: { medalType: 'GoldMedalList', sport: val.Sport.c_Name } }} >{val.Medals.n_Gold}</Link></td>
                                                <td><Link to={{ pathname: '/details', state: { medalType: 'SilverMedalList', sport: val.Sport.c_Name } }} >{val.Medals.n_Silver}</Link></td>
                                                <td><Link to={{ pathname: '/details', state: { medalType: 'BronzeMedalList', sport: val.Sport.c_Name } }} >{val.Medals.n_Bronze}</Link></td>
                                                <td><Link to={{ pathname: '/details', state: { medalType: 'total', sport: val.Sport.c_Name } }} >{val.Medals.n_Total}</Link></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>)
                })}
            </div>
        );
    }


}

export default SportsCard;