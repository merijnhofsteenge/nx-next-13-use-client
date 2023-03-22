import {headers} from "next/headers";

export async function ServerHello(){
  const headerList = headers()

  return <div>server hello</div>
}
