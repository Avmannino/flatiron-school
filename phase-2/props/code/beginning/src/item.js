function Item({ item }) { // a component is a function with pascale case. Every component in React only has 1 parameter which is an argument we call props. We use the dot.notation or bracket notation in order to access the prop.
    return (                     // Can either use the way we have written which calls a key directly (destructuring). Components alqways have 1 parameter = 1 objects (prop). To avoid doing bracket or dot notation we use this format which is shorthand.
        <>
        <em>{item.name}, (${price})</em> // To get more specific items we can use dot notation or string interpolation to specify what we want
        </>
    )
}

export default Item; // Export Default and the name of the component. Each component gets its own file.

// If we want to transform the full array of item objects we would use .map