<script>
import Navbar from "./components/Navbar.vue"
import MultipleInput from "./components/MultipleInput.vue"
import { useRoute } from "vue-router";
import { watch , ref} from "vue";

export default {

	components:{
		Navbar,MultipleInput
	},
	setup () {
		
		const listOfContentRef = ref([{value:1,text:'Text'}, {value:2,text:'Text'}, {value:3,text:'Text'}])

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
		
		return { Navbar,NavState,MultipleInput,listOfContentRef }
	}

}

</script>

<template >
	jkkhkjhkjhhkjhk
	<Navbar v-if="NavState"/>
	<MultipleInput :ListOfContent="listOfContentRef"  />
	<RouterView />
</template>

<style scoped></style>
