<template>
    <div>
        <div>
        <RouterLink to="/Project">Voltar</RouterLink></div>
        
        Ações feitas
        <div v-for="Activity in ActivitiesOfProject" :key="Activity.id">

                <div>{{ Activity.id }} || {{ Activity.name }} || {{ AreaStore.GetAreaById(Activity.idArea).name }}</div>
                <div v-for="Execution in ExecutionStore.GetExecutionByActivityFunction(Activity.id)" :key="Execution.id">
                    - {{ Execution.id }} || {{ Execution.description }} 
            
            </div>
        </div>
    
        <RouterLink to="/Project/ExecuteActivity">Executar Atividade</RouterLink>
    </div>
</template>

<script>
import { ref } from 'vue'
import {useAreaStore} from '../../stores/Area'
import {useActivityStore} from '../../stores/Activity'
import {useUserStore} from '../../stores/User'
import {useExecutionStore} from '../../stores/Execution'

export default {
    setup () {
        
        const UserStore = useUserStore()
        const ExecutionStore = useExecutionStore()
        const ActivityStore = useActivityStore()
        const AreaStore = useAreaStore()
        
        const ActivitiesOfProject = ref(ActivityStore.GetActivitysByProjectFunction(UserStore.FindLoggedUserProject().id))

        return {AreaStore,ActivitiesOfProject,ExecutionStore}
    }
}
</script>

<style lang="scss" scoped>

</style>