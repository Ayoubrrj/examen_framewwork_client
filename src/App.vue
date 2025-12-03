<script setup>
import AppHeader from "@/components/AppHeader.vue";
import Cart from "@/components/cart/Cart.vue";
import PorductList from "@/components/product/ProductList.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
    <AppHeader />
    <main class="container mx-auto py-8 px-4 flex flex-wrap">
        <PorductList />

        <Cart />
    </main>
    <AppFooter />
</template>

<style scoped></style>
