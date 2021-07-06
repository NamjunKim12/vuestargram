<template>
 <div>
     <Post :posting="posting[0]"/>
    <Post :posting="posting[1]"/>
    <Post :posting="posting[2]"/>
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