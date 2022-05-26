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
  margin-top: 60px;
  margin-left: 1rem;
  margin-right: 1rem;
}

body {
  background-color: #121212 !important;
}
</style>
