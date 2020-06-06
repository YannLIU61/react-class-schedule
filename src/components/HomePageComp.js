import React, { Component } from 'react'
import Menu from './Menu'
import DataFormator from '../outil/DataFormator'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ResourcesDirective,ResourceDirective } from '@syncfusion/ej2-react-schedule';
export class HomePageComp extends Component {

    state = {
        data: JSON.parse(localStorage.getItem("uvs")),
        ownerData: [
            {  Id: 1, OwnerColor: '#ffaa00' },
            {  Id: 2, OwnerColor: '#f8a398' },
            {  Id: 3, OwnerColor: '#7499e1' },
            {  Id: 4, OwnerColor: '#7fa900' }
        ]
    }

    render() {
        return (
            <div>
                <Menu />
                <ScheduleComponent height='550px' selectedDate={new Date()} eventSettings={{ dataSource: DataFormator(this.state.data) }}>
                    <ResourcesDirective>
                        <ResourceDirective field='OwnerId'  dataSource={this.state.ownerData}  idField='Id' colorField='OwnerColor'>
                        </ResourceDirective>
                    </ResourcesDirective>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
            </div>)

    }
}

export default HomePageComp
