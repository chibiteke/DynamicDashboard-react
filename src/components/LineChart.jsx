// React
import * as React from 'react';
// Wijmo
import * as wjcChart from '@grapecity/wijmo.chart';
import * as wjChart from '@grapecity/wijmo.react.chart';
export const LineChart = ({ data, palette }) => (<wjChart.FlexChart chartType={wjcChart.ChartType.Line} itemsSource={data} palette={palette} bindingX="date">
		<wjChart.FlexChartAxis wjProperty="axisX" format="Y"/>
        <wjChart.FlexChartSeries name="売上" binding="sales"/>
		<wjChart.FlexChartSeries name="利益" binding="profit" chartType={wjcChart.ChartType.LineSymbols}/>
	</wjChart.FlexChart>);
