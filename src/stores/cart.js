import { reactive, watch } from "vue";

const cart = reactive([]);

const init = () => {
    if (localStorage.cart) {
        JSON.parse(localStorage.cart).forEach((item) => cart.push(item));
    }
};

const addToCart = (product) => {
    const item = cart.find((p) => p.id === product.id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
    }
};

const deleteOneById = (id) => {
    cart.splice(
        cart.findIndex((item) => item.id === id),
        1
    );
};

watch(cart, (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
});

export const cartStore = reactive({
    cart,
    init,
    addToCart,
    deleteOneById,
});
