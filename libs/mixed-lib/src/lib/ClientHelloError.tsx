// Toggle to make error dissapear
// 'use client'

import {useState} from "react";

export function ClientHelloError(){
  const [hello, setHello] = useState('client hello')

  return <div>{hello}</div>
}
