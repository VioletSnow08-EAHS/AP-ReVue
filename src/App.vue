<template>
<div>
  <RelatedRatesAB />
</div>
</template>

<script>


import LimitsAB from "@/views/Math/calculus/ab/units/1/LimitsAB";
import RelatedRatesAB from "@/views/Math/RelatedRatesAB";
export default {
  name: 'App',
  components: {RelatedRatesAB},
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
