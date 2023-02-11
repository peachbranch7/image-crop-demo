import React from 'react'
import { ReactEasyCropDemo } from './components/ReactEasyCropDemo'
import { ReactImageCropDemo } from './components/ReactImageCropDemo'

export const App:React.FC = () =>  {
 
  return (
    <>
      <ReactImageCropDemo  />
      <ReactEasyCropDemo  />
    </>
  )
}
