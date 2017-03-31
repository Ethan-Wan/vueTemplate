<template>
  <div id="app">
  <div class="static-sidebar">
    <div class="sidebar">
        <div class="widget">
            <div class="widget-body">
                <div class="userinfo">
                    <div class="avatar">
                        <img src="assets/demo/avatar/avatar_15.png" class="img-responsive img-circle">
                    </div>
                    <div class="info">
                        <span class="username">EthanWan</span>
                        <span class="useremail">wansy23@163.com</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="widget stay-on-collapse" id="widget-sidebar">
            <nav role="navigation" class="widget-body">
                <ul class="acc-menu">
                    <li class="nav-separator"><span>Explore</span></li>
                    <li><router-link to="/"><i class="ti ti-home"></i><span>服务器监控</span></router-link></li>
                    <li><router-link to="/interface"><i class="ti ti-view-list-alt"></i><span>接口监控</span></router-link></li>
                    <li><router-link to="/jvm"><i class="ti ti-control-shuffle"></i><span>JVM监控</span></router-link></li>
                    <li><router-link to="/exception"><i class="ti ti-pencil"></i><span>异常管理</span></router-link></li>
                    <li><router-link to="/configuration"><i class="ti ti-layout-grid3"></i><span>系统管理</span></router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
  </div>
</template>

<script> 
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
