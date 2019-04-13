import React from 'react';
class EventDemo extends React.Component {
    callEvent() {
        console.log('Am from an event');
    }
    render() {
        return (
            <button onclick={() => this.callEvent()}>Event Click Me</button>
        )
    }
}

export default EventDemo;

