import CirclePacking from './main'
import '../../styles/rand.css'
import { useEffect } from 'react'
const RandPage =  ()=> {
  useEffect(() => {
    new CirclePacking('#container')
  }, [])
  return (
    <div id="container"></div>
  )
}
export default RandPage