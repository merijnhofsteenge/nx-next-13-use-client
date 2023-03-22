'use client'
import {useState} from "react";
import {ClientHello} from "@nx-next-13-use-client/mixed-lib";

export function ClientHelloName(){
  const [name, setName] = useState('foo bar')

  return <div><ClientHello/>{name}</div>
}
