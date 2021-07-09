import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name:'남준', 
      age : 20,
      liked : false,
      likes : 0,
      more : {},
    }
  },
  mutations : {
      changeName(state){
          state.name = "남준쓰"
      },
      setMore(state, data){
        state.more = data
      },
      likeButton(state){
          if (state.liked == false){
            state.liked = true;
            state.likes++;
          }else if(state.liked == true){
              state.liked = false;
              state.likes--;
          }
      },
  },
  actions : {
    getData(context){
        axios.get(`https://codingapple1.github.io/vue/more0.json`)
        .then((a)=>{
            console.log(a.data);
            context.commit('setMore', a.data)
        })
    }
  }
})

export default store