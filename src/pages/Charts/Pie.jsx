import React from 'react'
import { Header, PieChart } from '../../components'
import { pieChartData } from '../../data/dummy'

const Pie = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title='Project Cost Breakdown' />
      <div className='w-full'>
        <PieChart data={pieChartData} />
      </div>
    </div>
  )
}

export default Pie