import { drawing } from "../scripts/draw";
const HEIGHT = 1254;
const WIDTH = 614;

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
main();
