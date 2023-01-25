<template>
    <div class="w-100 vh-100 backgroundPages overflow-auto">
        <template
        v-for="Reunion in ReunionStore.GetReunions"
         :key="Reunion.id">
        <div v-if="Reunion.collaborators.some(ColID => ColID == userStore.LoggedUserGetter.id)">
            <b-img :src="Reunion.picture" width="80"></b-img> {{ Reunion.name }} 
            <b-button :to="'/Reunion/'+Reunion.id">Ver</b-button>
        </div>
        </template> 
        <b-button v-if="CreateReunionBtn" to="/Reunions/CreateReunion">Criar Reunião</b-button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useReunionStore } from '../../stores/Reunion.js'
import { useUserStore } from "../../stores/User.js";

export default {
    setup () {
        const ReunionStore = useReunionStore()
        const userStore = useUserStore()

        let CreateReunionBtn = true
        
        if(userStore.LoggedUserGetter.role != 'Coordenador' && userStore.LoggedUserGetter.admin != true){
            CreateReunionBtn = false
        }

        return {ReunionStore,userStore,CreateReunionBtn}
    }
}
</script>

<style lang="scss" scoped>

</style>