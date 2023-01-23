<template>
	<div>
	<b-table :fields="fields" :items="ProjectStore.GetProjects">
		<template #cell(acoes)="row">
			<b-button variant="danger" @click="DeleteProject(row.item.id)">Eliminar</b-button>

		</template>
	</b-table>
	<b-form>
		<b-form-group label="Name">
			<b-input required v-model="name">
				
			</b-input>
			<b-button @click="ProjectStore.CreateProject({nameSchool: name})" varaint="success">Criar Escola</b-button>
		</b-form-group>
	</b-form>
	</div>
</template>

<script>
import { ref } from 'vue';
import { useActivityStore } from '../../stores/Activity';
import { useExecutionStore } from '../../stores/Execution';
import { useProjectStore } from '../../stores/Project';
import { useUserStore } from '../../stores/User';

export default {
	setup() {
		const ProjectStore = useProjectStore()
		const ActivityStore = useActivityStore()
		const ExecutionStore = useExecutionStore()
		const UserStore = useUserStore()

		const name = ref()


		const fields = [{key: 'id' , sortable:true}, {key: 'nameSchool' , sortable:true}, {key: 'acoes' , label: 'Ações'}]

		function DeleteProject(ProjectID){
			
			ActivityStore.GetActivitysByProjectID(ProjectID).forEach(Activity => {
				ActivityStore.DeleteActivity(Activity.id)
				ExecutionStore.GetExecutionByActivityFunction(Activity.id).forEach(Execution => ExecutionStore.DeleteExecution(Execution.id))
			} 
			)

			ProjectStore.DeleteProject(ProjectID)

		}

		return {
			DeleteProject,
			name,
			ProjectStore,
			fields
		};
	},
};
</script>

<style lang="scss" scoped></style>
