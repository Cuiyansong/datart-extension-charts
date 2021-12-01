(function () {
  'use strict';

  /**
   * Datart
   *
   * Copyright 2021
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  function PivotTableChart({ dHelper }) {
    return {
      mockData: {
        describe: "标准交叉表数据。",
        fields: {
          rows: ["province", "city"],
          columns: ["type", "sub_type"],
          values: ["number"],
          valueInCols: true,
        },
        meta: [
          {
            field: "number",
            name: "数量",
          },
          {
            field: "province",
            name: "省份",
          },
          {
            field: "city",
            name: "城市",
          },
          {
            field: "type",
            name: "类别",
          },
          {
            field: "sub_type",
            name: "子类别",
          },
        ],
        data: [
          {
            number: 7789,
            province: "浙江省",
            city: "杭州市",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 2367,
            province: "浙江省",
            city: "绍兴市",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 3877,
            province: "浙江省",
            city: "宁波市",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 4342,
            province: "浙江省",
            city: "舟山市",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 5343,
            province: "浙江省",
            city: "杭州市",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 632,
            province: "浙江省",
            city: "绍兴市",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 7234,
            province: "浙江省",
            city: "宁波市",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 834,
            province: "浙江省",
            city: "舟山市",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 945,
            province: "浙江省",
            city: "杭州市",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 1304,
            province: "浙江省",
            city: "绍兴市",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 1145,
            province: "浙江省",
            city: "宁波市",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 1432,
            province: "浙江省",
            city: "舟山市",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 1343,
            province: "浙江省",
            city: "杭州市",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 1354,
            province: "浙江省",
            city: "绍兴市",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 1523,
            province: "浙江省",
            city: "宁波市",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 1634,
            province: "浙江省",
            city: "舟山市",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 1723,
            province: "四川省",
            city: "成都市",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 1822,
            province: "四川省",
            city: "绵阳市",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 1943,
            province: "四川省",
            city: "南充市",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 2330,
            province: "四川省",
            city: "乐山市",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 2451,
            province: "四川省",
            city: "成都市",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 2244,
            province: "四川省",
            city: "绵阳市",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 2333,
            province: "四川省",
            city: "南充市",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 2445,
            province: "四川省",
            city: "乐山市",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 2335,
            province: "四川省",
            city: "成都市",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 245,
            province: "四川省",
            city: "绵阳市",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 2457,
            province: "四川省",
            city: "南充市",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 2458,
            province: "四川省",
            city: "乐山市",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 4004,
            province: "四川省",
            city: "成都市",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 3077,
            province: "四川省",
            city: "绵阳市",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 3551,
            province: "四川省",
            city: "南充市",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 352,
            province: "四川省",
            city: "乐山市",
            type: "办公用品",
            sub_type: "纸张",
          },
        ],
        totalData: [
          {
            number: 26193,
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 49709,
            type: "家具",
          },
          {
            number: 23516,
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 29159,
            type: "办公用品",
          },
          {
            number: 12321,
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 16838,
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 18375,
            province: "浙江省",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 14043,
            province: "浙江省",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 4826,
            province: "浙江省",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 5854,
            province: "浙江省",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 7818,
            province: "四川省",
            type: "家具",
            sub_type: "桌子",
          },
          {
            number: 9473,
            province: "四川省",
            type: "家具",
            sub_type: "沙发",
          },
          {
            number: 7495,
            province: "四川省",
            type: "办公用品",
            sub_type: "笔",
          },
          {
            number: 10984,
            province: "四川省",
            type: "办公用品",
            sub_type: "纸张",
          },
          {
            number: 13132,
            province: "浙江省",
            city: "杭州市",
            type: "家具",
          },
          {
            number: 2288,
            province: "浙江省",
            city: "杭州市",
            type: "办公用品",
          },
          {
            number: 15420,
            province: "浙江省",
            city: "杭州市",
          },
          {
            number: 2999,
            province: "浙江省",
            city: "绍兴市",
            type: "家具",
          },
          {
            number: 2658,
            province: "浙江省",
            city: "绍兴市",
            type: "办公用品",
          },
          {
            number: 5657,
            province: "浙江省",
            city: "绍兴市",
          },
          {
            number: 11111,
            province: "浙江省",
            city: "宁波市",
            type: "家具",
          },
          {
            number: 2668,
            province: "浙江省",
            city: "宁波市",
            type: "办公用品",
          },
          {
            number: 13779,
            province: "浙江省",
            city: "宁波市",
          },
          {
            number: 5176,
            province: "浙江省",
            city: "舟山市",
            type: "家具",
          },
          {
            number: 3066,
            province: "浙江省",
            city: "舟山市",
            type: "办公用品",
          },
          {
            number: 8242,
            province: "浙江省",
            city: "舟山市",
          },
          {
            number: 4174,
            province: "四川省",
            city: "成都市",
            type: "家具",
          },
          {
            number: 6339,
            province: "四川省",
            city: "成都市",
            type: "办公用品",
          },
          {
            number: 10513,
            province: "四川省",
            city: "成都市",
          },
          {
            number: 4066,
            province: "四川省",
            city: "绵阳市",
            type: "家具",
          },
          {
            number: 3322,
            province: "四川省",
            city: "绵阳市",
            type: "办公用品",
          },
          {
            number: 7388,
            province: "四川省",
            city: "绵阳市",
          },
          {
            number: 4276,
            province: "四川省",
            city: "南充市",
            type: "家具",
          },
          {
            number: 6008,
            province: "四川省",
            city: "南充市",
            type: "办公用品",
          },
          {
            number: 10284,
            province: "四川省",
            city: "南充市",
          },
          {
            number: 4775,
            province: "四川省",
            city: "乐山市",
            type: "家具",
          },
          {
            number: 2810,
            province: "四川省",
            city: "乐山市",
            type: "办公用品",
          },
          {
            number: 7585,
            province: "四川省",
            city: "乐山市",
          },
          {
            number: 32418,
            province: "浙江省",
            type: "家具",
          },
          {
            number: 10680,
            province: "浙江省",
            type: "办公用品",
          },
          {
            number: 43098,
            province: "浙江省",
          },
          {
            number: 17291,
            province: "四川省",
            type: "家具",
          },
          {
            number: 18479,
            province: "四川省",
            type: "办公用品",
          },
          {
            number: 35770,
            province: "四川省",
          },
          {
            number: 78868,
          },
        ],
      },
      config: {
        datas: [
          {
            label: "dimension",
            key: "dimension",
            required: true,
            type: "group",
          },
          {
            label: "metrics",
            key: "metrics",
            required: true,
            type: "aggregate",
          },
          {
            label: "filter",
            key: "filter",
            type: "filter",
            allowSameField: true,
          },
        ],
        styles: [
          {
            label: "graph.title",
            key: "graph",
            comType: "group",
            rows: [
              {
                label: "graph.smooth",
                key: "smooth",
                default: false,
                comType: "checkbox",
              },
              {
                label: "graph.step",
                key: "step",
                default: false,
                comType: "checkbox",
              },
            ],
          },
          {
            label: "label.title",
            key: "label",
            comType: "group",
            rows: [
              {
                label: "label.showLabel",
                key: "showLabel",
                default: false,
                comType: "checkbox",
              },
              {
                label: "label.position",
                key: "position",
                comType: "select",
                default: "top",
                options: {
                  items: [
                    { label: "上", value: "top" },
                    { label: "左", value: "left" },
                    { label: "右", value: "right" },
                    { label: "下", value: "bottom" },
                    { label: "内", value: "inside" },
                    { label: "内左", value: "insideLeft" },
                    { label: "内右", value: "insideRight" },
                    { label: "内上", value: "insideTop" },
                    { label: "内下", value: "insideBottom" },
                    { label: "内左上", value: "insideTopLeft" },
                    { label: "内左下", value: "insideBottomLeft" },
                    { label: "内右上", value: "insideTopRight" },
                    { label: "内右下", value: "insideBottomRight" },
                  ],
                },
              },

              {
                label: "font",
                key: "font",
                comType: "font",
                default: {
                  fontFamily: "PingFang SC",
                  fontSize: "12",
                  fontWeight: "normal",
                  fontStyle: "normal",
                  color: "black",
                },
              },
            ],
          },
          {
            label: "legend.title",
            key: "legend",
            comType: "group",
            rows: [
              {
                label: "legend.showLegend",
                key: "showLegend",
                default: true,
                comType: "checkbox",
              },
              {
                label: "legend.type",
                key: "type",
                comType: "select",
                options: {
                  items: [
                    { label: "普通", value: "plain" },
                    { label: "滚动", value: "scroll" },
                  ],
                },
              },
              {
                label: "legend.selectAll",
                key: "selectAll",
                default: true,
                comType: "checkbox",
              },
              {
                label: "legend.position",
                key: "position",
                comType: "select",
                default: "right",
                options: {
                  items: [
                    { label: "右", value: "right" },
                    { label: "上", value: "top" },
                    { label: "下", value: "bottom" },
                    { label: "左", value: "left" },
                  ],
                },
              },
              {
                label: "font",
                key: "font",
                comType: "font",
                default: {
                  fontFamily: "PingFang SC",
                  fontSize: "12",
                  fontWeight: "normal",
                  fontStyle: "normal",
                  color: "black",
                },
              },
            ],
          },
          {
            label: "xAxis.title",
            key: "xAxis",
            comType: "group",
            rows: [
              {
                label: "common.showAxis",
                key: "showAxis",
                default: true,
                comType: "checkbox",
              },
              {
                label: "common.inverseAxis",
                key: "inverseAxis",
                comType: "checkbox",
              },
              {
                label: "common.lineStyle",
                key: "lineStyle",
                comType: "line",
                default: {
                  type: "dashed",
                  width: 1,
                  color: "black",
                },
              },
              {
                label: "common.showLabel",
                key: "showLabel",
                default: true,
                comType: "checkbox",
                options: [],
              },
              {
                label: "font",
                key: "font",
                comType: "font",
                default: {
                  fontFamily: "PingFang SC",
                  fontSize: "12",
                  fontWeight: "normal",
                  fontStyle: "normal",
                  color: "black",
                },
              },
              {
                label: "common.rotate",
                key: "rotate",
                default: 0,
                comType: "inputNumber",
              },
              {
                label: "common.showInterval",
                key: "showInterval",
                default: false,
                comType: "checkbox",
              },
              {
                label: "common.interval",
                key: "interval",
                default: 0,
                comType: "inputNumber",
              },
            ],
          },
          {
            label: "yAxis.title",
            key: "yAxis",
            comType: "group",
            rows: [
              {
                label: "common.showAxis",
                key: "showAxis",
                default: true,
                comType: "checkbox",
              },
              {
                label: "common.inverseAxis",
                key: "inverseAxis",
                default: false,
                comType: "checkbox",
              },
              {
                label: "common.lineStyle",
                key: "lineStyle",
                comType: "line",
                default: {
                  type: "dashed",
                  width: 1,
                  color: "black",
                },
              },
              {
                label: "common.showLabel",
                key: "showLabel",
                default: true,
                comType: "checkbox",
                options: [],
              },
              {
                label: "font",
                key: "font",
                comType: "font",
                default: {
                  fontFamily: "PingFang SC",
                  fontSize: "12",
                  fontWeight: "normal",
                  fontStyle: "normal",
                  color: "black",
                },
              },
              {
                label: "common.showTitleAndUnit",
                key: "showTitleAndUnit",
                default: true,
                comType: "checkbox",
                options: [],
              },
              {
                label: "common.unitFont",
                key: "unitFont",
                comType: "font",
                default: {
                  fontFamily: "PingFang SC",
                  fontSize: "12",
                  fontWeight: "normal",
                  fontStyle: "normal",
                  color: "black",
                },
              },
              {
                label: "common.nameLocation",
                key: "nameLocation",
                default: "center",
                comType: "select",
                options: {
                  items: [
                    { label: "开始", value: "start" },
                    { label: "结束", value: "end" },
                    { label: "中间", value: "center" },
                  ],
                },
              },
              {
                label: "common.nameRotate",
                key: "nameRotate",
                default: 90,
                comType: "inputNumber",
              },
              {
                label: "common.nameGap",
                key: "nameGap",
                default: 60,
                comType: "inputNumber",
              },
              {
                label: "common.min",
                key: "min",
                comType: "inputNumber",
              },
              {
                label: "common.max",
                key: "max",
                comType: "inputNumber",
              },
            ],
          },
          {
            label: "splitLine.title",
            key: "splitLine",
            comType: "group",
            rows: [
              {
                label: "splitLine.showHorizonLine",
                key: "showHorizonLine",
                default: true,
                comType: "checkbox",
              },
              {
                label: "common.lineStyle",
                key: "horizonLineStyle",
                comType: "line",
                default: {
                  type: "dashed",
                  width: 1,
                  color: "grey",
                },
              },
              {
                label: "splitLine.showVerticalLine",
                key: "showVerticalLine",
                default: false,
                comType: "checkbox",
              },
              {
                label: "common.lineStyle",
                key: "verticalLineStyle",
                comType: "line",
                default: {
                  type: "dashed",
                  width: 1,
                  color: "grey",
                },
              },
            ],
          },
          {
            label: "margin.title",
            key: "margin",
            comType: "group",
            rows: [
              {
                label: "margin.containLabel",
                key: "containLabel",
                default: true,
                comType: "checkbox",
              },
              {
                label: "margin.left",
                key: "marginLeft",
                default: "5%",
                comType: "marginWidth",
              },
              {
                label: "margin.right",
                key: "marginRight",
                default: "5%",
                comType: "marginWidth",
              },
              {
                label: "margin.top",
                key: "marginTop",
                default: "15%",
                comType: "marginWidth",
              },
              {
                label: "margin.bottom",
                key: "marginBottom",
                default: "5%",
                comType: "marginWidth",
              },
            ],
          },
        ],
        settings: [],
        i18ns: [
          {
            lang: "zh-CN",
            translation: {
              common: {
                showAxis: "显示坐标轴",
                inverseAxis: "反转坐标轴",
                lineStyle: "线条样式",
                borderType: "边框线条类型",
                borderWidth: "边框线条宽度",
                borderColor: "边框线条颜色",
                backgroundColor: "背景颜色",
                showLabel: "显示标签",
                unitFont: "刻度字体",
                rotate: "旋转角度",
                position: "位置",
                showInterval: "显示刻度",
                interval: "刻度间隔",
                showTitleAndUnit: "显示标题和刻度",
                nameLocation: "标题位置",
                nameRotate: "标题旋转",
                nameGap: "标题与轴线距离",
                min: "最小值",
                max: "最大值",
              },
              label: {
                title: "标签",
                showLabel: "显示标签",
                position: "位置",
              },
              legend: {
                title: "图例",
                showLegend: "显示图例",
                type: "图例类型",
                selectAll: "图例全选",
                position: "图例位置",
              },
              data: {
                color: "颜色",
                colorize: "配色",
              },
              graph: {
                title: "折线图",
                smooth: "平滑",
                step: "阶梯",
              },
              xAxis: {
                title: "X轴",
              },
              yAxis: {
                title: "Y轴",
              },
              splitLine: {
                title: "分割线",
                showHorizonLine: "显示横向分割线",
                showVerticalLine: "显示纵向分割线",
              },
              reference: {
                title: "参考线",
                open: "点击参考线配置",
              },
              cache: {
                title: "数据处理",
              },
            },
          },
        ],
      },
      isISOContainer: "experiment-pivot-table-chart",
      dependency: [
        "https://cdn.jsdelivr.net/npm/@antv/s2@1.1.2/dist/index.min.js",
        "https://cdn.jsdelivr.net/npm/@antv/s2@1.1.2/dist/style.min.css",
      ],
      meta: {
        id: "experiment-pivot-table-chart",
        name: "[Experiment]基于AntVS2的透视表",
        icon: "24gf-table",
        requirements: [
          {
            group: [0, 999],
            aggregate: [0, 999],
          },
        ],
      },

      onMount(options, context) {
        if ("PivotSheet" in context.window.S2) {
          this.chart = new context.window.S2.PivotSheet(
            context.document.getElementById(options.containerId),
            this.mockData,
            {}
          );
        }
      },

      onUpdated(props) {
        if (!props.dataset || !props.dataset.columns || !props.config) {
          return;
        }
        //   if (!this.isMatchRequirement(props.config)) {
        //     this.chart?.clear();
        //     return;
        //   }
        //   const newOptions = this.getOptions(props.dataset, props.config);
        //   this.chart?.setOption(Object.assign({}, newOptions), true);
        this.chart && this.chart.render();
      },

      onUnMount() {
        this.chart && this.chart.dispose();
      },

      onResize(opt, context) {
        this.chart && this.chart.resize(context);
      },

      getOptions(dataset, config) {
        const styleConfigs = config.styles;
        const dataConfigs = config.datas || [];
        const groupConfigs = dataConfigs
          .filter((c) => c.type === "group")
          .flatMap((config) => config.rows || []);
        const aggregateConfigs = dataConfigs
          .filter((c) => c.type === "aggregate")
          .flatMap((config) => config.rows || []);

        const objDataColumns = dHelper.transfromToObjectArray(
          dataset.rows,
          dataset.columns
        );
        const dataColumns = objDataColumns;
        const xAxisColumns = groupConfigs.map((config) => {
          return {
            type: "category",
            boundaryGap: false,
            tooltip: { show: true },
            data: dataColumns.map(
              (dc) => dc[dHelper.getValueByColumnKey(config)]
            ),
          };
        });
        const yAxisColumns = aggregateConfigs.map((config, index) => {
          return {
            name: dHelper.getColumnRenderName(config),
            type: index > 0 ? "bar" : "line",
            sampling: "average",
            areaStyle: this.isArea ? {} : undefined,
            stack: this.isStack ? "total" : undefined,
            data: dataColumns.map(
              (dc) => dc[dHelper.getValueByColumnKey(config)]
            ),
            ...this.getLabelStyle(styleConfigs),
            ...this.getSeriesStyle(styleConfigs),
          };
        });

        const { min, max } = dHelper.getDataColumnMaxAndMin(
          objDataColumns,
          aggregateConfigs[0]
        );

        return {
          visualMap: {
            show: false,
            seriesIndex: 0,
            type: "continuous",
            min,
            max,
          },
          tooltip: {
            trigger: "axis",
          },
          legend: this.getLegendStyle(
            styleConfigs,
            yAxisColumns.map((col) => col?.name) || []
          ),
          grid: this.getGrid(styleConfigs),
          xAxis: this.getXAxis(styleConfigs, xAxisColumns),
          yAxis: this.getYAxis(styleConfigs, yAxisColumns),
          series: yAxisColumns,
        };
      },

      getGrid(styles) {
        const containLabel = dHelper.getStyleValueByGroup(
          styles,
          "margin",
          "containLabel"
        );
        const left = dHelper.getStyleValueByGroup(styles, "margin", "marginLeft");
        const right = dHelper.getStyleValueByGroup(
          styles,
          "margin",
          "marginRight"
        );
        const bottom = dHelper.getStyleValueByGroup(
          styles,
          "margin",
          "marginBottom"
        );
        const top = dHelper.getStyleValueByGroup(styles, "margin", "marginTop");
        return { left, right, bottom, top, containLabel };
      },

      getYAxis(styles, yAxisColumns) {
        const showAxis = dHelper.getStyleValueByGroup(
          styles,
          "yAxis",
          "showAxis"
        );
        const inverse = dHelper.getStyleValueByGroup(
          styles,
          "yAxis",
          "inverseAxis"
        );
        const lineStyle = dHelper.getStyleValueByGroup(
          styles,
          "yAxis",
          "lineStyle"
        );
        const showLabel = dHelper.getStyleValueByGroup(
          styles,
          "yAxis",
          "showLabel"
        );
        const font = dHelper.getStyleValueByGroup(styles, "yAxis", "font");
        const unitFont = dHelper.getStyleValueByGroup(
          styles,
          "yAxis",
          "unitFont"
        );
        const showTitleAndUnit = dHelper.getStyleValueByGroup(
          styles,
          "yAxis",
          "showTitleAndUnit"
        );
        const name = showTitleAndUnit
          ? yAxisColumns.map((c) => c.name).join(" / ")
          : null;
        const nameLocation = dHelper.getStyleValueByGroup(
          styles,
          "yAxis",
          "nameLocation"
        );
        const nameGap = dHelper.getStyleValueByGroup(styles, "yAxis", "nameGap");
        const nameRotate = dHelper.getStyleValueByGroup(
          styles,
          "yAxis",
          "nameRotate"
        );
        const min = dHelper.getStyleValueByGroup(styles, "yAxis", "min");
        const max = dHelper.getStyleValueByGroup(styles, "yAxis", "max");
        const showHorizonLine = dHelper.getStyleValueByGroup(
          styles,
          "splitLine",
          "showHorizonLine"
        );
        const horizonLineStyle = dHelper.getStyleValueByGroup(
          styles,
          "splitLine",
          "horizonLineStyle"
        );

        return {
          type: "value",
          name,
          nameLocation,
          nameGap,
          nameRotate,
          inverse,
          min,
          max,
          axisLabel: dHelper.getAxisLabel(showLabel, font),
          axisLine: dHelper.getAxisLine(showAxis, lineStyle),
          axisTick: dHelper.getAxisTick(showLabel, lineStyle),
          nameTextStyle: dHelper.getNameTextStyle(
            unitFont?.fontFamily,
            unitFont?.fontSize,
            unitFont?.color
          ),
          splitLine: dHelper.getSplitLine(showHorizonLine, horizonLineStyle),
        };
      },

      getXAxis(styles, xAxisColumns) {
        const axisColumnInfo = xAxisColumns[0];
        const showAxis = dHelper.getStyleValueByGroup(
          styles,
          "xAxis",
          "showAxis"
        );
        const inverse = dHelper.getStyleValueByGroup(
          styles,
          "xAxis",
          "inverseAxis"
        );
        const lineStyle = dHelper.getStyleValueByGroup(
          styles,
          "xAxis",
          "lineStyle"
        );
        const showLabel = dHelper.getStyleValueByGroup(
          styles,
          "xAxis",
          "showLabel"
        );
        const font = dHelper.getStyleValueByGroup(styles, "xAxis", "font");
        const rotate = dHelper.getStyleValueByGroup(styles, "xAxis", "rotate");
        const showInterval = dHelper.getStyleValueByGroup(
          styles,
          "xAxis",
          "showInterval"
        );
        const interval = dHelper.getStyleValueByGroup(
          styles,
          "xAxis",
          "interval"
        );
        const showVerticalLine = dHelper.getStyleValueByGroup(
          styles,
          "splitLine",
          "showVerticalLine"
        );
        const verticalLineStyle = dHelper.getStyleValueByGroup(
          styles,
          "splitLine",
          "verticalLineStyle"
        );

        return {
          ...axisColumnInfo,
          inverse,
          axisLabel: dHelper.getAxisLabel(
            showLabel,
            font,
            showInterval ? interval : null,
            rotate
          ),
          axisLine: dHelper.getAxisLine(showAxis, lineStyle),
          axisTick: dHelper.getAxisTick(showLabel, lineStyle),
          splitLine: dHelper.getSplitLine(showVerticalLine, verticalLineStyle),
        };
      },

      getLegendStyle(styles, seriesNames) {
        const show = dHelper.getStyleValueByGroup(styles, "legend", "showLegend");
        const type = dHelper.getStyleValueByGroup(styles, "legend", "type");
        const font = dHelper.getStyleValueByGroup(styles, "legend", "font");
        const legendPos = dHelper.getStyleValueByGroup(
          styles,
          "legend",
          "position"
        );
        const selectAll = dHelper.getStyleValueByGroup(
          styles,
          "legend",
          "selectAll"
        );
        let positions = {};
        let orient = {};

        switch (legendPos) {
          case "top":
            orient = "horizontal";
            positions = { top: 8, left: 8, right: 8, height: 32 };
            break;
          case "bottom":
            orient = "horizontal";
            positions = { bottom: 8, left: 8, right: 8, height: 32 };
            break;
          case "left":
            orient = "vertical";
            positions = { left: 8, top: 16, bottom: 24, width: 96 };
            break;
          default:
            orient = "vertical";
            positions = { right: 8, top: 16, bottom: 24, width: 96 };
            break;
        }
        const selected = seriesNames.reduce(
          (obj, name) => ({
            ...obj,
            [name]: selectAll,
          }),
          {}
        );

        return {
          ...positions,
          show,
          type,
          orient,
          selected,
          data: seriesNames,
          textStyle: font,
        };
      },

      getLabelStyle(styles) {
        const show = dHelper.getStyleValueByGroup(styles, "label", "showLabel");
        const position = dHelper.getStyleValueByGroup(
          styles,
          "label",
          "position"
        );
        const font = dHelper.getStyleValueByGroup(styles, "label", "font");
        return { label: { show, position, ...font } };
      },

      getSeriesStyle(styles) {
        const smooth = dHelper.getStyleValueByGroup(styles, "graph", "smooth");
        const step = dHelper.getStyleValueByGroup(styles, "graph", "step");
        return { smooth, step };
      },

      getStyleValueByGroup(styles, groupPath, childPath) {
        const childPaths = childPath.split(".");
        return this.getStyleValue(styles, [groupPath, ...childPaths]);
      },
    };
  }

  /**
   * Datart
   *
   * Copyright 2021
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  return PivotTableChart;

})();
