<template>
  <div>
    <!--      Sciences Part 2-->
    <div class="row">

      <div class="col-3">
        <h3>Physics 1: Algebra-Based</h3>
        <p> {{ courseDescriptions.ap_physics_1 }}</p>
      </div>

      <div class="col-3">
        <h3>Physics 2: Algebra-Based</h3>
        <p> {{ courseDescriptions.ap_physics_2 }}</p>
      </div>

      <div class="col-3">
        <h3>Physics C: Electricity and Magnetism</h3>
        <p> {{ courseDescriptions.ap_physics_c_electro }}</p>
      </div>

      <div class="col-3">
        <h3>Physics C: Mechanics</h3>
        <p> {{ courseDescriptions.ap_physics_c_mechanics }}</p>
      </div>


    </div>
    <!--Buttons-->
    <div class="row">
      <div class="col-3">
        <button type="button" class="btn btn-success">View Course Resources</button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-success">View Course Resources</button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-success">View Course Resources</button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-success">View Course Resources</button>
      </div>
    </div>
  </div>
</template>

<script>
import courseDescriptions from "@/assets/course_descriptions.json"

export default {
  name: 'SciencePart2Home',
  data() {
    return {
      courseDescriptions
    }
  }

}
</script>