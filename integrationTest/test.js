

var assert = require('assert'); //link in assertion library

var linearPoint = require('../linearPoint.js')
describe("Task 1", function() {

    it('test case 1', () => {
        assert.equal(linearPoint(2, 1, 4), 6);
    });

    it('test case 2', () => {
        assert.equal(linearPoint(2, 0, 4), 4);
    });

    it('test case 3', () => {
        assert.equal(linearPoint(2, -1, 4), 2);
    });

});