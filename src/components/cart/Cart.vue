<script setup>
import CartItem from "@/components/cart/CartItem.vue";
import CartPrice from "@/components/cart/CartPrice.vue";
</script>

<template>
    <!-- Shopping Cart Section -->
    <aside class="w-full md:w-1/3 px-4">
        <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
        <div class="cart bg-white rounded-lg shadow animate__animated">
            <ul class="divide-y divide-gray-200 space-y-4 p-6">
                <li class="flex justify-between items-center py-3">
                    <div class="flex items-center">
                        <img
                            src="https://picsum.photos/300/200/?random=1"
                            alt="Product"
                            class="h-12 w-12 rounded-full mr-4"
                        />
                        <div>
                            <span class="font-semibold">Produit 1</span>
                            <span class="block text-sm text-gray-500"
                                >€50.00</span
                            >
                        </div>
                    </div>
                    <div class="flex items-center">
                        <input
                            type="number"
                            class="form-input mt-1 block w-16 text-center rounded text-gray-700 border-gray-300 border"
                            value="1"
                            min="0"
                        />
                        <button class="ml-2 text-red-500 hover:text-red-700">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </li>
                <!-- Repeat for other cart items -->
            </ul>
            <div class="bg-gray-50">
                <div class="p-6">
                    <div class="flex justify-between mb-1">
                        <span><strong>Total HTVA:</strong></span>
                        <span>€50.00</span>
                    </div>
                    <div class="flex justify-between mb-1">
                        <span><strong>Taxe (20%):</strong></span>
                        <span>€10.00</span>
                    </div>
                    <div class="flex justify-between items-center my-8">
                        <span><strong>Livraison:</strong></span>
                        <select
                            class="form-select py-1 px-2 block w-full rounded border border-gray-300 ml-2"
                        >
                            <option value="5">Standard - €5</option>
                            <option value="15">Express - €15</option>
                        </select>
                    </div>
                    <div class="flex justify-between font-bold mb-1 text-xl">
                        <span><strong>Total Général:</strong></span>
                        <span>€65.00</span>
                    </div>
                    <button
                        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cart-btn"
                    >
                        Procéder au paiement
                    </button>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped></style>
