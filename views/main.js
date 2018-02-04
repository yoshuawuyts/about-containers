var raw = require('choo/html/raw')
var html = require('choo/html')
var marked = require('marked')
var css = require('sheetify')
var path = require('path')
var fs = require('fs')
var he = require('he')

css`
  hr {
    margin-bottom: 4rem;
    margin-top: 3rem;
  }
`

var src = fs.readFileSync(path.join(__dirname, '../content/article.md'), 'utf8')

var TITLE = 'About Containers'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var urls = []
  setTimeout(() => console.log(urls))
  var content = render(src)
  var refs = urls.map((url) => html`<li class="mb2"><a class="white" href="${url[0]}">${url[0]}</a></li>`)
  return html`
    <body class="code lh-copy bg-black white pa4">
      <main class="center measure-wide">
        <h1 class="mb0 mt5">About containers.</h1>
        <h2 class="gray f5 mt2 mb4">Sunday, February 4th 2018</h2>
        ${content}
        <section>
          <h1>References</h1>
          <ol>
            ${refs}
          </ol>
        </section>
      </main>
    </body>
  `

  function render (src) {
    var renderer = new marked.Renderer()
    renderer.paragraph = function (text) {
      return `<p class="f4 mb4">${text}</p>`
    }
    renderer.link = function (url, _, text) {
      urls.push([ url, he.decode(text) ])
      return `<a class="white" href="${url}">${text}</a><sup class="ml1">${urls.length}</sup>`
    }
    return raw(marked(src, { renderer }))
  }
}
