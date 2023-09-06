//Selecting global variables

//querySelector targets the first instance of an element with that class.
const about = document.querySelector(".about");

//querySelectorAll targets all instances of elements with that class.
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

//about is the section with tabs and information container
about.addEventListener("click", function (e) {
  //id is targetted of the item you click (tab/btn id)
  const id = e.target.dataset.id;

  //if id is found (meaning a button is clicked)
  if (id) {
    //remove active from other buttons - white background etc
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    //allow chosen id element to display
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
