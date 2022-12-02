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
			},
			{
				id: 2,
				name: "Reuniao 2",
				picture: "",
			},
		])
	);

	/**
	 * Creates Reunion with random passowrd
	 * @param {Object} ReunionObj name of new reunion
	 */
	function CreateReunion(ReunionObj) {
		Reunions.value.push({
			id: Reunions.value[Reunions.value.length - 1].id++,
			name: ReunionObj.name,
			picture: ReunionObj.picture,
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

	/** 
    @type {Object} Reunion
  */
	const Reunion = ref();
	/**
	 * @type {Function} GetReunion Getter For Specific ReunionID
	 */
	const GetReunion = computed({
		// getter
		get() {
			return Reunion.value;
		},
		// setter
		set(ID) {
			Reunion.value = Reunions.value.find((reunion) => reunion.id == ID);
		},
	});

	/**
	 * Sets Parameter for GetReunion
	 * @param {number} id Identifier for GetReunion
	 */
	function SetReunion(id) {
		GetReunion.value = id;
	}

	/** 
    @type {Object} Reunion
      */
	const ArrayOfReunions = ref();
	/**
	 * @type {Function} GetReunion Getter For Specific ReunionID
	 */
	const GetReunionsByName = computed({
		// getter
		get() {
			return Reunion.value;
		},
		// setter
		set(ReunionName) {
			ArrayOfReunions.value = Reunions.value.filter((reunion) =>
				reunion.name.includes(ReunionName)
			);
		},
	});

	/**
	 * Sets Parameter for GetReunion
	 * @param {String} ReunionName Identifier for GetReunionsByName
	 */
	function GetReunionsByNameSetter(ReunionName) {
		GetReunionsByName.value = ReunionName;
	}

	return {
		GetReunions,
		GetReunion,
		SetReunion,
		CreateReunion,
		ChangeReunion,
		DeleteReunion,
		GetReunionsByName,
		GetReunionsByNameSetter,
	};
});
