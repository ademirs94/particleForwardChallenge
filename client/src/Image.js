import React from "react";

import Image from "react-bootstrap/Image";

import { Link } from "react-router-dom";

import "./Image.css";

export default class CarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { car: {} };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const src = urlParams.get("src");
    this.setState({ src });
  }

  render() {
    return (
      <div>
        <Link className="close" to="/"></Link>
        <Image src={this.state.src + "_27.jpg"} fluid />
      </div>
    );
  }
}
