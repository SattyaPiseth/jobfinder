import "./App.css";

function App() {
  return (
    <>
    <h1 className="mt-20 text-3xl text-blue-800 font-bold text-center">
    Environment : {import.meta.env.VITE_APP_MODE}
    </h1>
    <p className="mt-20 text-3xl text-blue-800 font-bold text-center">
    API URL : {import.meta.env.VITE_API_URL}
    </p>
    </>
  );
}

export default App;
