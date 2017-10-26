// Budget Controller
var budgetController = (function() {

  var a = "a";



})();

// UI Controller
var UIController = (function() {



})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  var $addBtn = $("#add-btn");
  var $body = $("body");

  var ctrlAddItem = function() {

      // 1. Get field input data.
      var userInput = $(".description").val();
      test();
      // 2. Add item to budget controller.

      // 3. Add item to UI controller.

      // 4. Calculate the budget.

      // 5. Display the budget in the UI.

  }

  $addBtn.on("click", ctrlAddItem);

  $body.on("keypress", function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });

  function test() {
    console.log("test");
  }

  return {

  }

})(budgetController, UIController);
