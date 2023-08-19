import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "moaz"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "moaz"
            })
        }, 2000);
    }
    render() {
        console.log("Parent component rendered");
        return (
            <div>
                I'm the parent.
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;