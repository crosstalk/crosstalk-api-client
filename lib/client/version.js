/*
 * version.js
 *
 * (C) 2012 Crosstalk Systems Inc.
 */

var Client = require( './client' ).Client,
    util = require( 'util' );

var Version = exports.Version = function ( options ) {

  Client.call( this, options );

}; // Version

util.inherits( Version, Client );

Version.prototype.version = function version ( callback ) {

  this.request( 'GET', [ 'version' ], callback, function ( res, result ) {
    callback( null, result );
  });

}; // version