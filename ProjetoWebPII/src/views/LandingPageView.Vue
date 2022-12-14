<template >
    
    <div class=" w-100 colun">
        <div class="w-100 d-flex justify-content-end align-items-center position-sticky">
            <IconOwlyLogo width="100" height="100" :class="'position-relative'" :style="'left: 50px; z-index:990'" />
            <b-navbar variant="light" class="p-3 my-5 w-90 pl-5" >
                <b-nav>
                    <b-nav-item>item 1</b-nav-item>
                    <b-nav-item>item 2</b-nav-item>
                    <b-nav-item>item 3</b-nav-item>
                    <b-nav-item>item 4</b-nav-item>
                </b-nav>
    
            </b-navbar>
        </div>
        <div class="w-100 vh-100">
    
    
        </div>

    </div>
</template>

<script>
import IconOwlyLogo from "../components/icons/IconOwlyLogo.vue"

export default {
    components:{
        IconOwlyLogo
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>