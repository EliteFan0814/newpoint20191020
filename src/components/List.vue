<template>
  <ul>
    <li><router-link :to="{name:'HelloWorld',params:{wordId:123}}">我是组件1</router-link></li>
    <li><router-link :to="{name:'HelloEarth',params:{earthId:456}}">我是组件2</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: '我是组件1'
    }
  }
}
</script>

<style>

</style>
