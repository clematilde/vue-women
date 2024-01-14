import axios from 'axios';
import { apiUrl, dataWomen, wikiData } from "./TheMainContent.vue";

export async function fetchDataFromWikipedia() {
try {
const response = await axios.get(apiUrl, {
params: {
action: 'query',
format: 'json',
prop: 'extracts',
// pageids: '15550123',
exintro: true,
titles: dataWomen.title,
//apikey: apiKey, // If your API requires an API key
origin: '*'
},
});
// Extract the page content from the response
const pageId = Object.keys(response.data.query.pages)[0];
wikiData.value = response.data.query.pages[pageId].extract;
console.log(wikiData);
}
catch (error) {
console.error('Error fetching data from Wikipedia:', error);
}
}
