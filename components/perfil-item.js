import {mapActions} from '../node_modules/vuex/dist/vuex.esm.js'
import {ElementMixin, HandleDirective} from '../node_modules/vue-slicksort/dist/vue-slicksort.esm.js'

const Item = {
	name: 'Item',
	mixins: [ElementMixin],
	directives: {
		handle: HandleDirective
	},
	props: ['item'],
	template: `
		<div class="list__item">
			<svg v-handle class="svg__bt svg__bt--handle"><use xlink:href="#icon_drag"></use></svg>
			<span>{{item.text}}</span>
			<svg class="svg__bt svg__bt--rm" @click="removeItem(item)"><use xlink:href="#icon_rm"></use></svg>
		</div>
	`,
	methods: {
		...mapActions([
			'removeItem'
		])
	}
}

export default Item
