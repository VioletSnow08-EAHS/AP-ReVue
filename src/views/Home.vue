<template>
  <div class="hello">
    <h1>Welcome to AP ReVue</h1>
    <h3>This website is designed for students who need help understanding topics of CollegeBoard's Advanced Placement
      courses. It was created using Vue.JS.</h3>
    <hr>
    <div id="courses">

      <MathHome/>
      <br>
      <SciencePart1Home/>
      <br>
      <SciencePart2Home/>

    </div>

  </div>
</template>

<script>
import courseDescriptions from "@/assets/course_descriptions.json"
import MathHome from "@/components/Home/MathHome";
import SciencePart1Home from "@/components/Home/SciencePart1Home";
import SciencePart2Home from "@/components/Home/SciencePart2Home";

export default {
  name: 'Home',
  components: {SciencePart2Home, SciencePart1Home, MathHome},
  data() {
    return {
      courseDescriptions
    }
  }

}
</script>

<style scoped>
.left {
  text-align: left;
  margin-left: 15px;
}
</style>