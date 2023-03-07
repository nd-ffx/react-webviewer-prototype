import useInstances from '../hooks/useInstances'

const CustomVideo = ({ mainState: { currentDocument } }) => {
  const [instances] = useInstances()
  if (instances.instance) {
    instances.videoInstance.loadVideo(currentDocument.fileData)
  }
  return null
}

CustomVideo.fileTypes = [
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
CustomVideo.weight = 1

export default CustomVideo
