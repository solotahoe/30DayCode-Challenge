// function greet() {
//     console.log(this.name); // 'this' refers to the window object here
//   }

//   greet()

  const greet = () => {
    console.log(this.name); // 'this' inherits from the surrounding context (person object)
  };
  
  const person = {
    name: "Bob",
    greet: function() { // Regular function
        console.log(this.name);
    }
  };
  
  person.greet();