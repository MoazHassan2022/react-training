import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/img2.jpg';
import fb from '../../images/img1.jpg';
import appstore from '../../images/img1.jpg';
import playstore from '../../images/img1.jpg';
import inst_logo from '../../images/logo.png';
import './Login.css';

class LoginPage extends Component {
constructor(props) {
    super(props);
    this.state = { };
}

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image} alt="" width="450" />
                            </div>
                            <div>
                                <div className="loginpage__rightcomponent">
                                    <img src={inst_logo} alt="" className="loginpage__logo" />
                                    <div className="loginpage__signin">
                                        <input className="loginpage__text" type="text" placeholder="Phone number, username, or email"/>
                                        <input className="loginpage__text" type="password" placeholder="Password"/>
                                        <button className="loginpage__button">Log In</button>
                                    </div>
                                    <div className="loginpage__ordiv">
                                        <div className="loginpage__dividor"></div>
                                        <div className="loginpage__or">Or</div>
                                        <div className="loginpage__dividor"></div>
                                    </div>
                                    <div className="loginpage__fb">
                                        <img src={fb} width="15px" style={{"marginRight":"5px"}} /> Log in with Facebook
                                    </div>
                                    <div className="loginpage__forgot">
                                        Forgot Password?
                                    </div>
                                    <div className="loginpage__signupoption">
                                        <div className="loginpage_signin">
                                            Don't have an account? Sign up
                                        </div>
                                    </div>
                                    <div className="loginpage__downloadSection">
                                        Get the App
                                    </div>
                                    <div className="loginpage__option">
                                        <img className="loginpage__dwimg" src={appstore} width="136px" />
                                        <img className="loginpage__dwimg" src={playstore} width="136px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;