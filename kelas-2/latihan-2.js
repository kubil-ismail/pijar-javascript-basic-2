const anotherObject = {
  methodOne: function () {
    // in the function expression case, this refers to the object that was created inside the createObject.
    this.methodOne();
    console.log("gotcha you catch me");
  },
  methodTwo: () => {
    // In the arrow function case, this refers to this of createObject itself.
    console.log("gotcha you catch me again");
  },
};

anotherObject.methodTwo(); // execute
