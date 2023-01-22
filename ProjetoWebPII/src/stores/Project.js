import { useLocalStorage } from "@vueuse/core";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("Project", () => {
	const Projects = ref(
		useLocalStorage("Projects", [
			{
				id: 1,
				nameSchool: "Escola 1",
				nameProject: "Agricultura Sustentável",
				state: "Planeamento",
				collaborators: [2],
				level: "",
			},
			{
				id: 2,
				nameSchool: "Escola 2",
				nameProject: "Agricultura",
				state: "Em Aprovação",
				collaborators: [1],
				level: "",
			},
			{
				id: 3,
				nameSchool: "Escola 3",
				nameProject: "Sustentável",
				state: "Planeamento",
				collaborators: [3],
				level: "",
			},
		])
	);

	/**
	 * Creates Project with random passowrd
	 * @param {Object} ProjectObj name of new project
	 */
	function CreateProject(ProjectObj) {
		Projects.value.push({
			id: Projects.value[Projects.value.length - 1].id++,
			nameSchool: ProjectObj.nameSchool,
			nameProject: ProjectObj.nameProject,
			collaborators: ProjectObj.collaborators,
			state: "Planeamento",
			level: "",
		});
	}

	/**
	 * @param {Object} ProjectObj id and project name
	 */
	function ChangeProject(ProjectObj) {
		let projectIndex = Projects.value.findIndex(
			(project) => project.id == ProjectObj.id
		);
		Projects.value[projectIndex] = ProjectObj;
	}

	/**
	 * @param {Number} idProject Project Id
	 */
	function DeleteProject(idProject) {
		Projects.value = Projects.value.filter(
			(project) => project.id != idProject
		);
	}

	/**
	 * @type {Object} GetProjects returns all the projects
	 */
	const GetProjects = computed(() => {
		return Projects.value;
	});

	/** 
    @type {Object} Project
  */
	const Project = ref();
	/**
	 * @type {Function} GetProject Getter For Specific ProjectID
	 */
	const GetProject = computed({
		// getter
		get() {
			return Project.value;
		},
		// setter
		set(ID) {
			Project.value = Projects.value.find((project) => project.id == ID);
		},
	});

	/**
	 * Sets Parameter for GetProject
	 * @param {number} id Identifier for GetProject
	 */
	function SetProject(id) {
		GetProject.value = id;
	}

	return {
		GetProjects,
		GetProject,
		SetProject,
		CreateProject,
		ChangeProject,
		DeleteProject,
	};
});
