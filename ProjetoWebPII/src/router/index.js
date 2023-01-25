import { createRouter, createWebHistory } from "vue-router";
import CheatSheet from "../views/CheatSheetView.vue";

//Inical Route views
import LandingPageView from "../views/LandingPageView.vue";
import LoginView from "../views/LoginView.vue";

//Home Route view
import HomeView from "../views/HomeView.vue";

//Reunion route views
import ReunionssView from "../views/Reunions/ReunionssView.vue";
import ReunionnView from "../views/Reunions/ReunionnView.vue";
import CreateReunionView from "../views/Reunions/CreateReunionView.vue";

//Profile Route views
import ProfileView from "../views/Profile/ProfileView.vue";
import EditProfileView from "../views/Profile/EditProfileView.vue";

//Project route views
import ExecuteActivityView from "../views/Projects/ExecuteActivityView.vue";
import CreateActivityView from "../views/Projects/CreateActivityView.vue";
import EditExecutionView from "../views/Projects/EditExecutionView.vue";
import ProjectView from "../views/Projects/ProjectView.vue";
import ExecutionsView from "../views/Projects/ExecutionsView.vue";
import ActivityView from "../views/Projects/ActivityView.vue";
import EditActivityView from "../views/Projects/EditActivityView.vue";

//Admin route Views
import AdminView from "../views/Admin/AdminView.vue";
import AreasView from "../views/Admin/AreasView.vue";
import SchoolsView from "../views/Admin/SchoolsView.vue";
import ProjectsView from "../views/Admin/ProjectsView.vue";
import UsersView from "../views/Admin/UsersView.vue";
import LevelsView from "../views/Admin/LevelsView.vue";
import SingleProjectView from "../views/Admin/SingleProjectView.vue";
import ProjectExecutionsView from "../views/Admin/ProjectExecutionsView.vue";
import ProjectActivityView from "../views/Admin/ProjectActivityView.vue";

//404 
import PageNotFoundView from "../views/PageNotFoundView.vue";

import { useUserStore } from "../stores/User";

function CheckLoggedInAdmin() {
	// Checks if its logged in and Admin
	
	const UserStore = useUserStore()

	if (!UserStore.CheckIfLoggedUserIsAdmin()) {
		router.push("/404");
	}
}

function CheckLoggedIn() {

	const UserStore = useUserStore()
	// Checks if its logged in
	if (!UserStore.CheckIfLoggedUserIsLogged()) {
		router.push("/Login");
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
			path: "/Home",
			name: "Home",
			component: HomeView,
		},
		{
			path: "/",
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
			component: ReunionssView,
		},
		{
			path: "/Reunion/:id",
			name: "Reunion",
			component: ReunionnView,
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
			path: "/Project/EditActivity/:id",
			name: "EditActivity",
			component: EditActivityView,
		},
		{
			path: "/Project/EditExecution/:id",
			name: "EditExecutionView",
			component: EditExecutionView,
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
		},
		{
			path: "/Admin",
			name: "Admin",
			component: AdminView,
		},
		{
			path: "/Admin/Areas",
			name: "Areas",
			component: AreasView,
		},
		{
			path: "/Admin/Schools",
			name: "Schools",
			component: SchoolsView,
		},
		{
			path: "/Admin/Projects",
			name: "Projects",
			component: ProjectsView,
		},
		{
			path: "/Admin/Users",
			name: "Users",
			component: UsersView,
		},
		{
			path: "/Admin/Levels",
			name: "Levels",
			component: LevelsView,
		},
		{
			path: "/Admin/Project/:id",
			name: "SingleProjectView",
			component: SingleProjectView,
		},
		{
			path: "/Admin/Project/:id",
			name: "ProjectExecutionsView",
			component: ProjectExecutionsView,
		},
		{
			path: "/Admin/Project/:id",
			name: "ProjectActivityView",
			component: ProjectActivityView,
		},
		{ path: '/:pathMatch(.*)*', 
			name: 'Page Not Found', 
			component: PageNotFoundView },
	],
	
});



export default router;
