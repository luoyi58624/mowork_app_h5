import * as echarts from 'echarts/core'

import { BarChart, MapChart } from 'echarts/charts'

import { TooltipComponent, GridComponent, DataZoomComponent, VisualMapComponent } from 'echarts/components'

import { CanvasRenderer } from 'echarts/renderers'

echarts.use([BarChart, MapChart, TooltipComponent, GridComponent, DataZoomComponent, VisualMapComponent, CanvasRenderer])

export default echarts
