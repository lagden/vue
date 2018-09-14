import {ContainerMixin} from '../node_modules/vue-slicksort/dist/vue-slicksort.esm.js'

const List = {
	name: 'List',
	mixins: [ContainerMixin],
	template: `
		<div class="list">
			<slot />
		</div>
	`
}

export default List
