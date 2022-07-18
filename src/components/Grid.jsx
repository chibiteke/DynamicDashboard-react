// React
import * as React from 'react';
// Wijmo
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjGrid from '@grapecity/wijmo.react.grid';
export const Grid = ({ data, palette }) => (<wjGrid.FlexGrid isReadOnly={true} headersVisibility={wjcGrid.HeadersVisibility.Column} selectionMode={wjcGrid.SelectionMode.ListBox} itemsSource={data}>
		<wjGrid.FlexGridColumn header="ID" binding="id" width={50}/>
		<wjGrid.FlexGridColumn header="日付" width="*" binding="date" format="Y"/>
		<wjGrid.FlexGridColumn header="売上" binding="sales" format="c" width={80}/>
		<wjGrid.FlexGridColumn header="費用" binding="expenses" format="c" width={80}/>
		<wjGrid.FlexGridColumn header="利益" binding="profit" format="c" width={80}/>
	</wjGrid.FlexGrid>);
