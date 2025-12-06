import { ref, reactive, watch, computed } from "vue";

const cart = reactive(JSON.parse(localStorage.getItem("cart") || "[]"));

const addToCart = (product) => {
    const item = cart.find((p) => p.id === product.id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: `https://picsum.photos/300/200/?random=${product.id}`,
            quantity: 1,
        });
    }
};

const totalHTVA = computed(() => {
    return cart
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
});

const deliveryCost = ref(5);

const taxe = computed(() => {
    return Number(totalHTVA.value * 0.2).toFixed(2);
});

const totalPrice = computed(() => {
    return (
        Number(totalHTVA.value) +
        Number(taxe.value) +
        Number(deliveryCost.value)
    ).toFixed(2);
});

const deleteOneById = (id) => {
    cart.splice(
        cart.findIndex((item) => item.id === id),
        1
    );
};

watch(
    cart,
    (newCartItem) => {
        localStorage.setItem("cart", JSON.stringify(newCartItem));
    },
    { deep: true }
);
// le deep:true est nécessaire pour que le watcher regarde dans le details chaque donnée du localdulocal storage pour savoir si il fait ++ ou si il ajouter un objet cart

export const cartStore = reactive({
    cart,
    totalHTVA,
    deliveryCost,
    taxe,
    totalPrice,
    addToCart,
    deleteOneById,
});
