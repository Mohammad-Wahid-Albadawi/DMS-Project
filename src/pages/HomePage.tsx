import ReactApexChart from "react-apexcharts";

export default function HomePage() {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    yaxis: {
      title: {
        text: "Sales (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + "k";
        },
      },
    },
    colors: ["#008FFB", "#00E396", "#FEB019"],
  };

  const series = [
    {
      name: "Product A",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Product B",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Product C",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sales by Month</h2>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}
