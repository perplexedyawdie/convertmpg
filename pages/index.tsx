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
  const calculateBtnClass = classNames('button', 'is-link', {
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

  function handleCalculateClick(e: any) {
    e.stopPropagation();
    if (valid) {
      router.push(`${mpg}-mpg-to-kmpl`)

    }
  }
  return (
    <div className='is-flex is-flex-direction-column container'>
      <div className="field field-width mt-6">
        <div className="control center-textbox">
          <input className="input" type="text" value={mpg} onChange={(e) => handleInputChange(e)} placeholder="Enter MPG value" />
        </div>
      </div>
      <div className="field">
        <div className="control center-btn">
          <button onClick={(e) => handleCalculateClick(e)} className={calculateBtnClass}>Calculate KMPL</button>
        </div>

      </div>

      <div className="block mt-6 is-size-7">


        *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta metus velit, ut aliquam velit euismod in. Duis consectetur, orci quis facilisis congue, justo sapien rhoncus est, eu tristique magna elit in dolor. Duis non mi mollis, sodales velit ut, pellentesque erat. Donec vel tellus tortor. Donec pellentesque condimentum leo, at pulvinar risus molestie condimentum. Etiam dignissim leo volutpat vestibulum tristique. Proin rutrum dapibus purus. Nunc rutrum eleifend purus, ac molestie nisi fermentum eu. Sed commodo et augue ac elementum.
      
      </div>
      <div className="block mt-3 is-size-7">
        *Morbi cursus consectetur magna vitae finibus. Ut ac dictum dui, sed porta dui. Praesent sed viverra eros. Duis at turpis sit amet quam luctus egestas. Sed luctus risus elit, quis tempus sapien consequat sit amet. Morbi eget malesuada mi, in viverra nunc. Maecenas blandit ligula enim, id tincidunt leo fringilla a. Ut lacinia, elit at consectetur efficitur, sapien tortor porttitor lorem, quis mollis leo nisl quis nibh. Cras urna ante, sollicitudin in erat porttitor, sodales sollicitudin tellus. Suspendisse laoreet magna sed nulla dictum fermentum. Mauris dapibus sollicitudin magna. Fusce finibus nisl justo, vitae scelerisque ex pretium id. In eget consectetur nulla. Curabitur tincidunt eros ante, ac elementum magna varius et. Fusce malesuada, dui quis porttitor pellentesque, massa turpis porta mi, ut congue odio orci vel felis.
      </div>
    </div>
  )
}

export default Home
