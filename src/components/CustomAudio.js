import useInstances from '../hooks/useInstances'

const CustomAudio = ({ mainState: { currentDocument } }) => {
  const [instances] = useInstances()
  if (instances.audioInstance) {
    instances.audioInstance.loadAudio(currentDocument.fileData)
  }
  return null
}

CustomAudio.fileTypes = [
  'mpeg',
  'ogg',
  'mp3',
  'audio/mpeg',
  'audio/mpeg',
  'audio/ogg',
  'audio/wave',
  'application/ogg'
]
CustomAudio.weight = 1

export default CustomAudio
