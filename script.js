
Anim();
function Anim(){
    gsap.to("h1",{
        scrollTrigger:{
            trigger:"h1",
            scroller:"#main",
            scrub:true,
            start:"top 50%",
            end:"top 0%",
        }
    })
}
Loco("#main");
function Loco(main){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(main),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the main element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(main, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(main).style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

gsap.to("#page3 .page3-slide",{
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        scrub:true,
        start:"top 0%",
        end:"top -500%",
        pin:true,
    }
})

gsap.to("#page6",{
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    scrub:true,
    start:"top 0%",
    end:"top -600%",
    pin:true
  },
  x:"-200%"
})

Page8();
function Page8(){
  var arrImg = [
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/newsletter-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/dancing-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/balance-1-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/balance-2-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/vr-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/sale-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/welcome-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/basketball-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/vibing-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/scrolling-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/standing-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/music-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/credit-cards-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/working-dzen-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/selfie-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/email-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/working-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/scooter-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/yoga-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/shopping-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/plant-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/korean-heart-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/rainbow-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/studying-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/social-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/newsletter-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/scooter-1.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/scooter-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/scooter-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/scooter-4.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/scooter-5.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/selfie-1.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/selfie-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/selfie-3.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/yoga-2.png",
    "https://d2pas86kykpvmq.cloudfront.net/landings/people/working-3.png",
  ]
  arrImg.forEach(elem=>{
    document.querySelectorAll(".page8-bottom").forEach((img)=>{
      img.innerHTML += `<img src="${elem}"/>`
  })
  })

  document.querySelectorAll(".page8-bottom img").forEach((img)=>{
    gsap.from(img,{
      y:"100px",
      scale:.7,
      opacity:0,
      duration:2,
      scrollTrigger:{
        trigger:img,
        scroller:"#main",
        scrub:true,
        start:"top 90%",
        end:"top 80%",
      }
    })
  })
}
document.querySelectorAll(".page-img").forEach(elemImg=>{
  gsap.from(elemImg,{
    scrollTrigger:{
      trigger:elemImg,
      scroller:"#main",
      start:"top 95%",
      end:"top 65%",
      scrub:true,
      // markers:true
    },
    opacity:0,
    y:"100px",
    duration:2,
  })
})