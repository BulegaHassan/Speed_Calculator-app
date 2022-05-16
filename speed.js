"use strict";

$(document).ready(() => {
    $("#calculate").click(() => {

        speed.distance = parseFloat($("#distance").val());
        speed.time = parseFloat($("#time").val());

        if (speed.isValid) {
            $("#speed").val(speed.calculate().toFixed(1));
            $("#distance").select();
        } else {
            alert("Both entries must be numeric and greater than zero.");
            $("#distance").focus();
        }
    });
    $("#convert").click(() => {
        $("#speed_convert").val(speed.convertSpeed().toFixed(1));
    })

    $("#clear").click(() => {
        $("#distance").val("");
        $("#time").val("");
        $("#speed").val("");
        $("#speed_convert").val("");

        $("#distance").focus();
    });

    $("#distance").focus();
});