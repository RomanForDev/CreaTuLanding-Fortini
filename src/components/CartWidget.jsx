
function CartWidget() {
    // Tiene por ahora un href pero la idea es quitarlo para que la página sea SPA
    return <a href="">
        <img src="./src/assets/cart-img.png" alt=""></img>
        <span>0</span>
    </a> 
}

export default CartWidget;