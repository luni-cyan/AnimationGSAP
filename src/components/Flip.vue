<script setup>
import { ref } from 'vue'
import { Flip } from '../gsap.js'

const box1 = ref(null)
const box1Content = ref('Box 1')

function flipBoxes() {
  const container = document.querySelector('.boxContainer')
  const box = document.querySelector('.box')
  const state = Flip.getState(box)
  container.appendChild(box)
  Flip.from(state, { duration: 0.6, ease: 'sine.in' })
}
</script>

<template>
  <div class="container">
    <button class="flipButton" @click="flipBoxes">
      Flip
    </button>
    <div class="boxContainer" />
    <div ref="box1" class="box">
      {{ box1Content }}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template: 1fr 1fr 1fr/ 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
}

.boxContainer {
  width: 300px;
  height: 300px;
  background-color: rgb(221, 221, 246);
  display: flex;
  justify-content: space-around;
  margin: 20px;
  transform: rotate(-30deg);
  grid-area: 2/ 2/ span 1/ span 1;
}

.flipButton {
  grid-area: 1/ 1/ span 1/ span 1;
}

.box {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7eb3;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  grid-area: 1/ 3/ span 1/ span 1;
}
</style>
