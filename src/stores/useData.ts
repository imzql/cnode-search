// 引入defineStore用于创建store
import {defineStore} from 'pinia'
import { ref } from 'vue'

// 定义并暴露一个store
export const useDataStore = defineStore('data',{
  // 动作
  actions:{
    
  },
  // 状态
  state(){
    return {
      searchValue:''
    }
  },
  // 计算
  getters:{

  }
  
})