<script setup>
import { onMounted, ref } from 'vue'
import { Draggable } from '../gsap.js'

const boxes = ref([])
const container = ref(null)
const bonusArea = ref(null)
onMounted(() => {
  boxes.value = document.querySelectorAll('.box')

  boxes.value.forEach((box) => {
    Draggable.create(box, {
      type: 'x',
      bounds: container.value,
      // onDragEnd: () => {
      //   const boxPosition = box.getBoundingClientRect()
      //   const boxCenterX = boxPosition.x + boxPosition.width / 2
      //   const boxCenterY = boxPosition.y + boxPosition.height / 2
      //   const bonusAreaPosition = bonusArea.value.getBoundingClientRect()
      //   const centerX = bonusAreaPosition.x + bonusAreaPosition.width / 2
      //   const centerY = bonusAreaPosition.y + bonusAreaPosition.height / 2
      //   const radius = bonusAreaPosition.width / 2
      //   const distance = Math.sqrt(
      //     (boxCenterX - centerX) ** 2 + (boxCenterY - centerY) ** 2,
      //   )
      //   if (distance <= radius) {
      //     box.style.backgroundColor = 'green'
      //   }
      //   else {
      //     box.style.backgroundColor = 'red'
      //   }
      // },
    })
  })
  Draggable.create('.contentBoxText', {
    type: 'scroll',
    bounds: '.contentBox',
    onDragStart: () => {
      boxes.value[0].style.backgroundColor = 'gray'
    },
    onDragEnd: () => {
      boxes.value[0].style.backgroundColor = 'yellow'
    },
  })
})
</script>

<template>
  <div ref="container" class="container">
    <div class="box yellow">
      square1
    </div>
    <div class="box blue">
      square2
    </div>
    <div ref="bonusArea" class="bonusArea" />
  </div>
  <div class="contentBox">
    <p class="contentBoxText">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores eligendi accusantium, consectetur
      eaque alias quod nisi totam ipsum aliquam adipisci, sunt eos veritatis! Voluptatum impedit aliquid, dolores quia
      itaque voluptatem nobis temporibus ea voluptatibus esse hic ex facere sit quae ullam eveniet quas minus laborum
      voluptates officiis ut, saepe quos distinctio. Necessitatibus exercitationem doloribus ipsa pariatur nihil ipsam
      adipisci cumque similique, ea accusamus autem itaque qui veniam quasi amet enim dolorem tempora doloremque quo
      et inventore magni vel. Quaerat reprehenderit velit laboriosam hic minima blanditiis porro voluptatem maiores
      dolores ullam omnis ex suscipit, dolore tenetur eligendi sequi optio recusandae culpa. Consequuntur cumque
      voluptas molestias cum cupiditate optio quaerat delectus maxime saepe, voluptate sequi ex unde eligendi! Ducimus
      minus sint, at dolor porro provident quasi beatae laborum repellat illo. Error nihil veritatis consequatur
      consectetur quos quia provident quam ut ex atque eveniet repellat accusamus molestiae adipisci id nisi
      laudantium incidunt neque qui, consequuntur dicta praesentium magni? Vero iusto quo illo at autem aut cumque
      error? Ratione distinctio ex saepe rerum quam rem assumenda sunt id obcaecati officiis maiores repudiandae quas
      dolore, laudantium ut officia cupiditate et ullam voluptas eos adipisci nisi magni aliquid consequatur! Placeat
      ratione nemo velit illum autem ipsa recusandae dolore quos maiores, dolores, eligendi eum possimus magni esse
      dolor maxime. Quam veritatis accusamus modi odit ex quas aspernatur expedita suscipit. Obcaecati possimus hic
      inventore exercitationem fuga assumenda atque quos incidunt eum amet laboriosam expedita ducimus quaerat
      temporibus iste a ea, odio, delectus numquam! Iusto sed rem non placeat. Iusto eum aliquam accusantium
      exercitationem ex neque officia, aspernatur distinctio deserunt ab ullam modi molestiae temporibus nostrum
      voluptatem incidunt doloribus non rerum dicta velit. Laudantium blanditiis, sequi laborum delectus vero dolor
      sint ipsam vel corrupti illum natus numquam molestiae? Consectetur ratione maiores inventore soluta!
      Necessitatibus exercitationem optio eum nisi. Aliquid voluptate magnam sint delectus eos labore. Accusamus atque
      saepe mollitia molestiae in necessitatibus quod cum, velit explicabo, ipsum beatae libero autem animi nulla
      alias! Sit dolor ducimus repudiandae ipsam dolorum porro vel reiciendis. Pariatur voluptate nemo deserunt ipsa
      quidem eaque perferendis nam similique tenetur recusandae ad quaerat asperiores illo consequatur temporibus,
      error non necessitatibus quam consectetur magni. Aspernatur adipisci sed explicabo aliquam incidunt mollitia
      earum, sapiente fugit, dolor culpa dolores, laudantium labore sint eos dolore modi natus ut magnam odit
      deserunt! Unde veniam quaerat quod? Laborum temporibus a, dicta pariatur, amet incidunt ut nemo doloribus sequi
      magnam maiores accusantium ad! Eveniet ullam quo odit dolorum quam impedit. Nobis quasi quod molestiae quam!
      Consequuntur error minima, distinctio mollitia cum amet ab et odio exercitationem fugit illo eum modi voluptas?
      Magnam, nobis! Tenetur, velit natus atque, magnam ut voluptatem accusamus, sunt quaerat itaque blanditiis
      praesentium perspiciatis pariatur. Mollitia, excepturi? Rem iure reiciendis quibusdam mollitia doloribus modi
      saepe optio veniam dolores eaque impedit, beatae, odio distinctio, quaerat aperiam similique. Suscipit voluptas
      ipsam fugiat et impedit hic magnam doloremque, perferendis animi eaque maiores laboriosam? Nisi officiis rerum
      suscipit similique odit enim, neque ratione esse dolorem corrupti, nemo vero aperiam qui, dolore voluptates
      facilis.
    </p>
  </div>
</template>

<style scoped>
.container {
  background-color: aliceblue;
  width: 500px;
  height: 300px;
  display: grid;
  grid-template: 1fr 1fr/ 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.box {
  width: 100px;
  height: 100px;
  color: rgb(255, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font: 700 24px '';
}

.yellow {
  background-color: yellow;
}

.blue {
  background-color: blue;
}

.bonusArea {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: cornflowerblue;
}

.contentBox {
  width: 300px;
  height: 500px;
  display: flex;
}
</style>
