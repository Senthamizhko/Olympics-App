import React from 'react';
import { Table } from 'react-bootstrap';
import Constants from '../constants';
const sample = require('../mocks/data.json');

class MedalistDetails extends React.Component {

    render() {
        const { medalType, sport } = this.props.location.state;
        const sportObj = sample.SportList.find(item => item.Sport.c_Name === sport);
        let medalists = [];
        if (medalType === 'total') {
            medalists = medalists.concat(sportObj.GoldMedalList, sportObj.SilverMedalList, sportObj.BronzeMedalList);
        } else {
            medalists = sportObj[medalType];
        }
        return (<div>
            <Table striped borderless hover variant="dark">
                <thead>
                    <tr>
                        <th>{Constants.nocParticipant}</th>
                        <th>{Constants.nocShortName}</th>
                        <th>{Constants.nocGender}</th>
                        <th>{Constants.nocEvent}</th>
                    </tr>
                </thead>

                {medalists.map((item, index) => {
                    return (
                        <tbody key={index}>
                            <tr >
                                <td >{item.Participant.c_Participant}</td>
                                <td >{item.Participant.c_ParticipantShort}</td>
                                <td >{item.Gender.c_Name}</td>
                                <td >{item.Event.c_Name}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>)
    }
}

export default MedalistDetails;