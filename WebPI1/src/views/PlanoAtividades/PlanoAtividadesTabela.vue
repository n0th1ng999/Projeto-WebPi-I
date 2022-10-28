<template>
    <div>
        <table>
            <thead>
                <tr><th>Atividades</th></tr>
            </thead>
            <tbody>
                <tr v-for="Activity in Activities" :key="Activity.id">{{Activity}} 
                
                    <button @click="OpenScreen(Activity.id)">See More</button>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios"

    const ActivitiesURL = "http://localhost:3000/PlannedActivities";

    export default {

        async created(){

            this.UpdateTable()

        },

        data() {
            return {

                Activities: []

            }
        },
        methods: {

            async UpdateTable(){

            try {

                const res = await axios.get(ActivitiesURL);

                this.Activities = res.data;

                // console.log(res)

            } catch (err) {

                console.error(err);

            }
            },

                OpenScreen(id){
                    
                    // console.log("Activating Button function")

                    this.$emit('open', id )

            }
        }

    }
</script>

<style lang="css" scoped>

</style>