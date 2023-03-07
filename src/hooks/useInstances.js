import webviewerContext from '../contexts/webviewer.js'
import { useContext } from 'react'

export default function useInstances() {
  const { instances, setInstances } = useContext(webviewerContext)
  return [ instances, setInstances ]
}
