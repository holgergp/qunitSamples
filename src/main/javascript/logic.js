var viewNewLabel = function () {
    $("#insertPoint").html("<label id='inserted'>Inserted</label>");
};

$(function () {
    $("#myInputField").blur(viewNewLabel);
});