import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './componants/users'
import { VacationSheetList, VacationSheetEdit, VacationSheetCreate } from './componants/vacationSheet'
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './componants/Dashboard';
import authProvider from './provider/authProvider';
import MyLoginPage from './componants/MyLoginPage.js'

import firebaseDataProvider from 'ra-data-firebase-client'
import {emailAndPasswordAuthProvider} from "ra-auth-firebase-client";

import firebase from 'firebase/app'
import "firebase/database";
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCwxesRBAR1jAfzTuL8nVgUC9kG9Ajkk7Y",
  authDomain: "youneedholiday-982b7.firebaseapp.com",
  databaseURL: "https://youneedholiday-982b7.firebaseio.com",
  projectId: "youneedholiday-982b7",
  storageBucket: "youneedholiday-982b7.appspot.com",
  messagingSenderId: "271159529392",
  appId: "1:271159529392:web:af4ac511273d48680ad075",
  measurementId: "G-PRKVT8LQS6",
}

const firebaseAppInstance = firebase.initializeApp(config);
 
const options = {
  app: firebaseAppInstance,
}

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={firebaseDataProvider(firebase)} authProvider={emailAndPasswordAuthProvider(firebase)} loginPage={MyLoginPage}>
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="vacationSheets" list={VacationSheetList} edit={VacationSheetEdit} create={VacationSheetCreate} icon={PostIcon} />
  </Admin>
);

export default App;