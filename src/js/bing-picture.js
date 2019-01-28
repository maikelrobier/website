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

  // setBackgroundImage('https://w-dog.net/wallpapers/9/19/509090388357702/highlands-beautiful-landscape-savannah-shrubs-mountain-sand-blue-sky-clouds-landscape-widescreen.jpg')
  // 'http://bocaratonphotographyanddesign.com/benjhicks/wp-content/gallery/landscape-western-united-states/40z3948-2utah8x10.jpg
  // https://w-dog.net/wallpapers/9/19/509090388357702/highlands-beautiful-landscape-savannah-shrubs-mountain-sand-blue-sky-clouds-landscape-widescreen.jpg
  // 'http://www.agropopular.com/wp-content/audios_agropopular/2017/10/agricolas.jpg'
  // http://globalmedicalco.com/photos/globalmedicalco/22/107339.jpg
})()
