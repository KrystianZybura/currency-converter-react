import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Header
        title="Kalkulator walut"
      />
      <Main
        body={
          <Form
            legend={"Kantor"}
            specialText={"------->"}
          />
        }
      />
      <Footer
        copyright={"Copyright © 2023 "}
        mail={"Example_email@gmail.com"}
      />
    </Container>
  );
};

export default App;
