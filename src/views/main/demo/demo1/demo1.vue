<template>
  <div class="bg">
    <img src="../../../../assets/imgs/earth.png" alt="地球" class="earth-bg" />
    <div class="canvas-box" id="canvasBox" style="width: 500px; height: 500px;"></div>
    <div class="stars">
      <div class="star"></div>
      <div class="star pink"></div>
      <div class="star blue"></div>
      <div class="star yellow"></div>
      <div class="star pink2"></div>
      <div class="star blue2"></div>
    </div>
    <div class="cicle-one">
      <div class="cicle-content"></div>
    </div>
    <div class="cicle-two">
      <div class="cicle-content"></div>
    </div>
    <div class="cicle-three">
      <div class="cicle-content"></div>
    </div>
  </div>
</template>
<script>
import * as zrender from "zrender";
export default {
  name: "demo1",
  data() {
    return {
      zr: null
    };
  },
  mounted() {
    let canvasBox = document.getElementById("canvasBox");
    let zr = null;
    this.zr = zr = zrender.init(canvasBox, 360, 720);
    var curve2 = new zrender.BezierCurve({
      shape: {
        x1: 250,
        y1: 500,
        x2: 200,
        y2: 200,
        x3: 400,
        y3: 400,
        x4: 0,
        y4: 0
      },
      style: {
        lineWidth: 3,
        stroke: "yellow",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });

    zr.add(curve2);

    curve2
      .animate("style", true)
      .when(1000, {
        lineDashOffset: -10
      })
      .start();
  }
};
</script>
<style lang="less" scoped>
.bg {
  background: url("../../../../assets/imgs/bg.png") no-repeat center;
  background-size: cover;
  min-height: calc(100vh - 160px);
  height: 100%;
  position: relative;
  // transform-style: preserve-3d;
  .earth-bg {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 50%;
    top: 60px;
    margin-left: -150px;
    z-index: 10;
  }
  .cicle-one {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 120px;
    margin-left: -250px;
    animation: cir 6s infinite linear;
    // transform: translateY(150px);
    .cicle-content {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("../../../../assets/imgs/c.png");
      background-size: 100% 100%;
      animation: cir_p 5s linear 0s infinite;
    }
  }
  .cicle-two {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 120px;
    margin-left: -250px;
    transform: rotateX(80deg) rotateY(10deg);
    // transform: translateY(150px);
    animation: cir_r 5s infinite linear;
    transform-origin: center;
    backface-visibility: hidden;
    .cicle-content {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("../../../../assets/imgs/c.png");
      background-size: 100% 100%;
      -webkit-animation: cir_p 4s linear 0s infinite;
      animation: cir_p 5s linear 0s infinite;
    }
  }
  .cicle-three {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 220px;
    margin-left: -150px;
    transform: rotateX(80deg) rotateY(10deg);
    // transform: translateY(150px);
    animation: cir_three 6s infinite linear;
    transform-origin: center;
    backface-visibility: hidden;
    .cicle-content {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("../../../../assets/imgs/c.png");
      background-size: 100% 100%;
      -webkit-animation: cir_p 4s linear 0s infinite;
      animation: cir_p 5s linear 0s infinite;
    }
  }
}
.stars {
  width: 600px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 1;
  margin-left: -300px;
  .star {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fff;
    bottom: 0px;
    left: 0px;
    position: absolute;
    transform-origin: 100% 0;
    animation: star-ani 5s infinite linear;
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3);
    opacity: 0;
    z-index: 2;
  }
  .star:after {
    content: "";
    display: block;
    top: 0px;
    left: 4px;
    border: 0px solid #fff;
    border-width: 0px 90px 4px 90px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
    transform: rotate(90deg) translate3d(0px, 0px, 0);
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
    transform-origin: 0% 100%;
    // animation: shooting-ani 3s infinite ease-out;
  }
  .pink {
    bottom: 0;
    left: 30px;
    background: #ff5a99;
    animation-delay: 4s;
  }
  .pink2 {
    bottom: 0;
    left: 430px;
    background: #ff5a99;
    animation-delay: 5s;
  }
  .pink:after {
    border-color: transparent transparent transparent #ff5a99;
    animation-delay: 5s;
  }
  .blue {
    bottom: 0;
    left: 100px;
    background: cyan;
    animation-delay: 7s;
  }
  .blue2 {
    bottom: 0;
    left: 570px;
    background: cyan;
    animation-delay: 7s;
  }
  .blue:after {
    animation-delay: 7s;
  }
  .yellow {
    bottom: 0;
    left: 200px;
    background: #ffcd5c;
    animation-delay: 5.8s;
  }
  .yellow:after {
    border-color: transparent transparent transparent #ffcd5c;
    animation-delay: 5.8s;
  }
}

@keyframes star-ani {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0) translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(0) translate3d(0, -200px, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1) rotate(0) translate3d(0, -500px, 0);
  }
}
@keyframes cir {
  0% {
    transform: rotateX(80deg) rotateY(5deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(80deg) rotateY(5deg) rotateZ(-360deg);
  }
}
@keyframes cir_r {
  0% {
    transform: rotateX(80deg) rotateY(-5deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(80deg) rotateY(-5deg) rotateZ(-360deg);
  }
}
@keyframes cir_three {
  0% {
    transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(80deg) rotateY(0deg) rotateZ(-360deg);
  }
}
@keyframes cir_p {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}
</style>
