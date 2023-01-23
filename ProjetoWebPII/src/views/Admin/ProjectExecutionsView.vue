

<template>
	<div>
		<div>
			<RouterLink :to="`/Admin/Project/${Route.params.id}`">Voltar</RouterLink>
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
				- {{ Execution.id }} || {{ Execution.description }}
				</div>
			</Dropdown>
		
		</div>	
		

		

	</div>
</template>

<script>
import { ref } from "vue";
import { useAreaStore } from "../../stores/Area";
import { useActivityStore } from "../../stores/Activity";
import { useUserStore } from "../../stores/User";
import { useExecutionStore } from "../../stores/Execution";
import { useProjectStore } from "../../stores/Project";

import { useRouter, useRoute } from "vue-router";
import Dropdown from "../../components/Dropdown.vue";

export default {
	components:{
		Dropdown
	},
	setup() {
		const Router = useRouter()
		const Route = useRoute()
		const Project = useProjectStore()
		const UserStore = useUserStore();
		const ExecutionStore = useExecutionStore();
		const ActivityStore = useActivityStore();
		const AreaStore = useAreaStore();

		const ActivitiesOfProject = ref(
			ActivityStore.GetActivitysByProjectFunction(
				Route.params.id
			)
		);

		console.log(ActivityStore.GetActivitysByProjectFunction(Route.params.id))


		return { AreaStore, ActivitiesOfProject, ExecutionStore , Route};
	},
};
</script>

<style lang="scss" scoped></style>
