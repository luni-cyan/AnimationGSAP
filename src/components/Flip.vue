<script setup>
import { ref } from 'vue'
import { Flip } from '../gsap.js'

const box1 = ref(null)
const box1Content = ref('Box 1')

function flipBoxes() {
  const container = document.querySelector('.container')
  const box = document.querySelector('.box')
  const state = Flip.getState(box)
  container.appendChild(box)
  Flip.from(state, { duration: 0.5, ease: 'back.inOut' })
}
</script>

<template>
  <button @click="flipBoxes">
    Flip
  </button>
  <div class="container" />
  <div ref="box1" class="box">
    {{ box1Content }}
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  height: 500px;
  background-color: rgb(221, 221, 246);
  display: flex;
  justify-content: space-around;
  margin: 20px;
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
}
</style>
