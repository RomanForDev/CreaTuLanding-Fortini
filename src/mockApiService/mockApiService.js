async function getData(){
        const request = await fetch('https://fakestoreapi.com/products')
        const response = await request.json()
        console.log(response);
        return inventory
    }

export default getData;