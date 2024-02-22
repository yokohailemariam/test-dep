import { ClientJS } from 'clientjs'
import { useEffect } from 'react'

interface Props {
  setFingerprint: (fingerprint: number) => void
}

const ClientJsComponent: React.FC<Props> = ({ setFingerprint }) => {
  useEffect(() => {
    const client = new ClientJS()
    let deviceType = client.getDeviceType()
    let device = client.getDevice()
    let canva = client.getCanvasPrint()
    const fingerprint = client.getCustomFingerprint(deviceType, device, canva)
    setFingerprint(fingerprint)
  }, [])

  return null
}

export default ClientJsComponent
