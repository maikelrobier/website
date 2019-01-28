import * as React from 'react'
import { hot } from "react-hot-loader"

import './stylesheets/main.css'

import './js/bing-picture'

const year = new Date().getFullYear()

class App extends React.Component {
  componentDidMount() {
    require('./js/fb-link')
  }

  render() {

    return (
      <div>
        <div className="background-filter">
          <div className="container">
            <div className="mr-card">
              <div className="media">
                <img className="mr-3 rounded-circle" src="/images/website-picture-2.jpg" width="128" height="128" />
                <div className="media-body">
                  <h5 className="mt-0">
                    <a href="https://google.com/search?q=maikelrobier" target="_blank">Maikel Ruiz</a>
                    <div>Software Engineer</div>
                  </h5>
                  <div>
                    <a href="http://maps.apple.com/?q=Houston,+TX" target="_blank">
                      <i className="fa fa-fw fa-map-marker"></i>
                      <span className="mr-h7">Houston, Texas, US</span>
                    </a>
                  </div>
                  <div>
                    <a href="mailto:maikelrobier@gmail.com" target="_blank">
                      <i className="fa fa-fw fa-envelope-o"></i>
                      <span className="mr-h7">maikelrobier@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-card mr-card--buttons">
              <div className="row">
                <div className="col-md-4">
                  <a className="mr-button mr-button--outline mr-color-facebook" href="" id="facebook-link">
                    <i className="fa fa-facebook-official fa-2x"></i>
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="mr-button mr-button--outline mr-color-twitter" href="https://twitter.com/maikelrobier" target="_blank">
                    <i className="fa fa-twitter fa-2x"></i>
                    <span>Twitter</span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="mr-button mr-button--outline mr-color-linkedin" href="https://www.linkedin.com/in/maikelrobier/" target="_blank">
                    <i className="fa fa-linkedin-square fa-2x"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mr-card mr-card--buttons">
              <div className="row">
                <div className="col-md-4">
                  <a className="mr-button mr-button--outline mr-color-spotify" href="https://open.spotify.com/user/maikelrobier" target="_blank">
                    <i className="fa fa-spotify fa-2x"></i>
                    <span>Spotify</span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="mr-button mr-button--outline mr-color-github" href="https://github.com/maikelrobier" target="_blank">
                    <i className="fa fa-github fa-2x"></i>
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a className="mr-button mr-button--outline mr-color-stack-overflow" href="https://stackoverflow.com/users/5003820/maikel-ruiz" target="_blank">
                    <i className="fa fa-stack-overflow fa-2x"></i>
                    <span>Stack Overflow</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-footer">
            <div className="mr-footer__inner">
              &copy; Maikel Ruiz, {year}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
