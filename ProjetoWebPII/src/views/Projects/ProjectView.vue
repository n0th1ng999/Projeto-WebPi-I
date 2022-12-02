<template>
    <div>
        <h1>Project View</h1>

        <h2>{{Project.nameProject}} || {{Project.nameSchool}}</h2>

        <h2>Colaboradores</h2>
        <div v-for="(CollaboratorID,index) of ProjectCollaborators" :key="index">
            {{ UserStore.GetUserFunc(CollaboratorID)}}
        </div>

        <b-table 
        :fields="fields"
        :items="ActivitysOfProject" >
            <template #cell(Ações)="row">
                <b-button @click="GoToActivityView(row.item.id)">Detalhes</b-button>
                
              
            </template></b-table>
        
        
        <div>
            <RouterLink 
            v-if="UserStore.FindLoggedUserProjectState() == 'Execução'"
            to="/Project/Executions"
            >Execuções de Atividades</RouterLink>
            <RouterLink 
            v-if="UserStore.FindLoggedUserProjectState() == 'Planeamento'"
            to="/Project/CreateActivity">Criar Atividade</RouterLink>
        </div>
    </div>
</template>

<script>
import {ref, watch , reactive } from 'vue'
import { useRouter } from 'vue-router';
import {useUserStore} from '../../stores/User'
import { useActivityStore } from '../../stores/Activity'

import { useProjectStore } from "../../stores/Project";

export default {
    components:{

    },
    setup () {

        const Router = useRouter()

        const ActivityStore = useActivityStore()

        const ProjectStore = useProjectStore()
        
        const UserStore = useUserStore()

        const fields = ref(['id','name','Ações'])

        const Project = ref(UserStore.FindLoggedUserProject())


        let ActivitysOfProject = ActivityStore.GetActivitysByProjectFunction(Project.value.id)

        ActivitysOfProject = ActivitysOfProject.map( Activity => ({id:Activity.id, name:Activity.name}))

        const ProjectCollaborators = ref(Project.value.collaborators)

        function GoToActivityView(ActivityId){
            Router.push({ path: `/Project/Activity/${ActivityId}` })
        }

        return {UserStore,Project,ProjectCollaborators,ActivitysOfProject,fields,GoToActivityView}
    }
}
</script>

<style lang="scss" scoped>

</style>