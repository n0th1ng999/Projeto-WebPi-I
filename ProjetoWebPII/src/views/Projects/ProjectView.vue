<template>
	<div>
		<h1>Página do Projeto</h1>
		<br>
		<h2>{{ Project.nameProject }} || {{ Project.nameSchool }} || {{ Project.state}}</h2>
		<br>
		<b-badge>{{
                  LevelsStore.CheckLevel(
                  ActivityStore.GetActivityCountByProjectID(UserStore.FindLoggedUserProject().id)
                  ,ActivityStore.GetAreaCountByProjectID(UserStore.FindLoggedUserProject().id)).name}}
		</b-badge>

		<b-table :fields="fields" :items="ActivitysOfProject">
			<template #cell(Ações)="row">
				<b-button @click="GoToActivityView(row.item.id)">Detalhes</b-button>
			</template></b-table
		>

		<div>
			<b-button
				variant = "success"
				v-if="UserStore.FindLoggedUserProjectState() == 'Execução'"
				to="/Project/Executions"
				>Execuções de Atividades</b-button
			>
			<b-button
				variant = "success"
				v-if="UserStore.FindLoggedUserProjectState() == 'Planeamento'"
				to="/Project/CreateActivity"
				>Criar Atividade</b-button
			> 
		</div>

		

		
		
	
		


		<h3>Colaboradores</h3>
		<table>
		<thead>
			<tr><th>Email</th><th>Nome</th><th>Ações</th></tr>
		</thead>	

		<tbody>
			<tr v-for="(CollaboratorID, index) of ProjectCollaborators" :key="index">
				<td>{{ UserStore.GetUserFunc(CollaboratorID).email }}</td><td>{{ UserStore.GetUserFunc(CollaboratorID).name }}</td><td>
					<b-button variant="secondary" :to="'Profile/'+UserStore.GetUserFunc(CollaboratorID).id">Ver Perfil</b-button></td>
			</tr>
		</tbody>
		</table>

		

		<br>


		<br>
		<div>
			<b-button
				v-if="Project.state == 'Planeamento'" 
				@click="Project.state = 'Aprovacao'">
				Pedir Aprovação
			</b-button>
		</div>

	</div>
</template>

<script>
import { ref, watch, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/User";
import { useActivityStore } from "../../stores/Activity";

import { useProjectStore } from "../../stores/Project";
import { useExecutionStore } from "../../stores/Execution";
import { useLevelsStore } from "../../stores/levels";

export default {
	components: {},
	setup() {

		const Router = useRouter();

		const ActivityStore = useActivityStore();

		const LevelsStore = useLevelsStore()
		
		const ProjectStore = useProjectStore();
		
		const UserStore = useUserStore();
		
		const fields = ref(["id", "name", "Ações"]);
		
		const Project = ref(UserStore.FindLoggedUserProject());
		
		let ActivitysOfProject = ActivityStore.GetActivitysByProjectFunction(
			Project.value.id
			);
			
			ActivitysOfProject = ActivitysOfProject.map((Activity) => ({
				id: Activity.id,
				name: Activity.name,
			}));
			
			const ProjectCollaborators = ref(Project.value.collaborators);
			
		function GoToActivityView(ActivityId) {
			Router.push({ path: `/Project/Activity/${ActivityId}` });
		}

		const ExecutionStore =  useExecutionStore()

		const ProjectExecutions = ref([])
		
		ActivitysOfProject.forEach((Activity) => {
			ProjectExecutions.value.push(ExecutionStore.GetExecutionByActivityFunction(Activity.id));
		})
		

		return {
			LevelsStore,
			UserStore,
			Project,
			ProjectCollaborators,
			ActivitysOfProject,
			fields,
			GoToActivityView,
			ProjectExecutions,
			ActivityStore,
			
		};
	},
};
</script>

<style lang="scss" scoped></style>