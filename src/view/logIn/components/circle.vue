<template>
    <div class="stage">
        <figure class="ball"><span class="shadow"></span></figure>
    </div>
</template>

<style scoped>
.ball { display: inline-block; width: 100%; height: 100%; margin: 0; border-radius: 50%; position: relative; background: radial-gradient(circle at 50% 120%, #81e8f6, #76deef 10%, #055194 80%, #062745 100%); } .ball:before { content: ""; position: absolute; top: 1%; left: 5%; width: 90%; height: 90%; border-radius: 50%; background: radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%); filter: blur(5px); z-index: 2; }


@keyframes bubble-anim {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1); }

  20% {
    -webkit-transform: scaleY(0.95) scaleX(1.05);
    transform: scaleY(0.95) scaleX(1.05); }

  48% {
    -webkit-transform: scaleY(1.1) scaleX(0.9);
    transform: scaleY(1.1) scaleX(0.9); }

  68% {
    -webkit-transform: scaleY(0.98) scaleX(1.02);
    transform: scaleY(0.98) scaleX(1.02); }

  80% {
    -webkit-transform: scaleY(1.02) scaleX(0.98);
    transform: scaleY(1.02) scaleX(0.98); }

  97%, 100% {
    -webkit-transform: scale(1);
    transform: scale(1); } }
</style>