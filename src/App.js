import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/source-code-pro";
import "./assets/anims.css";
import NyAnimator from "./components/NyAnimator";

function App() {
  return (
    <div style={{ marginTop: 150 }}>
      <NyAnimator />
    </div>
  );
}

export default App;
