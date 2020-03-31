<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="item"
      :class="{active:index ===currentIndex}"
      class="tab-control-item"
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  methods:{
      tabClick(index){
          this.currentIndex = index
      }
  },
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}

.tab-control-item {
  flex: 1;
}
.tab-control-item span{
    padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
