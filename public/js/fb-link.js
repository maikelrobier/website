(function () {
  'use strict'

  var FACEBOOK_PROFILE_ID = "100008985827039"
  var FACEBOOK_URL_NAME = "maikelrobier"

  function gotoFacebookProfile() {
    // Need this workaround since facebook uses App Links instead of Deep Links
    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
      // no need to open a new tab
      window.location = "fb://profile/" + FACEBOOK_PROFILE_ID
    } else {
      // open in a new tab
      window.open("https://facebook.com/" + FACEBOOK_URL_NAME)
    }
  }

  function handleFacebookLinkClick(e) {
    e.preventDefault()
    e.stopPropagation()
    gotoFacebookProfile()
    return false
  }

  var fbLink = document.querySelector('#facebook-link')
  fbLink.onclick = handleFacebookLinkClick
})()
