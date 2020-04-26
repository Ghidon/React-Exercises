import React from "react";

class Box1 extends React.Component {
  render() {
    return <div className="box1">{this.props.children}</div>;
  }
}

function Box2(props) {
  return (
    <Box1>
      <div className="box2">{props.children}</div>
    </Box1>
  );
}

function Box3(props) {
  return (
    <Box2>
      <div className="box3">{props.children}</div>
    </Box2>
  );
}

function Box4() {
  return (
    <Box3>
      <div className="box4"></div>
      <div className="box4"></div>
    </Box3>
  );
}

export default Box4;
