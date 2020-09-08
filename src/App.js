import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './componants/users'
import { VacationSheetList, VacationSheetEdit, VacationSheetCreate } from './componants/vacationSheet'
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './componants/Dashboard';
//import authProvider from './provider/authProvider';
import MyLoginPage from './componants/MyLoginPage.js';

import './variables/firebase';
import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from 'firebase/app'

import {emailAndPasswordAuthProvider} from "./provider/authProvider";


 
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={firebaseDataProvider(firebase)} authProvider={emailAndPasswordAuthProvider(firebase)} loginPage={MyLoginPage}>
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="vacationSheets"
     list={VacationSheetList}
     edit={VacationSheetEdit} 
     create={VacationSheetCreate} 
     icon={PostIcon} 
     />
  </Admin>
);

export default App;