//Level 1: Automatic Table and Date Search

// from data.js
let tableData = data;

// Get a reference to the table body
let tbodyEl = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

//Loop trhough the tableData and append each row data cell
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);

    //create row element 
    let rowEl = tbodyEl.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value in the ufo report object
        let cellEl = rowEl.append("td");
        cellEl.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through 
// the date/time column to find rows that match user input.

// Select the button
let button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the datetime input element and get the raw HTML node
    let datetimeInputElement = d3.select("#datetime");
    // Get the value property of the datetime input element
    let datetimeInputValue = datetimeInputElement.property("value");

    // Select the city input element and get the raw HTML node
    let cityInputElement = d3.select("#city");
    // Get the value property of the city input element
    let cityInputValue = cityInputElement.property("value").toLowerCase();

    // Select the state input element and get the raw HTML node
    let stateInputElement = d3.select("#state");
    // Get the value property of the state input element
    let stateInputValue = stateInputElement.property("value").toLowerCase();

    // Select the country input element and get the raw HTML node
    let countryInputElement = d3.select("#country");
    // Get the value property of the country input element
    let countryInputValue = countryInputElement.property("value").toLowerCase();

    // Select the shape input element and get the raw HTML node
    let shapeInputElement = d3.select("#shape");
    // Get the value property of the shape input element
    let shapeInputValue = shapeInputElement.property("value").toLowerCase();

    let filteredData = tableData.filter(ufoReport => {
        let matchDatetime = datetimeInputValue === "" || ufoReport.datetime === datetimeInputValue
        let matchCity = cityInputValue === "" || ufoReport.city === cityInputValue
        let matchState = stateInputValue === "" || ufoReport.state === stateInputValue
        let matchCountry = countryInputValue === "" || ufoReport.country === countryInputValue
        let matchShape = shapeInputValue === "" || ufoReport.shape === shapeInputValue

        return matchDatetime && matchCity && matchState && matchCountry && matchShape
    });

    console.log(filteredData)

    tbodyEl.html("");

    //Loop trhough the tableData and append each row data cell
    filteredData.forEach(function(ufoReport) {
        console.log(ufoReport);

        //create row element 
        let rowEl = tbodyEl.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);

            // Append a cell to the row for each value in the ufo report object
            let cellEl = rowEl.append("td");
            cellEl.text(value);
        });
    });

});

//Level 2: Multiple Search Categories