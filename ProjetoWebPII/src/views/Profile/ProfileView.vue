<template>

	<div class="w-100 vh-100 backgroundPages ">
		<h1>Página de Perfil</h1>
		
		<h3>
			<b-img blank blank-color="#ccc" width="64" rounded  alt="placeholder"></b-img> {{User.name}}
			<b-badge v-if="User.admin" variant="info">Admin</b-badge>
		</h3> 
		<p>{{ User.email }}</p>
		<p>{{ User.ocupacao }}</p>
		<p>{{ User.escola }}</p>

		
		
		<b-button 
		v-if="UserStore.LoggedUserGetter.id == User.id"
		to="/Profile/EditProfile">Editar Perfil</b-button>
		</div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useUserStore } from '../../stores/User';

export default {
	setup() {
		
		const Route = useRoute()
		const UserStore = useUserStore()
		const User = UserStore.GetUserFunc(Route.params.id)
	
		return {UserStore,User};
	},
};
</script>

<style lang="scss" scoped></style>
