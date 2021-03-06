import React from 'react';
import {render} from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import {arraysProblems} from "../../Constants/BackendEndpoints";
import {makeHttpRequest} from "../../CommonMethods";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import Cookies from 'universal-cookie';
const cookie = new Cookies();




class GenericProblemPage extends  React.Component{g




    constructor(props) {
        super(props);


        this.state  = {

            problem: "",
            consoleCode : ""

        }


    }

    handleClick = (event) =>{
        let initurl = this.state.problem.title;


        let config = {
            url :initurl +"/submit",
            method:"POST",
            data: {
                code:this.state.consoleCode,
                problemId:"1234"
            },
            headers: {
                "Authorization":"Bearer "+cookie.get('token')

            }
        };
        makeHttpRequest(config).then(response=>{

            console.log(response);

        })

    };

    componentDidMount() {

        let qprms = this.props.location.pathname.substr(9);

        let  config = {
            url : '/problem/'+qprms ,
            headers: {
                "Authorization":"Bearer "+cookie.get('token')

            }


        };
        makeHttpRequest(config).then(
            response =>{

                this.setState({
                    problem : response.data,
                });

            }
        )

    }





render() {
    if(!this.state.problem)
        return null;


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron fluid>
                <Container>
                    <p>

                        {this.state.problem.problemstatement}
                    </p>
                </Container>
            </Jumbotron>
        <div>
            {this.state.problem.examples.map((example,index)=>{
                return(
                    <div>

                        <ListGroup>
                            <ListGroup.Item>input {example.input}</ListGroup.Item>
                            <ListGroup.Item>output:{example.output}</ListGroup.Item>
                            <ListGroup.Item> explaination:{example.explaination}</ListGroup.Item>

                        </ListGroup>







                    </div>



                )


            })}

        </div>
        <div>
            <AceEditor
            mode="java"
            theme="github"
            onChange={(newCode)=>{
                console.log("hello");
                this.setState({
                    consoleCode:newCode
                })
            }}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
            }}
            value={this.state.code}
        />,

        </div>
            <div>
                <Button variant="outline-success" onClick = {this.handleClick}>Submit</Button>{' '}

            </div>

        </div>

    );
}


}
export default  GenericProblemPage;
