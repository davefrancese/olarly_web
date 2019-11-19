import React from "react";
import { Button } from "antd";

const signOut = props => {
  return (
    <div>
      <Button
        type="danger"
        onClick={() => props.signOutUser(sessionStorage.getItem("token"))}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default signOut;
