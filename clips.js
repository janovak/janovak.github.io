document.addEventListener("DOMContentLoaded", function () {
    fetchVideos();
});

function fetchVideos() {
    let currentDate = new Date();
    const currentISODate = currentDate.toISOString();
    const twentyFourHoursAgoDate = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));
    const twentyFourHoursAgoISODate = twentyFourHoursAgoDate.toISOString();

    // Construct the API URL with start and stop timestamps
    const apiUrl = `https://128.199.11.249:443/v1.0/clip?start=${currentISODate}&end=${twentyFourHoursAgoISODate}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Add this line to log the data structure
            renderVideos(data);
        })
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