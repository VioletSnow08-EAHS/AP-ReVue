import {createApp} from "vue";
import App from "./App";
const app = createApp(App);
const router = require("./router/index");

app.use(router).mount("#app");