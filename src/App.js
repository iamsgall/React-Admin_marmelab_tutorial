import logo from './logo.svg';
import './App.css';
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/UserList';
import Dashboard from './components/Dashboard';
import PostList, {PostEdit, PostCreate} from './components/PostList';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './auth//authProvider';

function App() {
  const dataProvider = jsonServerProvider(
    'https://jsonplaceholder.typicode.com'
  );

  return (
    <div className='App'>
      <Admin
        authProvider={authProvider}
        dashboard={Dashboard}
        dataProvider={dataProvider}
      >
        <Resource
          name='posts'
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
        <Resource name='users' list={UserList} icon={UserIcon} />
      </Admin>
    </div>
  );
}

export default App;
