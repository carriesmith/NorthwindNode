'use strict';

module.exports = function(app) {
	
  var categories = require('../../app/controllers/categories.server.controller');

  app.route('/categories')
    // arguments request and response are part of the express framework
    // request -  holding data from the HTTP request such as URL,
    //            query string parameters, etc.
    // Response - allows the controller to change the state of the response
    //            ie. HTTP status code, raw response (HTML, JSON, etc) before returning to client
    .get(categories.list)
    .post(categories.create);

  app.route('/categories/:categoryId')
    .get(categories.read);

};