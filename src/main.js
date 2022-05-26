import {createApp} from "vue";
import App from "./App";
const app = createApp(App);
const router = require("./router/index");
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"

app.use(router).mount("#app");