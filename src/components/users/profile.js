import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      name: "Dave",
      status: "Student",
      admin: false,
      classes: ["History", "Science", "Math"],
      tasks: [
        {
          id: 0,
          name: "History Worksheet",
          description:
            "History...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan, magna in pharetra finibus, magna ex molestie lectus, sit amet condimentum odio arcu et lacus.",
          isComplete: false
        },
        {
          id: 1,
          name: "Science Worksheet",
          description:
            "Science...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan, magna in pharetra finibus, magna ex molestie lectus, sit amet condimentum odio arcu et lacus.",
          isComplete: false
        }
      ],
      teachers: ["Dr. Lane", "Prof. Smith"]
    };
  }

  renderProfileClasses() {
    return this.state.classes.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
  }

  renderProfileTeachers() {
    return this.state.teachers.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
  }

  renderProfileTasks() {
    return this.state.tasks.map((item, i) => {
      return <li key={i}>{item.name}</li>;
    });
  }

  render() {
    return (
      <div className="Profile">
        <h3>Profile</h3>
        <p>Welcome, {this.state.name}</p>
        <div>
          <p>Classes</p>
          <ul>{this.renderProfileClasses()}</ul>
        </div>
        <div>
          <p>Teachers</p>
          <ul>{this.renderProfileTeachers()}</ul>
        </div>
        <div>
          <p>Tasks</p>
          <ul>{this.renderProfileTasks()}</ul>
        </div>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
