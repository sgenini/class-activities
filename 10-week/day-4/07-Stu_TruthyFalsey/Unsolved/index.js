// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉

<<<<<<< HEAD
// const logMessage = message => {
//   if (!message) {
//     message = "Hello World!";
//   }
//   console.log(message);
// };

// const logMessage = message => console.log(message ? "" : "Hello World!");

const logMessage = (message = "Hello World!") => {
=======
const logMessage = message => {
  if (!message) {
    message = "Hello World!";
  }
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
  console.log(message);
};

logMessage();

// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)

<<<<<<< HEAD
// const logTired = (beenWorkingAllDay) => {
//   let message;

//   if (beenWorkingAllDay) {
//     message = "I'm feeling really tired";
//   } else {
//     message = "I'm wide awake!";
//   }

//   console.log(message);
// };

const logTired = beenWorkingAllDay => {
  const message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";
=======
const logTired = (beenWorkingAllDay) => {
  let message;

  if (beenWorkingAllDay) {
    message = "I'm feeling really tired";
  } else {
    message = "I'm wide awake!";
  }

>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
  console.log(message);
};

logTired(true);
