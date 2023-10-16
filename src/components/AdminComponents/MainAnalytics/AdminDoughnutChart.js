import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";
import ChartDataLabels from "chartjs-plugin-datalabels";

const AdminDoughnutChart = () => {
  const { analytics } = useSelector((state) => state.admin);

  const data = {
    labels: ["Total Courses", "Enrolled Courses", "Not Enrolled Courses"],
    datasets: [
      {
        label: "No of Courses",
        data: [
          analytics.totalCourses,
          analytics.totalEnrolledCourses,
          analytics.totalNotEnrolledCourses,
        ],
        backgroundColor: ["#1f9bcf", "#4bbf73", "#343a40"],
        borderColor: ["#1f9bcf", "#4bbf73", "#343a40"],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        font: {
          size: 16, // Adjust the font size as needed
          weight: "bold", // Adjust the font weight (e.g., 'normal', 'bold', 'light', etc.)
        },
        formatter: (value, context) => {
          return value > 0 ? `${value} course` : ""; // Customize the label format as needed
        },
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />
    </div>
  );
};

export default AdminDoughnutChart;
