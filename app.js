// Function to plot Bar Chart and Bubble Plot
function charts(id)
{
    // Read the samples.json file
    d3.json("data/samples.json").then((data) => {
    //console.log(data)
        var all_otu_ids=data.samples[0].otu_ids;
        //console.log(all_otu_ids);

        var all_sample_values=data.samples[0].sample_values;
        //console.log(all_sample_values);

        var all_labels=data.samples[0].otu_labels;
        //console.log(all_labels);
  
        //Extract the sample_values
        var sample_value=data.samples[0].sample_values.slice(0,10).reverse();
        //console.log(sample_value);
    
        //Extract the labels
        var label=data.samples[0].otu_labels.slice(0,10);
        // console.log(label);

        //Extract the top 10 OTU_id's
        var otu_top_10=(data.samples[0].otu_ids.slice(0,10)).reverse();
        // console.log(otu_top_10);

        //Format OTU_IDs ( concatenate "OTU " as a prefix before the OTU ID value)
        var otu_id=otu_top_10.map(otu_id_value => "OTU " + otu_id_value);
        //console.log(otu_id)

    // Plot the Bar Chart

    //Trace
    var trace = {
        x:  sample_value,
        y:  otu_id,
        text: label,
        type: "bar",
        orientation: "h"
    };
    
    //Create Data variable for Bar Chart
    var data=[trace];

    //Plot the bar plot
    Plotly.newPlot("bar",data);

    // // Plot the Bubble Chart
    var trace1 ={
        x: all_otu_ids,
        y: all_sample_values,
        text: all_labels,
        mode: "markers",
        marker:{
            size: all_sample_values,
            color:all_otu_ids
        }
    };

    //Create Data variable for Bubble Chart
    var data1=[trace1];

    //Plot the bubble chart
    Plotly.newPlot("bubble",data1);
    });
}

// Function to get the Demographic Info
function demographic_info(id) {
        // Read the samples.json file
        d3.json("data/samples.json").then((data)=> {
    
            var metadata = data.metadata;
            console.log(metadata)
    
          // filter meta data info by id
           var result = metadata.filter(meta => meta.id.toString() === id)[0];
           var demographicInfo = d3.select("#sample-metadata");
            
         // clear the demographic info panel before getting the new id
           demographicInfo.html("");
    
           Object.entries(result).forEach((key) => {   
           demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
            });
        });
    }

// Function for the change event
function optionChanged(id) {
    charts(id);
    demographic_info(id);
}

// Function - initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // Read the samples.json file
    d3.json("data/samples.json").then((data)=> {
        console.log(data)

        // get the id data for the dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // Call the functions to plot the charts and publish the demographic info
        charts(data.names[0]);
        demographic_info(data.names[0]);
    });
}

init();
