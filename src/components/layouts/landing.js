import React from "react";
// import {Col, Container, Row} from 'reactstrap'
import Navigation from "../shared/navigation";

import "../style/landing.scss";

class LandingLayout extends React.Component {
  render() {
    return (
      <div className="Landing-Layout">
        <Navigation />
        <main>
          <p>Landing Layout here...</p>
        </main>
      </div>
    );
  }
}

export default LandingLayout;
