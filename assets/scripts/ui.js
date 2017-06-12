'use strict'

// Requires
const api = require('./api')
const events = require('./events')
const store = require('./store')
const ui = require('./ui')
const getFormFields = require(`../../lib/get-form-fields`)

// Authentication

const signUpSuccess = () => {
  $('.errormsg').hide()
  $('.successmsg').text('Account created. Please log in.')
}

const signUpFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign up failed. Please check your email and passwords.')
  $('.err-create').show()
}
// const openCreateAccountForm = () => {
//   $('.loginForm').hide()
//   $('.login-dp').html('Create Account')
//   // $('#login-dp').trigger('click')
//   // $('.login-dp').click(function () {
//   //   $('#login-dp').simulate('click')
//   // })
//   $('.createAccountForm').show()
// }
//
// const openLogin = () => {
//   $('.create-account-dp').hide()
//   $('.loginForm').show()
// }

const signInSuccess = (data) => {
  $('.errormsg').hide()
  $('.yourBeers').show()
  $('#addBeer').show()
  $('.beerListTitle').show()
  // new
  $('.create-account-dp').addClass('hidden')
  $('.login-dp').addClass('hidden')
  $('.change-password-dp-nav').show()
  $('.log-out').show()
  $('#myCarousel').addClass('hidden')
  api.beerIndex()
  .then(beerIndexSuccess)
  .catch(beerIndexFailure)
}

const signInFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign in failed. Please check your email and password.')
  $('.err-log-in').show()
}

const changePasswordSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').show()
  $('#changepwbutton').show()
}
const changePasswordFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Change password failed. Please check your passwords.')
  $('.err-changepw').show()
}

const signOutSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('.yourBeers').hide()
  $('#addBeer').hide()
  $('.beerListTitle').hide()
  $('.beerList').empty()

  $('.change-password-dp-nav').addClass('hidden')
  $('.log-out').addClass('hidden')
  $('.create-account-dp').removeClass('hidden')
  $('.login-dp').removeClass('hidden')
  $('#myCarousel').removeClass('hidden')

  // $('.change-password-dp-nav').hide()
  // $('.log-out').hide()
  // $('.create-account-dp').show()
  // $('.login-dp').show()
  // $('#myCarousel').show()
}

const signOutFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign out failed. Please contact the webmaster.')
  $('.errormsg').show()
}

// Beer
const showBeersTemplate = require('./templates/beer_listing.handlebars')
const beerFormTemplate = require('./templates/update_beer_form.handlebars')
const beerDeleteTemplate = require('./templates/beer_delete.handlebars')

const onUpdateBeer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateBeer(data)
    .then(updateBeerSuccess)
    .catch(updateBeerFailure)
}

const updateBeerSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('#updateBeer').hide()
  $('.beerList').empty()
  $('#updateBeer').each(function () {
    this.reset()
  })
  api.beerIndex()
  .then(beerIndexSuccess)
  .catch(beerIndexFailure)
}

const updateBeerFailure = (error) => {
}

const openBeerForm = function (event) {
  let updateBeerFormHtml = beerFormTemplate()
  $(event.target).off()
  $(event.target).after(updateBeerFormHtml)
  store.beerId = $(event.target).closest('button').attr('data-id')
  $('#updateBeer').on('submit', onUpdateBeer)
}

const onDeleteBeer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteBeer(data)
    .then(deleteBeerSuccess)
    .catch(deleteBeerFailure)
}

const confirmBeerDelete = function (event) {
  let confirmBeerDeleteHtml = beerDeleteTemplate()
  $('#updateBeer').hide()
  $(event.target).after(confirmBeerDeleteHtml)
  store.beerId = $(event.target).closest('button').attr('data-id')
  $('.deleteBeer').hide()
  $('#deleteBeer').on('click', onDeleteBeer)
}

const beerIndexSuccess = (response) => {
  let showBeersHtml = showBeersTemplate({ beers: response.beers })
  $('.beerList').append(showBeersHtml)
  $('.openBeerUpdate').on('click', openBeerForm)
  $('.deleteBeer').on('click', confirmBeerDelete)
}

const beerIndexFailure = (error) => {
}

const addBeerSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('.beerList').empty()
  $('#addBeer').each(function () {
    this.reset()
  })
  api.beerIndex()
  .then(beerIndexSuccess)
  .catch(beerIndexFailure)
}
const addBeerFailure = (error) => {
  // need error message.
}

const deleteBeerSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('#updateBeer').hide()
  $('.confirmBeerDelete').hide()
  $('.beerList').empty()
  api.beerIndex()
  .then(beerIndexSuccess)
  .catch(beerIndexFailure)
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
