import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip } from '@syncfusion/ej2-react-charts'

const PieChart = ({data}) => {
  return (

    <AccumulationChartComponent
      legendSettings={{ position: 'Bottom' }}
      tooltip={{enable: true}}
    >
      <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>

        <AccumulationSeriesDirective
          type='Pie'
          dataSource={data}
          xName='x'
          yName='y'
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: { size: '1.1rem', fontFamily: 'Open Sans, sans-serif', color: 'white' }
          }}
        />

      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieChart