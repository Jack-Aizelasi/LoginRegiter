$(function() {
  // 首页全屏滚动
  function fullPageHome() {
    $('#section-container').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
      menu: '#header',
      afterLoad: function(anchorLink, index) {
        console.log(index);
        if (index == 1) {
          $('.header').removeClass('active');
        } else {
          $('.header').addClass('active');
        }
        //   if (index == 2) {
        // $('.section2').find('p').each((index,item) => {
        //     $(item).delay(500*index).animate({
        //         left: 0
        //     }, 1500, 'easeOutExpo')
        // });
        //   }
        //   if (index == 3) {
        // $('.section3').find('p').delay(500).animate({
        // 	bottom: '0'
        // }, 1500, 'easeOutExpo');
        //   }
        //   if (index == 4) {
        // $('.section4').find('.about-left-top').fadeIn(1000);
        // $('.section4').find('.about-left-middle').fadeIn(5000);
        // $('.section4').find('.about-left-bottom').fadeIn(10000);
        // $('.section4').find('.about-left-more').fadeIn(15000);
        //   }
      },
      onLeave: function(index, direction) {
        if (index == '2') {
          $('.section2')
            .find('p')
            .each((index, item) => {
              $(item)
                .delay(0)
                .animate(
                  {
                    left: '-120%'
                  },
                  0,
                  'easeOutExpo'
                );
            });
        }
        if (index == '3') {
          // $('.section3').find('p').delay(500).animate({
          // 	bottom: '-120%'
          // }, 1500, 'easeOutExpo');
        }
        if (index == '4') {
          // $('.section4').find('.about-left-top').fadeOut(0);
          // $('.section4').find('.about-left-middle').fadeOut(0);
          // $('.section4').find('.about-left-bottom').fadeOut(0);
          // $('.section4').find('.about-left-more').fadeOut(0);
        }
      }
    });
  }
  if ($('#section-container').length > 0) {
    fullPageHome();
  }
  // 服务-优势-客户 全屏滚动
  function fullPageFYK() {
    $('#section-container-service').fullpage({
      anchors: ['page1', 'page2', 'page3', 'page4'],
      menu: '#header',
      navigation: true, //是否显示导航，默认为false
      navigationPosition: 'right', //导航小圆点的位置
      navigationTooltips: ['优质服务', '我们的优势', '我们的客户'], //导航小圆点的提示
      afterLoad: function(anchorLink, index) {
        if (index == 1) {
          $('.header').removeClass('active');
          $('.section-container-service')
            .find('.section1')
            .find('.service-item p')
            .each((index, item) => {
              $(item)
                .delay(1000 * index)
                .animate(
                  {
                    left: 0
                  },
                  1500,
                  'easeOutExpo'
                );
            });
        } else {
          $('.header').addClass('active');
        }
        if (index == 2) {
          $('.section-container-service')
            .find('.section2')
            .find('.service-item p')
            .each((index, item) => {
              $(item)
                .delay(500 * index)
                .animate(
                  {
                    right: 0
                  },
                  1500,
                  'easeOutExpo'
                );
            });
        }
        if (index == 3) {
          $('.section-container-service')
            .find('.section3')
            .find('.service-item p')
            .delay(500)
            .animate(
              {
                left: '0'
              },
              1500,
              'easeOutExpo'
            );
        }
      },
      onLeave: function(index, direction) {
        if (index == 1) {
          $('.section-container-service')
            .find('.section1')
            .find('.service-item p')
            .each((index, item) => {
              $(item)
                .delay(1000 * index)
                .animate(
                  {
                    left: '-120%'
                  },
                  1500,
                  'easeOutExpo'
                );
            });
        }
        if (index == '2') {
          $('.section-container-service')
            .find('.section2')
            .find('.service-item p')
            .each((index, item) => {
              $(item)
                .delay(0)
                .animate(
                  {
                    right: '-120%'
                  },
                  0,
                  'easeOutExpo'
                );
            });
        }
        if (index == '3') {
          $('.section-container-service')
            .find('.section3')
            .find('.service-item p')
            .each((index, item) => {
              $(item)
                .delay(0)
                .animate(
                  {
                    left: '-120%'
                  },
                  0,
                  'easeOutExpo'
                );
            });
        }
        if (index == '4') {
          // $('.section4').find('.about-left-top').fadeOut(0);
          // $('.section4').find('.about-left-middle').fadeOut(0);
          // $('.section4').find('.about-left-bottom').fadeOut(0);
          // $('.section4').find('.about-left-more').fadeOut(0);
        }
      }
    });
  }
  if ($('#section-container-service').length > 0) {
    // fullPageFYK();
  }
  // 首页轮播图
  function swiperHome() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
  if ($('.swiper-container').length > 0) {
    swiperHome();
  }
  // 地图
  function initMap(param) {
    var map = new AMap.Map('map-container', {
      zoomEnable: false,
      resizeEnable: false,
      rotateEnable: true,
      pitchEnable: true,
      zoom: 17,
      pitch: 30,
      rotation: -15,
      viewMode: '3D', //开启3D视图,默认为关闭
      buildingAnimation: true, //楼块出现是否带动画

      expandZoomRange: true,
      zooms: [3, 20],
      center: [125.425499, 43.878605]
    });
    addMarker();
    var map_control_bar = new AMap.ControlBar({
      showZoomBar: false,
      showControlButton: true,
      position: {
        right: '10px',
        top: '60px'
      }
    });
    map.addControl(map_control_bar);
    // //添加marker标记
    var f = false;
    function addMarker() {
      map.clearMap();
      var marker = new AMap.Marker({
        map: map,
        position: [125.425499, 43.878605]
      });
      marker.setLabel({
        offset: new AMap.Pixel(20, 10), //设置文本标注偏移量
        content: "<div class='info'>长春市云知科技有限公司</div>" //设置文本标注内容
      });
      //鼠标点击marker弹出自定义的信息窗体

      AMap.event.addListener(marker, 'click', function() {
        console.log(f);
        if (f == false) {
          infoWindow.open(map, marker.getPosition());
          f = true;
        } else {
          infoWindow.close(map, marker.getPosition());
          f = false;
        }
      });
    }

    //实例化信息窗体
    var title = `长春市云知科技有限公司<img style='position:relative;width: 12px; display:inline-block; top: 0; transition: none; right: auto; margin-left: 5px;' src='images/location-i.png'><span style="font-size:11px; margin-left: 0;">长春</span>`,
      content = [];
    content.push(
      "<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：吉林省长春市二道区万豪国际B座1618室"
    );
    content.push('电话：18611539216');
    content.push('邮箱：shangxintianshi9@163.com');
    var infoWindow = new AMap.InfoWindow({
      isCustom: true, //使用自定义窗体
      content: createInfoWindow(title, content.join('<br/>')),
      offset: new AMap.Pixel(16, -45)
    });
    //构建自定义信息窗体
    function createInfoWindow(title, content) {
      var info = document.createElement('div');
      info.className = 'custom-info input-card content-window-card';

      //可以通过下面的方式修改自定义窗体的宽高
      //info.style.width = "400px";
      // 定义顶部标题
      var top = document.createElement('div');
      var titleD = document.createElement('div');
      var closeX = document.createElement('img');
      top.className = 'info-top';
      titleD.innerHTML = title;
      closeX.src = 'https://webapi.amap.com/images/close2.gif';
      closeX.onclick = closeInfoWindow;

      top.appendChild(titleD);
      top.appendChild(closeX);
      info.appendChild(top);

      // 定义中部内容
      var middle = document.createElement('div');
      middle.className = 'info-middle';
      middle.style.backgroundColor = 'white';
      middle.innerHTML = content;
      info.appendChild(middle);

      // 定义底部内容
      var bottom = document.createElement('div');
      bottom.className = 'info-bottom';
      bottom.style.position = 'relative';
      bottom.style.top = '0px';
      bottom.style.margin = '0 auto';
      var sharp = document.createElement('img');
      sharp.src = 'https://webapi.amap.com/images/sharp.png';
      bottom.appendChild(sharp);
      info.appendChild(bottom);
      return info;
    }
    //关闭信息窗体
    function closeInfoWindow() {
      map.clearInfoWindow();
      f = false;
    }
    //打开信息窗体
    function openInfoWindow() {
      map.openInfoWindow();
    }
  }
  // 加入我们 地图
  if ($('#map-container').length > 0) {
    initMap();
  }

  // 移动端导航
  let header_f = false;
  $('.menu-mobile').on('click', function() {
    if (header_f == false) {
      $('.menu').addClass('active');
      header_f = true;
    } else {
      $('.menu').removeClass('active');
      header_f = false;
    }
  });
  $('*').on('click', function(e) {
    console.log($(e.target).parent());
    if (
      $(e.target)
        .parent()
        .attr('class') != 'menu-mobile'
    ) {
      $('.menu').removeClass('active');
      header_f = false;
    }
  });
});
