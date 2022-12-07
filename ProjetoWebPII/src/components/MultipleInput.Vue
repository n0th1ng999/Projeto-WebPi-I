<template>
    <div>
        Multiple Inputs2
        <br>
        <label for="">Ola</label>
        <div v-for="Content in props.ListOfContent" :key="Content.value">
            {{Content}}
           <input type="text" class="form-input">
        </div >

    </div>
</template>

<script>
import { ref } from 'vue'

/**
 * @Component Creates Multiple Inputs 
 * @Prop :ListOfContent="Content"
 */

export default {
    props: {
        ListOfContent: Object
    },
    setup(props) {
        // setup() receives props as the first argument.
        

        return{ props }
    }
}

</script>

<style lang="scss" scoped>

</style>