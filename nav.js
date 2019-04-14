window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
	let data= event.data;
	if (data.type == "back"){
		window.history.back()
	} else if (data.type=="forward"){
		window.history.forward()
	} else if (data.type=="nav") { 
		document.location=data.destination
	}
}