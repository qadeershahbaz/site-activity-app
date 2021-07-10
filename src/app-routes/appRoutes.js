import ActivityList from "../containers/activity/activity-list/ActivityList.container";
import AddActivity from "../containers/activity/add-activity/AddActivity";
import ViewPartners from "../containers/partners/view-partners/ViewPartners";
import PartnerRecords from "../containers/partners/partner-records/PartnerRecords";
import AddPartnerRecord from "../containers/partners/add-partner-records/AddPartnerRecord";

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
    path: "/partners",
    name: "Partners",
    Component: ViewPartners,
  },
  {
    path: "/partners/partner-records/:partnerId",
    name: "Partner Records",
    Component: PartnerRecords,
  },
  {
    path: "/partners/partner-records/:partnerId/add-partner-record",
    name: "Add Partner Records",
    Component: AddPartnerRecord,
  },
];

export default routes;
