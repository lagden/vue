import {STORAGE_KEY} from './mutations.js'

function localStoragePlugin(store) {
	store.subscribe((mutation, {items}) => {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
	})
}

export default [localStoragePlugin]
