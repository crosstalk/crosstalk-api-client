/*
 * logout.js
 *
 * (C) 2012 Crosstalk Systems Inc.
 */

var Client = require( './client' ).Client,
    util = require( 'util' );

var Logout = exports.Logout = function ( options ) {
  Client.call( this, options );
}; // Logout

util.inherits( Logout, Client );

Logout.prototype.logout = function logout ( token, callback ) {

  this.request( 'POST', [ 'logout' ], { token : token }, callback,
    function ( res, result ) { callback( null, result ); } );

}; // logout