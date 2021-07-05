# UFO Sightings with Javascript

## Intro
Dana would like to make a webpage that allows users to seamlessly access and look up particular UFO sightings. While she has succeeded with her first webpage, she'd like more options for users to better specify the parameters of those sightings like the location they occurred in as well as their shapes. With a combination of Javascript, Bootcamp, CSS, and HTML formatting, we'll help modify Dana's UFO data webpage to be more search-friendly.

## Initial Limitations
In Dana's first webpage, users had access to the entire table of Dana's UFO data, and if they wished, they could filter the information by date (in MM/DD/YYYY format) with the click of a button. Still, when looking up days with plenty of UFO data like 1/1/2010, users who are after more specific parameters (like circle-shaped UFOs) may not like having to use their browser's Find function to single out their ideal data entries. Not to mention
that should Dana feel like adding more months (or even years) of UFO data, users' tedium may rise as they spam the Find function for multiple parameters. As such, it would behoove Dana to update her webpage with additional filters aside from date.

## Changes Made
To create additional filters, we'll have to define a new JavaScript function for filters and modify the filter function to account for those new filters. Fortunately, we can refer to code from a hint in Module 11's Challenge (2021), in which we'll save inputted element names, element values, and filter id's. Moreover, the code checks to see if each saved input matches any particular parameter in the UFO data (i.e. Is "circle" a valid parameter in our UFO data table? "Square?"). For matches, the code adds the inputted filters into a **filters** array, but for nonmatches, the code will throw those nonmatching inputs out. For the preexisting filtering function, we can refactor our datetime if-statement function for four new parameters: city, state, country, and shape. Lastly, to make the filtering process more automatic, we'll replace button-pertinent code in our **app.js** and **index.html** files with input-changing code. That way, instead of clicking a button to apply filters, one can just move onto another filter or press Enter on the keyboard to apply the filter.

## Remaining Limitations
There exists a few limitation for Dana, however. For one, there's only 2 weeks of UFO data, from 1/1/2010 to 1/13/2010. Moreover, Dana doesn't list sources of the UFO sighting reports beyond mentions in the comments. We advise Dana to consider these setbacks when publishing her webpage.
