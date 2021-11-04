"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg1 = lbl => `${lbl} must be a valid number `;
const getErrorMsg2 = lbl => `${lbl} must be greater than zero`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const distance = parseFloat($("#distance").value);
    const time = parseFloat($("#time").value);

    if (isNaN(distance) ) {
        alert(getErrorMsg1("Distance driven"));
        focusAndSelect("#distance");
    } else if (isNaN(time)) {
        alert(getErrorMsg1("Time taken"));
        focusAndSelect("#time");
    } else if (distance <= 0) {
        alert(getErrorMsg2("Distance driven"));
        focusAndSelect("#distance");
    } else if (time <= 0) {
        alert(getErrorMsg2("Time taken"));
        focusAndSelect("#time");
    } else {
        $("#speed").value = (distance / time).toFixed(2);
    }
    
};
 
const convertSpeed = () => {
    let convert_speed = $("#speed").value / 3.6;
    convert_speed = convert_speed.toFixed(2);
    $("#speed_convert").value = convert_speed;
}
const clearEntries = () => {
    $("#distance").value = "";
    $("#time").value = "";
    $("#speed").value = "";
    $("#speed_convert").value = "";

    $("#distance").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#convert").addEventListener("click", convertSpeed);
    $("#clear").addEventListener("click", clearEntries);
    
    $("#distance").focus();
});