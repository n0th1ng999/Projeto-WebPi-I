<template>
    <div>
        <div>
        <RouterLink to="/Project/Executions">Voltar</RouterLink></div>
        Executar Atividade
        <div v-for="Activity in ProjectActivityList" :key="Activity.id">
            {{ Activity }}
        </div>

        <b-form @submit="onSubmit">
        <b-form-group  label="Atividade a Executar:" label-for="selecionadorAtividade">
        <b-form-select
          id="selecionadorAtividade"
          v-model="formData.idActivity"
          :options="ProjectActivityListAreaAndId"
          required
        />
        </b-form-group>
        

        <b-form-group label="Descritivo da execução da atividade: " label-for="textareaDescritivo"> 
            <b-form-textarea
                id="textareaDescritivo"
                v-model="formData.description"
                placeholder="Descritivo..."
                rows="3"
                required
            ></b-form-textarea>
        </b-form-group> 

        <b-form-group label="EscolherImagem" label-for="ImagePicker">
            <b-form-file id="EscolherImagem" placeholder="Escolha uma imagem (jpeg,png,gif)" accept="image/jpeg, image/png, image/gif"></b-form-file>
        </b-form-group>

        <b-button type="submit" @click="" variant="primary">Submit</b-button>
        </b-form>
        
        <b-alert :show="showAlert" variant="success" dismissible>
            Registado uma ação sobre a atividade "{{targetActivityName}}"
        </b-alert>

        </div>
</template>

<script>
import { reactive , ref} from 'vue';
import { useExecutionStore } from '../../stores/Execution';
import { useUserStore } from '../../stores/User';
import { useActivityStore } from '../../stores/Activity';


export default {
    setup () {
        const ActivityStore = useActivityStore()
        const UserStore = useUserStore()
        
        console.log(ActivityStore.GetActivityById(1).name)

        const formData = reactive({
            
            idActivity: null,
            description: '',
            image: null,

        })
        
        const showAlert = ref(false)
        
        const targetActivityName = ref()

        function onSubmit (event) {
            event.preventDefault();

            

            ExecutionStore.CreateExecution(({
                idActivity: formData.idActivity,
                description: formData.description,
                image: formData.image,
            }))
            

            console.log(ActivityStore.GetActivityById(formData.idActivity).name)
            targetActivityName.value = ActivityStore.GetActivityById(formData.idActivity).name
            
            showAlert.value = true

            formData.idActivity = null
            formData.description = ''
            formData.image = null
        }

       

        const ExecutionStore = useExecutionStore()
        
        const ProjectActivityList = ActivityStore.GetActivitysByProjectFunction(UserStore.FindLoggedUserProject().id)
        
        const ProjectActivityListAreaAndId = ProjectActivityList.map(Activity => ({value:Activity.id , text:Activity.name}))

  

        /** id: 1,
            idActivity: 3,
            description: "Poupança de Água",
            image: "",
            date: new Date(), */

        return { ProjectActivityListAreaAndId,formData,onSubmit,showAlert,targetActivityName}
    }
}
</script>

<style lang="scss" scoped>

</style>