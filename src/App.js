import "./App.css";

function App() {
  return (
    <main className="bg-white rounded-xl overflow-hidden max-w-2xl">
      <div className="sm:grid sm:grid-cols-2">
        <img src={require("./assets/image-product-mobile.jpg")} alt="perfume" />
        <div className="p-5 grid">
          <p className="tracking-widest uppercase text-xs opacity-60">
            Perfume
          </p>
          <h1 className="my-2 font-bold text-3xl ">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="opacity-70 font-medium text-base">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <span className="text-green-700 text-3xl font-bold">$149.99</span>
            <p className="line-through	">169.99</p>
          </div>
          <button className="bg-green-700 hover:bg-green-800 flex items-center justify-center gap-3 mt-3 py-3 rounded-lg">
            <img src={require("./assets/icon-cart.svg").default} alt="icon" />
            <p className="text-white font-bold">Add to Cart</p>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
