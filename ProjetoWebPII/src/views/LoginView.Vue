<template>
    <div>

    </div>
</template>

<script>
import { useUserStore } from '../stores/User';

export default {
    setup () {
        useUserStore().LogIn('user@example','ae3j0v2gu')

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>