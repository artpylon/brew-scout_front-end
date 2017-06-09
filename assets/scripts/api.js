'use strict'

const config = require('./config')
const store = require('./store')

// Authentication
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
    .then((response) => {
      store.userToken = response.user.token
      store.statusText = response.statusText
      store.id = response.id
    })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
    store.id = response.user.id
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

// Beer
const addBeer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

const beerIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}

const updateBeer = function (data) {
  console.log('updateBeer store.beerId is ', store.beerId)
  return $.ajax({
    url: config.apiOrigin + '/beers/' + store.beerId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
  // .then((response) => {
  // })
}

const deleteBeer = function () {
  return $.ajax({
    url: config.apiOrigin + '/beers/' + store.beerId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
    // is any data needed here?
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addBeer,
  beerIndex,
  updateBeer,
  deleteBeer
}
