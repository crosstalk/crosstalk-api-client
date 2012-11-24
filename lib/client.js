/*
 * client.js: Crosstalk API client
 *
 * (C) 2012 Crosstalk Systems Inc.
 */

var parts = [ 'Accounts', 'Login', 'Logout', 'Send', 'Version' ];

parts.forEach( function ( part ) {
  exports[ part ] = require( './client/' + part.toLowerCase() )[ part ];
});

exports.createClient = function ( options ) {

  var client = {};

  parts.forEach( function ( part ) {
    client[ part.toLowerCase() ] = new exports[ part ]( options );
  });

  client.version = function () {
    console.log( this );
    require( './client/version' ).apply( client, arguments );
  }; // client.version

  return client;

}; // createClient