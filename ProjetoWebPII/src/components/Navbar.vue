<template>
	<div
		class="sticky-top d-flex flex-column bg-light vh-100 p-5 justify-content-between"
	>
		<div>
			<div class="mb-5"><h1>Logo</h1></div>

			<div class="mb-5">
				<h3>UserProfilePicture</h3>
				<p>{{ userStore.LoggedUserGetter.name }}</p>
			</div>
			<div v-if="userStore.CheckIfLoggedUserIsAdmin()">
				<!-- Se o user for admin-->
				<ul>
					<li>
						<RouterLink to="/Admin">Home</RouterLink>
					</li>
					<li>
						<RouterLink to="/Reunions">Reuniões</RouterLink>
						<Dropdown
							><li>
								<RouterLink to="/Reunions/CreateReunion"
									>Criar Reunião</RouterLink
								>
							</li></Dropdown
						>
					</li>
					<li>
						<RouterLink :to="`/Profile/${userStore.LoggedUserGetter.id}`"
							>Profile</RouterLink
						>
					</li>
					<li>
						<RouterLink to="">Admin</RouterLink>
						<Dropdown>
							<li><RouterLink to="/Admin/Users">Utilizadores</RouterLink></li>
							<li><RouterLink to="/Admin/Projects">Projetos</RouterLink></li>
							<li><RouterLink to="/Admin/Areas">Áreas</RouterLink></li>
							<li><RouterLink to="/Admin/Levels">Níveis</RouterLink></li>
							<li><RouterLink to="/Admin/Schools">Escolas</RouterLink></li>
						</Dropdown>
					</li>
				</ul>
			</div>

			<div v-else-if="userStore.FindLoggedUserProjectState() == 'Planeamento'">
				<!-- Se o user for seu plano tiver em Planeamento-->
				<ul>
					<li>
						<RouterLink to="/Home">Home</RouterLink>
					</li>
					<li>
						<RouterLink to="/Reunions">Reuniões</RouterLink>
						<Dropdown
							><li>
								<RouterLink to="/Reunions/CreateReunion"
									>Criar Reunião</RouterLink
								>
							</li></Dropdown
						>
					</li>
					<li>
						<RouterLink :to="`/Profile/${userStore.LoggedUserGetter.id}`"
							>Profile</RouterLink
						>
					</li>
					<li>
						<RouterLink to="/Project">Projeto</RouterLink>
						<Dropdown>
							<li>
								<RouterLink to="/Project/CreateActivity"
									>Criar Atividade</RouterLink
								>
							</li>
						</Dropdown>
					</li>
				</ul>
			</div>

			<div v-else-if="userStore.FindLoggedUserProjectState() == 'Em Aprovação'">
				<!-- Se o user for seu plano tiver em Aprovação-->
				<ul>
					<li>
						<RouterLink to="/">Home</RouterLink>
					</li>
					<li>
						<RouterLink to="/Reunions">Reuniões</RouterLink>
						<Dropdown
							><li>
								<RouterLink to="/Reunions/CreateReunion"
									>Criar Reunião</RouterLink
								>
							</li></Dropdown
						>
					</li>
					<li>
						<RouterLink :to="`/Profile/${userStore.LoggedUserGetter.id}`"
							>Profile</RouterLink
						>
					</li>
					<li>
						<RouterLink to="/Project">Projeto</RouterLink>
					</li>
				</ul>
			</div>

			<div v-else-if="userStore.FindLoggedUserProjectState() == 'Execução'">
				<!-- Se o user for user e o seu plano tiver em execução-->
				<ul>
					<li>
						<RouterLink to="/">Home</RouterLink>
					</li>
					<li>
						<RouterLink to="/Reunions">Reuniões</RouterLink>
						<Dropdown
							><li>
								<RouterLink to="/Reunions/CreateReunion"
									>Criar Reunião</RouterLink
								>
							</li></Dropdown
						>
					</li>
					<li>
						<RouterLink :to="`/Profile/${userStore.LoggedUserGetter.id}`"
							>Profile</RouterLink
						>
					</li>
					<li>
						<RouterLink to="/Project">Projeto</RouterLink>
					</li>
				</ul>
			</div>
		</div>

			<div><b-button variant="danger" @click="LogOff">Sair</b-button></div>
	</div>
</template>

<script>
import { useUserStore } from "../stores/User";
import Dropdown from "./Dropdown.vue";
import { RouterLink, useRouter } from "vue-router";

export default {
	components: {
		Dropdown,
		RouterLink,
	},
	setup() {
		const userStore = useUserStore();
		
		
		const Router = useRouter()
		
		
		function LogOff() {
			userStore.LogOff()
			Router.push("/Login")
		}
		
		
		
		return { userStore,LogOff };

	},
};
</script>

<style lang="scss" scoped>
li {
	list-style: none;
}
</style>
