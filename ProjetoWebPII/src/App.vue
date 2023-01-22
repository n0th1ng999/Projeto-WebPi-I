<script>

import Navbar from "./components/Navbar.vue";
import { useRoute } from "vue-router";
import { watch, ref } from "vue";

export default {
	components: {
		Navbar
	
	},
	setup() {
		const route = useRoute();

		const RoutesThatDontNeedSideNav = ["/", "/login"];

		watch(route, async (newRoute, OldRoute) => {
			if (
				RoutesThatDontNeedSideNav.some(
					(routePath) => routePath == newRoute.fullPath
				)
			) {
				NavState.value = false;
			} else {
				NavState.value = true;
			}
		});

		const NavState = ref(true);

		return { Navbar, NavState };
	},
};
</script>

<template>
	<Navbar v-if="NavState" />
	

	<RouterView />
</template>

<style scoped></style>
