import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/img2.jpg';
import inst_logo from '../../images/logo.png';
import './LoginPage.css';

class LoginPage extends Component {
constructor(props) {
    super(props);
    this.state = { };
}

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        Hello
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image} alt="" width="450" />
                            </div>
                        </div>
                        <div className="loginpage__rightcomponent">
                            <img src={inst_logo} alt="" className="loginpage__logo" />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        Moaz
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;