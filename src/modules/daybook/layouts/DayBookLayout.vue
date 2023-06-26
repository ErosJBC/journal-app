<template>
	<Navbar />
	<div class="d-flex">
		<div class="col-4">
			<EntryList />
		</div>
		<div class="col">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const Navbar = defineAsyncComponent(() => import('@/modules/daybook/components/Navbar.vue'));
const EntryList = defineAsyncComponent(() => import('@/modules/daybook/components/EntryList.vue'));

export default {
	name: 'DayBookLayout',
	components: {
		Navbar,
		EntryList,
	}
}

</script>
