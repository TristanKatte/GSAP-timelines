import { el } from './elements.js'

const tlChapterTwo = gsap.timeline({ defaults: {duration: 1 } })

// child timelines

// Introduction
const tlIntro = () => {
    const tl = gsap.timeline({})
    //tl.to(el.introText, .5, {opacity:0, y:'-2.5vh'})

    return tl 
  }

// Planet 
const tlPlanet = () => {
  const tl = gsap.timeline({})

  tl.to(el.planet, 1, {scale:6, yPercent:120 })

    return tl 
}

// rocket
const tlRocket = () => {
  const tl = gsap.timeline({})
  tl.to(el.rocket, 1, {scale:.3, transformOrigin:'50% 100%'})
  .to(el.rocket, 1, {yPercent:120, ease: 'elastic.out(1, 0.3)'}, '+=2')
    .to(el.rocketFlames, 1,{display:'none'})

  return tl 
} 

// space nerd
const tlSpaceNerd = () => {
  const tl = gsap.timeline({})
  
  tl.to(el.spaceNerd, 3, {opacity:0, scale:.1})
    return tl
}


// space welder
const tlSpaceWelder = () => {
  const tl = gsap.timeline({})
  
  tl.to(el.spaceWelder, 3, {opacity:0, scale:.1 })
  
  return tl
}


// master timeline
export const chapterTwo = () => {
    tlChapterTwo
          .pause()
          .add(tlIntro(), 0)
          .add(tlPlanet(), .5)
          .add(tlRocket(), 1)
          .add(tlSpaceWelder(), 8)
          .add(tlSpaceNerd(), 8)
  return tlChapterTwo;
}


// Wrapping infinite tweens in callbacks preventing them blocking the master timeline
function coding (){
  TweenMax.to(el.spaceNerdArm, 2, {rotate: 2, repeat: -1, yoyo: true })
}

function sparks() {
  TweenMax.staggerTo(el.sparkles1,.1,{opacity: 1, x:-10, y:-10, repeat: -1, yoyo: false, stagger:.025})
  TweenMax.staggerTo(el.sparkles2,.15, {opacity: 1, x:-10, y:-10, repeat: -1, yoyo: false, delay:.5, stagger:.025})
}

function flames() {
  TweenMax.to(el.rocketFlames, .1, { opacity:0, repeat: -1, yoyo:true})
}

