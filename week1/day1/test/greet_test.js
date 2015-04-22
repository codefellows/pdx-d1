var greet = require('../greet.js');
var expect = require('chai').expect;

describe('greet', function() {
  it('should greet when called', function() {
    expect(greet().sayHello()).to.eql('hello world');
  });
})