import React from 'react'
import { Header, StackedChart } from '../../components'

const Stacked = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title='Revenue Breakdown' />
      <StackedChart />
    </div>
  )
}

export default Stacked