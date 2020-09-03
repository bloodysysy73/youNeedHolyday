import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from './componants/users'
import {VacationSheetList, VacationSheetEdit, VacationSheetCreate} from './componants/vacationSheet'
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';
import Dashboard  from './componants/Dashboard';
import authProvider from './provider/authProvider'



const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard } dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="users" list={UserList} icon={UserIcon}/>
      <Resource name="posts" list={VacationSheetList} edit={VacationSheetEdit} create={VacationSheetCreate} icon={PostIcon}/>
  </Admin>
);

export default App;