const doc = document.getElementById("unorderlist");
const activitiesInIndia = [
  "Close to the sun",
  "Explore the majestic Taj Mahal in Agra",
  "Take a houseboat ride in the backwaters of Kerala",
  "Attend a traditional dance performance in Jaipur",
  "Visit the ancient ruins of Hampi",
  "Experience the vibrant markets of Delhi",
  "Go on a wildlife safari in Ranthambore National Park",
  "Participate in a cooking class in Goa",
  "Trek in the scenic landscapes of Himachal Pradesh",
  "Discover the spiritual atmosphere of Varanasi along the Ganges",
  "Enjoy a camel ride in the Thar Desert of Rajasthan",
];

activitiesInIndia.forEach((x) => {
  const li = document.createElement("li");
  li.innerText = x;
  li.className = "list__item";
  doc.appendChild(li);
});
