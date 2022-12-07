import { useLocalStorage } from "@vueuse/core";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useExecutionStore = defineStore("Execution", () => {
	const Executions = ref(
		useLocalStorage("Execution", [
			{
				id: 1,
				idActivity: 3,
				description: "Poupança de Água",
				image: "",
				date: new Date(),
			},
			{
				id: 2,
				idActivity: 2,
				description: "Poupança de Eletricidade",
				image: "",
				date: new Date(),
			},
		])
	);

	/**
	 * 
	 * @param {*} Execution 
	 */
	function CreateExecution(Execution) {
		Executions.value.push({
			id: Executions.value[Executions.value.length - 1].id++,
			idActivity: Execution.idActivity,
			description: Execution.description,
			image: Execution.image,
			date: new Date(),
		});
	}

	/**
	 * @param {Object} ExecutionObj Contains id, idActivity, idAuthor, text
	 */
	function ChangeExecution(ExecutionObj) {
		let ExecutionIndex = Executions.value.findIndex(
			(Execution) => Execution.id == ExecutionObj.id
		);
		Executions.value[ExecutionIndex] = ExecutionObj;
	}

	/**
	 * @param {Number} idExecution Execution Id
	 */
	function DeleteExecution(idExecution) {
		Executions.value = Executions.value.filter(
			(Execution) => Execution.id != idExecution
		);
	}

	/**
	 * @type {Object} GetExecution returns all the Execution
	 */
	const GetExecutions = computed(() => {
		return Executions.value;
	});

	/** 
    @type {Object} Execution
  */
	const ExecutionArray = ref();
	/**
	 * @type {Function} GetExecutionByActivity Getter for Execution that correspond to idActivity
	 */
	const GetExecutionByActivity = computed({
		// getter
		get() {
			return ExecutionArray.value;
		},
		// setter
		set(idActivity) {
			ExecutionArray.value = Executions.value.filter(
				(Execution) => Execution.idActivity == idActivity
			);
		},
	});

	/**
	 * Sets Parameter for GetExecution
	 * @param {number} idActivity Identifier for GetExecution (id of Activity)
	 */
	function GetExecutionByActivitySetter(idActivity) {
		GetExecutionByActivity.value = idActivity;
	}

	function GetExecutionByActivityFunction(idActivity){
		return Executions.value.filter(
			(Execution) => Execution.idActivity == idActivity
		);
	}

	return {
		GetExecutions,
		GetExecutionByActivity,
		GetExecutionByActivitySetter,
		CreateExecution,
		ChangeExecution,
		DeleteExecution,
		GetExecutionByActivityFunction,
	};
});
