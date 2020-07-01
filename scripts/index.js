var MAX;
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
  MAX = arr.length;
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
  $(".chart").append(collumInnerHTML(whiteHeight, valueHeight, value));
};

const resetChart = () => {
  $(".chart").empty();
};

const collumInnerHTML = (whiteHeight, valueHeight, value) => {
  const whitePercentage = whiteHeight.toString() + "%";
  const valuePercentage = valueHeight.toString() + "%";
  let innerHTML =
    '<div class="chart__collumn">' +
    '<div class="chart__collumn_white-space" style="height:' +
    whitePercentage +
    '"></div>' +
    '<div class="chart__collumn_value-space" style="height:' +
    valuePercentage +
    '">' +
    "<div>" +
    value +
    "</div>" +
    "</div>" +
    "</div>";
  return innerHTML;
};
main();
