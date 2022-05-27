import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import IndexPage from "../views/Home.vue";
import LimitsAB from "@/views/Math/calculus/ab/units/1/LimitsAB";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/math/calculus/ab/units/1/limits",
			name: "LimitsAB",
			component: LimitsAB
		},
		{
			path: "/",
			name: "Index",
			component: IndexPage,
		},
	],
});


export default router;