<template>
  <main class="w-[90%] mx-auto my-10">
    
    <div class="relative rounded-3xl overflow-hidden mb-12 h-[200px]">
      <div class="absolute inset-0">
        <img src="~/assets/pics/bg1.jpg" alt="Commander" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      <div class="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Passez votre commande</h1>
        <p class="text-lg text-amber-400 light:text-shadow-sm text-shadow-black/50">Composez votre repas et commandez en ligne</p>
        <div class="w-24 h-1 bg-amber-500 mt-4"></div>
      </div>
    </div>

    <!-- Chargement -->
    <div v-if="loading" class="text-center py-12">
      <span class="i-svg-spinners-ring-resize text-amber-500 text-4xl"></span>
      <p class="text-gray-400 mt-4">Chargement du menu...</p>
    </div>

    <div v-else class="grid lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-1 space-y-6">
        <div class="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-2xl p-6 border dark:border-white/10 border-black/10">
          <h2 class="text-xl font-bold text-amber-400 light:text-shadow-sm text-shadow-black/50 mb-4 flex items-center gap-2">
            <span class="i-lucide-user w-5 h-5"></span>
            Vos coordonnées
          </h2>
          <UInput
            v-model="customer.name"
            placeholder="Nom complet *"
            class="mb-3"
            size="lg"
            :ui="{ base: 'bg-white/10 border-white/20 dark:text-white placeholder-gray-400' }"
          />
          <UInput
            v-model="customer.email"
            placeholder="Email *"
            type="email"
            class="mb-3"
            size="lg"
            :ui="{ base: 'bg-white/10 border-white/20 dark:text-white placeholder-gray-400' }"
          />
          <UInput
            v-model="customer.phone"
            placeholder="Téléphone *"
            type="tel"
            class="mb-2"
            size="lg"
            :ui="{ base: 'dark:bg-white/10 bg-white/30 border-white/20 dark:text-white placeholder-gray-400' }"
          />
        </div>

        <!-- Résumé de la commande -->
        <div class="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-2xl p-6 border dark:border-white/10 border-black/10 sticky top-4">
          <h2 class="text-xl font-bold text-amber-400 light:text-shadow-sm text-shadow-black/50 mb-4 flex items-center gap-2">
            <UIcon name="i-lucide-shopping-cart" />
            Votre commande
          </h2>

          <div v-if="orderItems.length === 0" class="dark:text-gray-400 text-center py-6">
            Votre panier est vide !
          </div>

          <div v-else class="space-y-3 max-h-96 overflow-y-auto pr-2">
            <div v-for="(item, index) in orderItems" :key="index" 
                 class="flex justify-between items-center py-2 border-b border-white/10">
              <div>
                <span class="dark:text-white font-medium">{{ item.name }}</span>
                <span class="text-amber-400 light:text-shadow-sm text-shadow-black/50 text-sm ml-2">x{{ item.quantity }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="dark:text-white">{{ (item.price * item.quantity).toFixed(2) }}€</span>
                <UButton
                  color="red"
                  variant="ghost"
                  icon="i-lucide-trash-2"
                  size="2xs"
                  @click="removeItem(index)"
                  :ui="{ rounded: 'rounded-full' }"
                />
              </div>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-white/20 flex justify-between font-bold">
            <span class="dark:text-white">Total</span>
            <span class="text-amber-400 light:text-shadow-sm text-shadow-black/50 text-xl">{{ totalPrice.toFixed(2) }}€</span>
          </div>

          <UButton
            size="lg"
            class="w-max p-2 mt-6 disabled:cursor-not-allowed hover:bg-orange-500"
            :disabled="!canOrder"
            @click="submitOrder"
          >
            🍕 Passer la commande 
          </UButton>
        </div>
      </div>

      <div class="lg:col-span-2 space-y-8">
       
        <section>
          <h2 class="text-2xl font-bold text-amber-400 light:text-shadow-sm text-shadow-black/50 mb-4 flex items-center gap-2">
            <span class="i-lucide-pizza w-6 h-6"></span>
            Nos pizzas
          </h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="pizza in pizzas" :key="pizza.id" 
                 class="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-xl p-4 border dark:border-white/10 border-orange-500/50 hover:border-orange-500/70 transition-all">
              <div class="flex justify-between items-start">
                <div class="flex justify-center items-center gap-2">
                  <UAvatar :src="pizza.image" :alt="pizza.name" class="border border-amber-400"/>
                  <div>
                      <h3 class=" dark:text-white font-bold">{{ pizza.name }}</h3>
                      <p class="text-amber-400 light:text-shadow-sm text-shadow-black/50  text-sm">{{ pizza.price.toFixed(2) }}€</p>
                  </div>
                </div>
                <!-- Quantité -->
                <div class="flex items-center gap-1">
                  <UButton
                    icon="i-lucide-minus"
                    size="xs"
                    color="amber"
                    variant="ghost"
                    :disabled="getQuantity(pizza) === 0"
                    @click="updateQuantity(pizza, -1, 'pizza')"
                    :ui="{ rounded: 'rounded-full' }"
                  />
                  <span class="w-6 text-center dark:text-white">{{ getQuantity(pizza) }}</span>
                  <UButton
                    icon="i-lucide-plus"
                    size="xs"
                    color="amber"
                    variant="ghost"
                    @click="updateQuantity(pizza, 1, 'pizza')"
                    :ui="{ rounded: 'rounded-full' }"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Boissons -->
        <section id="boissons">
          <h2 class="text-2xl font-bold text-amber-400 light:text-shadow-sm text-shadow-black/50 mb-4 flex items-center gap-2">
            <span class="i-lucide-wine w-6 h-6"></span>
            Nos boissons
          </h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="drink in boissons" :key="drink.id" 
                 class="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-amber-500/50 transition-all">
              <div class="flex justify-between items-start">
                <div class="flex justify-center items-center gap-2">
                  <UAvatar :src="drink.image" :alt="drink.name" class="border border-amber-400"/>
                  <div>
                      <h3 class="dark:text-white font-bold">{{ drink.name }}</h3>
                      <p class="text-amber-400 light:text-shadow-sm text-shadow-black/50 text-sm">{{ drink.price.toFixed(2) }}€</p>
                  </div>
                </div>
                <!-- Quantité -->
                <div class="flex items-center gap-1">
                  <UButton
                    icon="i-lucide-minus"
                    size="xs"
                    color="amber"
                    variant="ghost"
                    :disabled="getQuantity(drink) === 0"
                    @click="updateQuantity(drink, -1, 'drink')"
                    :ui="{ rounded: 'rounded-full' }"
                  />
                  <span class="w-6 text-center dark:text-white">{{ getQuantity(drink) }}</span>
                  <UButton
                    icon="i-lucide-plus"
                    size="xs"
                    color="amber"
                    variant="ghost"
                    @click="updateQuantity(drink, 1, 'drink')"
                    :ui="{ rounded: 'rounded-full' }"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { loadPizzas, loadBoissons } from '~/supabase'

// État des données
const pizzas = ref([])
const boissons = ref([])
const loading = ref(true)

// Chargement des produits
onMounted(async () => {
  try {
    const [pizzasData, boissonsData] = await Promise.all([
      loadPizzas(),
      loadBoissons()
    ])
    pizzas.value = pizzasData.map(p => ({ ...p, type: 'pizza' }))
    boissons.value = boissonsData.map(b => ({ ...b, type: 'drink' }))
  } catch (error) {
    console.error('Erreur chargement menu:', error)
  } finally {
    loading.value = false
  }
})

// Informations client
const customer = ref({
  name: '',
  email: '',
  phone: ''
})

// Panier : stockage des articles sélectionnés (chaque article a id, name, price, quantity, type)
const orderItems = ref([])

// Gestion des quantités
const getQuantity = (product) => {
  const item = orderItems.value.find(i => i.id === product.id)
  return item ? item.quantity : 0
}

const updateQuantity = (product, delta, type) => {
  const index = orderItems.value.findIndex(i => i.id === product.id)
  if (index === -1) {
    // Ajout avec quantité 1
    orderItems.value.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      type
    })
  } else {
    const newQty = orderItems.value[index].quantity + delta
    if (newQty <= 0) {
      orderItems.value.splice(index, 1)
    } else {
      orderItems.value[index].quantity = newQty
    }
  }
}

const removeItem = (index) => {
  orderItems.value.splice(index, 1)
}

// Total du panier
const totalPrice = computed(() => {
  return orderItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
})

// Validation minimale
const canOrder = computed(() => {
  return customer.value.name && 
         customer.value.email && 
         customer.value.phone && 
         orderItems.value.length > 0
})

// Soumission
const submitOrder = () => {
  // Ici vous enverriez la commande à votre backend / Supabase
  console.log('Commande passée :', {
    customer: customer.value,
    items: orderItems.value,
    total: totalPrice.value
  })
  // Réinitialisation ou redirection
  alert('Merci pour votre commande ! (simulation)')
  // Réinitialiser le panier et les champs si vous voulez
  // orderItems.value = []
  // customer.value = { name: '', email: '', phone: '' }
}
</script>

<style scoped>
:deep(.u-input) {
  --ui-input-color: white;
}
</style>