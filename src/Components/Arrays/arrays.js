import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {arraysProblems, newsFeedUrl} from "../../Constants/BackendEndpoints";
import {makeHttpRequest} from "../../CommonMethods";
import {Link, NavLink, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
const cookie = new Cookies();



class Arrays extends React.Component{
    constructor(props) {
        super(props);


        this.state  = {

            problems: ""

        }


    }

    componentDidMount() {
        let  config = {
            url : arraysProblems,
            headers: {
                "Authorization":"Bearer "+cookie.get('token')

            }

        }
        makeHttpRequest(config).then(
            response =>{

                this.setState({
                    problems : response.data.arraysList,
                });

            }
        )

    }



    render() {
    const classes = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }));
        if(!this.state.problems)
            return null;
    return (

        <div className={classes.root}>


            {  this.state.problems.map((problem,index)=>{

              return(
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Button variant="outlined" color="primary"
                        onClick={(event)=>{
                            event.stopPropagation()
                            event.preventDefault();

                         return (
                           window.location.assign('/problem/'+problem.title)
                         //    <Link to = {'/problem/'+problem.title}>{}</Link>

                         );


                        }}>
                            Link
                        </Button>
                        <Typography className={classes.heading}>{problem.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography>
                            {problem.problemstatement}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
              )


            })


            }
        </div>
    );
}

}
export default  withRouter(Arrays);

