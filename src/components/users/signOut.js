import React from "react";
import { Button } from "antd";

const signOut = props => {
  console.log("signOut", props);
  return (
    <div>
      <Button type="danger" onClick={props.signOutUser()}>
        Sign Out
      </Button>
    </div>
  );
};

export default signOut;
