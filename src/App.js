import React, { useState } from 'react'
import DocViewer from '@cyntler/react-doc-viewer'

import './App.css'
import CustomAudioRenderer from './components/CustomAudio'
import CustomVideoRenderer from './components/CustomVideo'
import CustomWebViewer from './components/CustomWebViewer'
import WebViewer from './components/WebViewer'
import webviewerContext from './contexts/webviewer'

export default function App() {
  const [instances, setInstances] = useState()

  const docs = [
    { uri: require('./data/example.xlsx') },
    { uri: require('./data/example.mp4') },
    { uri: require('./data/example.mp3') },
    { uri: require('./data/example.docx') },
    { uri: require('./data/example.pdf') },
    { uri: require('./data/example.ogg') },
    { uri: require('./data/example.wav') },
    {
      uri:
        'https://assets.redbullshop.com/images/f_auto/q_auto/t_product-detail/products/RBL/2022/RBL22007_9C_1/RBL-Nike-3rd-Jersey-22-23.jpg'
    },
    { uri: require('./data/example.jpeg') }
  ]

  return (
    <div className='App'>
      <h1>React File viewer</h1>
      <webviewerContext.Provider value={{ instances, setInstances }}>
        <DocViewer
          pluginRenderers={[CustomAudioRenderer, CustomVideoRenderer, CustomWebViewer]}
          prefetchMethod='GET'
          documents={docs}
          style={{height: 'unset'}}
        />
        <WebViewer />
      </webviewerContext.Provider>
    </div>
  )
}
