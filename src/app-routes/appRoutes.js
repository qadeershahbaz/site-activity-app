import ActivityList from "../containers/activity/activity-list/ActivityList.container";
import AddActivity from "../containers/activity/add-activity/AddActivity";
import Partners from "../containers/partners/Partners";

const routes = [
 {
    path: "/activity",
    name: "Activity",
    Component: ActivityList,
  },
  {
    path: "/activity/add-activity",
    name: "Add Activity",
    Component: AddActivity,
  },
  {
    path:'/partners',
    name: 'Partners',
    Component:Partners
  }
];

export default routes
