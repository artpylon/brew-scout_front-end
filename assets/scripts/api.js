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
    // need to get user input and add it to json here
    data: '{}'
  })
  .then((response) => {
    // does anything in the response need to be stored?
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
  .then((response) => {
    // does anything in the response need to be stored?
  })
}

const updateBeer = function () {
  return $.ajax({
    url: config.apiOrigin + '/beers/' + store.beer.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    // need to get user input and add it to json here
    data: '{}'
  })
  .then((response) => {
    // does anything in the response need to be stored?
  })
}

const deleteBeer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/beers/' + store.beer.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
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
