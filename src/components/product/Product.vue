<script setup>
import { cartStore } from "@/stores/cart";

const props = defineProps({
    product: { type: Object, required: true },
});

import MyButton from "../ui/MyButton.vue";
</script>

<template>
    <!-- Product card example -->
    <article class="bg-white rounded-lg overflow-hidden shadow-md">
        <img
            :src="`https://picsum.photos/300/200/?random=${product.id}`"
            :alt="product.name"
            class="w-full"
        />
        <div class="p-4">
            <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
            <p class="text-gray-700">{{ product.price }} €</p>

            <MyButton @click="cartStore.addToCart(product)"> Ajouter </MyButton>
        </div>
    </article>
</template>

<style scoped></style>
