<template lang="pug">
  div
    .parallax-window(data-parallax data-src="https://ddw2ppmkywo9u.cloudfront.net/sunset_cropped.jpg" data-bleed="120" data-speed="0.63")
      | hi
    .text-center
      img(src='https://ddw2ppmkywo9u.cloudfront.net/profile_picture.jpg' class='circular-image white-border' height='150px' width='150px')
    .container
      Content
</template>

<style>
  .parallax-window {
    min-height: 50vh;
    background: transparent;
  }
  .circular-image {
    border-radius: 50%;
  }
  .white-border {
    border: 3px solid white
  }
</style>
