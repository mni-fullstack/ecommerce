import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
          <h1>welcome to my ecommerce</h1>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
