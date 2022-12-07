<template>
    <div class="m-5">
        <b-form @submit="UpdateActivityOnSubmit">
            <b-form-group label="Nome">
                <b-input
                v-model="formdata.name"></b-input>
            </b-form-group>

            <b-form-group label="Area">
                <b-select :options="AreaList"
                v-model="formdata.idArea"></b-select>
            </b-form-group>

            <b-form-group label="Objetivos">
                
                <b-textarea
                v-model="formdata.objetivos"></b-textarea>
            </b-form-group>

            <b-form-group label="Diagonóstico">
                <b-textarea
                v-model="formdata.diagonóstico"></b-textarea>
            </b-form-group>
            <b-form-group label="Recursos">
                <b-textarea
                v-model="formdata.recursos"></b-textarea>
            </b-form-group>
            <b-form-group label="Metas">
                <b-textarea
                v-model="formdata.metas"></b-textarea>
            </b-form-group>
            <b-form-group label="Ações">
         
                
            
            </b-form-group>
            <b-form-group label="Data Inicio">
                <b-form-datepicker 
                v-model="formdata.dataInicio"></b-form-datepicker>
            </b-form-group>
            <b-form-group label="Data Fim">
                <b-form-datepicker 
                v-model="formdata.dataFim"></b-form-datepicker>
            </b-form-group>
            <b-form-group label="Avaliacao Indicadores">
                <b-textarea
                v-model="formdata.avaliacaoIndicadores"></b-textarea>
            </b-form-group>
            <b-form-group label="Avaliacao Instrumentos">
                <b-textarea
                v-model="formdata.avaliacaoInstrumentos"></b-textarea>
            </b-form-group>
            
            <b-button variant="success" type="submit">Editar</b-button>
        </b-form>
    </div>
</template>

<script>
import {ref , reactive} from 'vue'
import { useRoute } from 'vue-router';
import { useActivityStore } from '../../stores/Activity'
import { useUserStore } from '../../stores/User';
import { useAreaStore }from '../../stores/Area'

export default {
    setup () {
        const userStore = useUserStore()
        const activityStore = useActivityStore()
        const areaStore = useAreaStore()
        const Route = useRoute()

        const Actvity = activityStore.GetActivityById(Route.params.id)

        const AreaList = areaStore.GetAreas.map(area => ({value:area.id , text:area.name }))




        const formdata = reactive({
            
            idArea : Actvity.idArea,
            name : Actvity.name,
            diagonóstico: Actvity.diagonóstico,
            objetivos: Actvity.objetivos,
            metas : Actvity.metas, 
            acoes : Actvity.acoes,
            recursos: Actvity.recursos,
            dataInicio : Actvity.dataInicio,
            dataFim : Actvity.dataFim,
            avaliacaoIndicadores: Actvity.avaliacaoIndicadores,
            avaliacaoInstrumentos: Actvity.avaliacaoInstrumentos,

        })

        function UpdateActivityOnSubmit(event) {
            event.preventDefault()


            console.log(formdata)
            /**
             activityStore.ChangeActivity({
                 idArea : formdata.idArea,
                 name : formdata.name,
                 diagonóstico: formdata.diagonóstico,
                 objetivos: formdata.objetivos,
                 metas : formdata.metas, 
                 acoes : formdata.acoes,
                 recursos: formdata.recursos,
                 dataInicio : formdata.dataInicio,
                 dataFim : formdata.dataFim,
                 avaliacaoIndicadores: formdata.avaliacaoIndicadores,
                 avaliacaoInstrumentos: formdata.avaliacaoInstrumentos,
             })
             */
        }




        return {Actvity,formdata,UpdateActivityOnSubmit,AreaList}
    }
}
</script>

<style lang="scss" scoped>

</style>