import React from "react";
import { Button } from "antd";
import { List } from "antd";
import "./registerStyle.scss";

const Question1 = props => {
  const data = [
    {
      title: "Your School",
      input: props.data.school
    },
    {
      title: "Your Class",
      input: props.data.class
    },
    {
      title: "Your Subject",
      input: props.data.subject
    }
  ];
  return (
    <div className="register-submit">
      <h4>Confirm Register Information</h4>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.input}
            />
          </List.Item>
        )}
      />
      <div className="register-page-nav">
        <Button onClick={() => props.pageDown()} className="register-next-btn">
          Back
        </Button>
        <Button
          onClick={() => props.handleSubmit()}
          type="success"
          htmlType="button"
          className="register-confirm-btn"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Question1;
