let items = JSON.parse(localStorage.getItem("blogData")) || [];
window.onload = function() {
    listItems();
};
// function to add item to the items array
function addItem() {
  // get the value of the input box with querySelector
  let title = document.getElementById("postTitle");
  let date = document.getElementById("postDate");
  let sum = document.getElementById("postSummary");

  //the contents of each input box, title, date, summary
  let itemTitle = title.value;
  let itemDate = date.value;
  let itemSum = sum.value;

  // If input box is empty, return and alert the user
  // You can also do some more validation if here if you want
  if (itemTitle === "" || itemDate === "" || itemSum === "") return alert("Please fill in all entries with valid data");

  // If input is valid, add item to items array
  items.push({
    value: itemTitle,
    day: itemDate, 
    summary: itemSum,
  });

  // then convert to a string with JSON.stringify and save to localStorage
  localStorage.setItem("blogData", JSON.stringify(items));

  // call function to list all items
  listItems();

  // clear input box
  itemTitle.value = "";
  itemDate.value = "";
  itemSum.value = "";
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  //use dialog to confirm if user wants to cancel the post or not
  items.splice(index, 1);
  localStorage.setItem("blogData", JSON.stringify(items));
  listItems();
}
//
function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem("blogData", JSON.stringify(items));
  listItems();
}

// function that generates list of items and populates the html
function listItems() {
  let list = "";
  for (let i = 0; i < items.length; i++) {
    list += "<li class=" + (items[i].done ? "done" : "") + ">";
    list += "Post Title: " + items[i].value + " " + 
            "Post Date: " + items[i].day + " " + 
            "Post Summary: " + items[i].summary;
    list +=
      "<span class='label alert' onclick='deleteItem(" +
      i +
      ")'> delete</span></li>";
  }
  document.querySelector("#list-items").innerHTML = list;
}

// function to run when page loads
/*
(function () {
  listItems();
})();
*/