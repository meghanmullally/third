// function enableButton2() {
//   document.getElementById("button2").disable = false;
// }



function firstClick() {
  $("#2").removeClass("btn btn-outline-secondary inactive").addClass("btn-success").removeAttr("disabled");
  $("#2").tooltip('disabled');
};

function secondClick(){
  $("form").submit();
}

$(document).read(function(){
  $("#1").click(firstClick);
  $("#2").click(secondClick);
});