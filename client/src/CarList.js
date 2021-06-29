import React from "react";

import axios from "axios";

import "./CarList.css";

import { Figure } from "react-bootstrap";

import { Link } from "react-router-dom";

export default class CarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { car: {} };
  }

  componentDidMount() {
    axios.get(`/car`).then((res) => {
      const car = res.data;
      this.setState({ car });
    });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.car.title}</h1> */}
        <h1 className="title">Car List</h1>
        {this.state.car.images && this.state.car.images.length > 0 && (
          <div>
            {this.state.car.images.map((image) => (
              <Link to={"/image?src=" + image.uri}>
                <Figure className="car-list">
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={image.uri + "_2.jpg"}
                  />
                </Figure>
              </Link>
            ))}
          </div>
        )}
        {/* <Link
          to={
            "/image?src=https://upload.wikimedia.org/wikipedia/commons/8/8f/Example_image.svg"
          }
        >
          <Figure className="car-list">
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Example_image.svg"
            />
          </Figure>
        </Link> */}
      </div>
    );
  }
}
