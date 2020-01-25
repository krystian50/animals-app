const app = require('../app')
const request = require('supertest');

describe('POST /auth/login', function() {
  it('responds with 401 when no data provided', function(done) {
    request(app)
      .post('/auth/login')
      .expect(401, done);
  });
});