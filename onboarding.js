// This could be inside the onboarding.js or in a script tag in onboarding.html
window.onload = function() {
    // Get the query parameter from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('query'); // 'query' is the parameter name we used

    // Now you can use 'query' as needed
    console.log(query); // For example, log it to the console
};
