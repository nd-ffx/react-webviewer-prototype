import React, { useEffect, useRef } from 'react'
import WebViewer from '@pdftron/webviewer'
import { initializeVideoViewer } from '@pdftron/webviewer-video'
import { initializeAudioViewer } from '@pdftron/webviewer-audio'

import useInstances from '../hooks/useInstances'
const license = `---- Insert commercial license key here after purchase ----`

const WebViewerComponent = () => {
  const [, setInstances] = useInstances()
  const viewer = useRef(null)
  useEffect(() => {
    WebViewer(
      {
        path: process.env.PUBLIC_URL + '/webviewer/lib',
        isReadOnly: true,
        disabledElements: ['comments']
      },
      viewer.current
    ).then(async instance => {
      instance.disableNotesPanel()
      const audioInstance = await initializeAudioViewer(
        instance,
        { license },
      )
      const videoInstance = await initializeVideoViewer(
        instance,
        { license }
      )
      setInstances({
        instance,
        audioInstance,
        videoInstance
      })
    })
  }, [setInstances])

  return (
    <div className='WebViewerComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '30rem' }}></div>
    </div>
  )
}

export default WebViewerComponent
