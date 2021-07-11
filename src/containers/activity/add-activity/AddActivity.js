import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { API,Storage } from "aws-amplify";
import AppForm from "../../../components/app-form/AppForm.component";
import { createActivity } from "../../../graphql/mutations";


const AddActivity = () => {
  const history=useHistory()
  const handleSubmit = async (data) => {
    let formData = data;
    let { name, description, amount, documents } = formData;
    let {
      username,
      attributes: { sub: userID },
    } = await API.Auth.currentAuthenticatedUser();

    let documentArray = Object.values(documents).map((i) =>i);
    documentArray.forEach(async(i)=>{
      await Storage.put(i.name,i)
    })

    let postData = {
      name,
      description,
      amount,
      document: documentArray,
      userName: username,
      userID,
    };
 

    let res = await API.graphql({
      query: createActivity,
      variables: { input: postData },
    });
  
    
history.push('/activity')
   
  };

  return (
    <>
      <AppForm handleFormSubmit={handleSubmit} />
    </>
  );
};

export default withRouter(AddActivity);
