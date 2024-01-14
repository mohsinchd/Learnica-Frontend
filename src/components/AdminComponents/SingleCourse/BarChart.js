import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const BarChart = () => {
  const { course } = useSelector((state) => state.admin);
  // Define an array of colors for courses
  const colors = ["#1f9bcf", "#4bbf73", "#343a40"]; // Add more colors as needed

  //   Real Data
  //   const months = Object.keys(course.report);

  // Fake Data
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate a dynamic dataset with colors
  const data = {
    labels: months,
    datasets: [
      {
        label: "No of Enrollments / Month",
        // data: Object.values(course.report), // Real Data
        data: [5, 10, 30, 45, 14, 8, 30, 45, 23, 19, 70, 80],
        backgroundColor: "#343a40",
        borderColor: "#343a40",
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="mt-3">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
