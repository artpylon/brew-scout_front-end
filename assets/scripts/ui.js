'use strict'
const api = require('./api')
const events = require('./events')
const store = require('./store')
const ui = require('./ui')

// Authentication

const signUpSuccess = (data) => {
  $('#sign-up').hide()
  $('.errormsg').hide()
  api.beerIndex()
  .then(beerIndexSuccess)
  .catch(beerIndexFailure)
}
const signUpFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign up failed. Please check your email and passwords.')
  $('.errormsg').show()
}

const signInSuccess = (data) => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.errormsg').hide()
  $('.signout-button').show()
  $('#changepwbutton').show()
}

const signInFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign in failed. Please check your email and password.')
  $('.errormsg').show()
}

const changePasswordSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').show()
  $('#change-password').hide()
  $('#changepwbutton').show()
}
const changePasswordFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Change password failed. Please check your passwords.')
  $('.errormsg').show()
}

const signOutSuccess = (data) => {
  $('.signout-button').hide()
  $('#change-password').hide()
  $('#changepwbutton').hide()
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const signOutFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign out failed. Please contact the webmaster.')
  $('.errormsg').show()
}

// Beer
const beerIndexSuccess = (data) => {
}
const beerIndexFailure = (error) => {
}

const addBeerSuccess = (data) => {
  // need confirmation that beer has been added
  // need to new beer to appear in beer list, don't make ajax call, append locally
}
const addBeerFailure = (error) => {
  // need error message.
}

const updateBeerSuccess = (data) => {
  // need confirmation beer has been updated, append locally
}
const updateBeerFailure = (error) => {
}

const deleteBeerSuccess = (data) => {
  // need confirmation beer has been deleted
}
const deleteBeerFailure = (error) => {
}

module.exports = {
  // Authentication
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  // Beer
  beerIndexSuccess,
  beerIndexFailure,
  addBeerSuccess,
  addBeerFailure,
  updateBeerSuccess,
  updateBeerFailure,
  deleteBeerSuccess,
  deleteBeerFailure
}
