!function(){"use strict";function a(a){var t=this;t.usedSpace=0,t.totalSpace=0,a({url:"/api/DiskSpace/UsedSpace",method:"GET"}).then(function(a){t.usedSpace=a.data}),a({url:"/api/DiskSpace/TotalSpace",method:"GET"}).then(function(a){t.totalSpace=a.data})}a.$inject=["$http"],angular.module("appPanel").controller("panelController",a)}();