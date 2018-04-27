import React from 'react' //crear componentes
import {render} from 'react-dom' //renderizar los componentes en el navegador
// import Playlist from './src/playlist/componentes/playlist'
import Home from '../pages/containers/home'
import data from '../api.json'

const homeContainer = document.getElementById('home-container')


//ReactDOM.render(qué voy a renderizar, dónde lo voy a renderizar)
render(<Home  data={data}/>, homeContainer)//
