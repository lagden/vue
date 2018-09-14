import List from './perfil-list.js'
import Item from './perfil-item.js'

const perfil = {
	name: 'Perfil',
	template: `
		<div class="root">
			<input type="text" class="add" autofocus autocomplete="off" placeholder="Add novo item" @keyup.enter="addItem" />
			<button type="button" class="ba">
				<svg class="svg__bt"><use xlink:href="#icon_add"></use></svg>
			</button>
			<List lockAxis="y" v-model="items" class="list" helperClass="list__item--helper" :useDragHandle="true" :transitionDuration="200">
				<Item v-for="(item, index) in items" :index="index" :key="index" :item="item" />
			</List>
		</div>
	`,
	components: {
		List,
		Item
	},
	computed: {
		items: {
			get () {
				return this.$store.state.items
			},
			set (items) {
				this.$store.commit('updateItemPosition', items)
			}
		}
	},
	methods: {
		addItem (e) {
			const text = e.target.value
			if (text.trim()) {
				this.$store.dispatch('addItem', text)
			}
			e.target.value = ''
		}
	}
}

export default perfil
