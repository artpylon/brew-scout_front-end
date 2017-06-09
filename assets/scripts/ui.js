'use strict'
const api = require('./api')
const events = require('./events')
const store = require('./store')
const ui = require('./ui')
const getFormFields = require(`../../lib/get-form-fields`)

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
  $('.yourBeers').show()
  api.beerIndex()
  .then(beerIndexSuccess)
  .catch(beerIndexFailure)
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
  $('.yourBeers').hide()
}
const signOutFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign out failed. Please contact the webmaster.')
  $('.errormsg').show()
}

// Beer
const showBeersTemplate = require('./templates/beer_listing.handlebars')
const beerFormTemplate = require('./templates/update_beer_form.handlebars')

const onUpdateBeer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateBeer(data)
    .then(updateBeerSuccess)
    .catch(updateBeerFailure)
}

const updateBeerSuccess = (data) => {
  console.log('im in updateBeerSuccess')
  $('#updateBeer').hide()
  $('.beerList').empty()
  api.beerIndex()
  .then(beerIndexSuccess)
  .catch(beerIndexFailure)
}

const updateBeerFailure = (error) => {
}

const openBeerForm = function (event) {
  let updateBeerFormHtml = beerFormTemplate()
  $(event.target).after(updateBeerFormHtml)
  store.beerId = $(event.target).closest('button').attr('data-id')
  $('#updateBeer').on('submit', onUpdateBeer)
  // $('#deleteBeer').on('submit', onUpdateBeer)
}

const beerIndexSuccess = (response) => {
  let showBeersHtml = showBeersTemplate({ beers: response.beers })
  $('.beerList').append(showBeersHtml)
  $('.openBeerUpdate').on('click', openBeerForm)
  $('.deleteBeer').on('click', api.deleteBeer)
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
