<template>
 <div>
     <Post :posting="posting[i]" v-for="(data, i) in posting" :key="i"/>

</div>
</template>

<script>
import Post from "./Post.vue"

export default {
    name : 'container',
    data(){
        return {

        }
    },
    components : {
        Post,
    },

    props : {
        posting : Array,
    },
    method : {

    },

}
</script>

<style>

</style>