<template>
  <div id="app">
    <div class="page-content">
        <ol class="breadcrumb">
             <li class=""><a href="index.html">监控平台</a></li>
             <li class="active"><a href="index.html">接口监控</a></li>
             </ol>
              <div class="container-fluid">
                <!--写主要功能-->
                <div data-widget-group="group1">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h2>全部接口</h2>
                                            <div class="panel-ctrls"></div>
                                        </div>
                                        <div class="panel-body no-padding">
                                            <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                                                <thead>
                                                <tr>
                                                    <th>序号</th>
                                                    <th>接口名称</th>
                                                    <th>平均响应时间</th>
                                                    <th>请求次数</th>
                                                    <th>超时数量</th>
                                                    <th>异常数量</th>
                                                </tr>
                                                </thead>
                                                <tbody >
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="panel-footer"></div>
                                    </div>
                                </div>
                                <div class="col-md-4" id="table_1">
                                    <div class="panel panel-midnightblue">
                                        <div class="panel-heading"></div>
                                        <div class="panel-body no-padding">
                                            <table class="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>ip</th>
                                                    <th>平均响应最慢</th>
                                                </tr>
                                                </thead>
                                                <tbody id>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4" id="table_2">
                                    <div class="panel panel-midnightblue">
                                        <div class="panel-heading"></div>
                                        <div class="panel-body no-padding">
                                            <table class="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>ip</th>
                                                    <th>调用次数最多</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4" id="table_3">
                                    <div class="panel panel-midnightblue">
                                        <div class="panel-heading"></div>
                                        <div class="panel-body no-padding">
                                            <table class="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>ip</th>
                                                    <th>异常比例最高</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12" id="chart_div">
                                    <div class="panel panel-info" data-widget='{"id" : "wiget9", "draggable": "false"}' style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);">
                                        <div class="panel-body">
                                            <div id="interface_chart" style="height: 400px;" class="mt-sm mb-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
            </div>
      </div>
  </div>
</template>

<script type="text/javascript" src="../../../framework/avenxo/assets/js/bootstrap.min.js"></script> 								<!-- Load Bootstrap -->
<script type="text/javascript" src="../../../framework/avenxo/assets/js/enquire.min.js"></script> 									<!-- Load Enquire -->
<script type="text/javascript" src="../../../framework/avenxo/assets/plugins/velocityjs/velocity.min.js"></script>					 Load Velocity for Animated Content -->
<script type="text/javascript" src="../../../framework/avenxo/assets/plugins/velocityjs/velocity.ui.min.js"></script>

<script type="text/javascript" src="../../../framework/avenxo/assets/plugins/nanoScroller/js/jquery.nanoscroller.min.js"></script>  nano scroller 

<script type="text/javascript" src="../../../framework/avenxo/assets/js/application.js"></script>
<script type="text/javascript" src="../../../framework/avenxo/assets/demo/demo-switcher.js"></script>

<script type="text/javascript" src="../../../framework/avenxo/assets/plugins/datatables/jquery.dataTables.js"></script>
<script type="text/javascript" src="../../../framework/avenxo/assets/plugins/datatables/dataTables.bootstrap.js"></script>
<script type="text/javascript" src="../../../framework/avenxo/assets/demo/demo-datatables.js"></script>
<script> 

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   mounted: function (){
      this.$nextTick(function () {
          this.getDatas();
        });
  },
  methods:{
      getDatas: function () {
          this.$http.get("/v1_0/interface/all").then((res) => { 
                console.log(res.body);
          },(err) =>{
                console.log(err);
          });
        }
  }
}
</script>

<style scoped>

@import '/../../framework/avenxo/assets/plugins/codeprettifier/prettify.css';
@import '/../../framework/avenxo/assets/plugins/iCheck/skins/minimal/blue.css';
@import '/../../framework/avenxo/assets/plugins/datatables/dataTables.bootstrap.css';
@import '/../../framework/avenxo/assets/plugins/datatables/dataTables.themify.css';

</style>
