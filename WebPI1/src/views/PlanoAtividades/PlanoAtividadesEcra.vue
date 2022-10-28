<template>
    <div>

        {{Activity}}
        
    </div>
</template>

<script>
    import axios from "axios"
    
    const ActivitiesURL = "http://localhost:3000/PlannedActivities";

    export default {
        
        props: ['id'],

        data() {
            return {
                
                Activity: {}

            }
        }, watch: {
            id(NewValue,OldValue) {
                
                this.ShowActivity()
            }
        },
        
       methods: {

            async ShowActivity() {
                
                try {

                    //console.log("Getting The Activity")

                    const res = await axios.get(ActivitiesURL+`/${this.id}`);

                    this.Activity = res.data;

                }
                catch (err) {

                    console.error(err)

                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>