// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const app = require("../server");

import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server";

chai.use(chaiHttp);
chai.should();

describe("Car", () => {
  describe("GET /car", () => {
    it("should get car data", (done) => {
      chai
        .request(app)
        .get("/car")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("images");
          done();
        });
    });
  });
});
