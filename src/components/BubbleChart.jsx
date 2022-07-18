// React
import * as React from 'react';
// Wijmo
import * as wjcChart from '@grapecity/wijmo.chart';
import * as wjChart from '@grapecity/wijmo.react.chart';
export const BubbleChart = ({ data, palette }) => (<wjChart.FlexChart chartType={wjcChart.ChartType.Bubble} itemsSource={data} palette={palette} bindingX="date">
		<wjChart.FlexChartAxis wjProperty="axisX" format="Y"/>
		<wjChart.FlexChartSeries name="売上・利益" binding="sales,profit"/>
	</wjChart.FlexChart>);
