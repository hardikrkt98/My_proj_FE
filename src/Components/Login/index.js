import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import {baseUrl} from "../../Constants/BackendEndpoints";
import {makeHttpRequest} from '../../CommonMethods';

class FormPage extends React.PureComponent  {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }
   updateEventstate = (event) =>{
         this.setState({ [event.target.id]: event.target.value });
    }


    handleSignin= ()=>{

       console.log(this.state);

     const config = {
            url:"/user/login",
            data:this.state,
            method: 'POST',
            hideLoader: false
        };


        makeHttpRequest(config).then(response=>{
           console.log(response);

        })

    }





    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="dark-grey-text mb-5">
                                        <strong>Sign in</strong>
                                    </h3>
                                </div>

                                <MDBInput
                                    label="Your username"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    id='username'
                                    value  = {this.state.username}
                                    onChange={this.updateEventstate}



                                />
                                <MDBInput
                                    label="Your password"
                                    group
                                    type="password"
                                    validate
                                    containerClass="mb-0"
                                    id='password'
                                    value={this.state.password}
                                    onChange={this.updateEventstate}
                                />
                                <p className="font-small blue-text d-flex justify-content-end pb-3">
                                    Forgot
                                    <a href="#!" className="blue-text ml-1">

                                        Password?
                                    </a>
                                </p>
                                <div className="text-center mb-3">
                                    <MDBBtn
                                        type="button"
                                        gradient="blue"
                                        rounded
                                        className="btn-block z-depth-1a"
                                        onClick={this.handleSignin}
                                    >
                                        Sign in
                                    </MDBBtn>
                                </div>

                            </MDBCardBody>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Not a member?
                                    <a href="/signup" className="blue-text ml-1">

                                        Sign Up
                                    </a>
                                </p>
                            </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
};

export default FormPage;
