/*
 * send.js: Client for Crosstalk Send API
 *
 * (C) 2012 Crosstalk Systems Inc.
 */

var Client = require( './client' ).Client,
    util = require( 'util' );

var Send = exports.Send = function ( options ) {

  Client.call( this, options );

}; // Send

util.inherits( Send, Client );

Send.prototype.send = function send ( crosstalkToken, message, params, 
   scope, _callback, callback ) {

  this.request( 'POST', [ 'send' ], { 
    crosstalkToken : crosstalkToken,
    message : message,
    params : params,
    scope : scope,
    callback : _callback
  }, callback, function ( res, result ) { callback( null, result ); } );

}; // send