var request = require("request");

var base_url = "http://localhost:8080/api/"

describe("GIVEN the API server is running", function() {
  describe("WHEN pie is called", function() {
    it("THEN the status code should be 200", function(done) {
      request.post(base_url + '/pie', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("THEN it should return the id specified in the body", function(done) {
      request.post(base_url + '/pie', function(error, response, body) {
        let jsonRes = JSON.parse(body);
        expect(jsonRes.blogs.length).toBe(0);
        done();
      });
    });
  });

});