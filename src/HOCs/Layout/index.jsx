import React, { Component } from "react";
import SideBar from "../../component/SideBar";

const Layout = (props) => {
  return (
    <div style={{ backgroundColor: "#ffebee", display: "flex" }}>    
        <SideBar />
        {props.children}
      </div>
  );
};

export default Layout;
