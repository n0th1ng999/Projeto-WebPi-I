<script>

import Navbar from "./components/Navbar.vue";
import { useRoute,useRouter } from "vue-router";
import { watch, ref } from "vue";
import { useUserStore } from "./stores/User";

export default {
	components: {
		Navbar
	
	},
	setup() {
		const route = useRoute();
		const router = useRouter();

		const UserStore = useUserStore();

		const RoutesThatDontNeedSideNav = ["/", "/Login"];

		const RoutesThatAreForAdminOnly = [
		'/Admin','/Admin/Areas','/Admin/Schools',
		'/Admin/Projects','/Admin/Users','/Admin/Levels',
		'/Admin/Project/:id','/Admin/Project/:id','/Admin/Project/:id'

		]

		const RoutesThatAreForUsersOnly = 
		['/Project','/Profile/:id','/Profile/EditProfile',
		'/Project/CreateActivity','/Project/Activity/:id',
		'/Project/EditActivity/:id','/Project/EditExecution/:id',
		'/Project/ExecuteActivity','/Project/Executions']

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
