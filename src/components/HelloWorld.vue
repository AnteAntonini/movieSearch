<template>
  <div v-if="seen" id="hello">
    <div class="content" v-for="(todo,index) in msg" :key="index">
      <h1>Title: {{todo.Title}}</h1>
      <img :src="todo.Poster" alt="">
      <h1>Type: {{todo.Type}}</h1>
      <h1>Year: {{todo.Year}}</h1>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      seen: false
    }
  },
  computed: {
  ...mapGetters(['msg'])
  },
  created() {
    this.unwatch = this.$store.watch(
      (state,getters) => getters.movie,
      (newValue, oldValue) => {
        console.log(`Updating from ${oldValue} to ${newValue}`);
        this.$store.dispatch('getData', newValue);
        this.seen = true;
      });
  },  
  updated() {
    var lista = document.getElementById('hello');
    const y = lista.getBoundingClientRect().top + window.pageYOffset - 350;
    if(this.seen) {
      window.scrollTo({top: y, behavior: 'smooth'});
    } 
  },
  beforeDestroy() {
    this.unwatch();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
hr {
  height:3px;
  width: 100%;
  color:red;
  border-radius: 2px;
  border-width:0;
  background-color:gray;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
