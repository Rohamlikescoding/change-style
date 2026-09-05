import BorderStyleList from "./components/BorderStyleList";
import ComponentObject from "./components/ComponentObject";

function App() {
  return (
    <>
      <main className="flex gap-50 flex-row justify-center items-center min-h-screen">
        <ComponentObject />
        <BorderStyleList />
      </main>
    </>
  );
}

export default App;
