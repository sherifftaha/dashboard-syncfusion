import React from 'react'
import { Header, PyramidChart } from '../../components'
import { PyramidData } from '../../data/dummy'

const Pyramid = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title='Food Comparison Chart' />
      <div className='w-full'>
        <PyramidChart data={PyramidData} />
      </div>
    </div>
  )
}

export default Pyramid