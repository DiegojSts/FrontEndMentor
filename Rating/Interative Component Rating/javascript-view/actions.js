var li = document.querySelectorAll("ul li");
var submit = document.getElementById("submit");
var rating = document.getElementById("rating");
var mainCard = document.getElementById("main-card");
var hiddenCard = document.getElementById("hidden-card");

li.forEach((item) => {
  item.addEventListener("click", () => {
    cssActiveClassManager(item);
  });
});

function cssActiveClassManager(item) {

item.classList.add("active");

li.forEach(ele => 
    ele !== item ? ele.classList.remove("active") : "")

}


submit.addEventListener("click", () => {
   var element = [...li].filter(ele => ele.classList.contains("active"));
   rating.innerHTML = `You selected ${element[0].innerHTML} out of 5`
   mainCard.classList.add("hidden-card");
   hiddenCard.classList.remove("hidden-card");


})