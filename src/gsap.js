import { gsap } from 'gsap'
import { Flip, ScrollToPlugin, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip)

export { Flip, gsap, ScrollToPlugin, ScrollTrigger }
