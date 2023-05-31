import React from "react";

class ClassComponents extends React.Component{
  render(){
    return(
      <h1>Class Component </h1>
    )
  }
  componentDidMount(){
    console.log("component did mount");
  }
  componentDidUpdate(){
    console.log("component did update");
  }
  componentWillUnmount(){
    console.log("component will unmount")
  }
}
export default ClassComponents;