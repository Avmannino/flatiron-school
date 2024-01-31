/*

Phase 2 -> State and Events
By Sakib Rasul

Core Deliverables
1. Pass `items` into <Products>.
2. Render an <Item> for each item inside <Products>.
3. Implement "Add to Cart" and "Not in Cart".

*/

// Some default CSS from `create-react-app`
import './App.css';
import Products from './Products';

// These need to go!!!
// Note: You should get into the habit of adding unique identifiers to lists you'll render to the DOM.
//       Trust me, it'll make your life easier.
const items = [
  {
    id: 0,
    name: "Television",
    price: 499
  },
  {
    id: 1,
    name: "Spatula",
    price: 11
  }
]

function App() {
  return (
    <div>
      <header>
        <h1>My Cool Mall</h1>
      </header>
      <br/>
      {/* Render <Products> with our `items` thrown in. (Try adding an item!) */}
      <Products items={items} />
    </div>
  );
}

export default App;

// In this case App is the parent of Products and we are passing a prop into products. The app contains the product and the product contains the props ( i.e the prop is what makes the product Dynamic)