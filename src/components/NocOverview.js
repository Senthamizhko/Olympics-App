import React from 'react';
import { Table } from 'react-bootstrap';
import Constants from '../constants.js';
const sample = require('../mocks/data.json');

class NocOverview extends React.Component {
    render() {
        const nocObj = sample.NOCMedals;
        return (
            <div>
                <div>
                    <h2>{Constants.nocOverviewTitle}</h2>
                    <p>{Constants.nocDesc1}</p>
                    <p>{Constants.nocDesc2}</p>
                </div>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <td>{Constants.nocTitle}</td>
                            <td>{nocObj.NOC.c_Name}</td>
                        </tr>
                        <tr>
                            <td>{Constants.nocShortName}</td>
                            <td>{nocObj.NOC.c_Short}</td>
                        </tr>
                        <tr>
                            <td>{Constants.nocGeoID}</td>
                            <td>{nocObj.NOC.n_GeoID}</td>
                        </tr>
                        <tr>
                            <td>{Constants.nocTotalMedal}</td>
                            <td>{nocObj.Medals.n_Total}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default NocOverview;