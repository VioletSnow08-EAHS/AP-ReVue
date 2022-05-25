import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../views/Home.vue";

const routerHistory = createWebHistory();
const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: "/",
			component: IndexPage,
		},
	],
});
export default router;