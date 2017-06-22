'use strict'

// Requires
const api = require('./api')
const events = require('./events')
const store = require('./store')
const ui = require('./ui')
const getFormFields = require(`../../lib/get-form-fields`)

// Authentication

const signUpSuccess = () => {
  $('#create-account').trigger('reset')
  $('.errormsg').hide()
  $('.successmsg').text('Account created. Please log in.')
  $('.successmsg').show()
  // let data = store.credentials
  // api.signIn()
  //   .then(ui.signInSuccess)
  //   .catch(ui.signInFailure)
}

const signUpFailure = (error) => {
  $('.successmsg').hide()
  $('.errormsg').hide()
  $('.errormsg').text('Sign up failed. Please check your email and passwords.')
  $('.err-create').show()
}

const signInSuccess = (data) => {
  $('#sign-in').trigger('reset')
  $('.successmsg').hide()
  $('.changepwmsg').hide()
  $('.errormsg').hide()
  $('.yourBeers').show()
  $('.beer-list-div').show()
  // new
  $('.create-account-dp').addClass('hidden')
  $('.login-dp').addClass('hidden')
  $('.change-password-dp-nav').show()
  $('.log-out').show()
  $('#myCarousel').addClass('hidden')
  $('.three-across').addClass('hidden')
  reloadBeerList()
}

const signInFailure = (error) => {
  $('.errormsg').hide()
  $('.errormsg').text('Sign in failed. Please check your email and password.')
  $('.err-log-in').show()
}

const changePasswordSuccess = (data) => {
  $('#change-password').trigger('reset')
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
  $('.beer-list-div').hide()
  $('.beerList').empty()
// add removeClass
  $('.change-password-dp-nav').hide()
  $('.log-out').hide()
  $('.create-account-dp').removeClass('hidden')
  $('.login-dp').removeClass('hidden')
  $('#myCarousel').removeClass('hidden')
  $('.three-across').removeClass('hidden')
  $('.beer-msg').text('')
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

const reloadBeerList = function () {
  api.beerIndex()
    .then(beerIndexSuccess)
    .catch(beerIndexFailure)
}

const updateBeerSuccess = (data) => {
  $('#updateBeerModal').modal('toggle')
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('.beerList').empty()
  $('.beer-msg').empty()
  reloadBeerList()
  store.beerName = {}
  store.beerBrand = {}
  store.beerStyle = {}
  store.beerAlc = {}
  store.beerPrice = {}
}

const updateBeerFailure = (error) => {
}

const emptyAddForm = () => {
  $('.name-add').val('')
  $('.brand-add').val('')
  $('.style-add').val('')
  $('.alc-add').val('')
  $('.price-add').val('')
}

const populateUpdateForm = () => {
  $('.name').val(store.beerName)
  $('.brand').val(store.beerBrand)
  $('.style').val(store.beerStyle)
  $('.alc').val(store.beerAlc)
  $('.price').val(store.beerPrice)
}

const openBeerForm = function (event) {
  store.beerId = $(event.target).closest('td').data('id')
  store.beerName = $(event.target).closest('td').next('td').data('type')
  store.beerBrand = $(event.target).closest('td').siblings().slice(1).data('type')
  store.beerStyle = $(event.target).closest('td').siblings().slice(2).data('type')
  store.beerAlc = $(event.target).closest('td').siblings().slice(3).data('type')
  store.beerPrice = $(event.target).closest('td').siblings().slice(4).data('type')
  populateUpdateForm()
}

const confirmBeerDelete = function (event) {
  store.beerId = $(event.target).closest('td').data('id')
}

const beerIndexSuccess = (response) => {
  $('.beerList').empty()
  let showBeersHtml = showBeersTemplate({ beers: response.beers })
  $('.beerList').append(showBeersHtml)
  $('.openBeerUpdate').on('click', openBeerForm)
  $('.openDeleteBeerModal').on('click', confirmBeerDelete)
}

const beerIndexFailure = (error) => {
  $('.beer-msg').text('Beer list failed.')
}

const addBeerSuccess = (data) => {
  $('#addBeer').modal('toggle')
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('.beerList').empty()
  $('.beer-msg').empty()
  emptyAddForm()
  reloadBeerList()
}
const addBeerFailure = (error) => {
  $('.beer-msg').text('Beer update failed.')
}

const deleteBeerSuccess = (data) => {
  $('#deleteBeerModal').modal('toggle')
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('.beerList').empty()
  $('.beer-msg').text('Beer has been deleted')
  reloadBeerList()
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
