import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import {baseUrl} from "../../Constants/BackendEndpoints";
import "mdbreact/dist/css/mdb.css";
import Cookies from 'universal-cookie';



import {makeHttpRequest} from '../../CommonMethods';
import SocialPage from "../LoginFeed/LoginFeed";

class FormPage extends React.PureComponent  {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            error:false,
            errorMessage:'',
        }
    }
   updateEventstate = (event) =>{
         this.setState({ [event.target.id]: event.target.value });
    }


    handleSignin= ()=>{

       console.log(this.state);

       let payload ={
           username:this.state.username,
           password:this.state.password,
       }

     const config = {
            url:"/user/login",
            data:payload,
            method: 'POST',
            hideLoader: false
        };


        makeHttpRequest(config).then(response=>{

            this.setState({
                error:false,
                errorMessage:''

            })
            const cookies = new Cookies();
            console.log(response);

            //Need to set expiry time for cookie
            cookies.set("token",response.headers['jwt-token']);
            cookies.set('userId',response.data.userId);
            // console.log(this.props.history);
            this.props.history.push('/userhome');

           //console.log(response);


        })
            .catch(error=>{
                console.log(error);
                this.setState({
                    errorMessage:error.response.data.message,
                    error:true,
                })



            })
        {



        }

    }





    render() {
        return (
          <div>
              <div style={{position:"absolute",height :570,overflow:"auto",right:20}}>
                  <SocialPage/>
              </div>

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBCard>
                            <MDBCardBody className="mr-xl-n1">
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
                                <span  style={{ color: "red" }}>{this.state.errorMessage}</span>

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
          </div>
        );
    }
};

export default FormPage;
