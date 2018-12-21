<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>下面是动态的:</h2>
      <p v-for="item in listData">{{item.id}}:<{{item.title}}>----{{item.des}}</p>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listData:[]
    }
  },
  mounted() {
    var _this =this;
    axios({
      method: 'post',
      url: "/list",
      data: []
    }).then((res) => {
      console.log(res);
      _this.listData =res.data.listData
    }).catch((err) => {
      console.log(err)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
