const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let filteredFruits = fruit.filter((fruitName) =>
    fruitName.toLowerCase().includes(str.toLowerCase())
  );

  return filteredFruits;
}

function searchHandler(e) {
  const results = search(e.target.value);
  showSuggestions(results, e.target.value);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";
  results.forEach((result) => {
    const listItem = document.createElement("li");
    let highlightedText = highlightText(result, inputVal);
    listItem.innerHTML = highlightedText;
    // listItem.classList.add("list-highlight");
    // listItem.classList.toggle("list-highlight");
    suggestions.appendChild(listItem);
  });
}

function highlightText(text, searchText) {
  const lowerCaseText = text.toLowerCase();
  const lowerCaseSearchText = searchText.toLowerCase();
  const startIndex = lowerCaseText.indexOf(lowerCaseSearchText);
  const inputLength = lowerCaseSearchText.length;
  if (!searchText || startIndex === -1) {
    return "";
  }
  return (
    text.substr(0, startIndex) +
    "<b>" +
    text.substr(startIndex, inputLength) +
    "</b>" +
    text.substr(startIndex + inputLength)
  );
}

function highlightSuggestion(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.add("list-highlight");
  }
  if (e.target.tagName === "B") {
    e.target.parentElement.classList.add("list-highlight");
  }
}

function unHighlightSuggestion(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.remove("list-highlight");
  }
  if (e.target.tagName === "B") {
    e.target.parentElement.classList.remove("list-highlight");
  }
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.innerText;
  }
  if (e.target.tagName === "B") {
    input.value = e.target.parentElement.innerText;
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
suggestions.addEventListener("mouseover", highlightSuggestion);
suggestions.addEventListener("mouseout", unHighlightSuggestion);
