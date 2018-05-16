/**
 * CallsController
 *
 * @description :: Server-side logic for managing calls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  random: function(req, res, next) {
    var id = Math.floor(Math.random() * Math.floor(10)) + 1;
    sails.log.debug(id);
    Calls.findOne({id: id}).exec(function(err, call) {
      //return res.send(call.name);
      return res.view('test', {
        call: call
      });
    });
  }
};

