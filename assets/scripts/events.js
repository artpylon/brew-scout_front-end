'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('./store')

// Authentication
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.credentials = data
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  $('.changepwmsg').hide()
  $('.errormsg').hide()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const showChangePassword = function (event) {
  $('.changepwmsg').hide()
  $('#change-password').show()
  $('#changepwbutton').hide()
}

// Beer
const onAddBeer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addBeer(data)
    .then(ui.addBeerSuccess)
    .catch(ui.addBeerFailure)
}

const onUpdateBeer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateBeer(data)
    .then(ui.updateBeerSuccess)
    .catch(ui.updateBeerFailure)
}

const onDeleteBeer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteBeer(data)
    .then(ui.deleteBeerSuccess)
    .catch(ui.deleteBeerFailure)
}

const addHandlers = () => {
  // Authentication
  $('#create-account').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('.signout-button').on('click', onSignOut)
  $('#changepwbutton').on('click', showChangePassword)
  $('#addBeer').on('submit', onAddBeer)
  $('#deleteBeer').on('click', onDeleteBeer)
  $('#updateBeer').on('submit', onUpdateBeer)
  // $('.openCreateAccount').on('click', ui.openCreateAccountForm)
  // $('.openLogin').on('click', ui.openLogin)
}

module.exports = {
  addHandlers
}
