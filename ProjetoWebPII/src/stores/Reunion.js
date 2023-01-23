import { useLocalStorage } from "@vueuse/core";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useReunionStore = defineStore("Reunion", () => {
	const Reunions = ref(
		useLocalStorage("Reunions", [
			{
				id: 1,
				name: "Reuniao 1",
				picture: "",
				leader: 1,
				collaborators: [1],
				archived: true
			},
			{
				id: 2,
				name: "Reuniao 2",
				picture: "",
				leader: 2,
				collaborators: [2],
				archived: true
			},
		])
	);

	/**
	 * Creates Reunion with random passowrd
	 * @param {Object} ReunionObj name of new reunion
	 */
	function CreateReunion(ReunionObj) {
		Reunions.value.push({
			id: Reunions.value[Reunions.value.length - 1].id + 1,
			name: ReunionObj.name,
			picture: ReunionObj.picture,
			collaborators: ReunionObj.collaborators
		});
	}


	/**
	 * @param {Object} ReunionObj id and reunion name
	 */
	function ChangeReunion(ReunionObj) {
		let reunionIndex = Reunions.value.findIndex(
			(reunion) => reunion.id == ReunionObj.id
		);
		Reunions.value[reunionIndex] = ReunionObj;
	}

	/**
	 * @param {Number} idReunion Reunion Id
	 */
	function DeleteReunion(idReunion) {
		Reunions.value = Reunions.value.filter(
			(reunion) => reunion.id != idReunion
		);
	}

	/**
	 * @type {Object} GetReunions returns all the reunions
	 */
	const GetReunions = computed(() => {
		return Reunions.value;
	});



	function GetReunionById(id){
		return Reunions.value.find((reunion) => reunion.id == id)
	}

	return {
		GetReunionById,
		GetReunions,
		CreateReunion,
		ChangeReunion,
		DeleteReunion,
	
	};
});
