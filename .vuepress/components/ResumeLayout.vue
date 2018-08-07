<template lang="pug">
  .container
    link(rel="stylesheet" media="screen" href="https://fontlibrary.org/face/cmu-bright" type="text/css")
    .resume
      Content
</template>

<style lang="scss" scoped>
  .resume {
    font-family: "CMU Bright", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .container {
    margin-top: 4rem;
    margin-bottom: 8rem;
  }

  header {
    margin-bottom: 3rem;
  }

  section {
    margin-bottom: 2.25rem;

    &.minor-section {
      margin-bottom: 1.65rem;
    }
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.45rem;
    margin-bottom: .7rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-top: 1.3rem;
  }

  a {
    color: #000 !important;
  }

  ul.loose-list li {
    margin-bottom: .6rem;
  }
</style>
