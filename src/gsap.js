import { gsap } from 'gsap'
import { Draggable, Flip, ScrollToPlugin, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip, Draggable)

export { Draggable, Flip, gsap, ScrollToPlugin, ScrollTrigger }
