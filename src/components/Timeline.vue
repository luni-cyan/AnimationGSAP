<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const container = ref(null)
let _ctx
let tl
onMounted(() => {
  _ctx = gsap.context(() => {
    const boxes = gsap.utils.toArray('.box')
    tl = gsap.timeline({ paused: true }).to(boxes[0], { x: 100 }).to(boxes[1], { x: -100 }).to(boxes[2], { y: -80, opacity: 0 }, 1).to(boxes[3], { x: 200 }, '<', 'test').to(boxes[4], { y: -200 })
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
function reverseTimeLine() {
  tl.reverse()
}
function restartTimeLine() {
  tl.restart()
}
function pauseTimeLine() {
  tl.pause()
}
function skipTimeLine() {
  tl.play('test')
}
</script>

<template>
  <section>
    <div>
      <button @click="toggleTimeLine">
        Toggle
      </button>
      <button @click="reverseTimeLine">
        reverse
      </button>
      <button @click="restartTimeLine">
        restart
      </button>
      <button @click="pauseTimeLine">
        pause
      </button>
      <button @click="skipTimeLine">
        skip
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
      <div class="box green">
        Box 4
      </div>
      <div class="box red">
        Box 5
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
