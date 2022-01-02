import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import classNames from 'classnames'

const Home: NextPage = () => {
  const [mpg, setMpg] = useState<string>('')
  const [valid, setValid] = useState<boolean>(false)
  const router = useRouter()
  const calculateBtnClass = classNames('button','is-link', {
    'is-static': !valid
  })
  function handleInputChange(e: any) {
    const userMpgVal = e.target.value;
    if (!Number.isNaN(parseFloat(userMpgVal))) {
      setMpg(userMpgVal)
      setValid(true)
      console.log('valid')
    } else {
      console.log('invalid')
      setValid(false);
    }
  }

  function handleCalculateClick(e:any) {
    e.stopPropagation();
    if (valid) {
    router.push(`${mpg}-mpg-to-kmpl`)
      
    }
  }
  return (
    <div className='is-flex is-flex-direction-column container'>
      <div className="field field-width">
        <div className="control center-textbox">
          <input className="input" type="text" value={mpg} onChange={(e) => handleInputChange(e)} placeholder="Enter MPG value" />
        </div>
      </div>
      <div className="field">
        <div className="control center-btn">
          <button onClick={(e) => handleCalculateClick(e)} className={calculateBtnClass}>Calculate KMPL</button>
        </div>

      </div>

      <div className="block">

      </div>
    </div>
  )
}

export default Home
