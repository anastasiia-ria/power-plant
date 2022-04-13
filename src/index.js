import $ from "jquery";

// This function stores our state.
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

let plants = [];
plants.push(storeState());

// const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

const feed = changeState("soil")(1);
// const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);

$(document).ready(function () {
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  let index = 2;

  $("#feed").on("click", function () {
    const index = $(".plant").attr("id");
    const newState = plants[index - 1](feed);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });

  $("#water").on("click", function () {
    const index = $(".plant").attr("id");
    const newState = plants[index - 1](hydrate);
    $("#water-value").text(`Water: ${newState.water}`);
  });

  $("#new").on("click", function () {
    $("#plants-list").append(`<option value=${index}>Plant ${index}</option>`);
    plants.push(storeState());
    index++;
  });

  $("#select").on("click", function () {
    let index = $("#plants-list :selected").val();
    let soil = plants[index - 1]().soil;
    let water = plants[index - 1]().water;
    console.log(soil, water);
    if (!isNaN(soil)) {
      $("#soil-value").text(`Soil: ${soil}`);
    } else {
      $("#soil-value").text(`Soil: 0`);
    }
    if (water > 0) {
      $("#water-value").text(`Water: ${water}`);
    } else {
      $("#water-value").text(`Water: 0`);
    }
    $("#name").text(`Plant ${index} Values`);
    $(".plant").attr("id", `${index}`);
  });
});
