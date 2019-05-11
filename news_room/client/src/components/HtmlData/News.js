import React, { Component } from "react";
import { Link } from "react-router-dom";

class News extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
  };
render() {

return (
      <div className="container" >
        <div className="row">
          <div className="col s8 offset-s2" style={{ border: "solid 0.5px grey" , borderRadius: "5px"}}>
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4 style ={{ color:"grey" }}>
                <b style={{ color:"red", fontSize: "40px" }}>Articles</b><span style={{fontSize: "35px"}}> scrape</span>
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login" style ={{ color:"red" }}>Log in</Link>
              </p>
            </div>
              <div className="article col s12" style={{ border: "solid 0.5px grey" , borderRadius: "5px"}}>
              </div>
              <div className="article col s12" style={{ border: "solid 0.5px grey" , borderRadius: "5px"}}>
              </div>
              <div className="article col s12" style={{ border: "solid 0.5px grey" , borderRadius: "5px"}}>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
            style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
            }}
            type="submit" className="btn btn-large waves-effect waves-light hoverable red accent-3">
                  Chat
                </button>

              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default News;