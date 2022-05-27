<template>
  <div>
    <h1>Related Rates</h1>

    <div>
      <p>Related Rates are problems that involved finding a rate in which one unit changes another
        unit in respect to time.</p>
    </div>

    <div class="left">
      <h3>Example</h3>
      <p class="col-3">A car leaves a specific point and moves westbound at 100mph. 1 hour later, another car leaves
        from the same point, but goes southbound at 50mph. At what rate is the distance between both cars changing after
        the second car has been traveling for 1 hour? </p>
      <h4>Steps</h4>
      <ol>
        <li>Draw a picture</li>
        <li>Plot your points</li>
        <ul>
          <li>dx/dt = 100</li>
          <ul>
            <li>dx/dt is the derivative of x in respect to time of car 1.</li>
          </ul>
          <li>x(t) = 100t</li>
          <ul>
            <li>x(t) is the function that solves how far car 1 has traveled after t hours.</li>
          </ul>

          <li>dy/dt = 50</li>
          <ul>
            <li>dx/dt is the derivative of y in respect to time of car 2.</li>
          </ul>
          <li>y(t) = 50(t-1)</li>
          <ul>
            <li>x(t) is the function that solves how far car 2 has traveled after t hours.</li>
          </ul>
          <ul>
            <li>Instead of multiplying by t, we multiply by (t-1) because car 2 starts an hour later.</li>
          </ul>
        </ul>
        <li>Solve for z</li>
        <ul>
          <li>x² + y² = z²</li>
          <li>z = 111.80</li>
        </ul>
        <li>Solve for dz/dt</li>
        <ul>
          <li>Find the actual value of t</li>
          <ul>
            <li>t is one hour after car 2 left, therefore t = 2</li>
          </ul>
          <li>Take the derivative in respect to t</li>
          <li>2x(dx/dt) + 2y(dy/dt) = 2x(dz/dt)</li>
          <li>Plug in each variable</li>
          <li>2*200*100 + 2*50*1 = 2*111.80*(dz/dt)</li>
          <li>40100 = 223.6*(dz/dt)</li>
          <li>179.339 = dz/dt</li>
        </ul>
      </ol>

      <img src="@/assets/triangle.png"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "RelatedRatesAB"
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>