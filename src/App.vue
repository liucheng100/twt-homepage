<template>
  <div>
    <el-config-provider :locale="zhCn">
      <div style="position: relative; height: 100vh; width: 100vw;">
        <router-view v-slot="{ Component }" style="position: absolute; height: 100%; width: 100%;">
          <transition name="fade">
            <component class="components" :is="Component" />
          </transition>
        </router-view>
      </div>
    </el-config-provider>

  </div>
</template>

<script>
  import pubuse from '@/utils/pub-use'
  import { ElConfigProvider } from "element-plus";
  import zhCn from "element-plus/lib/locale/lang/zh-cn";
  export default {
    name: 'app',
    data() {
      return {
        zhCn: zhCn,
        
      }
    },
    mounted() {
      
    }
  }
</script>


<style scoped>
  .components {
    transition: .5s;
    transition-delay: .3s;
  }

  .fade-leave-to,
  .fade-enter-from {
    opacity: 0;
    transform: translateY(10%);
    /* transform: rotate3d(0,0,1,60deg); */
  }
</style>