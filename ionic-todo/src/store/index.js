import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        { 
          id: 'm1', 
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg', 
          title: 'A trip into the mountains', 
          description: 'This is going to the mountain, it was a really nice trip' 
        },
        { 
          id: 'm2', 
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/AramcoCoreArea.jpg',
          title: 'A visit to the Saudi Arabia', 
          description: 'It was a nice place and it was also beautiful' 
        },
        { 
          id: 'm3', 
          image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Gold_Coast_skyline.jpg',
          title: 'Surfing the sea side', 
          description: 'Feeling the cool breeze' 
        }
      ]
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      }
    }
  }
});

export default store;