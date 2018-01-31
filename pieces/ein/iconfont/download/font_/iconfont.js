;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1018.753024 530.93376c0 77.666304-77.078528 79.229952-77.078528 79.229952l-679.37792 0.704512 16.119808 79.85152 613.567488 0c22.0672 0 47.499264-12.084224 47.499264 60.099584 0 62.208-25.432064 57.55392-47.499264 57.55392L213.311488 808.373248c-22.146048 0-40.065024-17.92-40.065024-40.064 0-17.569792-102.508544-641.035264-102.508544-641.035264l-66.200576 0.196608c0-147.77856 111.194112-117.808128 111.194112-117.808128 82.555904 0 80.991232 79.581184 80.991232 79.581184l16.979968 81.107968 728.754176-1.096704c72.61696 0 76.68736 77.390848 76.68736 77.390848L1018.753024 530.93376 1018.753024 530.93376zM899.418112 330.141696c0-22.107136-17.92-40.065024-40.064-40.065024l-579.6864 0c-22.144 0-40.064 17.958912-40.064 40.065024l15.023104 120.194048c0 22.145024 17.918976 40.064 40.064 40.064L859.354112 490.399744c22.144 0 40.064-17.92 40.064-40.064L899.418112 330.141696 899.418112 330.141696zM336.08704 848.436224c44.837888 0 81.302528 33.964032 81.302528 78.959616 0 44.87168-36.46464 81.301504-81.302528 81.301504-44.99456 0-78.95552-36.429824-78.95552-81.301504C257.13152 882.400256 291.093504 848.436224 336.08704 848.436224L336.08704 848.436224zM779.224064 848.436224c44.992512 0 81.383424 35.254272 81.383424 80.130048 0 44.997632-36.389888 81.422336-81.383424 81.422336-44.916736 0-81.381376-36.42368-81.381376-81.422336C697.843712 883.690496 734.307328 848.436224 779.224064 848.436224L779.224064 848.436224z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
