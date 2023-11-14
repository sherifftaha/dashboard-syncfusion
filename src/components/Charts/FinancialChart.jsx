import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, DateTime, Legend, Tooltip, Inject, HiloOpenCloseSeries,Crosshair } from '@syncfusion/ej2-react-charts'

import { useStateContext } from '../../contexts/ContextProvider'

const FinancialChart = ({ financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis }) => {
  const { currentMode } = useStateContext()
  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis }
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      crosshair={{ enable: true}}
    >
      <Inject services={[HiloOpenCloseSeries, DateTime, Legend, Tooltip ,Crosshair]} />
      <SeriesCollectionDirective>

        <SeriesDirective type='HiloOpenClose' name='Apple Inc' dataSource={financialChartData} xName='x' high='high' low='low' open='open' close='close' />

      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default FinancialChart