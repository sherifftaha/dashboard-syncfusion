import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
const BarChart = ({ barCustomSeries, barPrimaryXAxis, barPrimaryYAxis }) => {
    const { currentMode } = useStateContext()
    return (
        <ChartComponent
            id='charts'
            primaryXAxis={barPrimaryXAxis}
            primaryYAxis={barPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background: 'white' }}
            
        >
            <Inject services={[ColumnSeries, Legend, Category, Tooltip, DataLabel]} />
            <SeriesCollectionDirective>
                {barCustomSeries.map((item, index) => (
                    <SeriesDirective
                        key={index}
                        {...item}
                    />

                ))}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default BarChart