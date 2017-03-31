<template>
<div id="wrapper">
      <div id="app">
    <div class="page-content">
        <ol class="breadcrumb">
             <li class=""><a href="index.html">监控平台</a></li>
             <li class="active"><a href="index.html">服务器监控</a></li>
             </ol>
              <div class="container-fluid">
                <!--写主要功能-->
                  <div class="row">
                            <div class="col-sm-12">
                                <div class="panel panel-midnightblue" data-widget='{"draggable": "false"}' style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);">
                                    <div class="panel-heading">
                                        <h2>监控服务器信息</h2>
                                    </div>
                                    <div class="panel-body">
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="horizontal-form">
                                                <form class="form-horizontal">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <label class="col-sm-2 control-label">监控项目</label>
                                                            <div class="col-sm-8">
                                                                <p class="help-block">选择要监控的性能指标</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-sm-8 col-sm-offset-2">
                                                                <div class="row">
                                                                    <div class="col-sm-3">
                                                                        <div class="checkbox block"><label><input
                                                                                type="checkbox" class="server_check" id="cpu_check">CPU使用率</label></div>
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <div class="checkbox block"><label><input
                                                                                type="checkbox" class="server_check" id="store_check">内存使用率</label></div>
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <div class="checkbox block"><label><input
                                                                                type="checkbox" class="server_check" id="disk_check">磁盘空间使用率</label></div>
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <div class="checkbox block"><label><input
                                                                                type="checkbox" class="server_check" id="flow_check">网络流量</label></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                         <div data-widget-group="group1">
                            <div class="row" id="cpu_part">
                                <div class="col-md-12">
                                    <div class="panel panel-info" data-widget='{"id" : "wiget9", "draggable": "false"}' style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);">
                                        <div class="panel-body">
                                            <div id="cpu_chart" style="height: 400px;" class="mt-sm mb-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row" id="flow_part">
                                <div class="col-md-12">
                                    <div class="panel panel-info" data-widget='{"id" : "wiget9", "draggable": "false"}' style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);">
                                        <div class="panel-body">
                                            <div id="flow_chart" style="height: 400px;" class="mt-sm mb-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-6" id="disk_part">
                                    <div class="panel panel-info" data-widget='{"id" : "wiget9", "draggable": "false"}' style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);">
                                        <div class="panel-body">
                                            <div id="disk_chart" style="height: 400px;" class="mt-sm mb-sm"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6" id="store_part">
                                    <div class="panel panel-info" data-widget='{"id" : "wiget9", "draggable": "false"}' style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);">
                                        <div class="panel-body">
                                            <div id="store_chart" style="height: 400px;" class="mt-sm mb-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>       
            </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'wrapper',
  data () {
    return {
      msg: ''
    }
  },
  mounted: function (){
      this.$nextTick(function () {
          this.getDatas();
        });
  },
  methods:{
      getDatas: function () {
          var _this = this;
          s.$http.get("").then(function (res) { 

          });
        }
  }
}
</script>

<style scoped>
</style>
