import logo from './logo.svg';
import './App.scss';
import 'antd-mobile/dist/antd-mobile.css'
import ActivityList from './containers/activity-list/ActivityList.container'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       Site Activity App Launch
      </header>
    <ActivityList/>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);

