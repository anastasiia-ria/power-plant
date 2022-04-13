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

const stateControl = storeState();

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
  let index = 1;
  $("#feed").on("click", function () {
    const index = this.parentElement().attr("id");
    const newState = stateControl(feed);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });

  $("#water").on("click", function () {
    const newState = stateControl(hydrate);
    $("#water-value").text(`Water: ${newState.water}`);
  });

  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $("#show-state").on("click", function () {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $("#soil-value").text(`Soil: ${currentState.soil}`);
    $("#water-value").text(`Water: ${currentState.water}`);
  });

  $("#new").on("click", function () {
    index++;

    $("#plants").append(`<div id="${index}"><h1>${index} Plant's Values</h1><button class="btn-success" id="feed">Add soil</button>
    <button class="btn-success" id="water">Add water</button><h3><div id="soil-value">0</div></h3><h3><div id="water-value">0</div></h3></div>`);
    plants.push("plant");
  });
});
