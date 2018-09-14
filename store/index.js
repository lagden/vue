import Vue from '../node_modules/vue/dist/vue.esm.browser.js'
import Vuex from '../node_modules/vuex/dist/vuex.esm.js'
import actions from './actions.js'
import plugins from './plugins.js'
import {mutations, STORAGE_KEY} from './mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	namespaced: true,
	state: {
		items: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	actions,
	mutations,
	plugins
})

export default store
