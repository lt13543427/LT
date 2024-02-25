<script setup>
</script>
<script>
export default {
  data() {
    return {
      // 在 data 方法中定义组件的数据
      // 这里定义了一个用于控制移动菜单的变量
      isMobileMenuOpen: false
    }
  },
  methods: {
    // toggleMobileMenu 方法用于打开/关闭移动菜单
    toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
  }
}
</script>
<template>
  <main>
    <div class="div w-full h-screen flex flex-col lg:flex-row items-center">
      
      <div class="nav-bar xl:w-[300px] xl:h-full lg:w-[300px] lg:h-full md:w-full h-[100px] w-full sm:h-[100px] bg-red-300 flex lg:flex-col lg:justify-start items-center gap-10">
        <div class="logo-box w-[80px] h-[80px] bg-yellow-200 rounded-md lg:mt-5"></div>
        <div class="absolute inset-y-0 right-2  flex items-center md:hidden h-[100px]">
        <button type="button"  class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="toggleMobileMenu" aria-controls="mobile-menu" aria-expanded="false">
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div :class="{ 'hidden': !isMobileMenuOpen }" class="md:hidden mt-[248px] flex w-full z-50 bg-gray-700" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a href="https://www.youtube.com/" target="_blank" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Youtube</a>
          <a href="https://www.google.com/" target="_blank" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Google</a>
          <a href="https://tw.yahoo.com/" target="_blank" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Yahoo</a>
        </div>
      </div>
        <div class="btn-box lg:w-[150px] lg:h-[200px] w-[300px] h-[80px] bg-yellow-200 rounded-md  md:flex-row lg:flex-col items-center justify-center gap-5 md:flex hidden">
          <div class="button w-[80px] h-[50px] flex items-center justify-center">你好</div>
          <div class="button w-[80px] h-[50px] flex items-center justify-center">安安</div>
          <div class="button w-[80px] h-[50px] flex items-center justify-center">早商好</div>
        </div>
      </div>
      <div class="center-all xl:w-full xl:h-full lg:w-full lg:h-full md:w-full md:h-full w-full h-full bg-blue-100 flex justify-center items-center">
        <div class="photo-box xl:w-[900px] xl:h-[600px] lg:w-[600px] lg:h-[600px] md:w-[700px] md:h-[600px] w-full h-full flex md:gap-2 flex-wrap sm:gap-0">
          <div class="photo-1 xl:w-1/3 xl:h-full lg:w-full lg:h-1/2 md:w-full md:h-1/2 w-full h-1/3  bg-amber-100 "></div>
          <div class="photo-2 xl:w-1/3 xl:h-full lg:w-1/2 lg:h-1/2 md:w-1/2 md:h-1/2 w-full h-1/3 bg-red-300 md:flex-1 "></div>
          <div class="photo-3 xl:w-1/3 xl:h-full lg:w-1/2 lg:h-1/2 md:w-1/2 md:h-1/2 w-full h-1/3 bg-emerald-400 md:flex-1"></div>
        </div>
      </div>
    </div>  
  </main>  
</template>

