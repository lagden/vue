export const STORAGE_KEY = 'lista-tex'
export const mutations = {
	addItem (state, item) {
		state.items.push(item)
	},
	removeItem (state, item) {
		state.items.splice(state.items.indexOf(item), 1)
	},
	editItem (state, {item, text = item.text}) {
		item.text = text
	},
	updateItemPosition (state, items) {
		state.items = items
	}
}
