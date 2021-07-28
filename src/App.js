import './App.css';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

const Container = styled.div`
  display: flex;
  background-color: #131417;
  color: #717790;
  height: 100vh;
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
