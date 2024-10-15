<script setup>
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { ref } from 'vue'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'

const isMove = ref(false)

function flipBoxes() {
  const container = document.querySelector('.boxContainer')
  const container1 = document.querySelector('.boxContainer1')
  const box = document.querySelector('.box')
  const state = Flip.getState(box)
  if (!isMove.value) {
    container.appendChild(box)
    Flip.from(state, { duration: 0.6, ease: 'sine.in' })
  }
  else {
    container.removeChild(box)
    container1.appendChild(box)
    Flip.from(state, { duration: 0.3, ease: 'sine.in' })
  }
  isMove.value = !isMove.value
}

const animalsList = ref([{ name: '鹿', image: img1 }, { name: '狐', image: img2 }, { name: '貓', image: img3 }, { name: '獅', image: img4 }, { name: '無尾熊', image: img5 }, { name: '虎', image: img6 }])
const mainAnimal = ref(animalsList.value[0])
function toMainHandler(index) {
  if (index === 0)
    return
  const animals = gsap.utils.toArray('.figureImg')
  const state = Flip.getState(animals)

  const temp = animalsList.value[0]
  animalsList.value[0] = animalsList.value[index]
  animalsList.value[index] = temp
  mainAnimal.value = animalsList.value[0]
  Flip.from(state, {
    absolute: true,
    ease: 'power1.inOut',
    duration: 0.5,
  })
}
</script>

<template>
  <div class="container">
    <button class="flipButton" @click="flipBoxes">
      Flip
    </button>
    <div class="boxContainer" />
    <div class="boxContainer1">
      <div class="box">
        box1
      </div>
    </div>
  </div>
  <div class="gallery">
    <figure v-for="(animal, index) in animalsList" :key="animal.name" class="figureImg" :data-grid="`img-${index + 1}`">
      <img :src="animal.image" alt="" :title="animal.name" @click="toMainHandler(index)">
    </figure>
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

.boxContainer1 {
  grid-area: 1/ 3/ span 1/ span 1;
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
}

.gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 60vw;
  height: 60vh;
}

figure[data-grid="img-1"] {
  grid-area: 1 / 1 / 5 / 5;
}

figure[data-grid="img-2"] {
  grid-area: 1 / 5 / 3 / 7;
}

figure[data-grid="img-3"] {
  grid-area: 3 / 5 / 5 / 7;
}

figure[data-grid="img-4"] {
  grid-area: 5 / 5 / 7 / 7;
}

figure[data-grid="img-5"] {
  grid-area: 5 / 3 / 7 / 5;
}

figure[data-grid="img-6"] {
  grid-area: 5 / 1 / 7 / 3;
}

figure {
  position: relative;
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
