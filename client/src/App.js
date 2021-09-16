import styled from "styled-components";
import tw from "twin.macro";
import Home from "./app/pages/home";

const AppConainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
`}
`;
function App() {
  return (
    <AppConainer>
      <Home />
    </AppConainer>
  );
}

export default App;
