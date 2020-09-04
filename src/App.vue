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

</style>
