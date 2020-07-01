const WIDTH = 1254;
const HEIGHT = 614;
const MAX = 10;
const main = () => {
  bindingKey();
};

const getGlobalLength = () => {
  return parseInt($("#globalLength").val());
};

const bindingKey = () => {
  $(".js-sort-list").click(() => {
    console.log(getGlobalLength());
  });
  $(".js-generate-list").click(() => {
    let randomArray = generateRamdomArray(getGlobalLength());
    drawChart(randomArray);
  });
};

const generateRamdomArray = (globalLength) => {
  let arr = [];

  while (arr.length < globalLength) {
    let random = Math.floor(Math.random() * globalLength) + 1;
    if (arr.indexOf(random) === -1) arr.push(random);
  }
  return arr;
};

const drawChart = (randomArray) => {
  resetChart();
  console.log(randomArray);
  randomArray.forEach((e) => {
    drawCollumn(e);
  });
};

const drawCollumn = (value) => {
  let valueHeight = (value / MAX) * 100;
  let whiteHeight = 100 - valueHeight;
  $(".chart").append(
    collumInnerHTML(whiteHeight.toString() + "%", valueHeight.toString() + "%")
  );
};

const resetChart = () => {
  $(".chart").empty();
};

const collumInnerHTML = (white, value) => {
  const whiteHeight = white;
  const valueHeight = value;
  let innerHTML =
    '<div class="chart__collumn">' +
    '<div class="chart__collumn_white-space" style="height:' +
    whiteHeight +
    '"></div>' +
    '<div class="chart__collumn_value-space" style="height:' +
    valueHeight +
    '"></div>' +
    "</div>";
  return innerHTML;
};
main();
