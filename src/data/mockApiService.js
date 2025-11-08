export async function getData(){
        const request = await fetch(`https://fakestoreapi.com/products`)
        const response = await request.json()
        console.log(response);
        return response
    }


export async function getSingleProduct(id) {
    const req = await fetch(`https://fakestoreapi.com/products/${id}`)
    const resp = await req.json();
    return resp
}

