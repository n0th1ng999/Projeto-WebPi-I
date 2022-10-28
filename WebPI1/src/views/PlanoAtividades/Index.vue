<template>
    <div>

        Plano de Atividades
    
    </div>

   
        <PlanoAtividadesTabela @open="OpenScreen" ref="Table" />
        
        <PlanoAtividadesEcra :id="ID" ref="Ecra"/>

</template>

<script>
    import PlanoAtividadesTabela from './PlanoAtividadesTabela.vue';
    import PlanoAtividadesCriar from './PlanoAtividadesCriar.vue';
    import PlanoAtividadesEcra from './PlanoAtividadesEcra.vue';
    export default {
        data() {
                return {

                    ID:0

                }
            },
        components: {
            PlanoAtividadesTabela,
            PlanoAtividadesCriar,
            PlanoAtividadesEcra
        },
        methods: {
            
            OpenScreen(id) {
                //console.log("Entering Index")
               
                this.ID = id;
                
                // console.log(this.ID)
            },
            
        },
    }
</script>

<style lang="scss" scoped>

</style>