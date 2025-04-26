const chessData = JSON.parse(document.getElementById("chessData").textContent);
const bulletData = chessData[0];
const blitzData = chessData[1];
const rapidData = chessData[2];
const puzzleData = chessData[3];

const rapidCtx = document.getElementById("rapidChart").getContext("2d");
const rapidChart = new Chart(rapidCtx, {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: "#3273dc",
        label: "rapid",
        data: rapidData.data,
      },
    ],
  },
});

const blitzCtx = document.getElementById("blitzChart").getContext("2d");
const blitzChart = new Chart(blitzCtx, {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: "#EDAE49",
        label: "blitz",
        data: blitzData.data,
      },
    ],
  },
});

const bulletCtx = document.getElementById("bulletChart").getContext("2d");
const bulletChart = new Chart(bulletCtx, {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: "#D1495B",
        label: "bullet",
        data: bulletData.data,
      },
    ],
  },
});

const puzzleCtx = document.getElementById("puzzleChart").getContext("2d");
const puzzleChart = new Chart(puzzleCtx, {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: "#3C1642",
        label: "puzzles",
        data: puzzleData.data,
      },
    ],
  },
});
