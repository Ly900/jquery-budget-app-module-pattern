// Budget Controller
var budgetController = (function() {


})();

// UI Controller
var UIController = (function() {
  var DOMstrings = {
    $inputType: $("select.type"),
    $inputDescription: $(".description"),
    $inputValue: $("input.amount"),
    $addButton: $("#add-btn"),
    $body: $("body")
  }
  function getInput() {
    return {
      type: DOMstrings.$inputType.val(),  // Will return "inc" or "exp"
      description: DOMstrings.$inputDescription.val(),
      value: DOMstrings.$inputValue.val()
    }
  }

  function getDOMstrings() {
    return DOMstrings;
  }

  return {
    getInput: getInput,
    getDOMstrings: getDOMstrings
  };

})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  var DOM = UICtrl.getDOMstrings();



  var ctrlAddItem = function() {

      // 1. Get field input data.
      var userInput = UICtrl.getInput();
      console.log(UICtrl.getInput());
      // 2. Add item to budget controller.

      // 3. Add item to UI controller.

      // 4. Calculate the budget.

      // 5. Display the budget in the UI.

  }

  DOM.$addButton.on("click", ctrlAddItem);

  DOM.$body.on("keypress", function(e) {
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
