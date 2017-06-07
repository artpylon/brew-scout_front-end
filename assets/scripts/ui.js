'use strict'
const api = require('./api')
const events = require('./events')
const store = require('./store')
const ui = require('./ui')

// Authentication

const signUpSuccess = (data) => {
  $('#sign-up').hide()
  $('.errormsg').hide()
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

module.exports = {
  // Authentication
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
