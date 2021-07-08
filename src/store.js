import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name:'남준', 
      age : 20,
      liked : false,
      likes : 0,
    }
  },
  mutations : {
      changeName(state){
          state.name = "남준쓰"
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
  }
})

export default store