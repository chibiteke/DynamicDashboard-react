// React
import * as React from 'react';
// Wijmo
import * as wjcCore from '@grapecity/wijmo';
import * as wjGauge from '@grapecity/wijmo.react.gauge';
export const RadialGauge = ({ data, palette }) => {
    const lastItem = data.items[data.items.length - 1];
    return (<React.Fragment>
			<wjGauge.RadialGauge min={0} max={1000} format="c0" value={lastItem.profit}/>
			<h3>{wjcCore.Globalize.format(lastItem.date, 'Y')}の利益</h3>
		</React.Fragment>);
};
