import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

export default function Progress({val,color}) {
  return (
    <div>
        <CircularProgress value={val} color={color} size={150}>
            <CircularProgressLabel>{val}%</CircularProgressLabel>
        </CircularProgress>
      
    </div>
  )
}
