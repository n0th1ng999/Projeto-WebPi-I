<template>
    

    <form @submit.prevent="createUser" >
    <input type="text" placeholder="Primeiro Nome" v-model="NewUser.firstName">
    <input type="text" placeholder="Ultimo Nome"    v-model="NewUser.lastName">
    <input type="email" placeholder="Email"            v-model="NewUser.email">
    <input type="submit"   value="Criar">
    </form>

</template>

<script>
    import axios from "axios"
    
    const UsersURL = "http://localhost:3000/users";
    

    export default {

        
        data() {
            return {
              
                NewUser:{

                    firstName:"",
                    lastName:"",
                    email:"",
                    registered: false,
                    blocked: false
                }
            }    
        },
        methods: {

            async createUser() {
               
                try {

                    const res = await axios.post(UsersURL, {
                        
                        firstName: this.NewUser.firstName,
                        lastName: this.NewUser.lastName,
                        email: this.NewUser.email,
                        registered: false,
                        blocked: false
                    
                    });


                    this.$emit('SendUser', this.NewUser )
                    
                    this.NewUser.firstName = ""
                    this.NewUser.lastName = ""
                    this.NewUser.email = ""
                    

                } catch (err) {

                    console.error(err);

                }

            },
           
        }
    }

</script>

<style  scoped>
   

    
</style>    