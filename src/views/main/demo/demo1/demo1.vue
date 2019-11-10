<template>
  <div class="bg">
    <img src="../../../../assets/imgs/earth.png" alt="地球" class="earth-bg" />
    <div class="canvas-box" id="canvasBox" style="width: 600px; height: 600px;"></div>
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
    this.zr = zr = zrender.init(canvasBox, 500, 500);
    var curve1 = new zrender.BezierCurve({
      shape: {
        x1: 300,
        y1: 380,
        x2: 60,
        y2: 100,
        cpx1: 80,
        cpy1: 400
      },
      style: {
        lineWidth: 1,
        stroke: "yellow",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });

    zr.add(curve1);
    curve1
      .animate("style", true)
      .when(300, {
        lineDashOffset: -10
      })
      .start();
    var star_one = new zrender.Circle({
      style: {
        fill: "#fff",
        shadowBlur: 10,
        shadowColor: "#fff"
      },
      shape: {
        cx: 60,
        cy: 100,
        r: 5
      }
    });
    zr.add(star_one);

    var curve2 = new zrender.BezierCurve({
      shape: {
        x1: 300,
        y1: 380,
        x2: 150,
        y2: 150,
        cpx1: 150,
        cpy1: 380
      },
      style: {
        lineWidth: 1,
        stroke: "red",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });
    zr.add(curve2);
    curve2
      .animate("style", true)
      .when(300, {
        lineDashOffset: -10
      })
      .start();
    var star_two = new zrender.Circle({
      style: {
        fill: "#fff",
        shadowBlur: 10,
        shadowColor: "#fff"
      },
      shape: {
        cx: 150,
        cy: 150,
        r: 5
      }
    });
    zr.add(star_two);

    var curve3 = new zrender.BezierCurve({
      shape: {
        x1: 300,
        y1: 380,
        x2: 10,
        y2: 150,
        cpx1: 0,
        cpy1: 380
      },
      style: {
        lineWidth: 1,
        stroke: "blue",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });
    zr.add(curve3);

    curve3
      .animate("style", true)
      .when(300, {
        lineDashOffset: -10
      })
      .start();
    var star_three = new zrender.Circle({
      style: {
        fill: "#fff",
        shadowBlur: 10,
        shadowColor: "#fff"
      },
      shape: {
        cx: 10,
        cy: 150,
        r: 5
      }
    });
    zr.add(star_three);

    var curve4 = new zrender.BezierCurve({
      shape: {
        x1: 300,
        y1: 380,
        x2: 220,
        y2: 150,
        cpx1: 220,
        cpy1: 380
      },
      style: {
        lineWidth: 1,
        stroke: "green",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });

    zr.add(curve4);

    curve4
      .animate("style", true)
      .when(300, {
        lineDashOffset: -10
      })
      .start();
    var star_four = new zrender.Circle({
      style: {
        fill: "#fff",
        shadowBlur: 10,
        shadowColor: "#fff"
      },
      shape: {
        cx: 220,
        cy: 150,
        r: 5
      }
    });
    zr.add(star_four);

    var curve5 = new zrender.BezierCurve({
      shape: {
        x1: 300,
        y1: 380,
        x2: 540,
        y2: 100,
        cpx1: 540,
        cpy1: 380
      },
      style: {
        lineWidth: 1,
        stroke: "yellow",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });

    zr.add(curve5);

    curve5
      .animate("style", true)
      .when(300, {
        lineDashOffset: -10
      })
      .start();
    var star_five = new zrender.Circle({
      style: {
        fill: "#fff",
        shadowBlur: 10,
        shadowColor: "#fff"
      },
      shape: {
        cx: 540,
        cy: 100,
        r: 5
      }
    });
    zr.add(star_five);
    var curve6 = new zrender.BezierCurve({
      shape: {
        x1: 300,
        y1: 380,
        x2: 450,
        y2: 150,
        cpx1: 450,
        cpy1: 380
      },
      style: {
        lineWidth: 1,
        stroke: "red",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });

    zr.add(curve6);

    curve6
      .animate("style", true)
      .when(300, {
        lineDashOffset: -10
      })
      .start();
     var star_six = new zrender.Circle({
      style: {
        fill: "#fff",
        shadowBlur: 10,
        shadowColor: "#fff"
      },
      shape: {
        cx: 450,
        cy: 150,
        r: 5
      }
    });
    zr.add(star_six);

    var curve7 = new zrender.BezierCurve({
      shape: {
        x1: 300,
        y1: 380,
        x2: 590,
        y2: 150,
        cpx1: 590,
        cpy1: 380
      },
      style: {
        lineWidth: 1,
        stroke: "blue",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });

    zr.add(curve7);

    curve7
      .animate("style", true)
      .when(300, {
        lineDashOffset: -10
      })
      .start();
     var star_seven = new zrender.Circle({
      style: {
        fill: "#fff",
        shadowBlur: 10,
        shadowColor: "#fff"
      },
      shape: {
        cx: 590,
        cy: 150,
        r: 5
      }
    });
    zr.add(star_seven);

    var curve8 = new zrender.BezierCurve({
      shape: {
        x1: 300,
        y1: 380,
        x2: 380,
        y2: 150,
        cpx1: 380,
        cpy1: 380
      },
      style: {
        lineWidth: 1,
        stroke: "green",
        lineDash: [5, 5],
        lineDashOffset: 0
      }
    });

    zr.add(curve8);

    curve8
      .animate("style", true)
      .when(300, {
        lineDashOffset: -10
      })
      .start();
    var star_eight = new zrender.Circle({
      style: {
        fill: "#fff",
        shadowBlur: 10,
        shadowColor: "#fff"
      },
      shape: {
        cx: 380,
        cy: 150,
        r: 5
      }
    });
    zr.add(star_eight);
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
.canvas-box {
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -300px;
  z-index: 20;
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
