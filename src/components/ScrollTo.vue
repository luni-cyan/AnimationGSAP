<script setup>
import { gsap } from '../gsap.js';
const scrollTo = ()=>{
    gsap.to(window, {duration:2, scrollTo: 800})
}
const scrollToAnchors = (item) => {
    gsap.to(window, { duration: 1, scrollTo: item })
}


</script>

<template>
    <main>
        <section class="panel">
            <button @click="scrollTo">scrollTo x:800</button>
            <h1>Basic ScrollTo in VueJS</h1>
            <div class="box">
                
            </div>
            <nav>
                <a href="#essay1" @click.prevent="scrollToAnchors('#essay1')">短文 1</a>
                <a href="#essay2" @click.prevent="scrollToAnchors('#essay2')">短文 2</a>
                <a href="#essay3" @click.prevent="scrollToAnchors('#essay3')">短文 3</a>
                <a href="#essay4" @click.prevent="scrollToAnchors('#essay4')">短文 4</a>
                <a href="#essay5" @click.prevent="scrollToAnchors('#essay5')">短文 5</a>
            </nav>
        </section>
        <section>
            <h1 id="essay1">秋天的公園</h1>
            <p>秋天的公園充滿了金黃的樹葉，微風輕輕拂過，帶來了陣陣清新的氣息。孩子們在落葉堆中玩耍，時不時傳來爽朗的笑聲。老人在長椅上靜靜地閱讀著書籍，享受著這難得的陽光。公園裡的小路被樹葉鋪成了一層絨毯，走上去軟軟的，讓人忍不住多停留片刻，感受這份恬靜。
            </p>

            <h1 id="essay2">咖啡館的午後</h1>
            <p>在城市的一角，有一家溫馨的咖啡館。下午的陽光透過窗戶灑進來，照亮了每個角落。咖啡的香氣在空氣中彌漫，讓人心情愉悅。桌子上，一對情侶低聲細語，分享著他們的夢想。旁邊的作家則專心致志地敲擊著鍵盤，試圖捕捉靈感。這裡的每一個瞬間，都充滿了生活的美好與希望。
            </p>

            <h1 id="essay3">海邊的日出</h1>
            <p>清晨，海邊的日出如畫般美麗。太陽慢慢升起，橘紅色的光芒映照在波浪上，閃爍著金色的光點。漁夫們開始了一天的工作，船隻在海面上劃出一道道優美的弧線。沙灘上，幾個早起的人在散步，享受著海風的撫慰。這一刻，時間彷彿靜止了，所有的煩惱都隨著浪潮淡去。
            </p>

            <h1 id="essay4">書店的秘密</h1>
            <p>在小鎮的一個不起眼的角落，有一家古老的書店。書架上滿是厚厚的書本，散發著淡淡的墨香。每當有人推開門，鈴鐺叮當作響，店主總是微笑著迎接。這裡不僅有書，還有許多故事等待著被發現。顧客們靜靜地翻閱，仿佛能聽到書頁翻動時低語的秘密。
            </p>

            <h1 id="essay5">星空下的夢想</h1>
            <p>夜晚，星空璀璨，繁星點點。躺在草地上，仰望著無邊的星空，心中不禁湧起一種無限的遐想。每顆星星都像是一個夢想，閃爍著微弱而堅定的光芒。人們在這樣的夜晚，總會想起自己的願望，或者對未來的期盼。這一刻，所有的煩惱都被遺忘，只剩下對夢想的追求。
            </p>



        </section>

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
</style>