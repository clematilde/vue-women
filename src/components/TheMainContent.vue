<script setup>
import { ref, onMounted } from "vue";

// Import data from json
import jSonData from '../assets/id_filtered_data_besch.json';

const dataWomen = ref(jSonData)

function getImageUrl(dateiname) {
  return new URL(`../assets/images/${dateiname}`, import.meta.url);
}

const transformDescription = (input) => {
  return input.replace(/<BR>/g, '<br>')
}

// Import Carousel
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'

const currentSlide = ref(0);

const slideTo = (val) => {
  currentSlide.value = val;
};

// Use Axios to make asynchronous HTTP Request to the Wikipedia API
import axios from 'axios'


// API WIKIPEDIA
const apiUrlEn = 'https://en.wikipedia.org/w/api.php';
const apiUrlDe = 'https://de.wikipedia.org/w/api.php';

// hide API Key
const apiKey = import.meta.env.VUE_APP_API_KEY;

async function fetchDataFromWikipedia(url, indexJson) {
  try {
    var searchTitle = dataWomen.value[indexJson].title;
    var response = await axios.get(url, {
      params: {
        action: 'query',
        prop: 'extracts',
        list: 'search',
        srsearch: searchTitle,
        apikey: apiKey, // If your API requires an API key
        origin: '*',
        srlimit: 4,
        format: 'json',
      },
    });

    var searchResults = response.data.query.search;
    if (searchResults.length > 0) {
      var pageId = response.data.query.search[0].pageid;

      response = await axios.get(url, {
        params: {
          action: 'query',
          prop: 'extracts',
          redirects: "1",
          exintro: true,
          explaintext: true,
          pageids: pageId,
          apikey: apiKey, // If your API requires an API key
          origin: '*',
          format: 'json',
        },
      });

      dataWomen.value[indexJson].description = response.data.query.pages[pageId].extract;
      return true;
    } else {
      console.log("No page ID found for", searchTitle);
    }
  }
  catch (error) {
    console.error('Error fetching data from Wikipedia:', error);
  }
  return false;
}

// Call the fetchDataFromWikipedia function when the component is mounted
onMounted(() => {
  console.log('onMounted')

  for (let index = 0; index < jSonData.length; index++) {
    if (!fetchDataFromWikipedia(apiUrlEn, index)) {
      fetchDataFromWikipedia(apiUrlDe, index);
    }
  }
});

</script>

<template>
  <!-- On big screens -->
  <div class="container-fluid">
    <div class="row">
      <div class="d-none d-lg-block">
        <div class="carousel-line">
          <Carousel id="thumbnails" :items-to-show="5" :wrap-around="true" v-model="currentSlide" ref="carousel">
            <slide v-for="(data, index) in dataWomen" :key="data.id">
              <div class="carousel__item" @click="slideTo(index)">
                <div class="cardTitle">
                  <div class="image-container">
                    <img :src="getImageUrl(data.dateiname)" alt="Image">
                    <p>{{ data.title }}</p>
                  </div>
                </div>
              </div>
            </slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <!-- on medium screens-->
        <div class="col-lg-12 d-sm-block d-md-block d-lg-none">
          <div class="carousel-line ">
            <Carousel id="thumbnails" :items-to-show="1" :wrap-around="true" v-model="currentSlide" ref="carousel">
              <slide v-for="(data, index) in dataWomen" :key="data.id">
                <div class="carousel__item" @click="slideTo(index)">
                  <div class="cardTitle">
                    <div class="image-container">
                      <img :src="getImageUrl(data.dateiname)" alt="Image">
                      <p>{{ data.title }}</p>
                    </div>
                  </div>
                </div>
              </slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <!-- on small screens-->
    <div class="row">
      <div class="col-lg-12 d-lg-none">
        <div class="carousel-line ">
          <Carousel id="thumbnails" :items-to-show="1" :wrap-around="true" v-model="currentSlide" ref="carousel">
            <slide v-for="(data, index) in dataWomen" :key="data.id">
              <div class="carousel__item" @click="slideTo(index)">
                <div class="cardTitle">
                  <div class="image-container">
                    <img :src="getImageUrl(data.dateiname)" alt="Image">
                    <p>{{ data.title }}</p>
                  </div>
                </div>
              </div>
            </slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>

  </div>


  <div class="overview">
    <div class="container">
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
          <Slide v-for="(data) in dataWomen" :key="data.id">
            <div class="carousel-content row">
              <div class="carousel__item col-sm-6">
                <img :src="getImageUrl(data.dateiname)" alt="Image">
              </div>
              <div class="data-overview col-sm-6">
                <p>
                  <h1>{{ data.title }}</h1>
                  <div>{{ data.description }}</div>
                  <a v-bind:href="data.wikipedia_link" target="_blank"> > Erfahre mehr über sie auf Wikipedia</a>
                </p>
                <p>
                  <h5>Credits:</h5>
                  <div>{{ data.title }}</div>
                  <div v-html="transformDescription(data.beschreibung)"></div>
                  <div>Copyright: {{ data.copyright }}</div>
                </p>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
</template>

<style scoped>
.cardTitle {
  width: 30vh;
  transition: box-shadow .3s;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  flex-direction: column;
  vertical-align: middle;
}

.cardTitle:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.cardTitle img {
  max-width: 25vh;
  max-height: 30vh;
  padding-top: 17px;
  object-fit: cover;
}

.cardTitle p {
  font-size: large;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.642);
  padding-top: 10px;
}

.image-container {
  text-align: center;
}

.image-container p {
  margin-bottom: 3;
}

.data-overview {
  text-align: left;
}
.data-overview a {
  color: black;
  font-style: italic;
}

.overview .container {
padding-top: 50px;}

.overview .container .carousel__slide {
  display: block;
  max-height: fit-content;
}

.overview .container .carousel__item {
  margin-bottom: 30px;
}
</style>
