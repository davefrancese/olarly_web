import React from "react";
import { List } from "antd";

const tasklist = props => {
  const data = props.list;
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.description}
            priority={item.priority}
          />
        </List.Item>
      )}
    />
  );
};

export default tasklist;
