<template>
  <div>
    <!--      Sciences Part 1-->
    <div class="row">

      <div class="col-4">
        <h3>Biology</h3>
        <p> {{ courseDescriptions.ap_biology }}</p>
      </div>

      <div class="col-4">
        <h3>Chemistry</h3>
        <p> {{ courseDescriptions.ap_chemistry }}</p>
      </div>

      <div class="col-4">
        <h3>Environmental Science</h3>
        <p> {{ courseDescriptions.ap_environmental_science }}</p>
      </div>


    </div>
    <!--Buttons-->
    <div class="row">
      <div class="col-4">
        <button type="button" class="btn btn-success">View Course Resources</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-success">View Course Resources</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-success">View Course Resources</button>
      </div>
    </div>
  </div>
</template>

<script>
import courseDescriptions from "@/assets/course_descriptions.json"

export default {
  name: 'SciencePart1Home',
  data() {
    return {
      courseDescriptions
    }
  }

}
</script>