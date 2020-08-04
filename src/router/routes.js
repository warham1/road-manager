import Drive from "../view/drive";
import Manage from "../view/manage";
import Index from "../view/index";

const routes = [
	{ path: "/", component: Index },
	{ path: "/drive", component: Drive },
	{ path: "/manage", component: Manage },
];

export default routes;
