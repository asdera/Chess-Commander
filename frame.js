function accessMedia() {
	console.log("Allow access to microphone")

	navigator.webkitGetUserMedia({
		audio: true,
	}, function(media) {
		console.log(media)
		console.log("Microphone detected")
	}, function() {
		console.log("No microphone detected")
	});
}
