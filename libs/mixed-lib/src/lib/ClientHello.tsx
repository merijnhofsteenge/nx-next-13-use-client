'use client'

import {useState} from "react";

export function ClientHello(){
  const [hello, setHello] = useState('client hello')

  return <div>{hello}</div>
}
