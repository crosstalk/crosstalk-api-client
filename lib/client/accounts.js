/*
 * accounts.js: Client for Crosstalk Accounts API
 *
 * (C) 2012 Crosstalk Systems Inc.
 */

var Client = require( './client' ).Client,
    util = require( 'util' );

var Accounts = exports.Accounts = function ( options ) {

  Client.call( this, options );

}; // Accounts

util.inherits( Accounts, Client );

Accounts.prototype.activate = function ( accountName, activationToken, callback ) {

  this.request( 'POST', [ 'account', accountName, 'activate'], {
    account : accountName,
    activationToken : activationToken
  }, callback, function ( res, result ) { callback ( null, result ); } );

}; // activate

Accounts.prototype.available = function ( accountName, callback ) {

  this.request( 'GET', [ 'account', accountName, 'available' ], callback,
      function ( res, result ) {
    callback( null, result );
  });

}; // available

Accounts.prototype.create = function ( accountName, email, password, callback ) {

  this.request( 'POST', [ 'account' ], { account : accountName,
     email : email, password : password }, callback, function ( res, result ) {
    callback( null, result );
  });

}; // create