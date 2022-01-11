

d3.csv("data/main_chars.csv")

			//loaded correctly
			.then(function(input_data) {

				for (let i = 0; i < input_data["columns"].length; i++) {
					d3.select("#characters").append("li").text(input_data["columns"][i]);
				}

			})

			//error loading
			.catch(function(error) {
				console.log("Error loading csv")
			})