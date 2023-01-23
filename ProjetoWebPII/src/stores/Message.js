import { useLocalStorage } from "@vueuse/core";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMessageStore = defineStore("Message", () => {
	const Messages = ref(
		useLocalStorage("Messages", [
			{
				id: 1,
				name: "Reuniao 1",
				description: "Poupança de Água",
				image: "",
			},
			{
				id: 2,
				name: "Reuniao 1",
				description: "Poupança de Eletricidade",
				image: "",
			},
		])
	);

	/**
	 * @param {String} Text Text of new Message
	 */
	function CreateMessage(Message) {
		Messages.value.push({
			id: Messages.value[Messages.value.length - 1].id + 1,
			name: Message.name,
			description: Message.description,
			image: Message.image,

			/** NAO ESQUECER PARA APRESENTACAO FRONTEND
       * 
      .toLocaleString([],{ 
        hour12:false,
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      
      */
		});
	}

	/**
	 * @param {Object} MessageObj Contains id, idReunion, idAuthor, text
	 */
	function ChangeMessage(MessageObj) {
		let MessageIndex = Messages.value.findIndex(
			(Message) => Message.id == MessageObj.id
		);
		Messages.value[MessageIndex] = MessageObj;
	}

	/**
	 * @param {Number} idMessage Message Id
	 */
	function DeleteMessage(idMessage) {
		Messages.value = Messages.value.filter(
			(Message) => Message.id != idMessage
		);
	}

	/**
	 * @type {Object} GetMessages returns all the Messages
	 */
	const GetMessages = computed(() => {
		return Messages.value;
	});

	/** 
    @type {Object} Messages
  */
	const MessageArray = ref();
	/**
	 * @type {Function} GetMessagesByReunion Getter for messages that correspond to idReunion
	 */
	const GetMessagesByReunion = computed({
		// getter
		get() {
			return MessageArray.value;
		},
		// setter
		set(idReunion) {
			MessageArray.value = Messages.value.filter(
				(Message) => Message.idReunion == idReunion
			);
		},
	});

	/**
	 * Sets Parameter for GetMessage
	 * @param {number} idReunion Identifier for GetMessage (id of Reunion)
	 */
	function GetMessagesByReunionSetter(idReunion) {
		GetMessagesByReunion.value = idReunion;
	}

	return {
		GetMessages,
		GetMessagesByReunion,
		GetMessagesByReunionSetter,
		CreateMessage,
		ChangeMessage,
		DeleteMessage,
	};
});
