import React from 'react'
import ReactPlayer from 'react-player'

const CustomVideoRenderer = ({ mainState: { currentDocument } }) => {
  if (!currentDocument) return null

  return (
    <div className='custom-video-renderer'>
      <ReactPlayer url={currentDocument.fileData} loop playing muted controls />
    </div>
  )
}

CustomVideoRenderer.fileTypes = [
  '3gp',
  'mp4',
  'mov',
  'avi',
  'wmv',
  'video/3gpp',
  'video/mp4',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-ms-wmv'
]
CustomVideoRenderer.weight = 1

export default CustomVideoRenderer
