/*

Phase 2 -> Props
By Sakib Rasul
Updated January 29, 2024
Created July 31, 2023

Core Deliverables
1. Create an array of items to sell in a boba shop.
2. Create a shop layout in <App>.
3. Define a <Item> component that displays one item.
4. Render our array of items as a list of <Item> components.


// In this file the App component is rendering the Item component
*/
import Item from "./item"; // Imports the function from your other js page. MUST be before the function on the page. So import at top, function, then return.
function App() {
  const shopName = "Adam'$ Bubble Tea Shop";
  const items = [
    {
      id: 1,
      name: "Brown Sugar Milk Tea",
      price: "$bout tree fiddy"
    },
    {
      id: 2,
      name: "Water Cup (water not included)",
      price: "$0.50"
    }
];
  return ( // We pass the two props in with a return. Can choose to use return in both ways on the left page and right page. On the right page, we only need the function above the return since we created the items on the left page here. There could be nothing before the return. Return also appends to the DOM. In this case you know you need access to the items in the return call so you need to make sure the items exist above the return.
    <div>
      <h1>Adam'$ Boba Shop</h1>
      <Item name={items[0].name} 
      price={items[0].price} />
      {/*items.map(item => <Item item={item} />)*/}
    </div>
  )// Items is the array .map in paren left side is the singular thing we want to transform (call it anything ) right side of the arrow is what we want the old array to become. In this case taking an old "item" and capitalizes the array into "Item".
}

export default App;