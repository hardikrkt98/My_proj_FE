import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import {makeHttpRequest} from "../../CommonMethods";

 class SignUpPage extends  React.PureComponent{

     constructor(props) {
         super(props);
         this.state = {
             firstName:'',
             lastName:'',
             username:'',
             email:''

         }
     }
     updateEventstate = (event) =>{
         this.setState({ [event.target.id]: event.target.value });
     }


     handleSignUp= ()=>{

         console.log(this.state);

         const config = {
             url:"/user/register",
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
                                    <strong>Sign Up</strong>
                                </h3>
                            </div>
                            <MDBInput
                                label="FirstName"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                id= 'firstName'
                                onChange={this.updateEventstate}



                            />
                            <MDBInput
                                label="LastName"
                                group
                                type="password"
                                validate
                                containerClass="mb-0"
                                id='lastName'
                                onChange={this.updateEventstate}

                            />
                            <MDBInput
                                label="UserName"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                id='username'
                                onChange={this.updateEventstate}


                            />
                            <MDBInput
                                label="Email"
                                group
                                type="email"
                                validate
                                containerClass="mb-0"
                                id='email'
                                onChange={this.updateEventstate}

                            />
                            <div className="text-center mb-3">
                                <MDBBtn
                                    type="button"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a"
                                    onClick={this.handleSignUp}
                                >
                                    Register
                                </MDBBtn>
                            </div>

                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">
                                Already a member?
                                <a href="/login" className="blue-text ml-1">

                                    LogIn
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

export default SignUpPage ;
