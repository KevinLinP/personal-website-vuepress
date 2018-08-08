<template lang="pug">
  div
    link(rel="stylesheet" href="https://fontlibrary.org/face/cmu-bright" type="text/css")

    .container
      .d-none.d-print-block.position-absolute(style="right: 0")
        small.text-muted
          | printed from
          |
          a(href="https://kevinlinp.org/resume") kevinlinp.org/resume
      .resume
        Content

    .d-print-none
      a(class="github-fork-ribbon right-bottom fixed" href="https://github.com/kevinlinp/personal-website-vuepress/blob/master/resume/README.md" data-ribbon="View me on GitHub" title="View me on GitHub" target="_blank") View me on GitHub
</template>

<style lang="scss">
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
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-top: 2rem;
  }

  h2 + h3 {
    margin-top: 1.5rem;
  }

  a {
    color: #000 !important;
  }

  svg.icon.outbound {
    display: none;
  }

  .github-fork-ribbon {
    opacity: 0.5;
    
    &:before {
      background-color: #CCC !important;
    }
  }

  .github-fork-ribbon:hover {
    opacity: 1;

    &:before {
      background-color: #FF7F00 !important;
    }
  }

  @media print {
    .resume {
      font-family: "CMU Bright", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    }

    .container {
      margin-top: 2rem;
      margin-bottom: 0;
    }
  }
</style>
