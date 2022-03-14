import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => console.log('mounted'))
    return () => (
      <div>
        hello world
      </div>
    )
  }
})