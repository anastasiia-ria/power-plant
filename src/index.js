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

const plants = [];
//first default plant
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
const props = {};
// const blueFood = changeState("soil")(5);
// const superWater = changeState("water")(5);

$(document).ready(function () {
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  let index = 2;
  function createClickForButton(buttonText) {
    $(`#${buttonText}`).on("click", function () {
      const index = $(".plant").attr("id");
      const newState = plants[index - 1](props[buttonText]);
      $(`#${buttonText}-value`).text(`${buttonText}: ${newState[buttonText]}`);
    });
  }

  $("#add-prop").on("click", function () {
    const index = $(".plant").attr("id");
    const property = $("#prop").val();
    const value = parseInt($("#value").val());
    const newState = plants[index - 1](changeState(property)(0));
    $("#newAdds").append(`<h3><div id="${property}-value">${property}: ${newState[property]}</div></h3>`);
    $("#prop-button").append(`<button id=${property} class="btn btn-success mx-3">Add ${property}</button>`);

    props[property] = changeState(property)(value);
    createClickForButton(property);
  });

  $("#new").on("click", function () {
    $("#plants-list").append(`<option value=${index}>Plant ${index}</option>`);
    plants.push(storeState());
    index++;
  });

  $("#plants-list").on("change", function () {
    $("#newAdds").empty();
    $("#prop-button").empty();
    let index = $("#plants-list :selected").val();
    for (const [key] of Object.entries(plants[index - 1]())) {
      let dynamicVal = plants[index - 1]()[key];
      console.log(dynamicVal + " key here: " + key);
      $("#newAdds").append(`<h3><div id="${key}-value">${key}: ${dynamicVal}</div></h3>`);
      $("#prop-button").append(`<button id=${key} class="btn btn-success me-3">Add ${key}</button>`);
      createClickForButton(key);
    }
    $("#name").text(`Plant ${index} Values`);
    $(".plant").attr("id", `${index}`);
  });
});
