module.exports = {
  title: 'Kevin Lin',
  description: "Kevin Lin's personal website.",
  // link()
  head: [
    ['link', {href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", rel: "stylesheet", integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", crossorigin: "anonymous"}],
    ['link', {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css", integrity: "sha256-8WPvbdgP5IJUoTFanScEKvXvkBqdSHV35GXwi/jUzw8=", crossorigin: "anonymous"}],
    ['script', {src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", integrity: "sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=", crossorigin: "anonymous", defer: 'true'}],
    ['script', {src: "/jquery.parallax.min.js", defer: 'true'}]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
}
