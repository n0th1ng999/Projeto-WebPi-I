<template>
    <div>
        <template
        v-for="Reunion in ReunionStore.GetReunions"
         :key="Reunion.id">
        <div v-if="Reunion.collaborators.some(ColID => ColID == userStore.LoggedUserGetter.id)">
            <b-img :src="Reunion.picture" width="80"></b-img> {{ Reunion.name }} 
            <b-button :to="'/Reunion/'+Reunion.id">Ver</b-button>
        </div>
        </template> 
        <b-button to="/Reunions/CreateReunion">Criar Reunião</b-button>
    </div>
</template>

<script>
import { useReunionStore } from '../../stores/Reunion.js'
import { useUserStore } from "../../stores/User.js";

export default {
    setup () {
        const ReunionStore = useReunionStore()
        const userStore = useUserStore()


        return {ReunionStore,userStore}
    }
}
</script>

<style lang="scss" scoped>

</style>