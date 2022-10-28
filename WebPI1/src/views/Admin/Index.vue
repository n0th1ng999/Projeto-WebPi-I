<template>
    <h1>Admin</h1>
    <div>
        <AdminUserCreationVue @SendUser="Log()"/>


        <div>------------------------</div>

        <AdminUserTable ref="Table" />
       
    </div>
    
</template> 

<script>
    import AdminUserCreationVue from './AdminUserCreation.vue';
    import AdminUserTable from './AdminUserTable.vue';
    export default {
            

        components: {
            AdminUserCreationVue,
            AdminUserTable
        },methods: {

            Log() {

                this.$refs.Table.UpdateTable()
                
            }
           
        },
    }
</script>

<style lang="scss" scoped>

</style>