import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Converter: NextPage = () => {
  const router = useRouter()
  const { mpg } = router.query
  
  return (
    
    <div className='is-flex is-flex-direction-column container'>
      {
      !Number.isNaN(parseFloat((mpg as string)?.split('-')[0])) ?
      <>
      <div className="title has-text-centered">
        {(mpg as string)?.split('-')[0]} Miles Per Gallon in Kilometers Per Liter Is
      </div>

      <div className="title has-text-danger has-text-centered">
        {(parseFloat((mpg as string)?.split('-')[0]) * 0.425144).toFixed(2)}
      </div>

      <div className="subtitle mt-6">
        Conversion formula
      </div>

      <div className="block">
        One miles per gallon is 0.425144 kilometers per liter. Using this formula {(mpg as string)?.split('-')[0]} per gallon is {(mpg as string)?.split('-')[0]} times 0.425144 which equals to {(parseFloat((mpg as string)?.split('-')[0]) * 0.425144).toFixed(2)}.
      </div>
      </> : 
      <div className="title has-text-danger has-text-centered">
      Please enter a valid MPG number
    </div>
    }
    
    </div>
  )
}

export default Converter
