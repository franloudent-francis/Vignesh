import Navbar from '@/components/common/Navbar'
import React from 'react'
import { useParams } from 'react-router'

function Test() {
  const {name} = useParams()
  return (
    <Navbar >
      <div>Test {name}</div>
    </Navbar>
  )
}

export default Test