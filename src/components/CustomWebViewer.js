import useInstances from '../hooks/useInstances'

const CustomWebViewer = ({ mainState: { currentDocument } }) => {
  const [instances] = useInstances()
  if (instances &&  instances.instance) {
    console.log('render ', currentDocument.fileData)
    instances.instance.UI.loadDocument(currentDocument.fileData)
  }
  return null
}

CustomWebViewer.fileTypes = [
  'doc',
  'docx',
  'xls',
  'xlsx',
  'pdf',
  'ppt',
  'pptx',
  'csv',
  'jpeg',
  'jpg',
  'png',
  'image/jpeg',
  'image/png',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/csv',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation'
]
CustomWebViewer.weight = 2

export default CustomWebViewer
