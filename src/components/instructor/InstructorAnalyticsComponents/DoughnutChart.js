import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";

const DoughnutChart = () => {
  const { analytics } = useSelector((state) => state.instructor);

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

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
