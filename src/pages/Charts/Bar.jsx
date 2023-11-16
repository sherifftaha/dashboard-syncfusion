import React from 'react'
import BarChart from '../../components/Charts/BarChart'
import { Header } from '../../components'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
const Bar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title='Olympic Medal Counts - RIO' />
      <BarChart
        barCustomSeries={barCustomSeries}
        barPrimaryXAxis={barPrimaryXAxis}
        barPrimaryYAxis={barPrimaryYAxis} />
    </div>
  )
}

export default Bar