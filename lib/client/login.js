/*
 * login.js
 *
 * (C) 2012 Crosstalk Systems Inc.
 */

var Client = require( './client' ).Client,
    util = require( 'util' );

var Login = exports.Login = function ( options ) {
  Client.call( this, options );
}; // Login

util.inherits( Login, Client );

Login.prototype.login = function login ( account, password, callback ) {

  this.request( 'POST', [ 'login' ], { account : account, password : password },
    callback, function ( res, result ) { callback( null, result ); } );

}; // login