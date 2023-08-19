import React, { Component } from 'react';

class PureComp extends Component {
    render() {
        console.log("Pure component rendered");
        return (
            <div>
                I'm the pure component. {this.props.name}
            </div>
        );
    }
}

export default PureComp;