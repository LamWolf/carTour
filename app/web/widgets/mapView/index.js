const $ = require('local-Zepto');
const Layer = require('widgets/layer/index');
const Sa = require('widgets/sensors/index');
const apiConfig = require('widgets/apiConfig/index');
const util = require('widgets/util/index');
require('./scss/index.scss');

class MapView {
    constructor(opt = {}) {
        this.opt = {
            wrap: 'page',
            center: '',
            markers: [{
                position: [],
                src: '',
                alt: '',
                link: ''
            }],
            goodsNo: '',
            index: '0',
            handleMap: true, // 控制地图是否有交互
            callback: null,
            app: util.plateForm().app
        };
        this.domain = this.opt.app != 'hbcc' ? '' : apiConfig.goodsHost;
        this.__zIndex = 100;
        $.extend(this.opt, opt);
        this.renderUI();
        this.bindEvent();
    }

    renderUI() {
        if (!Object.prototype.toString.call(this.opt.markers) == '[object Array]') {
            this.msg('mapError:请传入正确的markers');
            return;
        }
        if (!this.opt.goodsNo) {
            this.msg('mapError:请传入正确的goodsNo');
            return;
        }
        $(`#${this.opt.wrap}`).addClass('J-map-view');
        this.map(this.opt.markers);
    }

    bindEvent() {
        const that = this;
        if (that.opt.handleMap === true) {
            $(`#${this.opt.wrap}`).off('click', '.info-window').on('click', '.info-window', function() {
                const url = $(this).attr('data-link');
                try {
                    window.javaObj.pushToNextPageWithUrl(`${url}&requestType=isAppRequest`);
                } catch (e) {
                    window.location.href = url;
                }
            });
            return;
        }
        that.amap.on('click', function() {
            let url = `${that.domain}/goods/map/${that.opt.goodsNo}?index=${that.opt.index}`;
            Sa.sendSa('commom_click', {
                $referrer: document.referrer,
                $url: location.href,
                $url_path: location.pathname,
                $title: document.title,
                tagDesc: '地图点击'
            });
            if (that.opt.ignoreGoodsStatus == '0') {
                url = url + '&ignoreGoodsStatus=0';
            }
            try {
                window.javaObj.pushToNextPageWithUrl(`${url}&requestType=isAppRequest`);
            } catch (e) {
                window.location.href = url;
            }
        });
    }

    map(markers) {
        const that = this;
        if (!that.amap) {
            that.amap = new AMap.Map(that.opt.wrap, {
                resizeEnable: true, // 是否监控地图容器尺寸变化，默认值为false
                dragEnable: true, // 地图是否可通过鼠标拖拽平移
                center: [ that.opt.center[1], that.opt.center[0] ], // 设置地图显示的中心点
                zoom: 12,
                expandZoomRange: true, // 是否支持可以扩展最大缩放级别,和zooms属性配合使用
                zoomEnable: true // 允不允许放大
            });
            if (that.opt.handleMap === false) {
                that.amap.setStatus({
                    dragEnable: false,
                    zoomEnable: false,
                    doubleClickZoom: false,
                    touchZoom: false
                });
            }
        }
        addGoogleLayer(that.amap);

        // 构建自定义信息窗体
        function createInfoWindow(opt) {
            if (!opt || !opt.src) return null;
            const info = document.createElement('div');
            info.className = 'info-window';

            // 定义左侧内容
            const left = document.createElement('img');
            left.className = 'info-left';
            left.setAttribute('src', opt.src);
            left.setAttribute('alt', opt.alt);
            info.appendChild(left);

            // 定义右侧内容
            const right = document.createElement('div');
            right.className = 'info-right';
            right.innerHTML = '查看';
            info.appendChild(right);

            info.setAttribute('data-link', opt.link);
            return info;
        }

        // 关闭信息窗体
        function closeInfoWindow() {
            that.amap.clearInfoWindow();
        }

        function addGoogleLayer(map) {
            const googleLayer = new AMap.TileLayer({
                // 图块取图地址
                tileUrl: 'https://mt{1,2,3,0}.google.cn/vt/lyrs=m@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil',
                zIndex: 100,
                map
            });
            setTimeout(() => {
                googleLayer.setMap(map);
                that.amap.clearMap(); // 清除地图覆盖物
                const lineArr = [];

                // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
                markers.forEach((marker, index) => {
                    lineArr.push(marker.position);
                    that[`mark${index}`] = new AMap.Marker({
                        map: that.amap,
                        topWhenClick: true, // 鼠标点击时marker是否置顶
                        // icon: marker.icon, 标记图标
                        position: [ marker.position[0], marker.position[1] ], // 基点位置
                        offset: new AMap.Pixel(-10, -29), // 相对于基点的偏移位置
                        draggable: false, // 是否可拖动
                        content: `<div class="marker-route">${index + 1}</div>` // 自定义点标记覆盖物内容
                    });
                    if (that.opt.handleMap === false) {
                        that[`mark${index}`].setClickable = false;
                    }
                    that[`__infoWindow${index}`] = new AMap.InfoWindow({
                        isCustom: true,
                        content: createInfoWindow(marker),
                        offset: new AMap.Pixel(-32, -38)
                    });
                    if (that.opt.handleMap === true) {
                        that[`mark${index}`].on('click', e => {
                            that.getPos(index, e.target.getPosition());
                            that.opt.callback && that.opt.callback(index);
                        });
                    }
                });
                if (!lineArr.length) {
                    map.setCenter([ that.opt.center[1], that.opt.center[0] ]);
                }

                // 折线联结
                const polyline = new AMap.Polyline({
                    path: lineArr, // 设置线覆盖物路径
                    strokeColor: '#4295E7', // 线颜色
                    strokeOpacity: 0.7, // 线透明度
                    strokeWeight: 3, // 线宽
                    strokeStyle: 'solid', // 线样式
                    strokeDasharray: [ 10, 5 ] // 补充线样式
                });
                polyline.setMap(that.amap);
                map.setFitView(); // 使地图自适应可视范围，包含所有Marker
            }, 300);
        }
    }

    getPos(index, pos) {
    // this.amap.panTo(pos);  定位到某个坐标点
        this.amap.setCenter(pos);
        this.__zIndex += 1;
        this[`mark${index}`].setzIndex(this.__zIndex);
        this[`__infoWindow${index}`].open(this.amap, pos);
    }

    msg(msg) {
        new Layer({
            msg
        });
    }

}

module.exports = MapView;
