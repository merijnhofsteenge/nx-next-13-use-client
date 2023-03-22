import {ClientHello, ServerHello} from "@nx-next-13-use-client/mixed-lib";
import {ClientHelloName} from "@nx-next-13-use-client/client-lib";

// This combination of server and client components in one library works
export default async function HomePage(){
  return <><ServerHello/><ClientHello/></>
}

// When using the component ClientHelloName, next thinks that ServerHello is a client component
// export default async function HomePage(){
//   return <ClientHelloName/>
// }
