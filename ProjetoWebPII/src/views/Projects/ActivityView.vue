<template>
    <div>
        <h2>Activity view</h2>
        <h3>Nome: {{Activity.name}}</h3>
        
      
        <b-button 
        v-if="userStore.FindLoggedUserProjectState() !== 'Planeamento'"
        @click="GoToEditActivity"
        variant="success">Edit the Activity</b-button>
    </div>
</template>

<script>
import { useRoute,useRouter } from 'vue-router'
import { useActivityStore } from '../../stores/Activity';
import { useUserStore } from '../../stores/User'


export default {
    setup () {
        
        //<RouterLink :to="`Project/EditActivity/${Route.params.id}`"> Edit The view </RouterLink>

        const Route = useRoute()
        const Router = useRouter()
        const userStore = useUserStore()
        const ActivityStore = useActivityStore()

        const Activity = ActivityStore.GetActivityById(Route.params.id)

        function GoToEditActivity() {
            Router.push(`/Project/EditActivity/${Route.params.id}`)
        }

        return {Activity,GoToEditActivity,userStore}
    }
}
</script>

<style lang="scss" scoped>

</style>