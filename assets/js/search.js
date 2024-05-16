document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const cards = document.querySelectorAll(".item");
//   const cards = document.getElementById("text");

  function filterIcons(none) {
    // console.log(natija);
    const nothingfound = document.getElementById("nothing-alert");
    let number = 0;
    cards.forEach(function (card) {
      // console.log(card);
      const name = card.querySelector("strong").textContent.toLowerCase();
      // console.log(name);
      if (name.includes(none.toLowerCase())) {
        nothingfound.style.display = "none";
        // card.style.display = "flex";
        number++;
      } else {
        card.style.display = "none";
      }
    });
    if (number == 0) {
      nothingfound.style.display = "block";
    }
  }
  searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.trim();
    filterIcons(searchQuery);
  });
});


