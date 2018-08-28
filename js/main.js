// Setting the variable of the title h1 elements
var titleH1 = document.getElementById("title")
titleH1.innerText = "Create a User!"

// hidding the textarea and the comment button until the user makes a user profile
document.getElementById("commentInput").style.display = "none"
document.getElementById("post").style.display = "none"

// an array to push the user inputs to
var users = []

// the function that creates user profile
function createProfile() {
	// Creating the variables to set the users information
	var nameInput = document.getElementById("nameInput").value
	var userPic = document.getElementById("picture").value

	// setting a variable to select the prompt h4
	var h4Prompt = document.getElementById("promptName")

	// if the user doesn't enter a name then the function will break
	if(nameInput == "") {
		return h4Prompt.style.display = "block"
	}

	// setting the heading to the comment title rather than creat user
	titleH1.innerText = "What's on your mind?"

	// removing the promt to add a username once the user enters one
	if(h4Prompt.style.display == "block") {
		h4Prompt.style.display = "none"
	}

	// creating an object to be pushed in the array called users above outside the function
	var user = {}
	user["name"] = nameInput
	user["url"] = userPic

	// pushing the user inputs in object form to the users array above
	users.push(user)

	// Hiding the create profile inputs
	document.getElementById("nameInput").style.display = "none"
	document.getElementById("picture").style.display = "none"
	document.getElementById("userProfile").style.display = "none"

	// showing the textarea and the comment button until the user makes a user profile
	document.getElementById("commentInput").style.display = "block"
	document.getElementById("post").style.display = "block"
	
}

// the function that will post the emtpy comment if desired
function emptyPost() {
		var emptyComment = confirm("Are you sure you want to post an empty comment?")
		if(emptyComment == true) {
			// getting the user inputs for name and url
	var nameInput = users[0].name

	// creating variable for user inputs
	var commentInput = document.getElementById("commentInput").value

	// creating the text content variables
	var newNameText = document.createTextNode(nameInput)
	var newCommentText = document.createTextNode(commentInput)

	// creating a div to put the comment and user content into
	var newDiv = document.createElement("div")
	// creating an image for the profile picture
	var newImg = document.createElement("img")
	// creating new elements for the user posts
	var newNameH5 = document.createElement("h5")
	// creating an h6 tag to put the current date and time into
	var newDateH6 = document.createElement("h6")
	// creating a paragraph tag where the users comment goes
	var newCommentP = document.createElement("p")

	// setting the source of the img to the user input
	newImg.src = users[0].url

	// if the user doesn't enter an image url then the image is a empty default photo
	if(users[0].url == "") {
		newImg.src = "img/emptyProfile.png"
	}

	// setting a new font using a class in css
	newNameH5.setAttribute("class", "audio-font")

	// putting text from user into the h5 created above
	newNameH5.appendChild(newNameText)	

	// adding text shadows to the comment text
	newCommentP.classList.add("shadows-font", "mx-auto")

	// putting the user comment text into the p tag
	newCommentP.appendChild(newCommentText)

	// creating the date
	var d = new Date()

	// using the full date
	var date = d.toString()

	// creating the text node for the date made above
	var dateText = document.createTextNode(date)

	// appending the text node to the h6 made above
	newDateH6.appendChild(dateText)

	// Appending the new name, date, and comment elements
	newDiv.appendChild(newImg)
	newDiv.appendChild(newNameH5)
	newDiv.appendChild(newCommentP)
	newDiv.appendChild(newDateH6)
	addComment.prepend(newDiv)

	// Clearing the variables for the input everytime the user post a new comment
	document.getElementById("nameInput").value = ""
	document.getElementById("commentInput").value = ""
		} else{
			return
		}
	}

// The function that will post the users comment
function postComment() {

	// creating variable for user inputs
	var commentInput = document.getElementById("commentInput").value

	// if the user doesn't enter a comment send a confirm for empty comment
	if(commentInput == "") {
		return emptyPost()
	}

	// getting the user inputs for name and url
	var nameInput = users[0].name

	// creating the text content variables
	var newNameText = document.createTextNode(nameInput)
	var newCommentText = document.createTextNode(commentInput)

	// creating a div to put the comment and user content into
	var newDiv = document.createElement("div")
	// creating an image for the profile picture
	var newImg = document.createElement("img")
	// creating new elements for the user posts
	var newNameH5 = document.createElement("h5")
	// creating an h6 tag to put the current date and time into
	var newDateH6 = document.createElement("h6")
	// creating a paragraph tag where the users comment goes
	var newCommentP = document.createElement("p")

	// setting the source of the img to the user input
	newImg.src = users[0].url

	// if the user doesn't enter an image url then the image is a empty default photo
	if(users[0].url == "") {
		newImg.src = "img/emptyProfile.png"
	}

	// setting a new font using a class in css
	newNameH5.setAttribute("class", "audio-font")

	// putting text from user into the h5 created above
	newNameH5.appendChild(newNameText)	

	// adding text shadows to the comment text
	newCommentP.classList.add("shadows-font", "mx-auto")

	// putting the user comment text into the p tag
	newCommentP.appendChild(newCommentText)

	// creating the date
	var d = new Date()

	// using the full date
	var date = d.toString()

	// creating the text node for the date made above
	var dateText = document.createTextNode(date)

	// appending the text node to the h6 made above
	newDateH6.appendChild(dateText)

	// Appending the new name, date, and comment elements
	newDiv.appendChild(newImg)
	newDiv.appendChild(newNameH5)
	newDiv.appendChild(newCommentP)
	newDiv.appendChild(newDateH6)
	addComment.prepend(newDiv)

	// Clearing the variables for the input everytime the user post a new comment
	document.getElementById("nameInput").value = ""
	document.getElementById("commentInput").value = ""
}


// Triggering the function postComment() anytime the enter key is pressed
addEventListener("keydown", function (enter){
	if (enter.keyCode === 13) {
		enter.preventDefault()
		postComment()
	}
})
