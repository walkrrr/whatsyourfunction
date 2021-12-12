//write a function
var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

//write a function with 1 parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
}
console.log(favoriteCookie());
console.log(favoriteCookie("chocolate chip"));

//write a function with 2 parameters
var introduce = function (name, occupation) {
return `My name is ${name}, and I work as a ${occupation} for a living.`;  
};
console.log(introduce);
console.log(introduce("RWR", "recruiter"));

//Create a Function to Capture Input
var hydrationFeedback = function (){
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?"));
    if (numGlasses >= 8) {
      console.log("Congratulations! You drank enough water today!");
    }
        else if (numGlasses < 8) {
          console.log("You should drink some more water.");
        }
  };
hydrationFeedback();



