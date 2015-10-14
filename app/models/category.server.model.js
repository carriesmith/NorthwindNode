'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
* Validation
*/

function validateLength(v){
  // a custom validation function to check category name
  // is 15 characters or less
  return v.length <= 15;
}

/**
 * Category Schema
 */
var CategorySchema = new Schema({

  created: {
    // types are defined e.g. String, Date, Number 
    // http://mongoosejs.com/docs/guide.html
    type: Date,   
    // default values can be set
    default: Date.now 
  },
  name: {
    type: String,
    default: '', 
    required: 'name cannot be blank',
    trim: true,
    unique: true,
    // wires in a custom validator function (http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate).
    validate: [validateLength, 'name must be 15 chars in length or less']
  }, 
  description: {
    type: String,
    default: '',
    // types have specific functions e.g. trim, lowercase, uppercase (http://mongoosejs.com/docs/api.html#schema-string-js)
    trim: true
  }

});

mongoose.model('Category', CategorySchema);