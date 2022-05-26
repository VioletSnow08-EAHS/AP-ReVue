<template>
  <div>
<!--    Languages-->
    <div class="row">

      <div class="col-3">
        <h3>Italian Language and Culture</h3>
        <p> {{ courseDescriptions.ap_italian }}</p>
      </div>

      <div class="col-3">
        <h3>German Language and Culture</h3>
        <p> {{ courseDescriptions.ap_german }}</p>
      </div>

      <div class="col-3">
        <h3>Chinese Language and Culture</h3>
        <p> {{ courseDescriptions.ap_chinese }}</p>
      </div>

      <div class="col-3">
        <h3>Japanese Language and Culture</h3>
        <p> {{ courseDescriptions.ap_japanese }}</p>
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
  name: 'LanguagePart2Home',
  data() {
    return {
      courseDescriptions
    }
  }

}
</script>