import { useLocalStorage } from "@vueuse/core";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useProjectStore } from "./Project"
import { useActivityStore } from "./Activity"

export const useUserStore = defineStore("User", () => {
	const ProjectStore = useProjectStore()
	const ActivityStore = useActivityStore()

	

	const LoggedUser = ref(useLocalStorage("LoggedUser", {}));

	function FindLoggedUserProject() {

		return ProjectStore.GetProjects.find(
			Project => Project.collaborators.some(
				collaboratorId => collaboratorId == LoggedUser.value.id))
		

	}


	function FindLoggedUserProjectState() {
		let state =  ProjectStore.GetProjects.find(
			Project => Project.collaborators.some(
				collaboratorId => collaboratorId == LoggedUser.value.id)).state
		
		return state		
	}




	function CheckIfLoggedUserIsLogged() {
		//Verifica se o LoggedUser consta na base de dados
		if (
			Users.value.find(
				(user) =>
					user.password == LoggedUser.value.password &&
					user.id == LoggedUser.value.id && 
					user.admin == LoggedUser.value.admin
			)
		) {
			return true;
		} else {
			return false;
		}
	}

	function CheckIfLoggedUserIsAdmin() {
		//Verifica se o LoggedUser é admin e está logged in

		if (CheckIfLoggedUserIsLogged()) {
			if (LoggedUser.value.admin == true) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	function LogIn(email, password) {
		if (
			Users.value.find(
				(user) => user.email == email && user.password == password
			)
		) {
			LoggedUser.value = Users.value.find(
				(user) => user.email == email && user.password == password
			);
		} else {
			throw new Error("Email or password invalido");
		}
	}

	function LogOff() {
		LoggedUser.value = null;
	}

	const LoggedUserGetter = computed(() => {
		return LoggedUser.value;
	});

	const Users = ref(
		useLocalStorage("Users", [
			{
				id: 1,
				email: "Admin@example",
				name: "Filipa Azevedo",
				password: Math.random().toString(36).slice(4),
				admin: true,
			},
			{
				id: 2,
				email: "user@example",
				name: "Lidia Flores",
				password: Math.random().toString(36).slice(4),
				admin: false,
			},
		])
	);

	/**
	 * Creates User with random passowrd
	 * @param {Object} UserObj name of new user
	 */
	function CreateUser(UserObj) {
		Users.value.push({
			id: Users.value[Users.value.length - 1].id++,
			name: UserObj.name,
			email: UserObj.email,
			password: Math.random().toString(36).slice(4),
		});
	}

	/**
	 * @param {Object} UserObj id and user name
	 */
	function ChangeUser(UserObj) {
		let userIndex = Users.value.findIndex((user) => user.id == UserObj.id);
		Users.value[userIndex] = UserObj;
	}

	/**
	 * @param {Number} idUser User Id
	 */
	function DeleteUser(idUser) {
		Users.value = Users.value.filter((user) => user.id != idUser);
	}

	/**
	 * @type {Object} GetUsers returns all the users
	 */
	const GetUsers = computed(() => {
		return Users.value;
	});

	/** 
    @type {Object} User
  */
	const User = ref();
	/**
	 * @type {Function} GetUser Getter For Specific User
	 */
	const GetUser = computed({
		// getter
		get() {
			return User.value;
		},
		// setter
		set(ID) {
			User.value = Users.value.find((user) => user.id == ID);
		},
	});


	function GetUserFunc(userID){
		return Users.value.find((user) => user.id == userID);
	}

	/**
	 * Sets Parameter for GetUser
	 * @param {number} id Identifier for GetUser
	 */
	function SetUser(id) {
		GetUser.value = id;
	}

	return {
		GetUserFunc,
		GetUsers,
		GetUser,
		SetUser,
		CreateUser,
		ChangeUser,
		DeleteUser, //  "USER DB"
		LogIn,
		LogOff,
		LoggedUserGetter,
		CheckIfLoggedUserIsAdmin,
		CheckIfLoggedUserIsLogged,
		FindLoggedUserProject,
		FindLoggedUserProjectState,
	}; // LOGGED USER
});
