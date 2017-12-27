function postComment() {
	// creating variable names for user inputs
	var nameInput = document.getElementById("nameInput").value
	var commentInput = document.getElementById("commentInput").value
	// creating the text content variables
	var newNameText = document.createTextNode(nameInput)
	var newCommentText = document.createTextNode("Comment: " + commentInput)
	// creating new elements for the user posts
	var newNameH5 = document.createElement("h5")
	newNameH5.setAttribute("class", "audio-font")
	newNameH5.appendChild(newNameText)
	var newCommentP = document.createElement("p")
	newCommentP.setAttribute("class", "shadows-font")
	newCommentP.appendChild(newCommentText)
	// Appending the new heading and comment elements
	addComment.appendChild(newNameH5)
	addComment.appendChild(newCommentP)
	
}