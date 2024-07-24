import Image from 'next/image'
import { add } from '@graph-n3-monorepo/sample-lib'

export default function Home() {
  const a = 9
  a = 'golu'
  return (
    <div>
      <h1>Hello World {add(6, 2)}</h1>
    </div>
  )
}
