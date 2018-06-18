function getFirstSelector(selector) {
  var result = document.querySelector(selector);
  return result;
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div")
}