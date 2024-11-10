"use strict";

const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
for (const category of categories) {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);

  category.style.backgroundColor = "#F6F6FE";
  category.style.padding = "16px";
  category.style.marginBottom = "24px";
  category.style.listStyle = "none";
  category.style.fontFace = "Montserrat";
  category.style.fontWeight = "600";
  category.style.fontSeize = "24px";
  category.style.lineHeight = "32px";
  category.style.letterSpacing = "4%";

  const elements = category.querySelectorAll("li");
  for (const elem of elements) {
    elem.style.listStyle = "none";
    elem.style.fontFace = "Montserrat";
    elem.style.fontWeight = "400";
    elem.style.fontSeize = "16px";
    elem.style.lineHeight = "24px";
    elem.style.letterSpacing = "4%";
    elem.style.borderWidth = "1px";
    elem.style.borderColor = "#808080";
    elem.style.borderRadius = "4px";
  }
}
