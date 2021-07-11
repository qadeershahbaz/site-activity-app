import React, { useEffect, useState } from "react";
import { API, Storage } from "aws-amplify";
import { listActivities } from "../../../graphql/queries";
import { withRouter, Link } from "react-router-dom";
import { Button, ListGroupItem } from "react-bootstrap";
import AppList from "../../../components/app-list/AppList";
import "./activity-list.scss";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [document, setDocument] = useState();

  useEffect(async () => {
    fetchActivites();
  }, []);

  async function fetchActivites() {
    const apiData = await API.graphql({ query: listActivities });

    setActivities(apiData.data.listActivities.items);
    let o_document = await Storage.get("edited excel sheet.csv");
    setDocument(o_document);
  }

  return (
    <>
      <div style={{ margin: "auto" }}>
        <Link to="/activity/add-activity">
          <Button style={{ margin: "auto", display: "block" }}>
            Add Activity
          </Button>
        </Link>
      </div>
      <AppList>
        {activities.map((activity) => (
          <ListGroupItem>{activity.name}</ListGroupItem>
        ))}
      </AppList>
      {document && <img src={document} style={{ width: 400 }} />}
    </>
  );
};

export default withRouter(ActivityList);
