function postComment() {
	// creating variable names for user inputs
	var nameInput = document.getElementById("nameInput").value
	var commentInput = document.getElementById("commentInput").value
	// creating the text content variables
	var newNameText = document.createTextNode(nameInput)
	var newCommentText = document.createTextNode(commentInput)
	// creating new elements for the user posts
	var newNameH5 = document.createElement("h5")
	// setting a new font using a class in css
	newNameH5.setAttribute("class", "audio-font")
	// putting text from user into the h5 created above
	newNameH5.appendChild(newNameText)
	// creating a paragraph tag where the users comment goes
	var newCommentP = document.createElement("p")
	// adding text shadows to the comment text
	newCommentP.setAttribute("class", "shadows-font")
	// putting the user comment text into the p tag
	newCommentP.appendChild(newCommentText)
	// creating an h6 tag to put the current date and time into
	var newDateH6 = document.createElement("h6")
	// creating the date
	var d = new Date()
	// using the full date
	var date = d.toString()
	// creating the text node for the date made above
	var dateText = document.createTextNode(date)
	// appending the text node to the h6 made above
	newDateH6.appendChild(dateText)
	// Appending the new name, date, and comment elements
	addComment.appendChild(newNameH5)
	addComment.appendChild(newCommentP)
	addComment.appendChild(newDateH6)
}