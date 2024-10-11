<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from '../gsap.js'

const container = ref(null)
let _ctx
let tl
onMounted(() => {
  ctx = gsap.context(() => {
    const boxes = gsap.utils.toArray('.box')
    tl = gsap.timeline({ paused: true }).to(boxes[0], { x: 100 }).to(boxes[1], { x: -100 }, '<').to(boxes[2], { y: -80 })
  }, container.value)
})

function toggleTimeLine() {
  if (tl.paused() || tl.reversed()) {
    tl.play()
  }
  else {
    tl.reverse()
  }
}
</script>

<template>
  <section>
    <div>
      <button @click="toggleTimeLine">
        Toggle
      </button>
    </div>
    <div ref="container" class="container">
      <div class="box red">
        Box 1
      </div>
      <div class="box green">
        Box 2
      </div>
      <div class="box blue">
        Box 3
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: c;
  align-items: center;
}

.box {
  width: 50px;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>
