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
  $('.three-across').addClass('hidden')
  reloadBeerList()
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
  $('.beer-msg').empty()
  $('#updateBeer').each(function () {
    this.reset()
  })
  reloadBeerList()
  store.beerName = {}
  store.beerBrand = {}
  store.beerStyle = {}
  store.beerAlc = {}
  store.beerPrice = {}
}

const updateBeerFailure = (error) => {
}

const populateUpdateForm = () => {
  $('.name').val(store.beerName)
  $('.brand').val(store.beerBrand)
  $('.style').val(store.beerStyle)
  $('.alc').val(store.beerAlc)
  $('.price').val(store.beerPrice)
}

const openBeerForm = function (event) {
  let updateBeerFormHtml = beerFormTemplate()
  $('#updateBeer').each(function () {
    this.reset()
  })
  $(event.target).after(updateBeerFormHtml)
  $(event.target).html('Cancel')
  $(event.target).addClass('cancelUpdate')
  $(event.target).removeClass('openBeerUpdate')
  $('.openBeerUpdate').hide()
  $('.cancelUpdate').on('click', reloadBeerList)
  store.beerId = $(event.target).closest('button').attr('data-id')
  store.beerName = $(event.target).prevAll('h3:first').data('type')
  store.beerBrand = $(event.target).prevAll('ul:first').children().first().data('type')
  store.beerStyle = $(event.target).prevAll('ul:first').children().slice(1).data('type')
  store.beerAlc = $(event.target).prevAll('ul:first').children().slice(2).data('type')
  store.beerPrice = $(event.target).prevAll('ul:first').children().slice(3).data('type')
  populateUpdateForm()
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
  $('.beerList').empty()
  let showBeersHtml = showBeersTemplate({ beers: response.beers })
  $('.beerList').append(showBeersHtml)
  $('.openBeerUpdate').on('click', openBeerForm)
  $('.deleteBeer').on('click', confirmBeerDelete)
}

const beerIndexFailure = (error) => {
  $('.beer-msg').text('Beer list failed.')
}

const addBeerSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('.beerList').empty()
  $('.beer-msg').empty()
  $('#addBeer').each(function () {
    this.reset()
  })
  reloadBeerList()
}
const addBeerFailure = (error) => {
  $('.beer-msg').text('Beer update failed.')
}

const deleteBeerSuccess = (data) => {
  $('.errormsg').hide()
  $('.changepwmsg').hide()
  $('#updateBeer').hide()
  $('.confirmBeerDelete').hide()
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
