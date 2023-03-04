let items = JSON.parse(localStorage.getItem("blogData")) || [];
/*
items.push({
    value: "test 1", 
    day: "03/03/2016",
    summary: "test1 summary blah blah blah",
});
items.push({
    value: "test 2", 
    day: "03/03/2020",
    summary: "test2 summary blah blah blah",
});
items.push({
    value: "test 3", 
    day: "03/02/2000",
    summary: "test3 summary blah blah blah",
});
*/
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
  title.value = "";
  date.value = "";
  sum.value = "";
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  //use dialog to confirm if user wants to cancel the post or not
  items.splice(index, 1);
  localStorage.setItem("blogData", JSON.stringify(items));
  listItems();
}
function editItem(index) {
  //repopulation input fields with the content of items[index] so
  //it can be edited
  document.getElementById("postTitle").value = items[index].value;
  document.getElementById("postDate").value = items[index].day;
  document.getElementById("postSummary").value = items[index].summary;
  
  //once fields are repopulated, delete original post
  deleteItem(index); 

  //the add button will add the post back to localstorage
}
// function that generates list of items and populates the html
function listItems() {
  let list = "";
  for (let i = 0; i < items.length; i++) {
    list += "<li class=" + (items[i].done ? "done" : "") + ">";
    list += "Post Title: " + items[i].value + " " + 
            "Post Date: " + items[i].day + " " + 
            "Post Summary: " + items[i].summary;
    list += "<br>" + 
      "<button id='editPost' class='blogBtns' onclick='editItem(" + i + ")'>" + 
      "<img src='/assets/pencil_icon.jpeg' alt='edit_button'></button>" + 
      "<button id='deletePost' class='blogBtns' onclick='deleteItem(" + i + ")'>" + 
      "<img src='/assets/trash_icon.jpeg' alt='delete_button'></button></li>";
  }
  document.querySelector("#list-items").innerHTML = list;
}
