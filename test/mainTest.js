const assert = require('chai').assert;
// const app = require('../main');
const sayHello = require('../main').sayHello;
const addNumbers = require('../main').addNumbers;

// Results
sayHelloResult = main.sayHello();
addNumbersResult = main.addNumbers(5,5);

describe('AppTitle', function() {
    describe('sayHello() tests', function() {
        it('app should return hello', function() {
            // let result = sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', function() {
            // let result = sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers() tests', function() {
        it('addNumbers should be above 5', function() {
            // let result = addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumbers should return type number', function() {
            // let result = addNumbers();
            assert.typeOf(addNumbersResult, 'number');
        });
    });


});

