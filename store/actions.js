export default {
	addItem ({commit}, text) {
		commit('addItem', {text})
	},
	removeItem ({commit}, item) {
		commit('removeItem', item)
	},
	editItem ({commit}, {item, text}) {
		commit('editTodo', {item, text})
	}
}
