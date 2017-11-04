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

  var getInput = function() {
    return {
      type: DOMstrings.$inputType.val(),  // Will return "inc" or "exp"
      description: DOMstrings.$inputDescription.val(),
      value: DOMstrings.$inputValue.val()
    }
  }

  var getDOMstrings = function() {
    return DOMstrings;
  }

  return {
    getInput: getInput,
    getDOMstrings: getDOMstrings
  };

})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  var setUpEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    DOM.$addButton.on("click", ctrlAddItem);
    DOM.$body.on("keypress", function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  }

  var init = function() {
    setUpEventListeners();
  }

  var ctrlAddItem = function() {

      // 1. Get field input data.
      var userInput = UICtrl.getInput();
      console.log(userInput);
      // 2. Add item to budget controller.

      // 3. Add item to UI controller.

      // 4. Calculate the budget.

      // 5. Display the budget in the UI.

  }

  var test = function() {
    console.log("test");
  }

  return {
    init: init
  }

})(budgetController, UIController);

controller.init();
