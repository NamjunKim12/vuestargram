<template>
<div class="header">
    <ul class="header-button-left">
      <li @click="step--;">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++;">Next</li>
      <li v-if="step == 2" @click="publish()">발행</li>

    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>안녕,{{name}}</p>

  <Container @write='write = $event' :posting="posting" :step="step" :image="image"/>
  <p> {{now}} {{counter}}</p>
  <button @click="counter++;">더보기 버튼</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept='image/*' type="file" id="file" class="inputfile" />
      <!-- input 태그에 multiple 넣으면 파일 여러개 선택가능 -->
      <label for="file" class="input-plus" >+</label>
    </ul>
 </div>


 
</template>

<script>

import Container from "./components/container.vue" 
import Posting from "./assets/posting.js"
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  data(){
    return{
      posting : Posting,
      pushBtn : 0,
      step : 0,
      image : '',
      write : '',
      SelectedFilter : '',
      counter : 0,
    }
  },
  mounted(){
    this.emitter.on( 'clickFilter' , (a) => {
        this.selectedFilter = a 
    })
  },

  components: {
    Container,
  },

  computed : {
    now(){
      return new Date()
    },
    name(){
      return this.$store.state.name
    },
    ...mapState(['name','age','likes','liked']),
  },

  methods : {
    ...mapMutations([ 'setMore', 'changeName', 'likeButton' ]),
    publish(){
      var myfeed = {
        name: "NJ Kim",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 0,
        date: "May 15",
        liked: this.$store.state.liked,
        content: this.write,
        filter: this.selectedFilter
      };
      this.posting.unshift(myfeed);
      this.step = 0;
    },
    more(){
      this.axios.post('URL', {name : 'kim'}).then().catch((err)=>{
        err
      })

      this.axios.get(`https://codingapple1.github.io/vue/more${this.pushBtn}.json`)
      .then( ending =>{
        this.posting.push(ending.data);
        this.pushBtn++;
      })
    },
    upload(e){
      let files = e.target.files;
      let url = URL.createObjectURL(files[0]);
      this.image = url;
      this.step++;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

</style>
