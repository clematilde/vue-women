
import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// 1. Create the Vue app
const app = createApp(App)

// 2. Use the Vue router
app.use(router)

// 3. Render the Vue App on a specific element to the specific HTML element app
app.mount('#app')

//Bootstrap:
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faEnvelope);
