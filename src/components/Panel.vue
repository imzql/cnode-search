<template>
    <div class="weui-panel weui-panel_access">
    <div v-for="(n,index) in newComputed" :key="index" class="weui-panel__bd">
      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="n.author.avatar_url" alt />
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="n.title"></h4>
          <p class="weui-media-box__desc" v-text="n.author.loginname"></p>
        </div>
      </a>
    </div>
    <div @click="loadMore" class="weui-panel__ft">
      <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive, computed} from 'vue'
import { useDataStore } from '@/stores/useData'
import axios from 'axios'
//接收pinia传来的数据
let dataStore = useDataStore()
//数据
let page = ref(1)
let news = ref([])
let newComputed = computed(() => {})
let searchValue = dataStore.searchValue
//封装函数 loadMore
async function loadMore(){
    let data = await axios({
    url:'https://cnodejs.org/api/v1/topics',
    params:{
        limit:10,
        page
    }
}
}
// ajax请求数据


</script>

<style scoped>

</style>