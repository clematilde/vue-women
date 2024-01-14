<template>
  <div class="container about">
    <div class="row">
      <p>
      In French, my native language, we call that "se faire tirer le portrait," which means
      to have one's portrait taken, usually in a somewhat formal manner by a professional
      photographer. Discovering this collection of business cards, I was quite fascinated
      by these frozen moments in time that have nevertheless survived to this day.
      </p>
      <p>
      And then, I wondered, who was considered important enough at that time to need a business card?
      Are these individuals still popular today?
      And among them, how many women were considered prominent, recognized, and "important enough"
      to claim the right to hold this small piece of cardboard marking of such a significant social role, mainly holded by men?
      </p>
      <p>
      As an archivist, I have always been fascinated by the passage of time and how artifacts
      from the past continue to reach us today. I am also really interested by the new technologies. I
      recently started coding and am intrigued by the open data community and Digital Humanities.
      I came across this dataset while looking at the differents projects that have been made using digitized
      cultural artifacts, and I simply decided to turn it into a mini-project to apply what I've learned
      from the Vue framework. I initially sorted the dataset by selecting women,
      then musicians, and those with an existing Wikipedia page. I then redesigned this data
      to create a mini showcase for these women from the past.
      <br>
      <br>
      The original dataset can be found here: <a href="https://codingdavinci.de/daten/historische-portraetsammlung-carte-de-visite">Historische Porträtsammlung - Carte de Visite, bpk-Bildarchivs </a>.
      <br>
      <br>
      The pictures were digitized and made available to the public under a public license as part of the <a href="https://codingdavinci.de/de">Coding Da Vinci cultural hackhaton</a>
    </p>

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.row {
  text-align: center;
  margin: 50px;
}

.about a {
  color: black;
  font-weight: 500;
}
</style>
