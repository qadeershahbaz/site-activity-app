import React, { useEffect, useState } from "react";
import { API ,Storage} from "aws-amplify";
import { listActivities } from "../../../graphql/queries";
import { withRouter, Link } from "react-router-dom";
import { Button,ListGroupItem } from "react-bootstrap";
import AppList from "../../../components/app-list/AppList";
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer'
import './activity-list.scss'

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [document,setDocument]=useState()

  useEffect(async () => {
    console.log('API')
    console.log(await API.Auth.currentAuthenticatedUser())
    fetchActivites();
  }, []);

  async function fetchActivites() {
    const apiData = await API.graphql({ query: listActivities });
   
    setActivities(apiData.data.listActivities.items);
    // let data=apiData.data.listActivities.items
    // let document=data[3].document[0]
    let o_document=await Storage.get('edited excel sheet.csv')
    console.log(o_document)
    setDocument(o_document)
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
      <AppList>
      {activities.map((activity) => (
       <ListGroupItem>{activity.name}</ListGroupItem>
      ))}
  
 
</AppList>
{document&&<DocViewer sandbox={false} pluginRenderers={DocViewerRenderers} documents={[document]} style={{ height: 500}} />}
{document&&<img src={document} style={{width: 400}} />}
    
    </>
  );
};

export default withRouter(ActivityList);
