import React, { Component } from 'react';

class Classprops extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} from {this.props.place}!</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Classprops;