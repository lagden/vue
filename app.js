import Vue from './node_modules/vue/dist/vue.esm.browser.js'
import store from './store/index.js'
import perfil from './components/perfil.js'

const vm = new Vue({
	store,
	el: '#app',
	render: h => h(perfil)
})

window.vm = vm
