const ctx = document.getElementById("donutChart").getContext("2d");
const donutChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [
      "Contribution by Donations",
      "Contribution by Sponsors",
      "Our Contribution",
    ],
    datasets: [
      {
        data: [19, 48, 31],
        backgroundColor: ["#32444e", "#587175", "#46653c"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return ""; // Avoid showing title
          },
          label: function (tooltipItem) {
            const value = tooltipItem.raw; // Get the raw value
            return `${tooltipItem.label}: ${value}%`; // Format the tooltip to show label and percentage
          },
        },
      },
    },
  },
});
