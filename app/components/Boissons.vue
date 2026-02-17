<template>
    <div class="mt-16">
      <h2 class="text-4xl font-bold text-amber-400 text-center mb-8 light:text-shadow-sm text-shadow-black">🍹 Nos Boissons</h2>
      <div class="flex justify-center gap-3 mb-8 flex-wrap">
        <button v-for="brand in brandCategories" :key="brand" 
                @click="selectedBrand = brand"
                :class="[
                  'px-5 py-2 rounded-full text-sm font-medium transition-all',
                  selectedBrand === brand 
                    ? 'bg-amber-600 text-white shadow-lg' 
                    : 'light:bg-black dark:bg-white/10 text-gray-300 dark:hover:bg-white/20 border border-white/10'
                ]">
          {{ brand }}
        </button>
      </div>

      <!-- Grille des boissons -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="boisson in filteredBoissons" :key="boisson.id || boisson.name" 
             class="group light:bg-black/5 bg-white/5 light:border light:border-orange-300 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all hover:shadow-2xl hover:shadow-amber-600/20">
          
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img :src="boisson.image || '/images/boisson.png'" :alt="boisson.name" 
                 class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 right-3 bg-amber-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {{ boisson.brand }}
            </span>
          </div>
          
          <!-- Contenu -->
          <div class="p-5">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold dark:text-white">{{ boisson.name }}</h3>
              <span class="text-2xl font-bold text-amber-500 light:text-shadow-sm text-shadow-black">{{ boisson.price }}€</span>
            </div>
            
            <!-- La marque est déjà affichée, on peut ajouter une description si besoin -->
            <p class="dark:text-gray-400 text-gray-600  text-sm mb-4">{{ boisson.brand }}</p>
            
            <!-- Bouton commander -->
            <button class="w-full py-2 bg-amber-600/80 hover:bg-amber-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2">
              <span>Commander</span>
              <span class="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Message si aucune boisson -->
      <div v-if="filteredBoissons.length === 0" class="text-center text-gray-400 py-12">
        Aucune boisson disponible pour le moment.
      </div>

    </div>
</template>

<script setup>
import { loadBoissons } from '~/supabase'

const boissons = ref([])
onMounted(async () => {
  try {
    const data = await loadBoissons()
    boissons.value = data.map(b => ({
      id: b.id,
      name: b.name,
      price: b.price,
      brand: b.brand,
      image: b.image || '/images/boisson.png'
    }))
  } catch (error) {
    console.error('Erreur chargement boissons :', error)
  }
})

const brandCategories = computed(() => {
  if (!boissons.value.length) return ['Toutes']
  return ['Toutes', ...new Set(boissons.value.map(b => b.brand))]
})

const selectedBrand = ref('Toutes')

const filteredBoissons = computed(() => {
  if (selectedBrand.value === 'Toutes') return boissons.value
  return boissons.value.filter(b => b.brand === selectedBrand.value)
})
</script>