import React, { useEffect, useState } from "react";
import { API } from 'aws-amplify';
import {listActivities} from '../../graphql/queries';

const ActivityList = () => {

    const [activities,setActivities]=useState([])


    useEffect(()=>{
        fetchActivites()
    },[])

    async function fetchActivites() {
        const apiData = await API.graphql({ query: listActivities });
        setActivities(apiData.data.listActivities.items);
      }


      return( <>
        {
          activities.map(activity => (
            <div key={activity.id || activity.name}>
              <h2>{activity.name}</h2>
              <p>{activity.description}</p>

             
            </div>
          ))
        }
        
        </>)

};


export default ActivityList
