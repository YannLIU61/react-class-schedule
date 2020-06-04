import React, { Component } from 'react'
import Menu from './Menu'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
export class HomePageComp extends Component {
    constructor() {
        super(...arguments);
        this.data = this.props.location.state.uvs;
    }
    render() {

        console.log(JSON.stringify(this.data))
        return (
            <div>
                <Menu />
                <ScheduleComponent height='550px' selectedDate={new Date()} eventSettings={{ dataSource: this.data }}>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
            </div>)

    }
}

export default HomePageComp
