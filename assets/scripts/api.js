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
    data: '{}'
  })
  .then((response) => {
    // store.game = response.game
    // store.player_o = response.player_o
    // store.over = response.over
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
    // store.gamesPlayed = response.games.length
    // $('.played').text(response.games.length)
    // store.games = response.games
    // // $('.played').text(store.games.length)
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addBeer,
  beerIndex
}
