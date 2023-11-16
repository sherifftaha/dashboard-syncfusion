import React from 'react'
import { Header } from '../../components'
import { FinancialChart } from '../../components'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';

const Financial = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title='Inflation Rate' />
      <FinancialChart
        financialChartData={financialChartData}
        FinancialPrimaryXAxis={FinancialPrimaryXAxis}
        FinancialPrimaryYAxis={FinancialPrimaryYAxis} />

    </div>
  )
}

export default Financial