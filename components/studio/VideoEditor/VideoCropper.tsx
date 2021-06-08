import Cropper from 'react-easy-crop'
import { FC, useCallback, useMemo, useState } from 'react'

type VideoSourceType = {
  src: string
  type: string
}

interface Props {
  className?: string
  children?: any
  videoSources: VideoSourceType[]
  classes: object
}

const VideoCropper: FC<Props> = ({ videoSources, classes }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onSeeked = useCallback(
    (event) => console.log(event.target.currentTime),
    []
  )

  return (
    <Cropper
      mediaProps={{ autoPlay: false, muted: true, onSeeked }}
      video={videoSources}
      crop={crop}
      classes={classes}
      onCropChange={setCrop}
      showGrid={false}
    />
  )
}

export default VideoCropper
