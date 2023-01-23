import { useLocalStorage } from "@vueuse/core";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMessageStore = defineStore("Messages", () => {
	const Messages = ref(
		useLocalStorage("Messages", [
			{
				id: 1,
				text: "Poupança de Água",
				image: "",
				author: 1,
				idReunion: 1,
				date: new Date(),
			},
			{
				id: 2,
				text: "Poupança de Eletricidade",
				image: "",
				author: 2,
				idReunion: 1,
				date: new Date(),
			},
		])
	);

	/**
	 * @param {String} Text Text of new Message
	 */
	function CreateMessage(Message) {
		Messages.value.push({
			id: Messages.value[Messages.value.length - 1].id + 1,
			text: Message.text,
			image: Message.image,
			idReunion: Message.idMessage,
			author: Message.author,
			date: new Date()
			
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


	const GetMessages = computed(() => {
		return Messages.value;
	});



	function GetMessagesByReunion(idReunion){
		let MessagesArray = Messages.value.filter(
				Message => Message.idReunion == idReunion)

		return MessagesArray
	}

	console.log(GetMessagesByReunion(1))

	return {
		GetMessages,
		GetMessagesByReunion,
		CreateMessage,
		ChangeMessage,
		DeleteMessage,
	};
});
