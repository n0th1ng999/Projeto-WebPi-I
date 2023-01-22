<template>
	<b-form @submit.prevent="Login(LoginData.email,LoginData.password)">
		<b-form-group>
			<b-label>Email</b-label>
			<b-input v-model="LoginData.email" type="email"></b-input>
		</b-form-group>
		<b-form-group>
			<b-label>Password</b-label>
			<b-input v-model="LoginData.password" type="password"/>
		</b-form-group>

		<b-button type="submit">Login</b-button>
	</b-form>
</template>

<script>
import { useUserStore } from "../stores/User";
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
	setup() {

		const Router = useRouter()
		if(useUserStore().CheckIfLoggedUserIsLogged()){
			Router.push("/Project")
		}



		const LoginData = reactive({email:"", password:""})

		//useUserStore().LogIn("user@example", "ae3j0v2gu");

		function Login(email,login){	
			try{
				useUserStore().LogIn(email,login);
			}
			catch{
				alert('Login failed')
			}
		}

		return {LoginData, Login};
	},
};
</script>

<style lang="scss" scoped></style>
