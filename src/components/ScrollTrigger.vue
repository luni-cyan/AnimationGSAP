<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from '../gsap.js'

const main = ref(null)
let _ctx

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector('.box')
    gsap.to(boxes[0], {
      x: 100,
      scrollTrigger: {
        trigger: boxes[0],
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    })
    gsap.to(boxes[1], {
      x: -200,
      scrollTrigger: {
        trigger: boxes[0],
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    })
    gsap.to(boxes[2], {
      y: -200,
      scrollTrigger: {
        trigger: boxes[0],
        start: 'top center',
        end: 'top 20%',
        scrub: true,
      },
    })
    /*
        可以使用 timeline 簡化多個元素動畫從同個元素觸發
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: boxes[0],
                        start: 'top center',
                        end: 'top 20%',
                        scrub: true,
                    }
                })
                timeline.to(boxes[0], { x: 100 })
                .to(boxes[1], { x: -200 }, 0)
                .to(boxes[2], { y: -200 }, 0);
        */
  }, main.value)
})
</script>

<template>
  <main ref="main">
    <section class="panel">
      <h1>Basic ScrollTrigger in VueJS</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </section>
    <section>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi atque provident voluptas nisi
        blanditiis hic ipsam dolores mollitia praesentium ducimus, iure eius illo numquam qui eveniet corrupti
        porro ipsum perferendis?
      </h2>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi atque provident voluptas nisi
        blanditiis hic ipsam dolores mollitia praesentium ducimus, iure eius illo numquam qui eveniet corrupti
        porro ipsum perferendis?
      </h2>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi atque provident voluptas nisi
        blanditiis hic ipsam dolores mollitia praesentium ducimus, iure eius illo numquam qui eveniet corrupti
        porro ipsum perferendis?
      </h2>
    </section>

    <div class="container">
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
    <h2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi atque provident voluptas nisi
      blanditiis hic ipsam dolores mollitia praesentium ducimus, iure eius illo numquam qui eveniet corrupti
      porro ipsum perferendis?
    </h2>
    <h2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi atque provident voluptas nisi
      blanditiis hic ipsam dolores mollitia praesentium ducimus, iure eius illo numquam qui eveniet corrupti
      porro ipsum perferendis?
    </h2>
  </main>
</template>

<style scope>
.container {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
