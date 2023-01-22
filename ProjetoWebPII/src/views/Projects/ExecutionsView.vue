<template>
	<div>
		<div>
			<RouterLink to="/Project">Voltar</RouterLink>
		</div>

		Ações feitas
		<div v-for="Activity in ActivitiesOfProject" :key="Activity.id">
			
				{{ Activity.id }} || {{ Activity.name }} ||
				{{ AreaStore.GetAreaById(Activity.idArea).name }}
			<Dropdown>

				<div
				v-for="Execution in ExecutionStore.GetExecutionByActivityFunction(
					Activity.id
					)"
				
				>
				- {{ Execution.id }} || {{ Execution.description }} <b-button :to="`/Project/EditExecution/${Execution.id }`" variant="success"> Editar </b-button> <b-button variant="danger" @click="ExecutionStore.DeleteExecution(Execution.id)"> Eliminar</b-button>
				</div>
			</Dropdown>
		
		</div>	
		

		

		<RouterLink to="/Project/ExecuteActivity">Executar Atividade</RouterLink>
	</div>
</template>

<script>
import { ref } from "vue";
import { useAreaStore } from "../../stores/Area";
import { useActivityStore } from "../../stores/Activity";
import { useUserStore } from "../../stores/User";
import { useExecutionStore } from "../../stores/Execution";
import { useRouter } from "vue-router";
import Dropdown from "../../components/Dropdown.vue";

export default {
	components:{
		Dropdown
	},
	setup() {
		const Router = useRouter()
		const UserStore = useUserStore();
		const ExecutionStore = useExecutionStore();
		const ActivityStore = useActivityStore();
		const AreaStore = useAreaStore();

		const ActivitiesOfProject = ref(
			ActivityStore.GetActivitysByProjectFunction(
				UserStore.FindLoggedUserProject().id
			)
		);

		return { AreaStore, ActivitiesOfProject, ExecutionStore };
	},
};
</script>

<style lang="scss" scoped></style>
