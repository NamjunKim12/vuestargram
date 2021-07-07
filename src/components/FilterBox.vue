<template>
  <div @click="fire" :class="filter + ` filter-item`" :style="`background-image:url(${image})`">
    <slot ></slot>

  </div>
</template>

<script>
export default {
    name : 'filterbox',
    date(){
        return{
        }
    },
    methods : {
        fire(){
            this.emitter.emit( 'clickFilter' , this.filter )
        }
    }, 
    props : {
        image : String,
        filter : String,
    }
}
</script>

<style>
.filter-item {
  text-align:center;
  color : white;
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  background-size: cover;
  background-position : center;
}
</style>