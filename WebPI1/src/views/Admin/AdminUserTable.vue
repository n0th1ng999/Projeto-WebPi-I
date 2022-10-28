<template>
    
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Estado Registo</th>
                <th>Bloqueado</th>
                <th>Ação</th>
            </tr>
                
            
        </thead>

        <tbody>

            <tr v-for="user in users" :key="user.id">
                <td>{{user.firstName +' '+user.lastName}}</td>
                <td>{{user.email}}</td>
                <td>{{user.registered ? "Registado" : "Não Registado"}}</td>
                <td>{{ user.blocked ? "sim" : "Não" }}</td>
                <td>
                     <button v-if="!user.blocked" @click="updateUserBlock(user.id,user.blocked)"> Bloquear </button> 
                     <button v-else @click="updateUserBlock(user.id,user.blocked)"> Desbloquear </button>
                     <button @click="deleteUser(user.id)" > Apagar </button>
                </td>
            </tr>
        
        </tbody>
    </table>

</template>

<script>
    import axios from "axios"


    const UsersURL = "http://localhost:3000/users";

    export default {
        

        async created () {

            this.UpdateTable()

        },

        data() {
            return {
                users: []
            }
        },
            methods: {
                
                async deleteUser(id){
                
                try{
                    
                    const res = await axios.delete(UsersURL+`/${id}`)

                    console.log(res)
                    
                    this.users = this.users.filter(user => user.id != id)

                

                }
                catch (err) {
                    console.error(err);
                }
            
            },
            async updateUserBlock(id,state){

                try{
                    
                    let user = this.users.find(user => user.id == id)

                    user.blocked = !state

                    const res = await axios.put(UsersURL+`/${id}`, { 
                        
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        registered: user.registered,
                        blocked: user.blocked

                    })



                }catch (err) {
                    
                    console.error(err);

                }
            },
            async UpdateTable(){

                 try {

                    const res = await axios.get(UsersURL);

                    this.users = res.data;

                    console.log(res)

                } catch (err) {

                    console.error(err);

                }
                }
            },
    }
</script>

<style lang="css" scoped>
    table {
        border-radius:5px;
        border:1px solid rgb(255, 255, 255);
        border-collapse: collapse;
    }

    td,th{
        padding:15px;
        border:1px solid rgb(255, 255, 255);
    }

    th{
        background:rgb(247, 14, 52)
    }

</style>