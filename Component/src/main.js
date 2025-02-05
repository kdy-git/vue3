import {createApp} from 'vue';
import App from "./App.vue"
import AppHeader from "./components/AppHeader.vue"
import AppNav from "./components/AppNav.vue"
import BookComponent from "./components/BookComponent.vue"

const app = createApp(App);
app.component("App", App);
app.component("BookComponent", BookComponent);
app.component("AppHeader", AppHeader)
app.component("AppNav", AppNav)
app.mount("#app")