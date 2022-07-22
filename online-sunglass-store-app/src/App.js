import "./index.css"
import "./App.css"
import products1 from "./assets/products1.json"
import products2 from "./assets/products2.json"
import products3 from "./assets/products3.json"
import Product from "./components/Product";

export default function App() {
  return (
      <div className={"container"}>
        <main className={"main"}>
          <h1>
            Sunglasses Online Shop
          </h1>
          <h1>
            MAN
          </h1>
          <div className={"grid"}>
            {
              products1.map((product, i) => <Product {...product} key={i}/>)
            }
          </div>
          <h1>
            WOMAN
          </h1>
          <div className={"grid"}>
            {
              products2.map((product, i) => <Product {...product} key={i}/>)
            }
          </div>
          <h1>
            KID
          </h1>
          <div className={"grid"}>
            {
              products3.map((product, i) => <Product {...product} key={i}/>)
            }
          </div>
        </main>
        <div
            id="snipcart"
            data-api-key="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY0ODg5NTk4MTM3" hidden
        >
        </div>
      </div>
  );
}
