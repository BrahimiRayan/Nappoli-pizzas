<template>
       <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 h-max">
      <div>
        <Mplaning/>
      </div>

      <div class="rounded-2xl overflow-hidden h-max">
          <LMap
            style="height: 350px;"
            :zoom="20"
            :center="[45.77323827689482, 3.075281011989592]"
            :use-global-leaflet="false"
          >
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
              layer-type="base"
              name="OpenStreetMap"
            />

            <LMarker :lat-lng="[45.77323827689482, 3.075281011989592]" draggable />
          </LMap>

          <address class=" dark:text-shadow-lg text-shadow-black">
            49 Rue Eugéne Gilbert, Clermont-Ferrand, 63000, Puy de dome, France
          </address>

          <div>
            <h3 class="text-orange-500 text-lg">Un peu sur nous :</h3>
            <p class="py-2 px-6">
                Le chef pizzaiolo <span class="underline text-orange-500">Yoan GARCIN</span> rêvait d'ouvrir sa propre pizzeria depuis très longtemps. Il avait l'habitude de regarder sa grand-mère auvergnate et sa grand-mère provençale cuisiner des plats authentiques. En 2010, son rêve est enfin devenu réalité et il est fier de pouvoir se dire chef pizzaiolo. 
            </p>
            <NuxtLink to="/About-us" class="p-3 rounded-2xl bg-orange-400 text-white m-3" >
                <UIcon name="i-lucide-mouse-pointer-click"/>
                voulais savoir plus ?
            </NuxtLink>
          </div>
      </div>
   </div> 
</template>