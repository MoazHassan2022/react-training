import React, { Component } from 'react';
import bellA from './bellA.png'
import bellB from './bellB.png'

class NewComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Subscribe to my channel",
            sub: "Subscribe",
            imageURL: bellA
        }
    }

    styles = {
        fontStyle: "italic",
        color: "purple"
    }

    buttonChange = () => {
        this.setState({
            message: "Hit the bell icon to receive notifications!",
            sub: "Unsubscribe"
        })
    }

    imageChange = () => {
        this.setState({
            message: "Thank you, happy notifications!",
            imageURL: bellB
        })
    }

    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.buttonChange}>{this.state.sub}</button>
                <br />
                <br />
                <p />
                <img 
                style={{width: "110px", height: "90px"}}
                src={this.state.imageURL} 
                alt=""
                onClick={this.imageChange}
                ></img>
            </div>
        );
    }
}

export default NewComp;