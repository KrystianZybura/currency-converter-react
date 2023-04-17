import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Header />
      <Main
        body={
          <Form />
        }
      />
      <Footer />
    </Container>
  );
}

export default App;
