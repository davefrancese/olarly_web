import React from "react";
import { connect } from "react-redux";
import { Progress } from "reactstrap";
import Question1 from "./question1";
import Question2 from "./question2";
import Question3 from "./question3";
import RegisterSubmit from "./registerSubmit";
import { registerTeacher } from "../../../actions/teacherActions";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 1,
      totalPages: 3,
      school: "",
      class: "",
      subject: ""
    };
  }

  handleSubmit = () => {
    const { school, subject } = this.state;
    this.props.registerTeacher({ school, subject, class: this.state.class });
  };

  changeSchool = e => {
    this.setState({ school: e.target.value });
  };

  changeClass = e => {
    this.setState({ class: e.target.value });
  };

  changeSubject = e => {
    this.setState({ subject: e.target.value });
  };

  pageUp = () => {
    this.setState(prevState => {
      return { curPage: prevState.curPage + 1 };
    });
  };

  pageDown = () => {
    this.setState(prevState => {
      return { curPage: prevState.curPage - 1 };
    });
  };

  renderProgress = () => {
    if (this.state.curPage > 3) {
      return null;
    } else {
      const { curPage, totalPages } = this.state;
      return (
        <div className="register-progress-bar">
          <div className="text-center">{`${curPage} of ${totalPages}`}</div>
          <Progress value={curPage} max={totalPages} />
        </div>
      );
    }
  };

  renderContent = () => {
    console.log("Register State", this.state);
    switch (this.state.curPage) {
      case 1:
        return (
          <Question1
            pageUp={() => this.pageUp()}
            changeSchool={e => this.changeSchool(e)}
          />
        );
      case 2:
        return (
          <Question2
            pageUp={() => this.pageUp()}
            pageDown={this.pageDown}
            changeClass={e => this.changeClass(e)}
          />
        );
      case 3:
        return (
          <Question3
            pageUp={() => this.pageUp()}
            pageDown={this.pageDown}
            changeSubject={e => this.changeSubject(e)}
          />
        );
      case 4:
        return (
          <RegisterSubmit
            pageDown={this.pageDown}
            data={this.state}
            handleSubmit={this.handleSubmit}
          />
        );
      default:
        return (
          <Question1
            pageUp={() => this.pageUp()}
            changeSchool={e => this.changeSchool(e)}
          />
        );
    }
  };

  render() {
    // const { curPage, totalPages } = this.state;
    return (
      <div className="Register">
        <h1>Register</h1>
        <p>{this.state.page}</p>
        {this.renderContent()}
        {this.renderProgress()}
      </div>
    );
  }
}

const mapStateToProps = registerTeacher => {
  return {
    registerTeacher
  };
};

export default connect(
  mapStateToProps,
  { registerTeacher }
)(Register);
