import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PyramidSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip } from '@syncfusion/ej2-react-charts'

const PyramidChart = ({data}) => {
  return (

    <AccumulationChartComponent
      legendSettings={{ position: 'Bottom' }}
      tooltip={{enable: true}}
    >
      <Inject services={[PyramidSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>

        <AccumulationSeriesDirective
          type='Pyramid'
          dataSource={data}
          xName='x'
          yName='y'
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: { size: '0.9rem', fontFamily: 'Open Sans, sans-serif' }
          }}
        />

      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PyramidChart