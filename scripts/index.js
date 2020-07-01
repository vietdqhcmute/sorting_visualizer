const HEIGHT = 1254;
const WIDTH = 614;

const main = () => {
  drawCollumn(10);
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
    console.log(randomArray);
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

const drawChart = ()=>{
  $(".chart")
}

const drawCollumn = (value) => {
  $(".chart").append(collumInnerHTML("80%","20%"));
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
