// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
// We'll make an empty array variable 'filters' by setting it equal to {}, 
// per the Module 11 Challenge hint (2021).
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
    // For steps 4 thru 5, we'll refactor code from the Module 11 Challenge hint.
    // 4a. Save the element that was changed as a variable.
    let changedElement =  d3.select(this)

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId]
    }
 
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    // Following 11.5.3 (2021), we'll do just that.
    // Similarly, we'll grab five separate values, including the datetime value, 
    // in a manner similar to our code from 11.5.3 (2021).
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#country").property("value")
    let country = d3.select("#country").property("value")
    let shape = d3.select("#shape").property("value")
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // Continuing with our refactoring of 11.5.3 (2021) code, we'll specify if statements
    // for each distinct value
    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (city) {
      filteredData = filteredData.filter(row => row.city === city)
    }
    if (state) {
      filteredData = filteredData.filter(row => row.state === state)
    }
    if (country) {
      filteredData = filteredData.filter(row => row.country === country)
    }
    if (shape) {
      filteredData = filteredData.filter(row => row.shape === shape)
    }

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
  // We'll refactor the code we made in 11.5.4 (2021). Per the Module 11
  // Challenge hint (2021), we make sure to use 'updateFilters' instead of 'handleclick'.
  // Moreover, since we aren't clicking any buttons, we change 'filter-btn' to 'input'
  // and 'click' to 'change' ("Module 11 Challenge", 2021).
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
