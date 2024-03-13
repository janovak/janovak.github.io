document.addEventListener("DOMContentLoaded", function () {
    fetchVideos();
});

function fetchVideos() {
    // Calculate start timestamp (current time)
    const startTime = Date.now() / 1000; // Convert milliseconds to seconds

    // Calculate stop timestamp (24 hours ago)
    const stopTime = startTime - (24 * 60 * 60); // Subtract 24 hours in seconds

    // Construct the API URL with start and stop timestamps
    const apiUrl = `https://localhost:5000/v1.0/clip?start=${startTime}&end=${stopTime}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => renderVideos(data))
        .catch(error => console.error("Error fetching videos:", error));
}

function renderVideos(videoLinks) {
    const videoContainer = document.getElementById("videoContainer");

    videoLinks.forEach(link => {
        // Append &parent=janovak.github.io to each link
        const modifiedLink = link + "&parent=janovak.github.io";

        // Create video element
        const videoElement = document.createElement("video");
        videoElement.src = modifiedLink;
        videoElement.controls = true;

        // Append video element to container
        videoContainer.appendChild(videoElement);
    });
}