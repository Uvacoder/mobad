import React from 'react';
import Events from '../Components/Events'

class EventsContainer extends React.Component {

    render() {
        return (
            <div className= "events_container">
            <h1>Events Container</h1>
                <Events />
            </div>
        );
    }
}

export default EventsContainer;
