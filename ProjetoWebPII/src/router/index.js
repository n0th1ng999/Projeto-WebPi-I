import { createRouter, createWebHistory } from "vue-router";
import CheatSheet from "../views/CheatSheetView.vue";

//Inical Route views
import LandingPageView from "../views/LandingPageView.vue"
import LoginView from "../views/LoginView.vue"

//Home Route view
import Home from "../views/HomeView.vue";

//Reunion route views
import ReunionsView from  "../views/Reunions/ReunionsView.vue"
import ReunionView from  "../views/Reunions/ReunionView.vue"
import CreateReunionView from  "../views/Reunions/CreateReunionView.vue"

//Profile Route views
import ProfileView from  "../views/Profile/ProfileView.vue"
import EditProfileView from  "../views/Profile/EditProfileView.vue"

//Project route views
import ProjectView from "../views/Projects/ProjectView.vue"
import ExecuteActivityView from "../views/Projects/ExecuteActivityView.vue"
import CreateActivityView from "../views/Projects/CreateActivityView.vue"
import ExecutionsView from "../views/Projects/ExecutionsView.vue"
import ActivityView from "../views/Projects/ActivityView.vue"

import { useUserStore } from "../stores/User";

function CheckLoggedInAdmin() {
	// Checks if its logged in and Admin
	if (!useUserStore().CheckIfLoggedUserIsAdmin()) {
		router.push("/404");
	}
}

function CheckLoggedIn() {
	// Checks if its logged in
	if (!useUserStore().CheckIfLoggedUserIsLogged()) {
		router.push("/404");
	}
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/CheatSheet",
			name: "CheatSheet",
			component: CheatSheet,
			//beforeEnter: [CheckLoggedInAdmin],
		},
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/LandingPage",
			name: "LandingPage",
			component: LandingPageView,
		},
		{
			path: "/Login",
			name: "Login",
			component: LoginView,
		},
		{
			path: "/Reunions",
			name: "Reunions",
			component: ReunionsView,
		},
		{
			path: "/Reunion/:ReunionId",
			name: "Reunion",
			component: ReunionView,
		},
		{
			path: "/Reunions/CreateReunion",
			name: "CreateReunion",
			component: CreateReunionView,
		},
		{
			path: "/Profile/EditProfile",
			name: "EditProfile",
			component: EditProfileView,
		},
		{
			path: "/Profile/:id",
			name: "Profile",
			component: ProfileView,
		},
		{
			path: "/Project",
			name: "Project",
			component: ProjectView,
		},
		{
			path: "/Project/CreateActivity",
			name: "CreateActivity",
			component: CreateActivityView,
		},
		{
			path: "/Project/Activity/:id",
			name: "Activity",
			component: ActivityView,
		},
		{
			path: "/Project/ExecuteActivity",
			name: "ExecuteActivity",
			component: ExecuteActivityView,
		},
		{
			path: "/Project/Executions",
			name: "Executions",
			component: ExecutionsView,
		}
	],
});

export default router;
