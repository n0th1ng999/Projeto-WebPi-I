<template>
	<div>

		
		<!-- AREAS -->
		
		<b-table 
			 filter=""
			per-page="5"
			:current-page="UsersTablePage"
			:fields="fields"
			:items="filteredList"
			 >
			 <template #cell(acoes)="acoes">
				<b-button @click="userStore.DeleteUser(acoes.item.id)" variant="danger" > Eliminar </b-button>
			</template>
			
			</b-table>
			<p>Página {{ UsersTablePage }}</p> 
			<b-button variant="none" @click="  0 != UsersTablePage - 1 ? UsersTablePage-- : null ">◀️</b-button>
			<b-button variant="none" @click="UsersTablePage * 5 <= userStore.GetUsers.length ? UsersTablePage++ : null">▶️</b-button>

			<b-form-group label="Filtrar por Nome">
				<b-input  v-model="NameFilter" ></b-input>
				<b-button @click="UsersFilteredList(NameFilter)">Filter</b-button>
				<b-button @click="NameFilter = '' ; UsersFilteredList(NameFilter)">Remove Filter</b-button>
		</b-form-group>


	
		<b-form @submit="CreateUser">
			<b-form-group label="Nome">
				<b-input v-model="formData.Nome" required ></b-input>
			</b-form-group>
			<b-form-group label="Email">
				<b-input required v-model="formData.Email" type="email" ></b-input>
			</b-form-group>
			<b-form-group label="Escola">
				<b-select 
				v-if="!formData.Admin"
				required v-model="formData.Escola" :options="EscolasList"></b-select>
				<b-select 
				v-if="formData.Admin"
				required v-model="formData.Escola" disabled :options="EscolasList"></b-select>
			</b-form-group>
			<b-form-group label="Admin">
				<b-select required v-model="formData.Admin" :options="[ 
					{value: true , text:'Sim'} ,
					{value: false , text:'Não'}
					]" ></b-select>
			</b-form-group>
			<b-form-group label="Função">
				<b-select 
				v-if="!formData.Admin"
				v-model="formData.Funcao" 
				:options="[ 
					{value: 'Coordenador' , text: 'Coordenador'} ,
					{value: 'Ajudante' , text: 'Ajudante'},
					{value: null , text: ' '}
					]"
				
				></b-select>
				<b-select 
				v-if="formData.Admin"
				disabled
				v-model="formData.Funcao" 
				:options="[ 
					{value: 'Coordenador' , text: 'Coordenador'} ,
					{value: 'Ajudante' , text: 'Ajudante'},
					{value: null , text: ' '}
					]"
				
				></b-select>
			</b-form-group>

			<b-button type="submit" variant="success" @click="">Criar Utilizador</b-button>
			<b-alert show>Email: {{NewUser?.email}} <br> Password: {{NewUser?.password}}</b-alert>
		</b-form>


	</div>
  </template>
  <script>
  import { defineComponent, ref } from 'vue';
  import { useUserStore } from '../../stores/User';
  import { reactive } from 'vue';
  import { useProjectStore } from '../../stores/Project';

  export default ({
	  setup() {

		  const userStore = useUserStore()
		  const ProjectStore = useProjectStore()
		  const toastCount = ref(0);
		  
		  const UsersTablePage = ref(1)


		const formData = reactive({
			Nome: null,
			Email: null,
			Escola: null,
			Admin: null,
			Funcao: null
		})

		const NewUser = ref()

		
		
		console.log(formData.value)
		
		const EscolasList = ref(
			ProjectStore.GetProjects.map( Project => ({ 
			value: Project.id,
			text: Project.nameSchool})))

		

		function CreateUser(){
			event.preventDefault()
			if(formData.Admin){
				formData.Funcao = null
				formData.escola = null
			}
			
			userStore.CreateUser(
				{	email: formData.Email,
					name:  formData.Nome,
					escola: formData.Escola,
					ocupacao: '',
					role: formData.Funcao,
					password: Math.random().toString(36).slice(4),
					admin: formData.Admin,
			})

			if(!formData.Admin){
				ProjectStore.AddCollaborator(formData.Escola,userStore.GetUsers[userStore.GetUsers.length-1].id)
			}
			
			NewUser.value = userStore.GetUsers[userStore.GetUsers.length-1]
			
			formData.Nome = null
			formData.Email = null
			formData.Escola = null	
			formData.Admin = null
			formData.Funcao = null
		}	 


		const fields = ['email',{key:'name', text: 'Nome' , sortable: true},'escola', {key:'role' , text:'role'},'admin','acoes']
		
		const filteredList = ref(userStore.GetUsers)
		const NameFilter = ref('')

		function UsersFilteredList(search){
			console.log('typing')
			if(search != ''){
				return filteredList.value = userStore.GetUsers.filter(item => {
						return item.name.toLowerCase().includes(search.toLowerCase())
					})

			}else{
				return filteredList.value = userStore.GetUsers
			}


		}

		

	
		return {
			NameFilter,
			filteredList,
			UsersFilteredList,
			fields,
			NewUser,
			EscolasList,
			formData,
			userStore,
			CreateUser,
			UsersTablePage,
		}
	  }
	});
  </script>
