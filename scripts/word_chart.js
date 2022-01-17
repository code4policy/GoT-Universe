//
// word_chart.py
//
// Author: Alan Burwell
// Last updated: 13 Jan 22
//
// DPI691MA, Group A4, Game of Thrones
//
// Code combined from two primary tutorials: 
// https://www.d3-graph-gallery.com/graph/barplot_button_data_hard.html
// https://www.d3-graph-gallery.com/graph/barplot_horizontal.html
//
// This code takes an input of a button selection of which season or all seasons, loads all_char_word_counts.json (generated via python), and displays an ordered bar chart based on the number of words spoken by character, filtering to the top 20 most verbose characters of the dataset (individual season or all seasons).


//filter to top number of characters
var num_chars = 20

//used to display chart subtitle after loading data
var seas_messages = ['All Seasons', 'Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7', 'Season 8']

//placeholder data arrays
data_all = []
data_1 = []
data_2 = []
data_3 = []
data_4 = []
data_5 = []
data_6 = []
data_7 = []
data_8 = []

//Load JSON data ... using D3 v4 format
d3.json("data/all_char_word_counts.json", function(json_data) {

	//
	//THIS IS UGLY but works ... should use case switching or function it out
	//

	//CALCULATE DATA FOR ALL SEASONS
	json_data = json_data.sort(function(a,b){ return b.word_tot - a.word_tot; });
	for (let i = 0; i < num_chars; i++) {
		data_all.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['word_tot']
		});
	}
	data_all = data_all.reverse()

	//CALCULATE DATA FOR SEASON 1
	json_data = json_data.sort(function(a,b){ return b.season_word_tots[0] - a.season_word_tots[0]; });
	for (let i = 0; i < num_chars; i++) {
		data_1.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['season_word_tots'][0]
		});
	}
	data_1 = data_1.reverse()

	//CALCULATE DATA FOR SEASON 2
	json_data = json_data.sort(function(a,b){ return b.season_word_tots[1] - a.season_word_tots[1]; });
	for (let i = 0; i < num_chars; i++) {
		data_2.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['season_word_tots'][1]
		});
	}
	data_2 = data_2.reverse()

	//CALCULATE DATA FOR SEASON 3
	json_data = json_data.sort(function(a,b){ return b.season_word_tots[2] - a.season_word_tots[2]; });
	for (let i = 0; i < num_chars; i++) {
		data_3.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['season_word_tots'][2]
		});
	}
	data_3 = data_3.reverse()

	//CALCULATE DATA FOR SEASON 4
	json_data = json_data.sort(function(a,b){ return b.season_word_tots[3] - a.season_word_tots[3]; });
	for (let i = 0; i < num_chars; i++) {
		data_4.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['season_word_tots'][3]
		});
	}
	data_4 = data_4.reverse()

	//CALCULATE DATA FOR SEASON 5
	json_data = json_data.sort(function(a,b){ return b.season_word_tots[4] - a.season_word_tots[4]; });
	for (let i = 0; i < num_chars; i++) {
		data_5.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['season_word_tots'][4]
		});
	}
	data_5 = data_5.reverse()

	//CALCULATE DATA FOR SEASON 6
	json_data = json_data.sort(function(a,b){ return b.season_word_tots[5] - a.season_word_tots[5]; });
	for (let i = 0; i < num_chars; i++) {
		data_6.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['season_word_tots'][5]
		});
	}
	data_6 = data_6.reverse()

	//CALCULATE DATA FOR SEASON 7
	json_data = json_data.sort(function(a,b){ return b.season_word_tots[6] - a.season_word_tots[6]; });
	for (let i = 0; i < num_chars; i++) {
		data_7.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['season_word_tots'][6]
		});
	}
	data_7 = data_7.reverse()

	//CALCULATE DATA FOR SEASON 8
	json_data = json_data.sort(function(a,b){ return b.season_word_tots[7] - a.season_word_tots[7]; });
	for (let i = 0; i < num_chars; i++) {
		data_8.push({
			'name': json_data[i]['name'],
			'word_tot': json_data[i]['season_word_tots'][7]
		});
	}
	data_8 = data_8.reverse()
	
})

//graph time

// set the dimensions and margins of the graph
var margin = {top: 15, right: 30, bottom: 20, left: 120},
width = 800 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#word_char_chart")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// Initialize the X axis
var x = d3.scaleLinear()
	.range([ 0, width ])
var xAxis = svg.append("g")
	.attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
var y = d3.scaleBand()
	.range([ height, 0])
	.padding(0.2);
var yAxis = svg.append("g")
	.attr("class", "myYaxis");


// A function that create / update the plot for a given variable:
function update(data, seas_num) {

	// Update the X axis
	x.domain([0, d3.max(data, function(d) { return d.word_tot }) ]);
	xAxis.transition().duration(1000).call(d3.axisBottom(x));

	// Update the Y axis
	y.domain(data.map(function(d) { return d.name; }));
	yAxis.call(d3.axisLeft(y));

	// Create the u variable
	var u = svg.selectAll("rect")
		.data(data);

	u
		.enter()
		.append("rect") // Add a new rect for each new elements
		.merge(u) // get the already existing elements as well
		.transition() // and apply changes to all of them
		.duration(1000)
		.attr("x", x(0))
		.attr("y", function(d) {return y(d.name); })
		.attr("width", function(d) {return x(d.word_tot); })
		.attr("height", y.bandwidth())
		.attr("fill", "#8b0000");

	// If less group in the new dataset, I delete the ones not in use anymore
	u
		.exit()
		.remove();

 	// update message and graph subtitle for which season we are looking at
 	console.log(seas_messages[seas_num])
 	document.getElementById("which_season").innerHTML = "Total words spoken by character for " + seas_messages[seas_num]

};



// Initialize the plot with the first dataset
// THIS DOES NOT WORK ... no idea why. the console.log calls succesesfully but the update does not actually execute. 
//console.log("make initial data call to generate");
//update(data_all);

