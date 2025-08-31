import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

function GaugeTemperature({ color }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let heightSize = "200px";
  let widthSize = "100%";
  let  rediusSize = "55";
  let labelSize = "22"

  if (width < 1024) {
    // موبایل  
    heightSize = "200px"
    widthSize = "100%";
    rediusSize = "70";
    labelSize = "22"
  } else if (width < 768) {
    // تبلت
    heightSize = ""
    widthSize = "140px";
    rediusSize = "60";
  } else if(width < 640){
    // دسکتاپ
    heightSize = ""
    widthSize = "140px";
    rediusSize = "60";
  }

  const option = {
    series: [
      {
        type: "gauge",
        center: ["50%", "65%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 50,
        radius: rediusSize,
        splitNumber: 5,
        itemStyle: {
          color: "#4B77BE",
        },
        progress: {
          show: true,
          width: 10,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 10,
          },
        },
        axisTick: {
          distance: -20,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        splitLine: {
          distance: -25,
          length: 5,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        axisLabel: {
          rotate: "tangential",
          distance: -10,
          color: "#999",
          fontSize: 15,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "60%",
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, "0%"],
          fontSize: labelSize,
          fontWeight: "bolder",
          formatter: "{value} °C",
          color: "inherit",
        },
        data: [
          {
            value: 50,
          },
        ],
      },
    ],
  };
  return (
    <ReactECharts  option={option} style={{ width: widthSize, height: heightSize }} />
  );
}

export default GaugeTemperature;
