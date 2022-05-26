<template>
  <div>
    <!--    Languages-->
    <div class="row">

      <div class="col-3">
        <h3>Spanish Language and Culture</h3>
        <p> {{ courseDescriptions.ap_spanish_language }}</p>
      </div>

      <div class="col-3">
        <h3>Spanish Literature and Culture</h3>
        <p> {{ courseDescriptions.ap_spanish_literature }}</p>
      </div>

      <div class="col-3">
        <h3>Latin Language and Culture</h3>
        <p> {{ courseDescriptions.ap_latin }}</p>
      </div>

      <div class="col-3">
        <h3>French Language and Culture</h3>
        <p> {{ courseDescriptions.ap_french }}</p>
      </div>


    </div>
    <!--Buttons-->
    <div class="row">
      <div class="col-3">
        <button type="button" class="btn btn-danger">View Course Resources</button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-danger">View Course Resources</button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-danger">View Course Resources</button>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-danger">View Course Resources</button>
      </div>
    </div>
  </div>
</template>

<script>
import courseDescriptions from "@/assets/course_descriptions.json"

export default {
  name: 'LanguagePart1Home',
  data() {
    return {
      courseDescriptions
    }
  }

}
</script>