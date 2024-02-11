// document.addEventListener('DOMContentLoaded', function() {
//     var searchButton = document.getElementById('searchButton');
//     if (searchButton) {
//         searchButton.addEventListener('click', function() {
//             var userInput = document.getElementById('searchInput').value;
//             var newUrl = '/onboarding.html?query=' + encodeURIComponent(userInput);
//             window.location.href = newUrl;
//         });
//     }
// });

document.getElementById('searchButton').addEventListener('click', function() {
    // Show the loading text and bar
    document.getElementById('loading').style.display = 'block';
    setTimeout(function() {
        document.getElementById('loadingBar').style.width = '100%';
    }, 100); // Start the loading bar

    // Redirect after some time
    setTimeout(function() {
        var userInput = document.getElementById('searchInput').value;
        var newUrl = '/onboarding.html?query=' + encodeURIComponent(userInput);
        window.location.href = newUrl;
    }, 2000); // Wait for 2 seconds then redirect
});