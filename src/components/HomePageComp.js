import React, { Component } from 'react'
import Menu from './Menu'
import DataFormator from '../outil/DataFormator'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
export class HomePageComp extends Component {

    state = {
        data: JSON.parse(localStorage.getItem("uvs"))
    }

    render() {
        return (
            <div>
                <Menu />
                <ScheduleComponent height='550px' selectedDate={new Date()} eventSettings={{ dataSource: DataFormator(this.state.data) }}>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
            </div>)

    }
}

export default HomePageComp
