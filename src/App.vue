<template>
  <IndexPage/>
</template>

<script>

import IndexPage from "@/views/Home";

export default {
  name: 'App',
  components: {IndexPage},
}
</script>

<style>
#app {
  font-family: Calibri, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 10px 1rem
}

body {
  background-color: #121212 !important;
}
</style>
