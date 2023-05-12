import Form from "./Form";
import Main from "./Main";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Main
        body={
          <Form
            legend={"Kantor"}
            specialText={"------->"}
          />
        }
      />
    </Container>
  );
};

export default App;
