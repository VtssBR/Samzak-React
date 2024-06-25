import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Card from './components/Card'
import Form from './components/Form'
import logoSamzak from "./assets/logo-samzak.png"
import imagem1 from "./assets/carrosel-camera.jpg"
import imagem2 from "./assets/carrosel-seguranca.webp"
import imagem3 from "./assets/carrosel-camera2.jpg"
import imgCardCamera from "./assets/camera-card.jpg"
import imgCardAlarme from "./assets/alarme-card.jpeg"
import imgCardCerca from "./assets/cerca-card.jpg"
import imgCardMonitoramento from "./assets/monitoramento-card.png"




function App() {

  const images = [
    imagem1 ,
    imagem2,
    imagem3
  ]

  return (
    <>
        <Header
          cover={logoSamzak}
          title1="Inicio"
          title2="Serviços"
          title3="Entre em contato"
        />
        <Slider  images={images}/>
        
        <h2 id="title-services" className='Title'>SERVIÇOS</h2>
        
        <div className="Cards">
          <Card imgCard={imgCardCamera} titleCard="Cameras de Seguranca" textCard="Oferecemos uma instalação completa de um sistema de vigilança atraves de cameras que podem ser visualizadas atraves do celular ou ate mesmo no local."/>
          <Card imgCard={imgCardAlarme} titleCard="Alarme Monitorado" textCard="Disponibilizamos um sistema de alarme monitorado, podendo utiliza-lo conectado ao celular mediante a qualuer disparo."/>
          <Card imgCard={imgCardMonitoramento} titleCard="Monitoramento" textCard="Acesse de qualquer lugar atraves do seu celular, visualize e monite toda sua residencia."/>
          <Card imgCard={imgCardCerca} titleCard="Cerca Eletrica" textCard="Um sistema de segurança atraves de cerca eletrica que pode ser acionado tambem pela central mediante o acionamento. "/>        
        </div>

        <div className="Form">
          <Form/>
        </div>
    </>
  )
}

export default App
