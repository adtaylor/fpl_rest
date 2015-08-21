'use strict';
var restify = require('restify');

/**
 * Routes
 */

var routes = [];

/**
 * GET /
 * Version: 1.0.0
 */


// players/
// players/keepers
// players/defenders
// players/midfielders
// players/forwards

routes.push({
  meta: {
    name: 'getPlayers',
    method: 'GET',
    paths: [
      '/'
    ],
    version: '1.0.0'
  },
  middleware: function(req, res, next) {
    res.send({
      foo: 'players'
    });
    return next();
  }
});

routes.push({
  meta: {
    name: 'getPlayersByType',
    method: 'GET',
    paths: [
      '/players/:type'
    ],
    version: '1.0.0'
  },
  middleware: function(req, res, next) {
    var filterWhitelist = ["keepers", "defenders", "midfielders", "forwards"];
    if( filterWhitelist.indexOf(req.params.type) == -1 ) return next( new restify.NotFoundError('Invalid Filter') );
    console.log(req.params);
    res.send({
      foo: 'players/' +req.params.type
    });
    return next();
  }
});

routes.push({
  meta: {
    name: 'getPlayer',
    method: 'GET',
    paths: [
      '/player/:id'
    ],
    version: '1.0.0'
  },
  middleware: function(req, res, next) {
    res.send({
      foo: 'player'
    });
    return next();
  }
});


/**
 * Export
 */

module.exports = routes;
