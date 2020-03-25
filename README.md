# Plotly - Belly Button Biodiversity

In this project, we have built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The goal of this project was to use JavaScript to present interactive visualizations of belly button biodiversity data within a web page. Since the baseline data was provided in JSON format, D3 was used to import and process the data, while Plotly was used to generate the required visualizations.

![Bacteria by filterforge.com](Images/bacteria.jpg)

#### Questions

1. What is the demographic information of the individual associated with each specific belly button sample?
2. What are the top ten Operational Taxonomic Units (OTUs) by concentration in each specific belly button sample?
3. What are the concentrations of all the Operational Taxonomic Units (OTUs) in each specific belly button sample?
4. What is the weekly wash frequency of each specific belly button sample?

#### Datasets

https://github.com/LolitaDias/Plotly_Belly-Button-Biodiversity-Analysis/blob/master/data/samples.json

#### Tasks

1. Import the belly button sample data from the JSON file and create a function for web page initialization.
2. Extract each sample ID number and append it to the HTML dropdown menu container.
3. Extract and process the demographic information and OTU data for the first sample.
4. Append demographic information for the first sample to the appropriate HTML container.
5. Generate a bar chart of the top ten OTUs by concentration in the first sample and connect it to the appropriate HTML container.
6. Generate a bubble chart of the concentrations of all of the OTUs in the first sample and connect it to the appropriate HTML container.
7. Generate a gauge chart of the weekly wash frequency of the first sample and connect it to the appropriate HTML container.
8. Create a function to monitor and extract the currently selected sample ID number from the HTML dropdown menu.
9. Repeat steps three through seven for the currently selected sample ID number.

#### Results

Solution published link: https://lolitadias.github.io/Plotly_Homework/


























### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)


