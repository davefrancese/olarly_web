import React from "react";
import TaskList from "./tasklist";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 0,
          name: "Grade Papers",
          description: "English 101 papers are in inbox to be graded.",
          priority: "5",
          dateCreated: "December 7, 2019",
          dueDate: "December 14, 2019"
        },
        {
          id: 1,
          name: "Prep for PTA",
          description: "Organize student grades.",
          priority: "2",
          dateCreated: "December 3, 2019",
          dueDate: "December 10, 2019"
        }
      ]
    };
  }

  componentDidMount = () => {
    // create Action to getTeacherTasks()
    // hit endpoint to render list of Tasks
  };

  render() {
    return (
      <div className="teacher-tasks">
        <h1>Tasks</h1>
        <TaskList list={this.state.tasks} />
      </div>
    );
  }
}

export default Tasks;
