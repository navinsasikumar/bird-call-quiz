/**
 * CallsController
 *
 * @description :: Server-side logic for managing calls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var jsmediatags = require("jsmediatags");
var btoa = require('btoa');

var returnView = function(res, call) {
  return res.view('test', {
    call: call
  });
};

module.exports = {
  random: function(req, res, next) {
    Calls.count().exec(function(err, count) {
      if (count === 0) {
        sails.log.error('No calls found');
        return res.status(404).send('No calls found');
      }
      var id = Math.floor(Math.random() * Math.floor(count)) + 1;

      Calls.findOne({id: id}).exec(function(err, call) {
        if (err) {
          sails.log.error(err);
        }
        if (!call) {
          sails.log.error('No calls found');
          return res.status(404).send('No calls found');
        }
        //return res.send(call.name);
        jsmediatags.read(__dirname + '/../../assets/' + call.path, {
          onSuccess: function(tag) {
            var image = tag.tags.picture;
            if (image) {
              var base64String = "";
              for (var i = 0; i < image.data.length; i++) {
                base64String += String.fromCharCode(image.data[i]);
              }
              var base64 = "data:image/jpeg;base64," + btoa(base64String);
              call.image = base64;
              return returnView(res, call);
            } else {
              return returnView(res, call);
            }
          },
          onError: function(error) {
            console.log(':(', error.type, error.info);
            return returnView(res, call);
          }
        });
      });
    });
  }
};

