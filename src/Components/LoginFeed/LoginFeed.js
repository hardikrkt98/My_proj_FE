import React from "react";
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon} from "mdbreact";
import {makeHttpRequest} from '../../CommonMethods';
import {newsFeedUrl,baseUrl} from '../../Constants/BackendEndpoints'



class SocialPage extends React.Component{
  constructor(props) {
      super(props);


      this.state  = {
      }


  }
  componentDidMount() {


      let  config = {
          url : newsFeedUrl

      }
      makeHttpRequest(config).then(
          response =>{

              this.setState({
                  feedData : response.data.techFeeds,
              });





          }
      )


  }


    render() {

       if(!this.state.feedData)
           return null;



        return (
            <div>


                <MDBCard
                    className="my-5 px-5 pt-4"
                    style={{fontWeight: 300, maxWidth: 600}}
                >
                    <img
                        src={require("../../Images/tech_feed.png")}
                        alt=""

                    />
                    <MDBCardBody className="py-3">

                        <MDBRow>
                            { this.state.feedData.map((feed,index) => {
                               return(
                                <div className="mdb-feed">
                                    <div className="news">
                                        <div className="label">

                                        </div>
                                        <div className="excerpt">
                                            <div className="brief">
                                                <a href={feed.url} className="name">
                                                 Link
                                                </a> {feed.feed}

                                            </div>

                                        </div>
                                    </div>


                                </div>
                            )
                            })}
                        </MDBRow>

                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default SocialPage;
