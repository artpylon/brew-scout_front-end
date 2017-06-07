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

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
