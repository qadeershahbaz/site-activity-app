import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listActivities } from "../../../graphql/queries";
import { withRouter, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivites();
  }, []);

  async function fetchActivites() {
    const apiData = await API.graphql({ query: listActivities });
    setActivities(apiData.data.listActivities.items);
  }

  return (
    <>
      <div style={{ margin: "auto" }}>
        <Link to='/activity/add-activity'>
          <Button style={{ margin: "auto", display: "block" }}>
            Add Activity
          </Button>
        </Link>
      </div>
      {activities.map((activity) => (
        <div key={activity.id || activity.name}>
          <h2>{activity.name}</h2>
          <p>{activity.description}</p>
        </div>
      ))}
    </>
  );
};

export default withRouter(ActivityList);
