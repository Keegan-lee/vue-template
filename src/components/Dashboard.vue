<template>
  <div>
    <md-layout>
      <router-view></router-view>
    </md-layout>
  </div>
</template>

<script>

export default {
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
</style>
