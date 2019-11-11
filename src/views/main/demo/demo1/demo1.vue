<template>
  <div class="bg">
    <img src="../../../../assets/imgs/earth.png" alt="地球" class="earth-bg" />
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
export default {};
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
    animation: cir 4s infinite linear;
    // transform: translateY(150px);
    .cicle-content {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("../../../../assets/imgs/c.png");
      background-size: 100% 100%;
      animation: cir_p 3s linear 0s infinite;
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
    animation: cir_r 6s infinite linear;
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
    animation: cir_r 6s infinite linear;
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
    position: absolute;
    left: 50%;
    top: 220px;
    margin-left: -150px;
    transform: rotateX(80deg) rotateY(0deg);
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
