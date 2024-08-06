import { Provider } from 'react-redux';
import './App.css';
import Form from './components/Form/Form';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import configureStore from './components/configureteRedux';


function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <Form />
        <Search />
        <Table />
      </Provider>
    </>
  )
}

export default App
