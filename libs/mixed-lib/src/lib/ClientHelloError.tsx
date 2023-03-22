// Toggle 'use client' to make error disappear
// 'use client'

import {useState} from "react";

export function ClientHelloError(){
  const [hello, setHello] = useState('client hello')

  return <div>{hello}</div>
}
