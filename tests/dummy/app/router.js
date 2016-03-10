import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('demo', { path: '/' }, function () {
    this.route('layout', {path: '/layout'})
  })
})

export default Router
