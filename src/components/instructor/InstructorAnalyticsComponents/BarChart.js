import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const BarChart = () => {
  const { analytics } = useSelector((state) => state.instructor);

  // Define an array of colors for courses
  const colors = ["#1f9bcf", "#4bbf73", "#343a40"]; // Add more colors as needed

  // Define your courses
  const courses = analytics.singleCourseEnrollments.map(
    (course) => course.name
  );

  // Generate a dynamic dataset with colors
  const data = {
    labels: courses,
    datasets: [
      {
        label: "No of Students / Course",
        data: analytics.singleCourseEnrollments.map(
          (course) => course.totalEnrollments
        ), // Update this with your actual data
        backgroundColor: courses.map(
          (course, index) => colors[index % colors.length]
        ),
        borderColor: courses.map(
          (course, index) => colors[index % colors.length]
        ),
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="mt-5">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
