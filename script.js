// write js code here if required
function updateTimer() {
    // Get the current date and time
    var now = new Date();

    // Format the date and time
    var formattedDate = formatDate(now);
    var formattedTime = formatTime(now);

    // Display the timer in the <p> tag
    document.getElementById('timer').textContent = formattedDate + ', ' + formattedTime;

    // Update the timer every second (1000 milliseconds)
    setTimeout(updateTimer, 1000);
}

function formatDate(date) {
    var day = addZero(date.getDate());
    var month = addZero(date.getMonth() + 1); // Months are zero-based
    var year = date.getFullYear();

    return day + '/' + month + '/' + year;
}

function formatTime(date) {
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());

    return hours + ':' + minutes + ':' + seconds;
}

function addZero(value) {
    return value < 10 ? '0' + value : value;
}

// Call the updateTimer function to start the timer
updateTimer();
