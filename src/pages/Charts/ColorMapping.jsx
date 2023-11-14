import React from 'react';
import { Header } from '../../components';
import { ColorMappingChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="USA CLIMATE - WEATHER BY MONTH" />
      <div className="w-full">
        <ColorMappingChart
          currentMode={currentMode}
          colorMappingData={colorMappingData}
          ColorMappingPrimaryXAxis={ColorMappingPrimaryXAxis}
          ColorMappingPrimaryYAxis={ColorMappingPrimaryYAxis}
          rangeColorMapping={rangeColorMapping}
        />
      </div>
    </div>
  );
};

export default ColorMapping;