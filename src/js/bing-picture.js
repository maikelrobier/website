(function () {
  function getBingImageUrl(callback) {
    var FEED_URL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US'
    var PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
    var IMAGE_URL_PREFIX = 'https://bing.com'

    var ajaxRequest = new XMLHttpRequest()
    ajaxRequest.open('GET', PROXY_URL + FEED_URL, true)
    ajaxRequest.send('')
    ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState != 4) {
        return
      }
      const json = JSON.parse(ajaxRequest.responseText)
      const imageUrl = IMAGE_URL_PREFIX + json.images[0].url

      callback(imageUrl)
    }
  }

  function setBackgroundImage(imageUrl) {
    var body = document.querySelector('body')
    body.style.background = 'url(' + imageUrl + ') no-repeat center center fixed'
    body.style.backgroundSize = 'cover'
  }

  getBingImageUrl(setBackgroundImage)
})()
