<template>
  <div>
    <!--      MATHEMATICS-->
    <div class="row">

      <div class="col-4">
        <h3>Calculus AB</h3>
        <p> {{ courseDescriptions.ap_calculus_ab }}</p>
      </div>

      <div class="col-4">
        <h3>Calculus BC</h3>
        <p> {{ courseDescriptions.ap_calculus_bc }}</p>
      </div>

      <div class="col-4">
        <h3>Statistics</h3>
        <p> {{ courseDescriptions.ap_statistics }}</p>
      </div>


    </div>
    <!--Buttons-->
    <div class="row">
      <div class="col-4">
        <button type="button" class="btn btn-primary">View Course Resources</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-primary">View Course Resources</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-primary">View Course Resources</button>
      </div>
    </div>
  </div>
</template>

<script>
import courseDescriptions from "@/assets/course_descriptions.json"

export default {
  name: 'MathHome',
  data() {
    return {
      courseDescriptions
    }
  }

}
</script>