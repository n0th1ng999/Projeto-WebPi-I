<template>
	<div>{{ ProjectStore.GetProjects }}</div>

	<b-form>
		<b-form-group label="Name">
			<b-input required v-model="name">
				
			</b-input>
			<b-button @click="ProjectStore.CreateProject({nameSchool: name})" varaint="success">Criar Escola</b-button>
		</b-form-group>
	</b-form>
</template>

<script>
import { ref } from 'vue';
import { useProjectStore } from '../../stores/Project';
export default {
	setup() {
		const ProjectStore = useProjectStore()
		const name = ref()
		return {
			name,
			ProjectStore
		};
	},
};
</script>

<style lang="scss" scoped></style>
