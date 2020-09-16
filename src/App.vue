<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
    components: {
    TheHeader
  },
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
  margin:0;
  padding: 0;
}
</style>
