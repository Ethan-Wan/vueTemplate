<template>
<div id="wrapper">
    <div id="layout-static">
        <div id="side-menu" class="static-sidebar-wrapper sidebar-default">
          <menu-a></menu-a>
        </div>
        <div class="static-content-wrapper">
            <div class="static-content">
                <keep-alive>  
                    <router-view></router-view>
                 </keep-alive>
            </div>
            <footer-a></footer-a>
        </div>
    </div>
</div>
</template>


<script>
import FooterA from './footer'
import MenuA from './menu'

export default {
  name: 'wrapper',
  data () {
    return {
      msg: ''
    }
  },
  components: {
      FooterA,MenuA
  }
}
</script>

<style scoped>
@import '../../../framework/avenxo/assets/fonts/font-awesome/css/font-awesome.min.css';
@import '../../../framework/avenxo/assets/fonts/themify-icons/themify-icons.css';
@import '../../../framework/avenxo/assets/css/styles.css';
@import 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600';

</style>
