<template>
  <div>
    <div :class="['weui-search-bar', { 'weui-search-bar_focusing': isFocus }]" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input v-model="searchValue" ref="inputElement" type="search" class="weui-search-bar__input" id="searchInput"
            placeholder="搜索" required />
          <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label @click="toggle" class="weui-search-bar__label" id="searchText">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a @click="toggle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref,watch,toRefs } from 'vue'
//引入pinia
import {useDataStore} from '@/stores/useData'
//数据
let searchValue = ref('')
let isFocus = ref(false)
let inputElement = ref()
//获取到pinia的数据 调用useDataStore得到对应的store
 const DataStore = useDataStore()
//方法
function toggle(){
  //聚焦到inputElement元素
  inputElement.value.focus()
  //如果聚焦到元素  取反元素
  isFocus.value = !isFocus.value
}
//watch监听事件
watch(searchValue,(value) => {
// 将input输入框的值交给pinia管理
DataStore.searchValue = searchValue.value
})
</script>

<style scoped></style>