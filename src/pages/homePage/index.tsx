import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/home.css'

// import '@animxyz/core'
const HomePage = () => {

  const [model,setModel] = useState('rand')


  return (
    <div className="homepage duration-300">
      <div id="fixed-div">
        <a href="#openModal">About</a>
        <div className="modalDialog" id="openModal">
          <div>
            <a className="close" href="#close" title="Close">
              X
            </a>
            <h2 className="text-center">Hi there!</h2>
            <p>
              This awesome weather app was built as part of my Front End Web
              Development Certificate at{' '}
              <a href="https://www.freecodecamp.com" target="_blank">
                Free Code Camp
              </a>
              .
            </p>
            <p>
              To see more of my portfolio please{' '}
              <a href="http://www.jacklyons.me" target="_blank">
                click here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h1 className="header-text">手撕代码大战</h1>
        <h3 className="header-text">Click the cloud to begin</h3>
        {/* <div className="o"> */}
        <Link to={`/${model}`}>
        <div className={`showTemp s ${model}`} id="cloud">
          <span className="shadow"></span>
          <p id="result "></p>
        </div>
        </Link>
        {/* </div> */}
        <div id="all"></div>
        <div className="container-buttons">
          <div className="container-button" onClick={()=>{setModel('game')}}>
            <div className="button button--bounce">
              <span>闯关模式</span>
            </div>
          </div>
          <div className="container-button">
            <div className="button button--bounce" onClick={()=>{setModel('rand')}}>
              <span>随机一题</span>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p className="footer">
          Powered by <strong>♥牛爷爷组♥</strong>
        </p>
      </footer>
    </div>
  )
}
export default HomePage
