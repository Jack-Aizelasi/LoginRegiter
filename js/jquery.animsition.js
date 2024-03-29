/*
 * animsition v3.4.3
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
(function(a) {
  var c = 'animsition';
  var b = {
    init: function(d) {
      d = a.extend(
        {
          inClass: 'fade-in',
          outClass: 'fade-out',
          inDuration: 1500,
          outDuration: 800,
          linkElement: '.animsition-link',
          loading: true,
          loadingParentElement: 'body',
          loadingClass: 'animsition-loading',
          unSupportCss: [
            'animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
          ],
          overlay: false,
          overlayClass: 'animsition-overlay-slide',
          overlayParentElement: 'body'
        },
        d
      );
      var f = b.supportCheck.call(this, d);
      if (!f) {
        if (!('console' in window)) {
          window.console = {};
          window.console.log = function(g) {
            return g;
          };
        }
        console.log('Animsition does not support this browser.');
        return b.destroy.call(this);
      }
      var e = b.optionCheck.call(this, d);
      if (e) {
        b.addOverlay.call(this, d);
      }
      if (d.loading) {
        b.addLoading.call(this, d);
      }
      return this.each(function() {
        var i = this;
        var g = a(this);
        var h = a(window);
        var j = g.data(c);
        if (!j) {
          d = a.extend({}, d);
          g.data(c, { options: d });
          h.on('load.' + c + ' pageshow.' + c, function() {
            b.pageIn.call(i);
          });
          h.on('unload.' + c, function() {});
          a(d.linkElement).on('click.' + c, function(l) {
            l.preventDefault();
            var k = a(this);
            b.pageOut.call(i, k);
          });
        }
      });
    },
    addOverlay: function(d) {
      a(d.overlayParentElement).prepend(
        '<div class="' + d.overlayClass + '"></div>'
      );
    },
    addLoading: function(d) {
      a(d.loadingParentElement).append(
        '<div class="' + d.loadingClass + '"></div>'
      );
    },
    removeLoading: function() {
      var e = a(this);
      var f = e.data(c).options;
      var d = a(f.loadingParentElement).children('.' + f.loadingClass);
      d.fadeOut().remove();
    },
    supportCheck: function(f) {
      var d = a(this);
      var g = f.unSupportCss;
      var h = g.length;
      var j = false;
      if (h === 0) {
        j = true;
      }
      for (var e = 0; e < h; e++) {
        if (typeof d.css(g[e]) === 'string') {
          j = true;
          break;
        }
      }
      return j;
    },
    optionCheck: function(e) {
      var d = a(this);
      var f;
      if (e.overlay || d.data('animsition-overlay')) {
        f = true;
      } else {
        f = false;
      }
      return f;
    },
    animationCheck: function(e, j, k) {
      var d = a(this);
      var i = d.data(c).options;
      var h = typeof e;
      var g = !j && h === 'number';
      var f = j && h === 'string' && e.length > 0;
      if (g || f) {
        e = e;
      } else {
        if (j && k) {
          e = i.inClass;
        } else {
          if (!j && k) {
            e = i.inDuration;
          } else {
            if (j && !k) {
              e = i.outClass;
            } else {
              if (!j && !k) {
                e = i.outDuration;
              }
            }
          }
        }
      }
      return e;
    },
    pageIn: function() {
      var e = this;
      var d = a(this);
      var h = d.data(c).options;
      var k = d.data('animsition-in-duration');
      var j = d.data('animsition-in');
      var g = b.animationCheck.call(e, k, false, true);
      var f = b.animationCheck.call(e, j, true, true);
      var i = b.optionCheck.call(e, h);
      if (h.loading) {
        b.removeLoading.call(e);
      }
      if (i) {
        b.pageInOverlay.call(e, f, g);
      } else {
        b.pageInBasic.call(e, f, g);
      }
    },
    pageInBasic: function(e, f) {
      var d = a(this);
      d.css({ 'animation-duration': f / 1000 + 's' })
        .addClass(e)
        .animateCallback(function() {
          d.removeClass(e).css({ opacity: 1 });
        });
    },
    pageInOverlay: function(e, f) {
      var d = a(this);
      var g = d.data(c).options;
      d.css({ opacity: 1 });
      a(g.overlayParentElement)
        .children('.' + g.overlayClass)
        .css({ 'animation-duration': f / 1000 + 's' })
        .addClass(e);
    },
    pageOut: function(d) {
      var f = this;
      var e = a(this);
      var i = e.data(c).options;
      var m = d.data('animsition-out');
      var o = e.data('animsition-out');
      var n = d.data('animsition-out-duration');
      var p = e.data('animsition-out-duration');
      var g = m ? m : o;
      var h = n ? n : p;
      var j = b.animationCheck.call(f, g, true, false);
      var k = b.animationCheck.call(f, h, false, false);
      var l = b.optionCheck.call(f, i);
      var q = d.attr('href');
      if (l) {
        b.pageOutOverlay.call(f, j, k, q);
      } else {
        b.pageOutBasic.call(f, j, k, q);
      }
    },
    pageOutBasic: function(e, f, g) {
      var d = a(this);
      d.css({ 'animation-duration': f / 1000 + 's' })
        .addClass(e)
        .animateCallback(function() {
          location.href = g;
        });
    },
    pageOutOverlay: function(h, i, k) {
      var e = this;
      var d = a(this);
      var g = d.data(c).options;
      var j = d.data('animsition-in');
      var f = b.animationCheck.call(e, j, true, true);
      a(g.overlayParentElement)
        .children('.' + g.overlayClass)
        .css({ 'animation-duration': i / 1000 + 's' })
        .removeClass(f)
        .addClass(h)
        .animateCallback(function() {
          d.css({ opacity: 0 });
          location.href = k;
        });
    },
    destroy: function() {
      return this.each(function() {
        var d = a(this);
        a(window).unbind('.' + c);
        d.css({ opacity: 1 }).removeData(c);
      });
    }
  };
  a.fn.animateCallback = function(d) {
    var e =
      'animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd';
    return this.each(function() {
      a(this).bind(e, function() {
        a(this).unbind(e);
        return d.call(this);
      });
    });
  };
  a.fn.animsition = function(d) {
    if (b[d]) {
      return b[d].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      if (typeof d === 'object' || !d) {
        return b.init.apply(this, arguments);
      } else {
        a.error('Method ' + d + ' does not exist on jQuery.' + c);
      }
    }
  };
})(jQuery);
