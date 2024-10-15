import { gsap } from 'gsap'
import { Draggable, Flip, ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip, Draggable)

createApp(App).mount('#app')
