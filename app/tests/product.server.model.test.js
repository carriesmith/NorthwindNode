'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Product = mongoose.model('Product');

/**
 * Unit tests
 */
describe('Product Model Unit Tests:', function() {

  describe('Saving', function() {

  	it('saves a new product');

  	it('throws a validation error when product name is empty');

  	it('throws a validation error when product name is longer than 40 characters');

  	it('throws a validation error when product name is duplicated');

  });


	afterEach(function(done) { 
		// NB this delets ALL categories 
    // (but is run against a test database)
		Product.remove().exec();
		done();
	});
});