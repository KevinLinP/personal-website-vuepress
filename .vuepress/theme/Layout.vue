<template lang="pug">
  div(v-if="$page.frontmatter.layout")
    component(:is="$page.frontmatter.layout")
  div(v-else)
    .parallax-window(data-parallax data-src="https://ddw2ppmkywo9u.cloudfront.net/sunset_cropped.jpg" data-bleed="120" data-speed="0.63")

    .text-center
      img(src='https://ddw2ppmkywo9u.cloudfront.net/profile_picture.jpg' class='circular-image white-border' height='150px' width='150px')

    .container
      h1.text-center Kevin Lin

      ul.nav.justify-content-center
        li.nav-item
          a(href='javascript:void(0)' class='nav-link disabled') About Me
        li.nav-item
          a(href='/resume/' class='nav-link') Professional Resume

      .row
        article.lead.col-lg-8.offset-lg-2.col-xs-12(style='margin-top: 3rem; margin-bottom: 6rem')
          Content

    .text-center(style="opacity: 0.3; margin-bottom: 3rem")
      img(src='https://ddw2ppmkywo9u.cloudfront.net/Flower_of_life-2level.svg' width=250 height=250 title='Flower of Life rendered by Tomruen' alt='Flower of Life')
</template>

<style scoped>
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
  h1, h2, h3, h4, h5, h6, h7 {
    font-weight: 400;
  }
</style>
