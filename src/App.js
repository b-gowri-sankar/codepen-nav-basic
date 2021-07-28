import './App.css';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

const Container = styled.div`
  display: flex;
`;


function App() {
  return (
    <Container>
      <Sidebar />
      <SearchBar />
    </Container>
  )
  
}

export default App;
