/**
 * CallsController
 *
 * @description :: Server-side logic for managing calls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  random: function(req, res, next) {
    Calls.count().exec(function(err, count) {
      sails.log.debug('Count: ' + count);
      if (count === 0) {
        sails.log.error('No calls found');
        return res.status(404).send('No calls found');
      }
      var id = Math.floor(Math.random() * Math.floor(count)) + 1;
      sails.log.debug(id);

      Calls.findOne({id: id}).exec(function(err, call) {
        if (err) {
          sails.log.error(err);
        }
        if (!call) {
          sails.log.error('No calls found');
          return res.status(404).send('No calls found');
        }
        //return res.send(call.name);
        return res.view('test', {
          call: call
        });
      });
    });
  }
};

