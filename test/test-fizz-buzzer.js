const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	it('should be multiples of 15', function() {
		[15, 30, 45].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		});
	});

	it('should be multiples of 5', function() {
		[5, 10, 20].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('buzz');
		});
	});

	it('should be multiples of 3', function() {
		[3, 6, 9].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz');
		});
	});

	it('should return number if not', function() {
		[1, 2, 4, 8].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal(input);
		});
	});


	it('should raise error if argument is not a number', function() {

		const badInputs = [
			"yes", "cool", true, false
		];

		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});