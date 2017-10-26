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

  $addBtn.on("click", function() {

    // 1. Get field input data.
    var userInput = $(".description").val();

    // 2. Add item to budget controller.

    // 3. Add item to UI controller.

    // 4. Calculate the budget.

    // 5. Display the budget in the UI.


  });

  return {

  }

})(budgetController, UIController);
