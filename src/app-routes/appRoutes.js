import ActivityList from "../containers/activity/activity-list/ActivityList.container";
import AddActivity from "../containers/activity/add-activity/AddActivity";

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
];

export default routes
