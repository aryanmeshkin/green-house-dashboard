export const data = {
  labels: [
    "00:00",
    "03:00",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00",
  ],

  datasets: [
    {
      label: "Temperature(°C)",
      data: [22, 21, 21, 20, 19, 19, 20, 22],
      borderColor: "red",
      yAxisID: "y-left", // محور سمت چپ
      fill: false,
      tension: 0.3,
      borderWidth : 1.5,
      pointHoverBackgroundColor	: "red",
      pointHoverRadius :5,
    },
    {
      label: "Air Humidity(%)",
      data: [50, 52, 53, 55, 56, 57, 60, 62],
      borderColor: "blue",
      yAxisID: "y-right", // محور سمت راست
      fill: false,
      tension: 0.3,
      borderWidth : 1.5,
      pointHoverBackgroundColor	: "blue",
      pointHoverRadius :5
    },
    {
      label: "Soil Moisture(%)",
      data: [30, 31, 31, 32, 31, 33, 35, 34],
      borderColor: "green",
      yAxisID: "y-right", // محور سمت راست
      fill: false,
      tension: 0.3,
      borderWidth : 1.5,
      pointHoverBackgroundColor	: "green",
      pointHoverRadius :5
    },
  ],
};
