<template>
    <div class="relative group">        
        <div class="relative backdrop-blur-sm rounded-2xl p-6 border border-amber-500/50">
            <!-- Enseigne au néon -->
            <div class="text-center mb-6">
                <h3 class="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-red-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                    🍕 HEURES D'OUVERTURE
                </h3>
                <div class="w-24 h-1 bg-linear-to-r from-amber-500 to-red-500 mx-auto mt-2 rounded-full"></div>
            </div>
            
            <!-- Horaires style tableau -->
            <div class="space-y-2 font-mono">
                <div v-for="(hours, day) in schedule" :key="day"
                     class="grid grid-cols-3 gap-4 p-2 border-b border-amber-500/20 last:border-0">
                    <span class="text-orange-500 font-bold">{{ day }}</span>
                    
                    <div class="col-span-2 flex gap-3 justify-end">
                        <template v-if="hours.length > 0">
                            <span v-for="time in hours" :key="time"
                                  class="dark:text-white bg-orange-500/60 px-3 py-1 rounded border border-amber-500/30
                                         shadow-[0_0_5px_rgba(251,191,36,0.3)]">
                                {{ time }}
                            </span>
                        </template>
                        <span v-else class="text-red-600 italic">
                            <UIcon name="i-lucide-door-closed-locked" />
                            Fermé
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const schedule = {
    'Mardi': ['12:00–13:30', '18:30–22:30'],
    'Mercredi': ['12:00–13:30', '18:30–22:30'],
    'Jeudi': ['12:00–13:30', '18:30–22:30'],
    'Vendredi': ['12:00–13:30', '18:30–22:30'],
    'Samedi': ['18:30–22:30'],
    'Dimanche': ['18:00–22:00'],
    'Lundi': []
}
</script>