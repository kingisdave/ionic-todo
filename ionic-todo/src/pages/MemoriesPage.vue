<template>
  <base-layout page-title="All Memories">
    <h2>These are my memories - list to be added</h2>
    <ion-list>
      <ion-item 
        v-for="memory in memories" 
        :router-link="`/memories/${memory.id}`"
        :key="memory.id"
      >
        <ion-thumbnail slot="start">
          <ion-img 
            :src="memory.image" 
            :alt="memory.title"
          ></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
        
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { 
  IonList, 
  IonItem,
  IonImg,
  IonLabel,
  IonThumbnail 
} from '@ionic/vue';

export default ({
  components: {
    IonList,
    IonItem,
    IonImg,
    IonLabel,
    IonThumbnail
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    }
  }
  
})
</script>

<style scoped>

</style>
