<script>
import MultipleInput from "./components/MultipleInput.vue";
import Navbar from "./components/Navbar.vue"
import { useRoute } from "vue-router";
import { watch , ref} from "vue";

export default {

	components:{
		Navbar,MultipleInput
	},
	setup () {
		
		
		const route = useRoute()
		
		const RoutesThatDontNeedSideNav = [
			'/LandingPage', '/login', 
		]
		
		watch(route, async (newRoute,OldRoute) => {
	
			if(RoutesThatDontNeedSideNav.some(routePath => routePath == newRoute.fullPath)){
				NavState.value = false
			}else{
				NavState.value = true
			}
		})
	
		const NavState = ref(true)
		
		return { Navbar, NavState }
	}

}

</script>

<template >
	<Navbar v-if="NavState"/>
	<MultipleInput :ListOfContent="[{value:1,text:'cona'}]"/>
	<RouterView />
</template>

<style scoped></style>
