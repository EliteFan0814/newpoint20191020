<template>
  <div class="hello">
    <h1>earthId是：{{ $route.params.earthId }}</h1>
    <h2>组件2</h2>
    <h3>msg是：{{msg}}</h3>
    <button @click="getData">获取</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: this.$route.params.earthId,
      items:[]
    }
  },
  methods: {
    getData () {
      this.$http.get('https://cnodejs.org/api/v1/topics')
        .then((response) => {
          console.log(response)
          this.items = response.data.data
        }).catch((error) => {
          console.log(error)
        })
    }
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
  a {
    color: #42b983;
  }
</style>
