/*! For license information please see LICENSES */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    626(e, t, n) {
      !(function (e, t, n) {
        'use strict'
        let r
        ;(t =
          t && Object.prototype.hasOwnProperty.call(t, 'default')
            ? t.default
            : t),
          (n =
            n && Object.prototype.hasOwnProperty.call(n, 'default')
              ? n.default
              : n),
          (function (e) {
            ;(e.SwiperComponent = 'Swiper'),
              (e.SwiperSlideComponent = 'SwiperSlide'),
              (e.SwiperDirective = 'swiper'),
              (e.SwiperInstance = '$swiper')
          })(r || (r = {}))
        let o
        var l
        let d = Object.freeze({
          containerClass: 'swiper-container',
          wrapperClass: 'swiper-wrapper',
          slideClass: 'swiper-slide',
        })
        ;(function (e) {
          ;(e.Ready = 'ready'), (e.ClickSlide = 'clickSlide')
        })(o || (o = {})),
          (function (e) {
            ;(e.AutoUpdate = 'autoUpdate'),
              (e.AutoDestroy = 'autoDestroy'),
              (e.DeleteInstanceOnDestroy = 'deleteInstanceOnDestroy'),
              (e.CleanupStylesOnDestroy = 'cleanupStylesOnDestroy')
          })(l || (l = {}))
        const c = [
          'init',
          'beforeDestroy',
          'slideChange',
          'slideChangeTransitionStart',
          'slideChangeTransitionEnd',
          'slideNextTransitionStart',
          'slideNextTransitionEnd',
          'slidePrevTransitionStart',
          'slidePrevTransitionEnd',
          'transitionStart',
          'transitionEnd',
          'touchStart',
          'touchMove',
          'touchMoveOpposite',
          'sliderMove',
          'touchEnd',
          'click',
          'tap',
          'doubleTap',
          'imagesReady',
          'progress',
          'reachBeginning',
          'reachEnd',
          'fromEdge',
          'setTranslate',
          'setTransition',
          'resize',
          'observerUpdate',
          'beforeLoopFix',
          'loopFix',
        ]
        function h() {
          for (var s = 0, i = 0, e = arguments.length; i < e; i++)
            s += arguments[i].length
          const t = Array(s)
          let n = 0
          for (i = 0; i < e; i++)
            for (let a = arguments[i], r = 0, o = a.length; r < o; r++, n++)
              t[n] = a[r]
          return t
        }
        let m
        let f = function (e) {
          return e
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')
            .toLowerCase()
        }
        let v = function (e, t, n) {
          var r, l, d
          if (e && !e.destroyed) {
            var c =
              ((r = t.composedPath) === null || void 0 === r
                ? void 0
                : r.call(t)) || t.path
            if ((t == null ? void 0 : t.target) && c) {
              var h = Array.from(e.slides);
                  var m = Array.from(c)
              if (
                h.includes(t.target) ||
                m.some(function (e) {
                  return h.includes(e)
                })
              ) {
                let v = e.clickedIndex;
                    var w = Number(
                      null ===
                        (d =
                          null === (l = e.clickedSlide) || void 0 === l
                            ? void 0
                            : l.dataset) || void 0 === d
                        ? void 0
                        : d.swiperSlideIndex
                    );
                    var y = Number.isInteger(w) ? w : null
                n(o.ClickSlide, v, y), n(f(o.ClickSlide), v, y)
              }
            }
          }
        }
        let w = function (e, t) {
          c.forEach(function (n) {
            e.on(n, function () {
              for (var e = arguments, r = [], o = 0; o < arguments.length; o++)
                r[o] = e[o]
              t.apply(void 0, h([n], r))
              const l = f(n)
              l !== n && t.apply(void 0, h([l], r))
            })
          })
        }
        function y(e, t) {
          const n = function (e, t) {
            let n
            var r
            var o
            var l
            var d =
              (r = null === (n = e.data) || void 0 === n ? void 0 : n.attrs) ===
                null || void 0 === r
                ? void 0
                : r[t]
            return void 0 !== d
              ? d
              : (l =
                  null === (o = e.data) || void 0 === o ? void 0 : o.attrs) ===
                  null || void 0 === l
              ? void 0
              : l[f(t)]
          }
          let c = function (element, e, t) {
            return (
              e.arg || n(t, 'instanceName') || element.id || r.SwiperInstance
            )
          }
          var h = function (element, e, t) {
            var n = c(element, e, t)
            return t.context[n] || null
          }
          var m = function (e) {
            return e.value || t
          }
          let y = function (input) {
            return [!0, void 0, null, ''].includes(input)
          }
          let x = function (e) {
            let t
            var n
            var r =
              ((t = e.data) === null || void 0 === t ? void 0 : t.on) ||
              ((n = e.componentOptions) === null || void 0 === n
                ? void 0
                : n.listeners)
            return function (e) {
              for (
                var t, n = arguments, o = [], l = 1;
                l < arguments.length;
                l++
              )
                o[l - 1] = n[l]
              let d = (t = r) === null || void 0 === t ? void 0 : t[e]
              d && d.fns.apply(d, o)
            }
          }
          return {
            bind(element, e, t) {
              ;element.className.indexOf(d.containerClass) === -1 &&
                (element.className +=
                  (element.className ? ' ' : '') + d.containerClass),
                element.addEventListener('click', function (n) {
                  let r = x(t);
                    var o = h(element, e, t)
                  v(o, n, r)
                })
            },
            inserted(element, t, n) {
              let r = n.context;
                var l = m(t);
                var d = c(element, t, n);
                var h = x(n);
                var f = r;
                var v = f == null ? void 0 : f[d]
              ;(v && !v.destroyed) ||
                ((v = new e(element, l)), (f[d] = v), w(v, h), h(o.Ready, v))
            },
            componentUpdated(element, e, t) {
              let r;
                var o;
                var d;
                var c;
                var f;
                var v;
                var w;
                var x;
                var E;
                var T;
                var S;
                var C;
                var A = n(t, l.AutoUpdate)
              if (y(A)) {
                let M = h(element, e, t)
                if (M) {
                  let $ = m(e).loop
                  $ &&
                    ((o =
                        null === (r = M) || void 0 === r
                          ? void 0
                          : r.loopDestroy) ===
                      null ||
                      void 0 === o ||
                      o.call(r)),
                    (d = null == M ? void 0 : M.update) === null ||
                      void 0 === d ||
                      d.call(M),
                    (f =
                        null === (c = M.navigation) || void 0 === c
                          ? void 0
                          : c.update) ===
                      null ||
                      void 0 === f ||
                      f.call(c),
                    (w =
                        null === (v = M.pagination) || void 0 === v
                          ? void 0
                          : v.render) ===
                      null ||
                      void 0 === w ||
                      w.call(v),
                    (E =
                        null === (x = M.pagination) || void 0 === x
                          ? void 0
                          : x.update) ===
                      null ||
                      void 0 === E ||
                      E.call(x),
                    $ &&
                      ((S =
                          null === (T = M) || void 0 === T
                            ? void 0
                            : T.loopCreate) ===
                        null ||
                        void 0 === S ||
                        S.call(T),
                      (C = null == M ? void 0 : M.update) === null ||
                        void 0 === C ||
                        C.call(M))
                }
              }
            },
            unbind(element, e, t) {
              let r;
                var o = n(t, l.AutoDestroy)
              if (y(o)) {
                let d = h(element, e, t)
                d &&
                  d.initialized &&
                  ((r = null == d ? void 0 : d.destroy) === null ||
                    void 0 === r ||
                    r.call(
                      d,
                      y(n(t, l.DeleteInstanceOnDestroy)),
                      y(n(t, l.CleanupStylesOnDestroy))
                    ))
              }
            },
          }
        }
        function x(e) {
          let t
          return n.extend({
            name: r.SwiperComponent,
            props:
              ((t = {
                defaultOptions: {
                  type: Object,
                  required: !1,
                  default() {
                    return {}
                  },
                },
                options: { type: Object, required: !1 },
              }),
              (t[l.AutoUpdate] = { type: Boolean, default: !0 }),
              (t[l.AutoDestroy] = { type: Boolean, default: !0 }),
              (t[l.DeleteInstanceOnDestroy] = {
                type: Boolean,
                required: !1,
                default: !0,
              }),
              (t[l.CleanupStylesOnDestroy] = {
                type: Boolean,
                required: !1,
                default: !0,
              }),
              t),
            data() {
              let e
              return ((e = {})[r.SwiperInstance] = null), e
            },
            computed: {
              swiperInstance: {
                cache: !1,
                set(e) {
                  this[r.SwiperInstance] = e
                },
                get() {
                  return this[r.SwiperInstance]
                },
              },
              swiperOptions() {
                return this.options || this.defaultOptions
              },
              wrapperClass() {
                return this.swiperOptions.wrapperClass || d.wrapperClass
              },
            },
            methods: {
              handleSwiperClick(e) {
                v(this.swiperInstance, e, this.$emit.bind(this))
              },
              autoReLoopSwiper() {
                let e, t
                if (this.swiperInstance && this.swiperOptions.loop) {
                  let n = this.swiperInstance
                  (e = null == n ? void 0 : n.loopDestroy) === null ||
                    void 0 === e ||
                    e.call(n),
                    (t = null == n ? void 0 : n.loopCreate) === null ||
                      void 0 === t ||
                      t.call(n)
                }
              },
              updateSwiper() {
                let e, t, n, r, o, d, c, h
                this[l.AutoUpdate] &&
                  this.swiperInstance &&
                  (this.autoReLoopSwiper(),
                  (t =
                      null === (e = this.swiperInstance) || void 0 === e
                        ? void 0
                        : e.update) ===
                    null ||
                    void 0 === t ||
                    t.call(e),
                  (r =
                      null === (n = this.swiperInstance.navigation) ||
                      void 0 === n
                        ? void 0
                        : n.update) ===
                    null ||
                    void 0 === r ||
                    r.call(n),
                  (d =
                      null === (o = this.swiperInstance.pagination) ||
                      void 0 === o
                        ? void 0
                        : o.render) ===
                    null ||
                    void 0 === d ||
                    d.call(o),
                  (h =
                      null === (c = this.swiperInstance.pagination) ||
                      void 0 === c
                        ? void 0
                        : c.update) ===
                    null ||
                    void 0 === h ||
                    h.call(c))
              },
              destroySwiper() {
                let e, t
                this[l.AutoDestroy] &&
                  this.swiperInstance &&
                  this.swiperInstance.initialized &&
                  ((t =
                      null === (e = this.swiperInstance) || void 0 === e
                        ? void 0
                        : e.destroy) ===
                    null ||
                    void 0 === t ||
                    t.call(
                      e,
                      this[l.DeleteInstanceOnDestroy],
                      this[l.CleanupStylesOnDestroy]
                    ))
              },
              initSwiper() {
                ;(this.swiperInstance = new e(this.$el, this.swiperOptions)),
                  w(this.swiperInstance, this.$emit.bind(this)),
                  this.$emit(o.Ready, this.swiperInstance)
              },
            },
            mounted() {
              this.swiperInstance || this.initSwiper()
            },
            activated() {
              this.updateSwiper()
            },
            updated() {
              this.updateSwiper()
            },
            beforeDestroy() {
              this.$nextTick(this.destroySwiper)
            },
            render(e) {
              return e(
                'div',
                {
                  staticClass: d.containerClass,
                  on: { click: this.handleSwiperClick },
                },
                [
                  this.$slots[m.ParallaxBg],
                  e('div', { class: this.wrapperClass }, this.$slots.default),
                  this.$slots[m.Pagination],
                  this.$slots[m.PrevButton],
                  this.$slots[m.NextButton],
                  this.$slots[m.Scrollbar],
                ]
              )
            },
          })
        }
        !(function (e) {
          ;(e.ParallaxBg = 'parallax-bg'),
            (e.Pagination = 'pagination'),
            (e.Scrollbar = 'scrollbar'),
            (e.PrevButton = 'button-prev'),
            (e.NextButton = 'button-next')
        })(m || (m = {}))
        const E = n.extend({
          name: r.SwiperSlideComponent,
          computed: {
            slideClass() {
              var e, t
              return (
                ((t =
                      null === (e = this.$parent) || void 0 === e
                        ? void 0
                        : e.swiperOptions) ===
                    null || void 0 === t
                  ? void 0
                  : t.slideClass) || d.slideClass
              )
            },
          },
          methods: {
            update() {
              let e;
                  var t = this.$parent
              t[l.AutoUpdate] &&
                ((e = null == t ? void 0 : t.swiperInstance) === null ||
                  void 0 === e ||
                  e.update())
            },
          },
          mounted() {
            this.update()
          },
          updated() {
            this.update()
          },
          render(e) {
            return e('div', { class: this.slideClass }, this.$slots.default)
          },
        })
        let T = function (e) {
          var t = function (n, o) {
            if (!t.installed) {
              let l = x(e)
              o &&
                (l.options.props.defaultOptions.default = function () {
                  return o
                }),
                n.component(r.SwiperComponent, l),
                n.component(r.SwiperSlideComponent, E),
                n.directive(r.SwiperDirective, y(e, o)),
                (t.installed = !0)
            }
          }
          return t
        }
        let S = (function (e) {
          var t
          return (
            ((t = { version: '4.1.1', install: T(e), directive: y(e) })[
              r.SwiperComponent
            ] = x(e)),
            (t[r.SwiperSlideComponent] = E),
            t
          )
        })(t)
        var C = S.version
        var A = S.install
        var M = S.directive
        var $ = S.Swiper
        let k = S.SwiperSlide
        ;(e.Swiper = $),
          (e.SwiperSlide = k),
          (e.default = S),
          (e.directive = M),
          (e.install = A),
          (e.version = C),
          Object.defineProperty(e, '__esModule', { value: !0 })
      })(t, n(659), n(2))
    },
    627(e, t, n) {
      let content = n(633)
      typeof content == 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(12).default)('0542ed34', content, !0, { sourceMap: !1 })
    },
    633(e, t, n) {
      ;(t = n(11)(!1)).push([
        e.i,
        '@font-face{font-family:"swiper-icons";src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(-1*var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;-moz-font-feature-settings:normal,;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:"next"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}',
        '',
      ]),
        (e.exports = t)
    },
    659(e, t, n) {
      'use strict'
      function r(e) {
        return (
          e !== null &&
          typeof e == 'object' &&
          'constructor' in e &&
          e.constructor === Object
        )
      }
      function o(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function (n) {
            void 0 === e[n]
              ? (e[n] = t[n])
              : r(t[n]) &&
                r(e[n]) &&
                Object.keys(t[n]).length > 0 &&
                o(e[n], t[n])
          })
      }
      n.r(t)
      const l = typeof document != 'undefined' ? document : {}
      let d = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector() {
          return null
        },
        querySelectorAll() {
          return []
        },
        getElementById() {
          return null
        },
        createEvent() {
          return { initEvent () {} }
        },
        createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName: function () {
              return []
            },
          }
        },
        createElementNS() {
          return {}
        },
        importNode() {
          return null
        },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      }
      o(l, d)
      const c = typeof window != 'undefined' ? window : {}
      o(c, {
        document: d,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {},
        },
        CustomEvent() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
          return {
            getPropertyValue () {
              return ''
            },
          }
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
          return {}
        },
      })
      class h {
        constructor(e) {
          const t = this
          for (let i = 0; i < e.length; i += 1) t[i] = e[i]
          return (t.length = e.length), this
        }
      }
      function m(e, t) {
        const n = []
        let i = 0
        if (e && !t && e instanceof h) return e
        if (e)
          if (typeof e == 'string') {
            let r, o
            const html = e.trim()
            if (html.includes('<') && html.includes('>')) {
              let e = 'div'
              for (
                html.indexOf('<li') === 0 && (e = 'ul'),
                  html.indexOf('<tr') === 0 && (e = 'tbody'),
                  (html.indexOf('<td') !== 0 && html.indexOf('<th') !== 0) ||
                    (e = 'tr'),
                  html.indexOf('<tbody') === 0 && (e = 'table'),
                  html.indexOf('<option') === 0 && (e = 'select'),
                  o = l.createElement(e),
                  o.innerHTML = html,
                  i = 0;
                i < o.childNodes.length;
                i += 1
              )
                n.push(o.childNodes[i])
            } else
              for (
                r =
                  t || e[0] !== '#' || e.match(/[ .<>:~]/)
                    ? (t || l).querySelectorAll(e.trim())
                    : [l.getElementById(e.trim().split('#')[1])],
                  i = 0;
                i < r.length;
                i += 1
              )
                r[i] && n.push(r[i])
          } else if (e.nodeType || e === c || e === l) n.push(e)
          else if (e.length > 0 && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) n.push(e[i])
        return new h(n)
      }
      function f(e) {
        const t = []
        for (let i = 0; i < e.length; i += 1)
          !t.includes(e[i]) && t.push(e[i])
        return t
      }
      ;(m.fn = h.prototype), (m.Class = h), (m.Dom7 = h)
      'resize scroll'.split(' ')
      const v = {
        addClass(e) {
          if (void 0 === e) return this
          const t = e.split(' ')
          for (let i = 0; i < t.length; i += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] &&
                void 0 !== this[e].classList &&
                this[e].classList.add(t[i])
          return this
        },
        removeClass(e) {
          const t = e.split(' ')
          for (let i = 0; i < t.length; i += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] &&
                void 0 !== this[e].classList &&
                this[e].classList.remove(t[i])
          return this
        },
        hasClass(e) {
          return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass(e) {
          const t = e.split(' ')
          for (let i = 0; i < t.length; i += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] &&
                void 0 !== this[e].classList &&
                this[e].classList.toggle(t[i])
          return this
        },
        attr(e, t) {
          if (arguments.length === 1 && typeof e == 'string')
            return this[0] ? this[0].getAttribute(e) : void 0
          for (let i = 0; i < this.length; i += 1)
            if (arguments.length === 2) this[i].setAttribute(e, t)
            else
              for (const t in e)
                (this[i][t] = e[t]), this[i].setAttribute(t, e[t])
          return this
        },
        removeAttr(e) {
          for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(e)
          return this
        },
        data(e, t) {
          let n
          if (void 0 !== t) {
            for (let i = 0; i < this.length; i += 1)
              (n = this[i]),
                n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                (n.dom7ElementDataStorage[e] = t)
            return this
          }
          if (((n = this[0]), n)) {
            if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage)
              return n.dom7ElementDataStorage[e]
            const t = n.getAttribute('data-' + e)
            return t || void 0
          }
        },
        transform(e) {
          for (let i = 0; i < this.length; i += 1) {
            const t = this[i].style
            ;(t.webkitTransform = e), (t.transform = e)
          }
          return this
        },
        transition(e) {
          typeof e != 'string' && (e += 'ms')
          for (let i = 0; i < this.length; i += 1) {
            const t = this[i].style
            ;(t.webkitTransitionDuration = e), (t.transitionDuration = e)
          }
          return this
        },
        on(...e) {
          let [t, n, r, o] = e
          function l(e) {
            const t = e.target
            if (!t) return
            const o = e.target.dom7EventData || []
            if ((!o.includes(e) && o.unshift(e), m(t).is(n))) r.apply(t, o)
            else {
              const e = m(t).parents()
              for (let t = 0; t < e.length; t += 1)
                m(e[t]).is(n) && r.apply(e[t], o)
            }
          }
          function d(e) {
            const t = (e && e.target && e.target.dom7EventData) || []
            !t.includes(e) && t.unshift(e), r.apply(this, t)
          }
          typeof e[1] == 'function' && (([t, r, o] = e), (n = void 0)),
            o || (o = !1)
          const c = t.split(' ')
          let h
          for (let i = 0; i < this.length; i += 1) {
            const e = this[i]
            if (n)
              for (h = 0; h < c.length; h += 1) {
                const t = c[h]
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({
                    listener: r,
                    proxyListener: l,
                  }),
                  e.addEventListener(t, l, o)
              }
            else
              for (h = 0; h < c.length; h += 1) {
                const t = c[h]
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: r, proxyListener: d }),
                  e.addEventListener(t, d, o)
              }
          }
          return this
        },
        off(...e) {
          let [t, n, r, o] = e
          typeof e[1] == 'function' && (([t, r, o] = e), (n = void 0)),
            o || (o = !1)
          const l = t.split(' ')
          for (let i = 0; i < l.length; i += 1) {
            const e = l[i]
            for (let t = 0; t < this.length; t += 1) {
              const l = this[t]
              let d
              if (
                (!n && l.dom7Listeners
                  ? (d = l.dom7Listeners[e])
                  : n && l.dom7LiveListeners && (d = l.dom7LiveListeners[e]),
                d && d.length)
              )
                for (let t = d.length - 1; t >= 0; t -= 1) {
                  const n = d[t]
                  ;(r && n.listener === r) ||
                  (r &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === r)
                    ? (l.removeEventListener(e, n.proxyListener, o),
                      d.splice(t, 1))
                    : r ||
                      (l.removeEventListener(e, n.proxyListener, o),
                      d.splice(t, 1))
                }
            }
          }
          return this
        },
        trigger(...e) {
          const t = e[0].split(' ');
            const n = e[1]
          for (let i = 0; i < t.length; i += 1) {
            const r = t[i]
            for (let t = 0; t < this.length; t += 1) {
              const o = this[t]
              let d
              try {
                d = new c.CustomEvent(r, {
                  detail: n,
                  bubbles: !0,
                  cancelable: !0,
                })
              } catch (e) {
                ;(d = l.createEvent('Event')),
                  d.initEvent(r, !0, !0),
                  (d.detail = n)
              }
              ;(o.dom7EventData = e.filter((data, e) => e > 0)),
                o.dispatchEvent(d),
                (o.dom7EventData = []),
                delete o.dom7EventData
            }
          }
          return this
        },
        transitionEnd(e) {
          const t = ['webkitTransitionEnd', 'transitionend'];
            const n = this
          let i
          function r(o) {
            if (o.target === this)
              for (e.call(this, o), i = 0; i < t.length; i += 1) n.off(t[i], r)
          }
          if (e) for (i = 0; i < t.length; i += 1) n.on(t[i], r)
          return this
        },
        outerWidth(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles()
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue('margin-right')) +
                parseFloat(e.getPropertyValue('margin-left'))
              )
            }
            return this[0].offsetWidth
          }
          return null
        },
        outerHeight(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles()
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue('margin-top')) +
                parseFloat(e.getPropertyValue('margin-bottom'))
              )
            }
            return this[0].offsetHeight
          }
          return null
        },
        offset() {
          if (this.length > 0) {
            const e = this[0];
              const t = e.getBoundingClientRect();
              const body = l.body;
              const n = e.clientTop || body.clientTop || 0;
              const r = e.clientLeft || body.clientLeft || 0;
              const o = e === c ? c.scrollY : e.scrollTop;
              const d = e === c ? c.scrollX : e.scrollLeft
            return { top: t.top + o - n, left: t.left + d - r }
          }
          return null
        },
        css(e, t) {
          let i
          if (arguments.length === 1) {
            if (typeof e != 'string') {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t]
              return this
            }
            if (this[0])
              return c.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (arguments.length === 2 && typeof e == 'string') {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t
            return this
          }
          return this
        },
        each(e) {
          if (!e) return this
          for (let i = 0; i < this.length; i += 1)
            if (!1 === e.call(this[i], i, this[i])) return this
          return this
        },
        html(html) {
          if (void 0 === html) return this[0] ? this[0].innerHTML : void 0
          for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html
          return this
        },
        text(text) {
          if (void 0 === text)
            return this[0] ? this[0].textContent.trim() : null
          for (let i = 0; i < this.length; i += 1) this[i].textContent = text
          return this
        },
        is(e) {
          const t = this[0]
          let n, i
          if (!t || void 0 === e) return !1
          if (typeof e == 'string') {
            if (t.matches) return t.matches(e)
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
            if (t.msMatchesSelector) return t.msMatchesSelector(e)
            for (n = m(e), i = 0; i < n.length; i += 1)
              if (n[i] === t) return !0
            return !1
          }
          if (e === l) return t === l
          if (e === c) return t === c
          if (e.nodeType || e instanceof h) {
            for (n = e.nodeType ? [e] : e, i = 0; i < n.length; i += 1)
              if (n[i] === t) return !0
            return !1
          }
          return !1
        },
        index() {
          let i;
            let e = this[0]
          if (e) {
            for (i = 0; (e = e.previousSibling) !== null; )
              e.nodeType === 1 && (i += 1)
            return i
          }
        },
        eq(e) {
          if (void 0 === e) return this
          const t = this.length
          let n
          return e > t - 1
            ? new h([])
            : e < 0
            ? ((n = t + e), new h(n < 0 ? [] : [this[n]]))
            : new h([this[e]])
        },
        append(...e) {
          let t
          for (let n = 0; n < e.length; n += 1) {
            t = e[n]
            for (let i = 0; i < this.length; i += 1)
              if (typeof t == 'string') {
                const e = l.createElement('div')
                for (e.innerHTML = t; e.firstChild; )
                  this[i].appendChild(e.firstChild)
              } else if (t instanceof h)
                for (let e = 0; e < t.length; e += 1) this[i].appendChild(t[e])
              else this[i].appendChild(t)
          }
          return this
        },
        prepend(e) {
          let i, t
          for (i = 0; i < this.length; i += 1)
            if (typeof e == 'string') {
              const n = l.createElement('div')
              for (n.innerHTML = e, t = n.childNodes.length - 1; t >= 0; t -= 1)
                this[i].insertBefore(n.childNodes[t], this[i].childNodes[0])
            } else if (e instanceof h)
              for (t = 0; t < e.length; t += 1)
                this[i].insertBefore(e[t], this[i].childNodes[0])
            else this[i].insertBefore(e, this[i].childNodes[0])
          return this
        },
        next(e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                m(this[0].nextElementSibling).is(e)
                ? new h([this[0].nextElementSibling])
                : new h([])
              : this[0].nextElementSibling
              ? new h([this[0].nextElementSibling])
              : new h([])
            : new h([])
        },
        nextAll(e) {
          const t = []
          let n = this[0]
          if (!n) return new h([])
          for (; n.nextElementSibling; ) {
            const r = n.nextElementSibling
            e ? m(r).is(e) && t.push(r) : t.push(r), (n = r)
          }
          return new h(t)
        },
        prev(e) {
          if (this.length > 0) {
            const t = this[0]
            return e
              ? t.previousElementSibling && m(t.previousElementSibling).is(e)
                ? new h([t.previousElementSibling])
                : new h([])
              : t.previousElementSibling
              ? new h([t.previousElementSibling])
              : new h([])
          }
          return new h([])
        },
        prevAll(e) {
          const t = []
          let n = this[0]
          if (!n) return new h([])
          for (; n.previousElementSibling; ) {
            const r = n.previousElementSibling
            e ? m(r).is(e) && t.push(r) : t.push(r), (n = r)
          }
          return new h(t)
        },
        parent(e) {
          const t = []
          for (let i = 0; i < this.length; i += 1)
            this[i].parentNode !== null &&
              (e
                ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode))
          return m(f(t))
        },
        parents(e) {
          const t = []
          for (let i = 0; i < this.length; i += 1) {
            let n = this[i].parentNode
            for (; n; )
              e ? m(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode)
          }
          return m(f(t))
        },
        closest(e) {
          let t = this
          return void 0 === e
            ? new h([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find(e) {
          const t = []
          for (let i = 0; i < this.length; i += 1) {
            const n = this[i].querySelectorAll(e)
            for (let e = 0; e < n.length; e += 1) t.push(n[e])
          }
          return new h(t)
        },
        children(e) {
          const t = []
          for (let i = 0; i < this.length; i += 1) {
            const n = this[i].childNodes
            for (let r = 0; r < n.length; r += 1)
              e
                ? n[r].nodeType === 1 && m(n[r]).is(e) && t.push(n[r])
                : n[r].nodeType === 1 && t.push(n[r])
          }
          return new h(f(t))
        },
        filter(e) {
          const t = [];
            const n = this
          for (let i = 0; i < n.length; i += 1)
            e.call(n[i], i, n[i]) && t.push(n[i])
          return new h(t)
        },
        remove() {
          for (let i = 0; i < this.length; i += 1)
            this[i].parentNode && this[i].parentNode.removeChild(this[i])
          return this
        },
        add(...e) {
          const t = this
          let i, n
          for (i = 0; i < e.length; i += 1) {
            const r = m(e[i])
            for (n = 0; n < r.length; n += 1)
              (t[t.length] = r[n]), (t.length += 1)
          }
          return t
        },
        styles() {
          return this[0] ? c.getComputedStyle(this[0], null) : {}
        },
      }
      Object.keys(v).forEach((e) => {
        m.fn[e] = m.fn[e] || v[e]
      })
      const w = {
        deleteProps(e) {
          const object = e
          Object.keys(object).forEach((e) => {
            try {
              object[e] = null
            } catch (e) {}
            try {
              delete object[e]
            } catch (e) {}
          })
        },
        nextTick: (e, t = 0) => setTimeout(e, t),
        now: () => Date.now(),
        getTranslate(e, t = 'x') {
          let n, r, o
          const l = c.getComputedStyle(e, null)
          return (
            c.WebKitCSSMatrix
              ? ((r = l.transform || l.webkitTransform),
                r.split(',').length > 6 &&
                  (r = r
                    .split(', ')
                    .map((a) => a.replace(',', '.'))
                    .join(', ')),
                (o = new c.WebKitCSSMatrix(r === 'none' ? '' : r)))
              : ((o =
                  l.MozTransform ||
                  l.OTransform ||
                  l.MsTransform ||
                  l.msTransform ||
                  l.transform ||
                  l
                    .getPropertyValue('transform')
                    .replace('translate(', 'matrix(1, 0, 0, 1,')),
                (n = o.toString().split(','))),
            t === 'x' &&
              (r = c.WebKitCSSMatrix
                ? o.m41
                : n.length === 16
                ? parseFloat(n[12])
                : parseFloat(n[4])),
            t === 'y' &&
              (r = c.WebKitCSSMatrix
                ? o.m42
                : n.length === 16
                ? parseFloat(n[13])
                : parseFloat(n[5])),
            r || 0
          )
        },
        parseUrlQuery(e) {
          const t = {}
          let i
          let n
          let param
          let r
          let o = e || c.location.href
          if (typeof o == 'string' && o.length)
            for (
              o = o.includes('?') ? o.replace(/\S*\?/, '') : '',
                n = o.split('&').filter((e) => e !== ''),
                r = n.length,
                i = 0;
              i < r;
              i += 1
            )
              (param = n[i].replace(/#\S+/g, '').split('=')),
                (t[decodeURIComponent(param[0])] =
                  void 0 === param[1]
                    ? void 0
                    : decodeURIComponent(param[1]) || '')
          return t
        },
        isObject: (e) =>
          typeof e == 'object' &&
          e !== null &&
          e.constructor &&
          e.constructor === Object,
        extend(...e) {
          const t = Object(e[0])
          for (let i = 1; i < e.length; i += 1) {
            const n = e[i]
            if (n != null) {
              const e = Object.keys(Object(n))
              for (let r = 0, o = e.length; r < o; r += 1) {
                const o = e[r]
                const desc = Object.getOwnPropertyDescriptor(n, o)
                void 0 !== desc &&
                  desc.enumerable &&
                  (w.isObject(t[o]) && w.isObject(n[o])
                    ? w.extend(t[o], n[o])
                    : !w.isObject(t[o]) && w.isObject(n[o])
                    ? ((t[o] = {}), w.extend(t[o], n[o]))
                    : (t[o] = n[o]))
              }
            }
          }
          return t
        },
      }
      const y = {
        touch: !!(
          'ontouchstart' in c ||
          (c.DocumentTouch && l instanceof c.DocumentTouch)
        ),
        pointerEvents:
          !!c.PointerEvent &&
          'maxTouchPoints' in c.navigator &&
          c.navigator.maxTouchPoints >= 0,
        observer: 'MutationObserver' in c || 'WebkitMutationObserver' in c,
        passiveListener: (function () {
          let e = !1
          try {
            const t = Object.defineProperty({}, 'passive', {
              get() {
                e = !0
              },
            })
            c.addEventListener('testPassiveListener', null, t)
          } catch (e) {}
          return e
        })(),
        gestures: 'ongesturestart' in c,
      }
      class x {
        constructor(e = {}) {
          const t = this
          ;(t.params = e),
            (t.eventsListeners = {}),
            t.params &&
              t.params.on &&
              Object.keys(t.params.on).forEach((e) => {
                t.on(e, t.params.on[e])
              })
        }

        on(e, t, n) {
          const r = this
          if (typeof t != 'function') return r
          const o = n ? 'unshift' : 'push'
          return (
            e.split(' ').forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][o](t)
            }),
            r
          )
        }

        once(e, t, n) {
          const r = this
          if (typeof t != 'function') return r
          function o(...n) {
            r.off(e, o), o.f7proxy && delete o.f7proxy, t.apply(r, n)
          }
          return (o.f7proxy = t), r.on(e, o, n)
        }

        off(e, t) {
          const n = this
          return n.eventsListeners
            ? (e.split(' ').forEach((e) => {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].length &&
                    n.eventsListeners[e].forEach((r, o) => {
                      ;(r === t || (r.f7proxy && r.f7proxy === t)) &&
                        n.eventsListeners[e].splice(o, 1)
                    })
              }),
              n)
            : n
        }

        emit(...e) {
          const t = this
          if (!t.eventsListeners) return t
          let n, data, r
          typeof e[0] == 'string' || Array.isArray(e[0])
            ? ((n = e[0]), (data = e.slice(1, e.length)), (r = t))
            : ((n = e[0].events), (data = e[0].data), (r = e[0].context || t))
          return (
            (Array.isArray(n) ? n : n.split(' ')).forEach((e) => {
              if (t.eventsListeners && t.eventsListeners[e]) {
                const n = []
                t.eventsListeners[e].forEach((e) => {
                  n.push(e)
                }),
                  n.forEach((e) => {
                    e.apply(r, data)
                  })
              }
            }),
            t
          )
        }

        useModulesParams(e) {
          const t = this
          t.modules &&
            Object.keys(t.modules).forEach((n) => {
              const r = t.modules[n]
              r.params && w.extend(e, r.params)
            })
        }

        useModules(e = {}) {
          const t = this
          t.modules &&
            Object.keys(t.modules).forEach((n) => {
              const r = t.modules[n]
              const o = e[n] || {}
              r.instance &&
                Object.keys(r.instance).forEach((e) => {
                  const n = r.instance[e]
                  t[e] = typeof n == 'function' ? n.bind(t) : n
                }),
                r.on &&
                  t.on &&
                  Object.keys(r.on).forEach((e) => {
                    t.on(e, r.on[e])
                  }),
                r.create && r.create.bind(t)(o)
            })
        }

        static set components(e) {
          this.use && this.use(e)
        }

        static installModule(e, ...t) {
          const n = this
          n.prototype.modules || (n.prototype.modules = {})
          const r =
            e.name || `${Object.keys(n.prototype.modules).length}_${w.now()}`
          return (
            (n.prototype.modules[r] = e),
            e.proto &&
              Object.keys(e.proto).forEach((t) => {
                n.prototype[t] = e.proto[t]
              }),
            e.static &&
              Object.keys(e.static).forEach((t) => {
                n[t] = e.static[t]
              }),
            e.install && e.install.apply(n, t),
            n
          )
        }

        static use(e, ...t) {
          const n = this
          return Array.isArray(e)
            ? (e.forEach((e) => n.installModule(e)), n)
            : n.installModule(e, ...t)
        }
      }
      const E = {
        updateSize() {
          const e = this
          let t, n
          const r = e.$el
          ;(t = void 0 !== e.params.width ? e.params.width : r[0].clientWidth),
            (n =
              void 0 !== e.params.height ? e.params.height : r[0].clientHeight),
            (t === 0 && e.isHorizontal()) ||
              (n === 0 && e.isVertical()) ||
              ((t =
                t -
                parseInt(r.css('padding-left'), 10) -
                parseInt(r.css('padding-right'), 10)),
              (n =
                n -
                parseInt(r.css('padding-top'), 10) -
                parseInt(r.css('padding-bottom'), 10)),
              w.extend(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }))
        },
        updateSlides() {
          const e = this;
            const t = e.params;
            const { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: l } = e;
            const d = e.virtual && t.virtual.enabled;
            const h = d ? e.virtual.slides.length : e.slides.length;
            const m = n.children('.' + e.params.slideClass);
            const f = d ? e.virtual.slides.length : m.length
          let v = []
          const y = [];
            const x = []
          function E(e) {
            return !t.cssMode || e !== m.length - 1
          }
          let T = t.slidesOffsetBefore
          typeof T == 'function' && (T = t.slidesOffsetBefore.call(e))
          let S = t.slidesOffsetAfter
          typeof S == 'function' && (S = t.slidesOffsetAfter.call(e))
          const C = e.snapGrid.length;
            const A = e.snapGrid.length
          let M;
            let $;
            let k = t.spaceBetween;
            let z = -T;
            let P = 0;
            let I = 0
          if (void 0 === r) return
          typeof k == 'string' &&
            k.includes('%') &&
            (k = (parseFloat(k.replace('%', '')) / 100) * r),
            (e.virtualSize = -k),
            o
              ? m.css({ marginLeft: '', marginTop: '' })
              : m.css({ marginRight: '', marginBottom: '' }),
            t.slidesPerColumn > 1 &&
              ((M =
                Math.floor(f / t.slidesPerColumn) ===
                f / e.params.slidesPerColumn
                  ? f
                  : Math.ceil(f / t.slidesPerColumn) * t.slidesPerColumn),
              t.slidesPerView !== 'auto' &&
                t.slidesPerColumnFill === 'row' &&
                (M = Math.max(M, t.slidesPerView * t.slidesPerColumn)))
          const L = t.slidesPerColumn;
            const D = M / L;
            const O = Math.floor(f / t.slidesPerColumn)
          for (let i = 0; i < f; i += 1) {
            $ = 0
            const n = m.eq(i)
            if (t.slidesPerColumn > 1) {
              let r, o, l
              if (t.slidesPerColumnFill === 'row' && t.slidesPerGroup > 1) {
                const e = Math.floor(
                    i / (t.slidesPerGroup * t.slidesPerColumn)
                  );
                  const d = i - t.slidesPerColumn * t.slidesPerGroup * e;
                  const c =
                    e === 0
                      ? t.slidesPerGroup
                      : Math.min(
                          Math.ceil((f - e * L * t.slidesPerGroup) / L),
                          t.slidesPerGroup
                        )
                ;(l = Math.floor(d / c)),
                  (o = d - l * c + e * t.slidesPerGroup),
                  (r = o + (l * M) / L),
                  n.css({
                    '-webkit-box-ordinal-group': r,
                    '-moz-box-ordinal-group': r,
                    '-ms-flex-order': r,
                    '-webkit-order': r,
                    order: r,
                  })
              } else
                t.slidesPerColumnFill === 'column'
                  ? ((o = Math.floor(i / L)),
                    (l = i - o * L),
                    (o > O || (o === O && l === L - 1)) &&
                      ((l += 1), l >= L && ((l = 0), (o += 1))))
                  : ((l = Math.floor(i / D)), (o = i - l * D))
              n.css(
                'margin-' + (e.isHorizontal() ? 'top' : 'left'),
                l !== 0 && t.spaceBetween && t.spaceBetween + 'px'
              )
            }
            if (n.css('display') !== 'none') {
              if (t.slidesPerView === 'auto') {
                const r = c.getComputedStyle(n[0], null);
                  const o = n[0].style.transform;
                  const l = n[0].style.webkitTransform
                if (
                  (o && (n[0].style.transform = 'none'),
                  l && (n[0].style.webkitTransform = 'none'),
                  t.roundLengths)
                )
                  $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0)
                else if (e.isHorizontal()) {
                  const e = parseFloat(r.getPropertyValue('width'));
                    const t = parseFloat(r.getPropertyValue('padding-left'));
                    const n = parseFloat(r.getPropertyValue('padding-right'));
                    const o = parseFloat(r.getPropertyValue('margin-left'));
                    const l = parseFloat(r.getPropertyValue('margin-right'));
                    const d = r.getPropertyValue('box-sizing')
                  $ = d && d === 'border-box' ? e + o + l : e + t + n + o + l
                } else {
                  const e = parseFloat(r.getPropertyValue('height'));
                    const t = parseFloat(r.getPropertyValue('padding-top'));
                    const n = parseFloat(r.getPropertyValue('padding-bottom'));
                    const o = parseFloat(r.getPropertyValue('margin-top'));
                    const l = parseFloat(r.getPropertyValue('margin-bottom'));
                    const d = r.getPropertyValue('box-sizing')
                  $ = d && d === 'border-box' ? e + o + l : e + t + n + o + l
                }
                o && (n[0].style.transform = o),
                  l && (n[0].style.webkitTransform = l),
                  t.roundLengths && ($ = Math.floor($))
              } else
                ($ = (r - (t.slidesPerView - 1) * k) / t.slidesPerView),
                  t.roundLengths && ($ = Math.floor($)),
                  m[i] &&
                    (e.isHorizontal()
                      ? (m[i].style.width = $ + 'px')
                      : (m[i].style.height = $ + 'px'))
              m[i] && (m[i].swiperSlideSize = $),
                x.push($),
                t.centeredSlides
                  ? ((z = z + $ / 2 + P / 2 + k),
                    P === 0 && i !== 0 && (z = z - r / 2 - k),
                    i === 0 && (z = z - r / 2 - k),
                    Math.abs(z) < 0.001 && (z = 0),
                    t.roundLengths && (z = Math.floor(z)),
                    I % t.slidesPerGroup == 0 && v.push(z),
                    y.push(z))
                  : (t.roundLengths && (z = Math.floor(z)),
                    (I - Math.min(e.params.slidesPerGroupSkip, I)) %
                      e.params.slidesPerGroup ==
                      0 && v.push(z),
                    y.push(z),
                    (z = z + $ + k)),
                (e.virtualSize += $ + k),
                (P = $),
                (I += 1)
            }
          }
          let B
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + S),
            o &&
              l &&
              (t.effect === 'slide' || t.effect === 'coverflow') &&
              n.css({ width: e.virtualSize + t.spaceBetween + 'px' }),
            t.setWrapperSize &&
              (e.isHorizontal()
                ? n.css({ width: e.virtualSize + t.spaceBetween + 'px' })
                : n.css({ height: e.virtualSize + t.spaceBetween + 'px' })),
            t.slidesPerColumn > 1 &&
              ((e.virtualSize = ($ + t.spaceBetween) * M),
              (e.virtualSize =
                Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
              e.isHorizontal()
                ? n.css({ width: e.virtualSize + t.spaceBetween + 'px' })
                : n.css({ height: e.virtualSize + t.spaceBetween + 'px' }),
              t.centeredSlides))
          ) {
            B = []
            for (let i = 0; i < v.length; i += 1) {
              let n = v[i]
              t.roundLengths && (n = Math.floor(n)),
                v[i] < e.virtualSize + v[0] && B.push(n)
            }
            v = B
          }
          if (!t.centeredSlides) {
            B = []
            for (let i = 0; i < v.length; i += 1) {
              let n = v[i]
              t.roundLengths && (n = Math.floor(n)),
                v[i] <= e.virtualSize - r && B.push(n)
            }
            ;(v = B),
              Math.floor(e.virtualSize - r) - Math.floor(v[v.length - 1]) > 1 &&
                v.push(e.virtualSize - r)
          }
          if (
            (v.length === 0 && (v = [0]),
            t.spaceBetween !== 0 &&
              (e.isHorizontal()
                ? o
                  ? m.filter(E).css({ marginLeft: k + 'px' })
                  : m.filter(E).css({ marginRight: k + 'px' })
                : m.filter(E).css({ marginBottom: k + 'px' })),
            t.centeredSlides && t.centeredSlidesBounds)
          ) {
            let e = 0
            x.forEach((n) => {
              e += n + (t.spaceBetween ? t.spaceBetween : 0)
            }),
              (e -= t.spaceBetween)
            const n = e - r
            v = v.map((e) => (e < 0 ? -T : e > n ? n + S : e))
          }
          if (t.centerInsufficientSlides) {
            let e = 0
            if (
              (x.forEach((n) => {
                e += n + (t.spaceBetween ? t.spaceBetween : 0)
              }),
              (e -= t.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2
              v.forEach((e, n) => {
                v[n] = e - t
              }),
                y.forEach((e, n) => {
                  y[n] = e + t
                })
            }
          }
          w.extend(e, {
            slides: m,
            snapGrid: v,
            slidesGrid: y,
            slidesSizesGrid: x,
          }),
            f !== h && e.emit('slidesLengthChange'),
            v.length !== C &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit('snapGridLengthChange')),
            y.length !== A && e.emit('slidesGridLengthChange'),
            (t.watchSlidesProgress || t.watchSlidesVisibility) &&
              e.updateSlidesOffset()
        },
        updateAutoHeight(e) {
          const t = this;
            const n = []
          let i;
            let r = 0
          if (
            (typeof e == 'number'
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed),
            t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
          )
            if (t.params.centeredSlides)
              t.visibleSlides.each((e, t) => {
                n.push(t)
              })
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i
                if (e > t.slides.length) break
                n.push(t.slides.eq(e)[0])
              }
          else n.push(t.slides.eq(t.activeIndex)[0])
          for (i = 0; i < n.length; i += 1)
            if (void 0 !== n[i]) {
              const e = n[i].offsetHeight
              r = e > r ? e : r
            }
          r && t.$wrapperEl.css('height', r + 'px')
        },
        updateSlidesOffset() {
          const e = this;
            const t = e.slides
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset = e.isHorizontal()
              ? t[i].offsetLeft
              : t[i].offsetTop
        },
        updateSlidesProgress(e = (this && this.translate) || 0) {
          const t = this;
            const n = t.params;
            const { slides: r, rtlTranslate: o } = t
          if (r.length === 0) return
          void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset()
          let l = -e
          o && (l = e),
            r.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = [])
          for (let i = 0; i < r.length; i += 1) {
            const e = r[i];
              const d =
                (l +
                  (n.centeredSlides ? t.minTranslate() : 0) -
                  e.swiperSlideOffset) /
                (e.swiperSlideSize + n.spaceBetween)
            if (n.watchSlidesVisibility || (n.centeredSlides && n.autoHeight)) {
              const o = -(l - e.swiperSlideOffset);
                const d = o + t.slidesSizesGrid[i]
              ;((o >= 0 && o < t.size - 1) ||
                (d > 1 && d <= t.size) ||
                (o <= 0 && d >= t.size)) &&
                (t.visibleSlides.push(e),
                t.visibleSlidesIndexes.push(i),
                r.eq(i).addClass(n.slideVisibleClass))
            }
            e.progress = o ? -d : d
          }
          t.visibleSlides = m(t.visibleSlides)
        },
        updateProgress(e) {
          const t = this
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1
            e = (t && t.translate && t.translate * n) || 0
          }
          const n = t.params;
            const r = t.maxTranslate() - t.minTranslate()
          let { progress, isBeginning: o, isEnd: l } = t
          const d = o;
            const c = l
          r === 0
            ? ((progress = 0), (o = !0), (l = !0))
            : ((progress = (e - t.minTranslate()) / r),
              (o = progress <= 0),
              (l = progress >= 1)),
            w.extend(t, { progress, isBeginning: o, isEnd: l }),
            (n.watchSlidesProgress ||
              n.watchSlidesVisibility ||
              (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            o && !d && t.emit('reachBeginning toEdge'),
            l && !c && t.emit('reachEnd toEdge'),
            ((d && !o) || (c && !l)) && t.emit('fromEdge'),
            t.emit('progress', progress)
        },
        updateSlidesClasses() {
          const e = this;
            const {
              slides: t,
              params: n,
              $wrapperEl: r,
              activeIndex: o,
              realIndex: l,
            } = e;
            const d = e.virtual && n.virtual.enabled
          let c
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (c = d
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${o}"]`
                )
              : t.eq(o)),
            c.addClass(n.slideActiveClass),
            n.loop &&
              (c.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : r
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass))
          let h = c
            .nextAll('.' + n.slideClass)
            .eq(0)
            .addClass(n.slideNextClass)
          n.loop &&
            h.length === 0 &&
            ((h = t.eq(0)), h.addClass(n.slideNextClass))
          let m = c
            .prevAll('.' + n.slideClass)
            .eq(0)
            .addClass(n.slidePrevClass)
          n.loop &&
            m.length === 0 &&
            ((m = t.eq(-1)), m.addClass(n.slidePrevClass)),
            n.loop &&
              (h.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${h.attr(
                        'data-swiper-slide-index'
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${h.attr(
                        'data-swiper-slide-index'
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              m.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${m.attr(
                        'data-swiper-slide-index'
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${m.attr(
                        'data-swiper-slide-index'
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass))
        },
        updateActiveIndex(e) {
          const t = this;
            const n = t.rtlTranslate ? t.translate : -t.translate;
            const {
              slidesGrid: r,
              snapGrid: o,
              params: l,
              activeIndex: d,
              realIndex: c,
              snapIndex: h,
            } = t
          let m;
            let f = e
          if (void 0 === f) {
            for (let i = 0; i < r.length; i += 1)
              void 0 !== r[i + 1]
                ? n >= r[i] && n < r[i + 1] - (r[i + 1] - r[i]) / 2
                  ? (f = i)
                  : n >= r[i] && n < r[i + 1] && (f = i + 1)
                : n >= r[i] && (f = i)
            l.normalizeSlideIndex && (f < 0 || void 0 === f) && (f = 0)
          }
          if (o.includes(n)) m = o.indexOf(n)
          else {
            const e = Math.min(l.slidesPerGroupSkip, f)
            m = e + Math.floor((f - e) / l.slidesPerGroup)
          }
          if ((m >= o.length && (m = o.length - 1), f === d))
            return void (
              m !== h && ((t.snapIndex = m), t.emit('snapIndexChange'))
            )
          const v = parseInt(
            t.slides.eq(f).attr('data-swiper-slide-index') || f,
            10
          )
          w.extend(t, {
            snapIndex: m,
            realIndex: v,
            previousIndex: d,
            activeIndex: f,
          }),
            t.emit('activeIndexChange'),
            t.emit('snapIndexChange'),
            c !== v && t.emit('realIndexChange'),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit('slideChange')
        },
        updateClickedSlide(e) {
          const t = this;
            const n = t.params;
            const r = m(e.target).closest('.' + n.slideClass)[0]
          let o = !1
          if (r)
            for (let i = 0; i < t.slides.length; i += 1)
              t.slides[i] === r && (o = !0)
          if (!r || !o)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
          ;(t.clickedSlide = r),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  m(r).attr('data-swiper-slide-index'),
                  10
                ))
              : (t.clickedIndex = m(r).index()),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide()
        },
      }
      const T = {
        getTranslate(e = this.isHorizontal() ? 'x' : 'y') {
          const {
            params: t,
            rtlTranslate: n,
            translate: r,
            $wrapperEl: o,
          } = this
          if (t.virtualTranslate) return n ? -r : r
          if (t.cssMode) return r
          let l = w.getTranslate(o[0], e)
          return n && (l = -l), l || 0
        },
        setTranslate(e, t) {
          const n = this;
            const {
              rtlTranslate: r,
              params: o,
              $wrapperEl: l,
              wrapperEl: d,
              progress,
            } = n
          let c;
            let h = 0;
            let m = 0
          n.isHorizontal() ? (h = r ? -e : e) : (m = e),
            o.roundLengths && ((h = Math.floor(h)), (m = Math.floor(m))),
            o.cssMode
              ? (d[
                  n.isHorizontal() ? 'scrollLeft' : 'scrollTop'
                ] = n.isHorizontal() ? -h : -m)
              : o.virtualTranslate ||
                l.transform(`translate3d(${h}px, ${m}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? h : m)
          const f = n.maxTranslate() - n.minTranslate()
          ;(c = f === 0 ? 0 : (e - n.minTranslate()) / f),
            c !== progress && n.updateProgress(e),
            n.emit('setTranslate', n.translate, t)
        },
        minTranslate() {
          return -this.snapGrid[0]
        },
        maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo(e = 0, t = this.params.speed, n = !0, r = !0, o) {
          const l = this;
            const { params: d, wrapperEl: c } = l
          if (l.animating && d.preventInteractionOnTransition) return !1
          const h = l.minTranslate();
            const m = l.maxTranslate()
          let f
          if (
            ((f = r && e > h ? h : r && e < m ? m : e),
            l.updateProgress(f),
            d.cssMode)
          ) {
            const e = l.isHorizontal()
            return (
              t === 0
                ? (c[e ? 'scrollLeft' : 'scrollTop'] = -f)
                : c.scrollTo
                ? c.scrollTo({ [e ? 'left' : 'top']: -f, behavior: 'smooth' })
                : (c[e ? 'scrollLeft' : 'scrollTop'] = -f),
              !0
            )
          }
          return (
            t === 0
              ? (l.setTransition(0),
                l.setTranslate(f),
                n &&
                  (l.emit('beforeTransitionStart', t, o),
                  l.emit('transitionEnd')))
              : (l.setTransition(t),
                l.setTranslate(f),
                n &&
                  (l.emit('beforeTransitionStart', t, o),
                  l.emit('transitionStart')),
                l.animating ||
                  ((l.animating = !0),
                  l.onTranslateToWrapperTransitionEnd ||
                    (l.onTranslateToWrapperTransitionEnd = function (e) {
                      l &&
                        !l.destroyed &&
                        e.target === this &&
                        (l.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          l.onTranslateToWrapperTransitionEnd
                        ),
                        l.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          l.onTranslateToWrapperTransitionEnd
                        ),
                        (l.onTranslateToWrapperTransitionEnd = null),
                        delete l.onTranslateToWrapperTransitionEnd,
                        n && l.emit('transitionEnd'))
                    }),
                  l.$wrapperEl[0].addEventListener(
                    'transitionend',
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  l.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    l.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          )
        },
      }
      const S = {
        setTransition(e, t) {
          const n = this
          n.params.cssMode || n.$wrapperEl.transition(e),
            n.emit('setTransition', e, t)
        },
        transitionStart(e = !0, t) {
          const n = this;
            const { activeIndex: r, params: o, previousIndex: l } = n
          if (o.cssMode) return
          o.autoHeight && n.updateAutoHeight()
          let d = t
          if (
            (d || (d = r > l ? 'next' : r < l ? 'prev' : 'reset'),
            n.emit('transitionStart'),
            e && r !== l)
          ) {
            if (d === 'reset') return void n.emit('slideResetTransitionStart')
            n.emit('slideChangeTransitionStart'),
              d === 'next'
                ? n.emit('slideNextTransitionStart')
                : n.emit('slidePrevTransitionStart')
          }
        },
        transitionEnd(e = !0, t) {
          const n = this;
            const { activeIndex: r, previousIndex: o, params: l } = n
          if (((n.animating = !1), l.cssMode)) return
          n.setTransition(0)
          let d = t
          if (
            (d || (d = r > o ? 'next' : r < o ? 'prev' : 'reset'),
            n.emit('transitionEnd'),
            e && r !== o)
          ) {
            if (d === 'reset') return void n.emit('slideResetTransitionEnd')
            n.emit('slideChangeTransitionEnd'),
              d === 'next'
                ? n.emit('slideNextTransitionEnd')
                : n.emit('slidePrevTransitionEnd')
          }
        },
      }
      const C = {
        slideTo(e = 0, t = this.params.speed, n = !0, r) {
          const o = this
          let l = e
          l < 0 && (l = 0)
          const {
            params: d,
            snapGrid: c,
            slidesGrid: h,
            previousIndex: m,
            activeIndex: f,
            rtlTranslate: v,
            wrapperEl: w,
          } = o
          if (o.animating && d.preventInteractionOnTransition) return !1
          const y = Math.min(o.params.slidesPerGroupSkip, l)
          let x = y + Math.floor((l - y) / o.params.slidesPerGroup)
          x >= c.length && (x = c.length - 1),
            (f || d.initialSlide || 0) === (m || 0) &&
              n &&
              o.emit('beforeSlideChangeStart')
          const E = -c[x]
          if ((o.updateProgress(E), d.normalizeSlideIndex))
            for (let i = 0; i < h.length; i += 1)
              -Math.floor(100 * E) >= Math.floor(100 * h[i]) && (l = i)
          if (o.initialized && l !== f) {
            if (!o.allowSlideNext && E < o.translate && E < o.minTranslate())
              return !1
            if (
              !o.allowSlidePrev &&
              E > o.translate &&
              E > o.maxTranslate() &&
              (f || 0) !== l
            )
              return !1
          }
          let T
          if (
            ((T = l > f ? 'next' : l < f ? 'prev' : 'reset'),
            (v && -E === o.translate) || (!v && E === o.translate))
          )
            return (
              o.updateActiveIndex(l),
              d.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              d.effect !== 'slide' && o.setTranslate(E),
              T !== 'reset' && (o.transitionStart(n, T), o.transitionEnd(n, T)),
              !1
            )
          if (d.cssMode) {
            const e = o.isHorizontal()
            let n = -E
            return (
              v && (n = w.scrollWidth - w.offsetWidth - n),
              t === 0
                ? (w[e ? 'scrollLeft' : 'scrollTop'] = n)
                : w.scrollTo
                ? w.scrollTo({ [e ? 'left' : 'top']: n, behavior: 'smooth' })
                : (w[e ? 'scrollLeft' : 'scrollTop'] = n),
              !0
            )
          }
          return (
            t === 0
              ? (o.setTransition(0),
                o.setTranslate(E),
                o.updateActiveIndex(l),
                o.updateSlidesClasses(),
                o.emit('beforeTransitionStart', t, r),
                o.transitionStart(n, T),
                o.transitionEnd(n, T))
              : (o.setTransition(t),
                o.setTranslate(E),
                o.updateActiveIndex(l),
                o.updateSlidesClasses(),
                o.emit('beforeTransitionStart', t, r),
                o.transitionStart(n, T),
                o.animating ||
                  ((o.animating = !0),
                  o.onSlideToWrapperTransitionEnd ||
                    (o.onSlideToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          o.onSlideToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          o.onSlideToWrapperTransitionEnd
                        ),
                        (o.onSlideToWrapperTransitionEnd = null),
                        delete o.onSlideToWrapperTransitionEnd,
                        o.transitionEnd(n, T))
                    }),
                  o.$wrapperEl[0].addEventListener(
                    'transitionend',
                    o.onSlideToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    o.onSlideToWrapperTransitionEnd
                  ))),
            !0
          )
        },
        slideToLoop(e = 0, t = this.params.speed, n = !0, r) {
          const o = this
          let l = e
          return o.params.loop && (l += o.loopedSlides), o.slideTo(l, t, n, r)
        },
        slideNext(e = this.params.speed, t = !0, n) {
          const r = this;
            const { params: o, animating: l } = r;
            const d = r.activeIndex < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
          if (o.loop) {
            if (l) return !1
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft)
          }
          return r.slideTo(r.activeIndex + d, e, t, n)
        },
        slidePrev(e = this.params.speed, t = !0, n) {
          const r = this;
            const {
              params: o,
              animating: l,
              snapGrid: d,
              slidesGrid: c,
              rtlTranslate: h,
            } = r
          if (o.loop) {
            if (l) return !1
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft)
          }
          function m(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const f = m(h ? r.translate : -r.translate);
            const v = d.map((e) => m(e))
          c.map((e) => m(e)), d[v.indexOf(f)]
          let w;
            let y = d[v.indexOf(f) - 1]
          return (
            void 0 === y &&
              o.cssMode &&
              d.forEach((e) => {
                !y && f >= e && (y = e)
              }),
            void 0 !== y &&
              ((w = c.indexOf(y)), w < 0 && (w = r.activeIndex - 1)),
            r.slideTo(w, e, t, n)
          )
        },
        slideReset(e = this.params.speed, t = !0, n) {
          return this.slideTo(this.activeIndex, e, t, n)
        },
        slideToClosest(e = this.params.speed, t = !0, n, r = 0.5) {
          const o = this
          let l = o.activeIndex
          const d = Math.min(o.params.slidesPerGroupSkip, l);
            const c = d + Math.floor((l - d) / o.params.slidesPerGroup);
            const h = o.rtlTranslate ? o.translate : -o.translate
          if (h >= o.snapGrid[c]) {
            const e = o.snapGrid[c]
            h - e > (o.snapGrid[c + 1] - e) * r &&
              (l += o.params.slidesPerGroup)
          } else {
            const e = o.snapGrid[c - 1]
            h - e <= (o.snapGrid[c] - e) * r && (l -= o.params.slidesPerGroup)
          }
          return (
            (l = Math.max(l, 0)),
            (l = Math.min(l, o.slidesGrid.length - 1)),
            o.slideTo(l, e, t, n)
          )
        },
        slideToClickedSlide() {
          const e = this;
            const { params: t, $wrapperEl: n } = e;
            const r =
              t.slidesPerView === 'auto'
                ? e.slidesPerViewDynamic()
                : t.slidesPerView
          let o;
            let l = e.clickedIndex
          if (t.loop) {
            if (e.animating) return
            ;(o = parseInt(
              m(e.clickedSlide).attr('data-swiper-slide-index'),
              10
            )),
              t.centeredSlides
                ? l < e.loopedSlides - r / 2 ||
                  l > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (l = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    w.nextTick(() => {
                      e.slideTo(l)
                    }))
                  : e.slideTo(l)
                : l > e.slides.length - r
                ? (e.loopFix(),
                  (l = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  w.nextTick(() => {
                    e.slideTo(l)
                  }))
                : e.slideTo(l)
          } else e.slideTo(l)
        },
      }
      const A = {
        loopCreate() {
          const e = this;
            const { params: t, $wrapperEl: n } = e
          n.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove()
          let r = n.children('.' + t.slideClass)
          if (t.loopFillGroupWithBlank) {
            const e = t.slidesPerGroup - (r.length % t.slidesPerGroup)
            if (e !== t.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = m(l.createElement('div')).addClass(
                  `${t.slideClass} ${t.slideBlankClass}`
                )
                n.append(e)
              }
              r = n.children('.' + t.slideClass)
            }
          }
          t.slidesPerView !== 'auto' ||
            t.loopedSlides ||
            (t.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(t.loopedSlides || t.slidesPerView, 10)
            )),
            (e.loopedSlides += t.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length)
          const o = [];
            const d = []
          r.each((t, n) => {
            const l = m(n)
            t < e.loopedSlides && d.push(n),
              t < r.length && t >= r.length - e.loopedSlides && o.push(n),
              l.attr('data-swiper-slide-index', t)
          })
          for (let i = 0; i < d.length; i += 1)
            n.append(m(d[i].cloneNode(!0)).addClass(t.slideDuplicateClass))
          for (let i = o.length - 1; i >= 0; i -= 1)
            n.prepend(m(o[i].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix() {
          const e = this
          e.emit('beforeLoopFix')
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: r,
            allowSlidePrev: o,
            allowSlideNext: l,
            snapGrid: d,
            rtlTranslate: c,
          } = e
          let h
          ;(e.allowSlidePrev = !0), (e.allowSlideNext = !0)
          const m = -d[t] - e.getTranslate()
          if (t < r) {
            ;(h = n.length - 3 * r + t), (h += r)
            e.slideTo(h, 0, !1, !0) &&
              m !== 0 &&
              e.setTranslate((c ? -e.translate : e.translate) - m)
          } else if (t >= n.length - r) {
            ;(h = -n.length + t + r), (h += r)
            e.slideTo(h, 0, !1, !0) &&
              m !== 0 &&
              e.setTranslate((c ? -e.translate : e.translate) - m)
          }
          ;(e.allowSlidePrev = o), (e.allowSlideNext = l), e.emit('loopFix')
        },
        loopDestroy() {
          const { $wrapperEl: e, params: t, slides: n } = this
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr('data-swiper-slide-index')
        },
      }
      const M = {
        setGrabCursor(e) {
          if (
            y.touch ||
            !this.params.simulateTouch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode
          )
            return
          const t = this.el
          ;(t.style.cursor = 'move'),
            (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
            (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
            (t.style.cursor = e ? 'grabbing' : 'grab')
        },
        unsetGrabCursor() {
          y.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this.el.style.cursor = '')
        },
      }
      const $ = {
        appendSlide(e) {
          const t = this;
            const { $wrapperEl: n, params: r } = t
          if (
            (r.loop && t.loopDestroy(), typeof e == 'object' && 'length' in e)
          )
            for (let i = 0; i < e.length; i += 1) e[i] && n.append(e[i])
          else n.append(e)
          r.loop && t.loopCreate(), (r.observer && y.observer) || t.update()
        },
        prependSlide(e) {
          const t = this;
            const { params: n, $wrapperEl: r, activeIndex: o } = t
          n.loop && t.loopDestroy()
          let l = o + 1
          if (typeof e == 'object' && 'length' in e) {
            for (let i = 0; i < e.length; i += 1) e[i] && r.prepend(e[i])
            l = o + e.length
          } else r.prepend(e)
          n.loop && t.loopCreate(),
            (n.observer && y.observer) || t.update(),
            t.slideTo(l, 0, !1)
        },
        addSlide(e, t) {
          const n = this;
            const { $wrapperEl: r, params: o, activeIndex: l } = n
          let d = l
          o.loop &&
            ((d -= n.loopedSlides),
            n.loopDestroy(),
            (n.slides = r.children('.' + o.slideClass)))
          const c = n.slides.length
          if (e <= 0) return void n.prependSlide(t)
          if (e >= c) return void n.appendSlide(t)
          let h = d > e ? d + 1 : d
          const m = []
          for (let i = c - 1; i >= e; i -= 1) {
            const e = n.slides.eq(i)
            e.remove(), m.unshift(e)
          }
          if (typeof t == 'object' && 'length' in t) {
            for (let i = 0; i < t.length; i += 1) t[i] && r.append(t[i])
            h = d > e ? d + t.length : d
          } else r.append(t)
          for (let i = 0; i < m.length; i += 1) r.append(m[i])
          o.loop && n.loopCreate(),
            (o.observer && y.observer) || n.update(),
            o.loop ? n.slideTo(h + n.loopedSlides, 0, !1) : n.slideTo(h, 0, !1)
        },
        removeSlide(e) {
          const t = this;
            const { params: n, $wrapperEl: r, activeIndex: o } = t
          let l = o
          n.loop &&
            ((l -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = r.children('.' + n.slideClass)))
          let d;
            let c = l
          if (typeof e == 'object' && 'length' in e) {
            for (let i = 0; i < e.length; i += 1)
              (d = e[i]),
                t.slides[d] && t.slides.eq(d).remove(),
                d < c && (c -= 1)
            c = Math.max(c, 0)
          } else
            (d = e),
              t.slides[d] && t.slides.eq(d).remove(),
              d < c && (c -= 1),
              (c = Math.max(c, 0))
          n.loop && t.loopCreate(),
            (n.observer && y.observer) || t.update(),
            n.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1)
        },
        removeAllSlides() {
          const e = this;
            const t = []
          for (let i = 0; i < e.slides.length; i += 1) t.push(i)
          e.removeSlide(t)
        },
      }
      const k = (function () {
        const e = c.navigator.platform
        const t = c.navigator.userAgent
        const n = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          edge: !1,
          ie: !1,
          firefox: !1,
          macos: !1,
          windows: !1,
          cordova: !(!c.cordova && !c.phonegap),
          phonegap: !(!c.cordova && !c.phonegap),
          electron: !1,
        }
        const r = c.screen.width
        const o = c.screen.height
        const l = t.match(/(Android);?[\s\/]+([\d.]+)?/)
        let d = t.match(/(iPad).*OS\s([\d_]+)/)
        const h = t.match(/(iPod)(.*OS\s([\d_]+))?/)
        const m = !d && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
        const f = t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0
        const v = t.indexOf('Edge/') >= 0
        const w = t.indexOf('Gecko/') >= 0 && t.indexOf('Firefox/') >= 0
        const x = 'Win32' === e
        const E = t.toLowerCase().includes('electron')
        let T = e === 'MacIntel'
        return (
          !d &&
            T &&
            y.touch &&
            ((r === 1024 && o === 1366) ||
              (r === 834 && o === 1194) ||
              (r === 834 && o === 1112) ||
              (r === 768 && o === 1024)) &&
            ((d = t.match(/(Version)\/([\d.]+)/)), (T = !1)),
          (n.ie = f),
          (n.edge = v),
          (n.firefox = w),
          l &&
            !x &&
            ((n.os = 'android'),
            (n.osVersion = l[2]),
            (n.android = !0),
            (n.androidChrome = t.toLowerCase().includes('chrome'))),
          (d || m || h) && ((n.os = 'ios'), (n.ios = !0)),
          m && !h && ((n.osVersion = m[2].replace(/_/g, '.')), (n.iphone = !0)),
          d && ((n.osVersion = d[2].replace(/_/g, '.')), (n.ipad = !0)),
          h &&
            ((n.osVersion = h[3] ? h[3].replace(/_/g, '.') : null),
            (n.ipod = !0)),
          n.ios &&
            n.osVersion &&
            t.includes('Version/') &&
            n.osVersion.split('.')[0] === '10' &&
            (n.osVersion = t.toLowerCase().split('version/')[1].split(' ')[0]),
          (n.webView =
            !(
              !(m || d || h) ||
              (!t.match(/.*AppleWebKit(?!.*Safari)/i) &&
                !c.navigator.standalone)
            ) ||
            (c.matchMedia &&
              c.matchMedia('(display-mode: standalone)').matches)),
          (n.webview = n.webView),
          (n.standalone = n.webView),
          (n.desktop = !(n.ios || n.android) || E),
          n.desktop &&
            ((n.electron = E),
            (n.macos = T),
            (n.windows = x),
            n.macos && (n.os = 'macos'),
            n.windows && (n.os = 'windows')),
          (n.pixelRatio = c.devicePixelRatio || 1),
          n
        )
      })()
      function z(e) {
        const t = this
        const data = t.touchEventsData
        const { params: n, touches: r } = t
        if (t.animating && n.preventInteractionOnTransition) return
        let o = e
        o.originalEvent && (o = o.originalEvent)
        const d = m(o.target)
        if (n.touchEventsTarget === 'wrapper' && !d.closest(t.wrapperEl).length)
          return
        if (
          ((data.isTouchEvent = o.type === 'touchstart'),
          !data.isTouchEvent && 'which' in o && o.which === 3)
        )
          return
        if (!data.isTouchEvent && 'button' in o && o.button > 0) return
        if (data.isTouched && data.isMoved) return
        if (
          n.noSwiping &&
          d.closest(
            n.noSwipingSelector ? n.noSwipingSelector : '.' + n.noSwipingClass
          )[0]
        )
          return void (t.allowClick = !0)
        if (n.swipeHandler && !d.closest(n.swipeHandler)[0]) return
        ;(r.currentX =
          o.type === 'touchstart' ? o.targetTouches[0].pageX : o.pageX),
          (r.currentY =
            o.type === 'touchstart' ? o.targetTouches[0].pageY : o.pageY)
        const h = r.currentX
        const f = r.currentY
        const v = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection
        const y = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold
        if (!v || !(h <= y || h >= c.screen.width - y)) {
          if (
            (w.extend(data, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (r.startX = h),
            (r.startY = f),
            (data.touchStartTime = w.now()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            n.threshold > 0 && (data.allowThresholdMove = !1),
            o.type !== 'touchstart')
          ) {
            let e = !0
            d.is(data.formElements) && (e = !1),
              l.activeElement &&
                m(l.activeElement).is(data.formElements) &&
                l.activeElement !== d[0] &&
                l.activeElement.blur()
            const r = e && t.allowTouchMove && n.touchStartPreventDefault
            ;(n.touchStartForcePreventDefault || r) && o.preventDefault()
          }
          t.emit('touchStart', o)
        }
      }
      function P(e) {
        const t = this
        const data = t.touchEventsData
        const { params: n, touches: r, rtlTranslate: o } = t
        let d = e
        if ((d.originalEvent && (d = d.originalEvent), !data.isTouched))
          return void (
            data.startMoving &&
            data.isScrolling &&
            t.emit('touchMoveOpposite', d)
          )
        if (data.isTouchEvent && d.type !== 'touchmove') return
        const c =
          d.type === 'touchmove' &&
          d.targetTouches &&
          (d.targetTouches[0] || d.changedTouches[0])
        const h = 'touchmove' === d.type ? c.pageX : d.pageX
        const f = d.type === 'touchmove' ? c.pageY : d.pageY
        if (d.preventedByNestedSwiper)
          return (r.startX = h), void (r.startY = f)
        if (!t.allowTouchMove)
          return (
            (t.allowClick = !1),
            void (
              data.isTouched &&
              (w.extend(r, { startX: h, startY: f, currentX: h, currentY: f }),
              (data.touchStartTime = w.now()))
            )
          )
        if (data.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (t.isVertical()) {
            if (
              (f < r.startY && t.translate <= t.maxTranslate()) ||
              (f > r.startY && t.translate >= t.minTranslate())
            )
              return (data.isTouched = !1), void (data.isMoved = !1)
          } else if (
            (h < r.startX && t.translate <= t.maxTranslate()) ||
            (h > r.startX && t.translate >= t.minTranslate())
          )
            return
        if (
          data.isTouchEvent &&
          l.activeElement &&
          d.target === l.activeElement &&
          m(d.target).is(data.formElements)
        )
          return (data.isMoved = !0), void (t.allowClick = !1)
        if (
          (data.allowTouchCallbacks && t.emit('touchMove', d),
          d.targetTouches && d.targetTouches.length > 1)
        )
          return
        ;(r.currentX = h), (r.currentY = f)
        const v = r.currentX - r.startX
        const y = r.currentY - r.startY
        if (
          t.params.threshold &&
          Math.sqrt(v ** 2 + y ** 2) < t.params.threshold
        )
          return
        if (void 0 === data.isScrolling) {
          let e
          ;(t.isHorizontal() && r.currentY === r.startY) ||
          (t.isVertical() && r.currentX === r.startX)
            ? (data.isScrolling = !1)
            : v * v + y * y >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(y), Math.abs(v))) / Math.PI),
              (data.isScrolling = t.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle))
        }
        if (
          (data.isScrolling && t.emit('touchMoveOpposite', d),
          void 0 === data.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (data.startMoving = !0)),
          data.isScrolling)
        )
          return void (data.isTouched = !1)
        if (!data.startMoving) return
        ;(t.allowClick = !1),
          !n.cssMode && d.cancelable && d.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
          data.isMoved ||
            (n.loop && t.loopFix(),
            (data.startTranslate = t.getTranslate()),
            t.setTransition(0),
            t.animating &&
              t.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
            (data.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
              t.setGrabCursor(!0),
            t.emit('sliderFirstMove', d)),
          t.emit('sliderMove', d),
          (data.isMoved = !0)
        let x = t.isHorizontal() ? v : y
        ;(r.diff = x),
          (x *= n.touchRatio),
          o && (x = -x),
          (t.swipeDirection = x > 0 ? 'prev' : 'next'),
          (data.currentTranslate = x + data.startTranslate)
        let E = !0
        let T = n.resistanceRatio
        if (
          (n.touchReleaseOnEdges && (T = 0),
          x > 0 && data.currentTranslate > t.minTranslate()
            ? ((E = !1),
              n.resistance &&
                (data.currentTranslate =
                  t.minTranslate() -
                  1 +
                  (-t.minTranslate() + data.startTranslate + x) ** T))
            : x < 0 &&
              data.currentTranslate < t.maxTranslate() &&
              ((E = !1),
              n.resistance &&
                (data.currentTranslate =
                  t.maxTranslate() +
                  1 -
                  (t.maxTranslate() - data.startTranslate - x) ** T)),
          E && (d.preventedByNestedSwiper = !0),
          !t.allowSlideNext &&
            t.swipeDirection === 'next' &&
            data.currentTranslate < data.startTranslate &&
            (data.currentTranslate = data.startTranslate),
          !t.allowSlidePrev &&
            t.swipeDirection === 'prev' &&
            data.currentTranslate > data.startTranslate &&
            (data.currentTranslate = data.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(x) > n.threshold || data.allowThresholdMove))
            return void (data.currentTranslate = data.startTranslate)
          if (!data.allowThresholdMove)
            return (
              (data.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (data.currentTranslate = data.startTranslate),
              void (r.diff = t.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            )
        }
        n.followFinger &&
          !n.cssMode &&
          ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) &&
            (t.updateActiveIndex(), t.updateSlidesClasses()),
          n.freeMode &&
            (data.velocities.length === 0 &&
              data.velocities.push({
                position: r[t.isHorizontal() ? 'startX' : 'startY'],
                time: data.touchStartTime,
              }),
            data.velocities.push({
              position: r[t.isHorizontal() ? 'currentX' : 'currentY'],
              time: w.now(),
            })),
          t.updateProgress(data.currentTranslate),
          t.setTranslate(data.currentTranslate))
      }
      function I(e) {
        const t = this
        const data = t.touchEventsData
        const {
          params: n,
          touches: r,
          rtlTranslate: o,
          $wrapperEl: l,
          slidesGrid: d,
          snapGrid: c,
        } = t
        let h = e
        if (
          (h.originalEvent && (h = h.originalEvent),
          data.allowTouchCallbacks && t.emit('touchEnd', h),
          (data.allowTouchCallbacks = !1),
          !data.isTouched)
        )
          return (
            data.isMoved && n.grabCursor && t.setGrabCursor(!1),
            (data.isMoved = !1),
            void (data.startMoving = !1)
          )
        n.grabCursor &&
          data.isMoved &&
          data.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1)
        const m = w.now()
        const f = m - data.touchStartTime
        if (
          (t.allowClick &&
            (t.updateClickedSlide(h),
            t.emit('tap click', h),
            f < 300 &&
              m - data.lastClickTime < 300 &&
              t.emit('doubleTap doubleClick', h)),
          (data.lastClickTime = w.now()),
          w.nextTick(() => {
            t.destroyed || (t.allowClick = !0)
          }),
          !data.isTouched ||
            !data.isMoved ||
            !t.swipeDirection ||
            r.diff === 0 ||
            data.currentTranslate === data.startTranslate)
        )
          return (
            (data.isTouched = !1),
            (data.isMoved = !1),
            void (data.startMoving = !1)
          )
        let v
        if (
          ((data.isTouched = !1),
          (data.isMoved = !1),
          (data.startMoving = !1),
          (v = n.followFinger
            ? o
              ? t.translate
              : -t.translate
            : -data.currentTranslate),
          n.cssMode)
        )
          return
        if (n.freeMode) {
          if (v < -t.minTranslate()) return void t.slideTo(t.activeIndex)
          if (v > -t.maxTranslate())
            return void (t.slides.length < c.length
              ? t.slideTo(c.length - 1)
              : t.slideTo(t.slides.length - 1))
          if (n.freeModeMomentum) {
            if (data.velocities.length > 1) {
              const e = data.velocities.pop()
              const r = data.velocities.pop()
              const o = e.position - r.position
              const time = e.time - r.time
              ;(t.velocity = o / time),
                (t.velocity /= 2),
                Math.abs(t.velocity) < n.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (time > 150 || w.now() - e.time > 300) && (t.velocity = 0)
            } else t.velocity = 0
            ;(t.velocity *= n.freeModeMomentumVelocityRatio),
              (data.velocities.length = 0)
            let e = 1e3 * n.freeModeMomentumRatio
            const r = t.velocity * e
            let d = t.translate + r
            o && (d = -d)
            let h
            let m = !1
            const f = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio
            let v
            if (d < t.maxTranslate())
              n.freeModeMomentumBounce
                ? (d + t.maxTranslate() < -f && (d = t.maxTranslate() - f),
                  (h = t.maxTranslate()),
                  (m = !0),
                  (data.allowMomentumBounce = !0))
                : (d = t.maxTranslate()),
                n.loop && n.centeredSlides && (v = !0)
            else if (d > t.minTranslate())
              n.freeModeMomentumBounce
                ? (d - t.minTranslate() > f && (d = t.minTranslate() + f),
                  (h = t.minTranslate()),
                  (m = !0),
                  (data.allowMomentumBounce = !0))
                : (d = t.minTranslate()),
                n.loop && n.centeredSlides && (v = !0)
            else if (n.freeModeSticky) {
              let e
              for (let t = 0; t < c.length; t += 1)
                if (c[t] > -d) {
                  e = t
                  break
                }
              ;(d =
                Math.abs(c[e] - d) < Math.abs(c[e - 1] - d) ||
                t.swipeDirection === 'next'
                  ? c[e]
                  : c[e - 1]),
                (d = -d)
            }
            if (
              (v &&
                t.once('transitionEnd', () => {
                  t.loopFix()
                }),
              t.velocity !== 0)
            ) {
              if (
                ((e = o
                  ? Math.abs((-d - t.translate) / t.velocity)
                  : Math.abs((d - t.translate) / t.velocity)),
                n.freeModeSticky)
              ) {
                const r = Math.abs((o ? -d : d) - t.translate)
                const l = t.slidesSizesGrid[t.activeIndex]
                e = r < l ? n.speed : r < 2 * l ? 1.5 * n.speed : 2.5 * n.speed
              }
            } else if (n.freeModeSticky) return void t.slideToClosest()
            n.freeModeMomentumBounce && m
              ? (t.updateProgress(h),
                t.setTransition(e),
                t.setTranslate(d),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                l.transitionEnd(() => {
                  t &&
                    !t.destroyed &&
                    data.allowMomentumBounce &&
                    (t.emit('momentumBounce'),
                    t.setTransition(n.speed),
                    setTimeout(() => {
                      t.setTranslate(h),
                        l.transitionEnd(() => {
                          t && !t.destroyed && t.transitionEnd()
                        })
                    }, 0))
                }))
              : t.velocity
              ? (t.updateProgress(d),
                t.setTransition(e),
                t.setTranslate(d),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  l.transitionEnd(() => {
                    t && !t.destroyed && t.transitionEnd()
                  })))
              : t.updateProgress(d),
              t.updateActiveIndex(),
              t.updateSlidesClasses()
          } else if (n.freeModeSticky) return void t.slideToClosest()
          return void (
            (!n.freeModeMomentum || f >= n.longSwipesMs) &&
            (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          )
        }
        let y = 0
        let x = t.slidesSizesGrid[0]
        for (
          let i = 0;
          i < d.length;
          i += i < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
        ) {
          const e = i < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup
          void 0 !== d[i + e]
            ? v >= d[i] && v < d[i + e] && ((y = i), (x = d[i + e] - d[i]))
            : v >= d[i] && ((y = i), (x = d[d.length - 1] - d[d.length - 2]))
        }
        const E = (v - d[y]) / x
        const T = y < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup
        if (f > n.longSwipesMs) {
          if (!n.longSwipes) return void t.slideTo(t.activeIndex)
          t.swipeDirection === 'next' &&
            (E >= n.longSwipesRatio ? t.slideTo(y + T) : t.slideTo(y)),
            t.swipeDirection === 'prev' &&
              (E > 1 - n.longSwipesRatio ? t.slideTo(y + T) : t.slideTo(y))
        } else {
          if (!n.shortSwipes) return void t.slideTo(t.activeIndex)
          t.navigation &&
          (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl)
            ? h.target === t.navigation.nextEl
              ? t.slideTo(y + T)
              : t.slideTo(y)
            : (t.swipeDirection === 'next' && t.slideTo(y + T),
              t.swipeDirection === 'prev' && t.slideTo(y))
        }
      }
      function L() {
        const e = this
        const { params: t, el: n } = e
        if (n && n.offsetWidth === 0) return
        t.breakpoints && e.setBreakpoint()
        const { allowSlideNext: r, allowSlidePrev: o, snapGrid: l } = e
        ;(e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          (t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = o),
          (e.allowSlideNext = r),
          e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
      }
      function D(e) {
        const t = this
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()))
      }
      function O() {
        const e = this
        const { wrapperEl: t, rtlTranslate: n } = e
        let r
        ;(e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = n
                ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                : -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          e.translate === -0 && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses()
        const o = e.maxTranslate() - e.minTranslate()
        ;(r = o === 0 ? 0 : (e.translate - e.minTranslate()) / o),
          r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit('setTranslate', e.translate, !1)
      }
      let B = !1
      function G() {}
      const Y = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
      }
      const N = {
        update: E,
        translate: T,
        transition: S,
        slide: C,
        loop: A,
        grabCursor: M,
        manipulation: $,
        events: {
          attachEvents() {
            const e = this;
                const { params: t, touchEvents: n, el: r, wrapperEl: o } = e
            ;(e.onTouchStart = z.bind(e)),
              (e.onTouchMove = P.bind(e)),
              (e.onTouchEnd = I.bind(e)),
              t.cssMode && (e.onScroll = O.bind(e)),
              (e.onClick = D.bind(e))
            const d = !!t.nested
            if (!y.touch && y.pointerEvents)
              r.addEventListener(n.start, e.onTouchStart, !1),
                l.addEventListener(n.move, e.onTouchMove, d),
                l.addEventListener(n.end, e.onTouchEnd, !1)
            else {
              if (y.touch) {
                const o = !(
                  'touchstart' !== n.start ||
                  !y.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 }
                r.addEventListener(n.start, e.onTouchStart, o),
                  r.addEventListener(
                    n.move,
                    e.onTouchMove,
                    y.passiveListener ? { passive: !1, capture: d } : d
                  ),
                  r.addEventListener(n.end, e.onTouchEnd, o),
                  n.cancel && r.addEventListener(n.cancel, e.onTouchEnd, o),
                  B || (l.addEventListener('touchstart', G), (B = !0))
              }
              ;((t.simulateTouch && !k.ios && !k.android) ||
                (t.simulateTouch && !y.touch && k.ios)) &&
                (r.addEventListener('mousedown', e.onTouchStart, !1),
                l.addEventListener('mousemove', e.onTouchMove, d),
                l.addEventListener('mouseup', e.onTouchEnd, !1))
            }
            ;(t.preventClicks || t.preventClicksPropagation) &&
              r.addEventListener('click', e.onClick, !0),
              t.cssMode && o.addEventListener('scroll', e.onScroll),
              t.updateOnWindowResize
                ? e.on(
                    k.ios || k.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate',
                    L,
                    !0
                  )
                : e.on('observerUpdate', L, !0)
          },
          detachEvents() {
            const e = this;
                const { params: t, touchEvents: n, el: r, wrapperEl: o } = e;
                const d = !!t.nested
            if (!y.touch && y.pointerEvents)
              r.removeEventListener(n.start, e.onTouchStart, !1),
                l.removeEventListener(n.move, e.onTouchMove, d),
                l.removeEventListener(n.end, e.onTouchEnd, !1)
            else {
              if (y.touch) {
                const o = !(
                  n.start !== 'onTouchStart' ||
                  !y.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 }
                r.removeEventListener(n.start, e.onTouchStart, o),
                  r.removeEventListener(n.move, e.onTouchMove, d),
                  r.removeEventListener(n.end, e.onTouchEnd, o),
                  n.cancel && r.removeEventListener(n.cancel, e.onTouchEnd, o)
              }
              ;((t.simulateTouch && !k.ios && !k.android) ||
                (t.simulateTouch && !y.touch && k.ios)) &&
                (r.removeEventListener('mousedown', e.onTouchStart, !1),
                l.removeEventListener('mousemove', e.onTouchMove, d),
                l.removeEventListener('mouseup', e.onTouchEnd, !1))
            }
            ;(t.preventClicks || t.preventClicksPropagation) &&
              r.removeEventListener('click', e.onClick, !0),
              t.cssMode && o.removeEventListener('scroll', e.onScroll),
              e.off(
                k.ios || k.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                L
              )
          },
        },
        breakpoints: {
          setBreakpoint() {
            const e = this;
                const {
                  activeIndex: t,
                  initialized: n,
                  loopedSlides: r = 0,
                  params: o,
                  $el: l,
                } = e;
                const d = o.breakpoints
            if (!d || (d && Object.keys(d).length === 0)) return
            const c = e.getBreakpoint(d)
            if (c && e.currentBreakpoint !== c) {
              const h = c in d ? d[c] : void 0
              h &&
                [
                  'slidesPerView',
                  'spaceBetween',
                  'slidesPerGroup',
                  'slidesPerGroupSkip',
                  'slidesPerColumn',
                ].forEach((param) => {
                  const e = h[param]
                  void 0 !== e &&
                    (h[param] =
                      param !== 'slidesPerView' ||
                      (e !== 'AUTO' && e !== 'auto')
                        ? param === 'slidesPerView'
                          ? parseFloat(e)
                          : parseInt(e, 10)
                        : 'auto')
                })
              const m = h || e.originalParams;
                  const f = o.slidesPerColumn > 1;
                  const v = m.slidesPerColumn > 1
              f && !v
                ? l.removeClass(
                    `${o.containerModifierClass}multirow ${o.containerModifierClass}multirow-column`
                  )
                : !f &&
                  v &&
                  (l.addClass(o.containerModifierClass + 'multirow'),
                  'column' === m.slidesPerColumnFill &&
                    l.addClass(o.containerModifierClass + 'multirow-column'))
              const y = m.direction && m.direction !== o.direction;
                  const x = o.loop && (m.slidesPerView !== o.slidesPerView || y)
              y && n && e.changeDirection(),
                w.extend(e.params, m),
                w.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = c),
                x &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - r + e.loopedSlides, 0, !1)),
                e.emit('breakpoint', m)
            }
          },
          getBreakpoint(e) {
            if (!e) return
            let t = !1
            const n = Object.keys(e).map((e) => {
              if (typeof e == 'string' && e.indexOf('@') === 0) {
                const t = parseFloat(e.substr(1))
                return { value: c.innerHeight * t, point: e }
              }
              return { value: e, point: e }
            })
            n.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10))
            for (let i = 0; i < n.length; i += 1) {
              const { point: e, value: r } = n[i]
              r <= c.innerWidth && (t = e)
            }
            return t || 'max'
          },
        },
        checkOverflow: {
          checkOverflow() {
            const e = this;
                const t = e.params;
                const n = e.isLocked;
                const r =
                e.slides.length > 0 &&
                t.slidesOffsetBefore +
                  t.spaceBetween * (e.slides.length - 1) +
                  e.slides[0].offsetWidth * e.slides.length
            t.slidesOffsetBefore && t.slidesOffsetAfter && r
              ? (e.isLocked = r <= e.size)
              : (e.isLocked = e.snapGrid.length === 1),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              n !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
              n &&
                n !== e.isLocked &&
                ((e.isEnd = !1), e.navigation && e.navigation.update())
          },
        },
        classes: {
          addClasses() {
            const { classNames: e, params: t, rtl: n, $el: r } = this;
                const o = []
            o.push('initialized'),
              o.push(t.direction),
              t.freeMode && o.push('free-mode'),
              t.autoHeight && o.push('autoheight'),
              n && o.push('rtl'),
              t.slidesPerColumn > 1 &&
                (o.push('multirow'),
                'column' === t.slidesPerColumnFill &&
                  o.push('multirow-column')),
              k.android && o.push('android'),
              k.ios && o.push('ios'),
              t.cssMode && o.push('css-mode'),
              o.forEach((n) => {
                e.push(t.containerModifierClass + n)
              }),
              r.addClass(e.join(' '))
          },
          removeClasses() {
            const { $el: e, classNames: t } = this
            e.removeClass(t.join(' '))
          },
        },
        images: {
          loadImage(e, t, n, r, o, l) {
            let image
            function d() {
              l && l()
            }
            m(e).parent('picture')[0] || (e.complete && o)
              ? d()
              : t
              ? ((image = new c.Image()),
                (image.onload = d),
                (image.onerror = d),
                r && (image.sizes = r),
                n && (image.srcset = n),
                t && (image.src = t))
              : d()
          },
          preloadImages() {
            const e = this
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit('imagesReady')))
            }
            e.imagesToLoad = e.$el.find('img')
            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
              const n = e.imagesToLoad[i]
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute('src'),
                n.srcset || n.getAttribute('srcset'),
                n.sizes || n.getAttribute('sizes'),
                !0,
                t
              )
            }
          },
        },
      }
      const H = {}
      class V extends x {
        constructor(...e) {
          let t, n
          e.length === 1 && e[0].constructor && e[0].constructor === Object
            ? (n = e[0])
            : ([t, n] = e),
            n || (n = {}),
            (n = w.extend({}, n)),
            t && !n.el && (n.el = t),
            super(n),
            Object.keys(N).forEach((e) => {
              Object.keys(N[e]).forEach((t) => {
                V.prototype[t] || (V.prototype[t] = N[e][t])
              })
            })
          const r = this
          void 0 === r.modules && (r.modules = {}),
            Object.keys(r.modules).forEach((e) => {
              const t = r.modules[e]
              if (t.params) {
                const e = Object.keys(t.params)[0]
                const r = t.params[e]
                if (typeof r != 'object' || r === null) return
                if (!(e in n) || !('enabled' in r)) return
                !0 === n[e] && (n[e] = { enabled: !0 }),
                  typeof n[e] != 'object' ||
                    'enabled' in n[e] ||
                    (n[e].enabled = !0),
                  n[e] || (n[e] = { enabled: !1 })
              }
            })
          const o = w.extend({}, Y)
          r.useModulesParams(o),
            (r.params = w.extend({}, o, H, n)),
            (r.originalParams = w.extend({}, r.params)),
            (r.passedParams = w.extend({}, n)),
            (r.$ = m)
          const l = m(r.params.el)
          if (((t = l[0]), !t)) return
          if (l.length > 1) {
            const e = []
            return (
              l.each((t, r) => {
                const o = w.extend({}, n, { el: r })
                e.push(new V(o))
              }),
              e
            )
          }
          let d
          return (
            (t.swiper = r),
            l.data('swiper', r),
            t && t.shadowRoot && t.shadowRoot.querySelector
              ? ((d = m(
                  t.shadowRoot.querySelector('.' + r.params.wrapperClass)
                )),
                (d.children = (e) => l.children(e)))
              : (d = l.children('.' + r.params.wrapperClass)),
            w.extend(r, {
              $el: l,
              el: t,
              $wrapperEl: d,
              wrapperEl: d[0],
              classNames: [],
              slides: m(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => r.params.direction === 'horizontal',
              isVertical: () => r.params.direction === 'vertical',
              rtl:
                t.dir.toLowerCase() === 'rtl' || l.css('direction') === 'rtl',
              rtlTranslate:
                r.params.direction === 'horizontal' &&
                (t.dir.toLowerCase() === 'rtl' || l.css('direction') === 'rtl'),
              wrongRTL: d.css('display') === '-webkit-box',
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: r.params.allowSlideNext,
              allowSlidePrev: r.params.allowSlidePrev,
              touchEvents: (function () {
                const e = ['touchstart', 'touchmove', 'touchend', 'touchcancel']
                let t = ['mousedown', 'mousemove', 'mouseup']
                return (
                  y.pointerEvents &&
                    (t = ['pointerdown', 'pointermove', 'pointerup']),
                  (r.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (r.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  y.touch || !r.params.simulateTouch
                    ? r.touchEventsTouch
                    : r.touchEventsDesktop
                )
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  'input, select, option, textarea, button, video, label',
                lastClickTime: w.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: r.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            r.useModules(),
            r.params.init && r.init(),
            r
          )
        }

        slidesPerViewDynamic() {
          const {
            params: e,
            slides: t,
            slidesGrid: n,
            size: r,
            activeIndex: o,
          } = this
          let l = 1
          if (e.centeredSlides) {
            let e
            let n = t[o].swiperSlideSize
            for (let i = o + 1; i < t.length; i += 1)
              t[i] &&
                !e &&
                ((n += t[i].swiperSlideSize), (l += 1), n > r && (e = !0))
            for (let i = o - 1; i >= 0; i -= 1)
              t[i] &&
                !e &&
                ((n += t[i].swiperSlideSize), (l += 1), n > r && (e = !0))
          } else
            for (let i = o + 1; i < t.length; i += 1)
              n[i] - n[o] < r && (l += 1)
          return l
        }

        update() {
          const e = this
          if (!e || e.destroyed) return
          const { snapGrid: t, params: n } = e
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate
            const n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate())
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let o
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode
              ? (r(), e.params.autoHeight && e.updateAutoHeight())
              : ((o =
                  (e.params.slidesPerView === 'auto' ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                o || r()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit('update')
        }

        changeDirection(e, t = !0) {
          const n = this
          const r = n.params.direction
          return (
            e || (e = r === 'horizontal' ? 'vertical' : 'horizontal'),
            e === r ||
              (e !== 'horizontal' && e !== 'vertical') ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${r}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              (n.params.direction = e),
              n.slides.each((t, n) => {
                e === 'vertical' ? (n.style.width = '') : (n.style.height = '')
              }),
              n.emit('changeDirection'),
              t && n.update()),
            n
          )
        }

        init() {
          const e = this
          e.initialized ||
            (e.emit('beforeInit'),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit('init'))
        }

        destroy(e = !0, t = !0) {
          const n = this
          const { params: r, $el: o, $wrapperEl: l, slides: d } = n
          return (
            void 0 === n.params ||
              n.destroyed ||
              (n.emit('beforeDestroy'),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                o.removeAttr('style'),
                l.removeAttr('style'),
                d &&
                  d.length &&
                  d
                    .removeClass(
                      [
                        r.slideVisibleClass,
                        r.slideActiveClass,
                        r.slideNextClass,
                        r.slidePrevClass,
                      ].join(' ')
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              n.emit('destroy'),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e)
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                n.$el.data('swiper', null),
                w.deleteProps(n)),
              (n.destroyed = !0)),
            null
          )
        }

        static extendDefaults(e) {
          w.extend(H, e)
        }

        static get extendedDefaults() {
          return H
        }

        static get defaults() {
          return Y
        }

        static get Class() {
          return x
        }

        static get $() {
          return m
        }
      }
      const F = { name: 'device', proto: { device: k }, static: { device: k } }
      var X = { name: 'support', proto: { support: y }, static: { support: y } }
      const R = {
        isEdge: !!c.navigator.userAgent.match(/Edge/g),
        isSafari: (function () {
          const e = c.navigator.userAgent.toLowerCase()
          return (
            e.includes('safari') &&
            !e.includes('chrome') &&
            !e.includes('android')
          )
        })(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          c.navigator.userAgent
        ),
      }
      const W = {
        name: 'browser',
        proto: { browser: R },
        static: { browser: R },
      }
      var j = {
        name: 'resize',
        create() {
          const e = this
          w.extend(e, {
            resize: {
              resizeHandler() {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit('beforeResize'), e.emit('resize'))
              },
              orientationChangeHandler() {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit('orientationchange')
              },
            },
          })
        },
        on: {
          init() {
            c.addEventListener('resize', this.resize.resizeHandler),
              c.addEventListener(
                'orientationchange',
                this.resize.orientationChangeHandler
              )
          },
          destroy() {
            c.removeEventListener('resize', this.resize.resizeHandler),
              c.removeEventListener(
                'orientationchange',
                this.resize.orientationChangeHandler
              )
          },
        },
      }
      const U = {
        func: c.MutationObserver || c.WebkitMutationObserver,
        attach(e, t = {}) {
          const n = this
          const r = new (0, U.func)((e) => {
            if (e.length === 1) return void n.emit('observerUpdate', e[0])
            const t = function () {
              n.emit('observerUpdate', e[0])
            }
            c.requestAnimationFrame
              ? c.requestAnimationFrame(t)
              : c.setTimeout(t, 0)
          })
          r.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            n.observer.observers.push(r)
        },
        init() {
          const e = this
          if (y.observer && e.params.observer) {
            if (e.params.observeParents) {
              const t = e.$el.parents()
              for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i])
            }
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 })
          }
        },
        destroy() {
          this.observer.observers.forEach((e) => {
            e.disconnect()
          }),
            (this.observer.observers = [])
        },
      }
      const Q = {
        name: 'observer',
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create() {
          w.extend(this, {
            observer: {
              init: U.init.bind(this),
              attach: U.attach.bind(this),
              destroy: U.destroy.bind(this),
              observers: [],
            },
          })
        },
        on: {
          init() {
            this.observer.init()
          },
          destroy() {
            this.observer.destroy()
          },
        },
      }
      const K = {
        update(e) {
          const t = this
          const {
            slidesPerView: n,
            slidesPerGroup: r,
            centeredSlides: o,
          } = t.params
          const { addSlidesBefore: l, addSlidesAfter: d } = t.params.virtual
          const {
            from: c,
            to: h,
            slides: m,
            slidesGrid: f,
            renderSlide: v,
            offset: y,
          } = t.virtual
          t.updateActiveIndex()
          const x = t.activeIndex || 0
          let E, T, S
          ;(E = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top'),
            o
              ? ((T = Math.floor(n / 2) + r + l),
                (S = Math.floor(n / 2) + r + d))
              : ((T = n + (r - 1) + l), (S = r + d))
          const C = Math.max((x || 0) - S, 0)
          const A = Math.min((x || 0) + T, m.length - 1)
          const M = (t.slidesGrid[C] || 0) - (t.slidesGrid[0] || 0)
          function $() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.lazy && t.params.lazy.enabled && t.lazy.load()
          }
          if (
            (w.extend(t.virtual, {
              from: C,
              to: A,
              offset: M,
              slidesGrid: t.slidesGrid,
            }),
            c === C && h === A && !e)
          )
            return (
              t.slidesGrid !== f && M !== y && t.slides.css(E, M + 'px'),
              void t.updateProgress()
            )
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: M,
                from: C,
                to: A,
                slides: (function () {
                  const e = []
                  for (let i = C; i <= A; i += 1) e.push(m[i])
                  return e
                })(),
              }),
              void $()
            )
          const k = []
          const z = []
          if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove()
          else
            for (let i = c; i <= h; i += 1)
              (i < C || i > A) &&
                t.$wrapperEl
                  .find(
                    `.${t.params.slideClass}[data-swiper-slide-index="${i}"]`
                  )
                  .remove()
          for (let i = 0; i < m.length; i += 1)
            i >= C &&
              i <= A &&
              (void 0 === h || e
                ? z.push(i)
                : (i > h && z.push(i), i < c && k.push(i)))
          z.forEach((e) => {
            t.$wrapperEl.append(v(m[e], e))
          }),
            k
              .sort((a, b) => b - a)
              .forEach((e) => {
                t.$wrapperEl.prepend(v(m[e], e))
              }),
            t.$wrapperEl.children('.swiper-slide').css(E, M + 'px'),
            $()
        },
        renderSlide(e, t) {
          const n = this
          const r = n.params.virtual
          if (r.cache && n.virtual.cache[t]) return n.virtual.cache[t]
          const o = r.renderSlide
            ? m(r.renderSlide.call(n, e, t))
            : m(
                `<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
              )
          return (
            o.attr('data-swiper-slide-index') ||
              o.attr('data-swiper-slide-index', t),
            r.cache && (n.virtual.cache[t] = o),
            o
          )
        },
        appendSlide(e) {
          const t = this
          if (typeof e == 'object' && 'length' in e)
            for (let i = 0; i < e.length; i += 1)
              e[i] && t.virtual.slides.push(e[i])
          else t.virtual.slides.push(e)
          t.virtual.update(!0)
        },
        prependSlide(e) {
          const t = this
          const n = t.activeIndex
          let r = n + 1
          let o = 1
          if (Array.isArray(e)) {
            for (let i = 0; i < e.length; i += 1)
              e[i] && t.virtual.slides.unshift(e[i])
            ;(r = n + e.length), (o = e.length)
          } else t.virtual.slides.unshift(e)
          if (t.params.virtual.cache) {
            const e = t.virtual.cache
            const n = {}
            Object.keys(e).forEach((t) => {
              const r = e[t]
              const l = r.attr('data-swiper-slide-index')
              l && r.attr('data-swiper-slide-index', parseInt(l, 10) + 1),
                (n[parseInt(t, 10) + o] = r)
            }),
              (t.virtual.cache = n)
          }
          t.virtual.update(!0), t.slideTo(r, 0)
        },
        removeSlide(e) {
          const t = this
          if (e == null) return
          let n = t.activeIndex
          if (Array.isArray(e))
            for (let i = e.length - 1; i >= 0; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < n && (n -= 1),
                (n = Math.max(n, 0))
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < n && (n -= 1),
              (n = Math.max(n, 0))
          t.virtual.update(!0), t.slideTo(n, 0)
        },
        removeAllSlides() {
          const e = this
          ;(e.virtual.slides = []),
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0)
        },
      }
      const Z = {
        name: 'virtual',
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create() {
          w.extend(this, {
            virtual: {
              update: K.update.bind(this),
              appendSlide: K.appendSlide.bind(this),
              prependSlide: K.prependSlide.bind(this),
              removeSlide: K.removeSlide.bind(this),
              removeAllSlides: K.removeAllSlides.bind(this),
              renderSlide: K.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {},
            },
          })
        },
        on: {
          beforeInit() {
            const e = this
            if (!e.params.virtual.enabled) return
            e.classNames.push(e.params.containerModifierClass + 'virtual')
            const t = { watchSlidesProgress: !0 }
            w.extend(e.params, t),
              w.extend(e.originalParams, t),
              e.params.initialSlide || e.virtual.update()
          },
          setTranslate() {
            this.params.virtual.enabled && this.virtual.update()
          },
        },
      }
      const J = {
        handle(e) {
          const t = this
          const { rtlTranslate: n } = t
          let r = e
          r.originalEvent && (r = r.originalEvent)
          const o = r.keyCode || r.charCode
          const d = t.params.keyboard.pageUpDown
          const h = d && 33 === o
          const m = d && 34 === o
          const f = 37 === o
          const v = 39 === o
          const w = 38 === o
          const y = o === 40
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && v) || (t.isVertical() && y) || m)
          )
            return !1
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && f) || (t.isVertical() && w) || h)
          )
            return !1
          if (
            !(
              r.shiftKey ||
              r.altKey ||
              r.ctrlKey ||
              r.metaKey ||
              (l.activeElement &&
                l.activeElement.nodeName &&
                (l.activeElement.nodeName.toLowerCase() === 'input' ||
                  l.activeElement.nodeName.toLowerCase() === 'textarea'))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (h || m || f || v || w || y)
            ) {
              let e = !1
              if (
                t.$el.parents('.' + t.params.slideClass).length > 0 &&
                t.$el.parents('.' + t.params.slideActiveClass).length === 0
              )
                return
              const r = c.innerWidth
              const o = c.innerHeight
              const l = t.$el.offset()
              n && (l.left -= t.$el[0].scrollLeft)
              const d = [
                [l.left, l.top],
                [l.left + t.width, l.top],
                [l.left, l.top + t.height],
                [l.left + t.width, l.top + t.height],
              ]
              for (let i = 0; i < d.length; i += 1) {
                const t = d[i]
                t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o && (e = !0)
              }
              if (!e) return
            }
            t.isHorizontal()
              ? ((h || m || f || v) &&
                  (r.preventDefault
                    ? r.preventDefault()
                    : (r.returnValue = !1)),
                (((m || v) && !n) || ((h || f) && n)) && t.slideNext(),
                (((h || f) && !n) || ((m || v) && n)) && t.slidePrev())
              : ((h || m || w || y) &&
                  (r.preventDefault
                    ? r.preventDefault()
                    : (r.returnValue = !1)),
                (m || y) && t.slideNext(),
                (h || w) && t.slidePrev()),
              t.emit('keyPress', o)
          }
        },
        enable() {
          this.keyboard.enabled ||
            (m(l).on('keydown', this.keyboard.handle),
            (this.keyboard.enabled = !0))
        },
        disable() {
          this.keyboard.enabled &&
            (m(l).off('keydown', this.keyboard.handle),
            (this.keyboard.enabled = !1))
        },
      }
      const _ = {
        name: 'keyboard',
        params: {
          keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
        },
        create() {
          w.extend(this, {
            keyboard: {
              enabled: !1,
              enable: J.enable.bind(this),
              disable: J.disable.bind(this),
              handle: J.handle.bind(this),
            },
          })
        },
        on: {
          init() {
            const e = this
            e.params.keyboard.enabled && e.keyboard.enable()
          },
          destroy() {
            const e = this
            e.keyboard.enabled && e.keyboard.disable()
          },
        },
      }
      const ee = {
        lastScrollTime: w.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: () =>
          c.navigator.userAgent.includes('firefox')
            ? 'DOMMouseScroll'
            : (function () {
                let e = 'onwheel' in l
                if (!e) {
                  const element = l.createElement('div')
                  element.setAttribute('onwheel', 'return;'),
                    (e = typeof element.onwheel == 'function')
                }
                return (
                  !e &&
                    l.implementation &&
                    l.implementation.hasFeature &&
                    !0 !== l.implementation.hasFeature('', '') &&
                    (e = l.implementation.hasFeature('Events.wheel', '3.0')),
                  e
                )
              })()
            ? 'wheel'
            : 'mousewheel',
        normalize(e) {
          let t = 0
          let n = 0
          let r = 0
          let o = 0
          return (
            'detail' in e && (n = e.detail),
            'wheelDelta' in e && (n = -e.wheelDelta / 120),
            'wheelDeltaY' in e && (n = -e.wheelDeltaY / 120),
            'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
            'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
            (r = 10 * t),
            (o = 10 * n),
            'deltaY' in e && (o = e.deltaY),
            'deltaX' in e && (r = e.deltaX),
            e.shiftKey && !r && ((r = o), (o = 0)),
            (r || o) &&
              e.deltaMode &&
              (e.deltaMode === 1
                ? ((r *= 40), (o *= 40))
                : ((r *= 800), (o *= 800))),
            r && !t && (t = r < 1 ? -1 : 1),
            o && !n && (n = o < 1 ? -1 : 1),
            { spinX: t, spinY: n, pixelX: r, pixelY: o }
          )
        },
        handleMouseEnter() {
          this.mouseEntered = !0
        },
        handleMouseLeave() {
          this.mouseEntered = !1
        },
        handle(e) {
          let t = e
          const n = this
          const r = n.params.mousewheel
          n.params.cssMode && t.preventDefault()
          let o = n.$el
          if (
            (n.params.mousewheel.eventsTarged !== 'container' &&
              (o = m(n.params.mousewheel.eventsTarged)),
            !n.mouseEntered && !o[0].contains(t.target) && !r.releaseOnEdges)
          )
            return !0
          t.originalEvent && (t = t.originalEvent)
          let l = 0
          const d = n.rtlTranslate ? -1 : 1
          const data = ee.normalize(t)
          if (r.forceToAxis)
            if (n.isHorizontal()) {
              if (!(Math.abs(data.pixelX) > Math.abs(data.pixelY))) return !0
              l = -data.pixelX * d
            } else {
              if (!(Math.abs(data.pixelY) > Math.abs(data.pixelX))) return !0
              l = -data.pixelY
            }
          else
            l =
              Math.abs(data.pixelX) > Math.abs(data.pixelY)
                ? -data.pixelX * d
                : -data.pixelY
          if (l === 0) return !0
          if ((r.invert && (l = -l), n.params.freeMode)) {
            const e = {
              time: w.now(),
              delta: Math.abs(l),
              direction: Math.sign(l),
            }
            const { lastEventBeforeSnap: o } = n.mousewheel
            const d =
              o &&
              e.time < o.time + 500 &&
              e.delta <= o.delta &&
              e.direction === o.direction
            if (!d) {
              ;(n.mousewheel.lastEventBeforeSnap = void 0),
                n.params.loop && n.loopFix()
              let o = n.getTranslate() + l * r.sensitivity
              const c = n.isBeginning
              const h = n.isEnd
              if (
                (o >= n.minTranslate() && (o = n.minTranslate()),
                o <= n.maxTranslate() && (o = n.maxTranslate()),
                n.setTransition(0),
                n.setTranslate(o),
                n.updateProgress(),
                n.updateActiveIndex(),
                n.updateSlidesClasses(),
                ((!c && n.isBeginning) || (!h && n.isEnd)) &&
                  n.updateSlidesClasses(),
                n.params.freeModeSticky)
              ) {
                clearTimeout(n.mousewheel.timeout),
                  (n.mousewheel.timeout = void 0)
                const t = n.mousewheel.recentWheelEvents
                t.length >= 15 && t.shift()
                const r = t.length ? t[t.length - 1] : void 0
                const o = t[0]
                if (
                  (t.push(e),
                  r && (e.delta > r.delta || e.direction !== r.direction))
                )
                  t.splice(0)
                else if (
                  t.length >= 15 &&
                  e.time - o.time < 500 &&
                  o.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const r = l > 0 ? 0.8 : 0.2
                  ;(n.mousewheel.lastEventBeforeSnap = e),
                    t.splice(0),
                    (n.mousewheel.timeout = w.nextTick(() => {
                      n.slideToClosest(n.params.speed, !0, void 0, r)
                    }, 0))
                }
                n.mousewheel.timeout ||
                  (n.mousewheel.timeout = w.nextTick(() => {
                    ;(n.mousewheel.lastEventBeforeSnap = e),
                      t.splice(0),
                      n.slideToClosest(n.params.speed, !0, void 0, 0.5)
                  }, 500))
              }
              if (
                (d || n.emit('scroll', t),
                n.params.autoplay &&
                  n.params.autoplayDisableOnInteraction &&
                  n.autoplay.stop(),
                o === n.minTranslate() || o === n.maxTranslate())
              )
                return !0
            }
          } else {
            const t = {
              time: w.now(),
              delta: Math.abs(l),
              direction: Math.sign(l),
              raw: e,
            }
            const r = n.mousewheel.recentWheelEvents
            r.length >= 2 && r.shift()
            const o = r.length ? r[r.length - 1] : void 0
            if (
              (r.push(t),
              o
                ? (t.direction !== o.direction ||
                    t.delta > o.delta ||
                    t.time > o.time + 150) &&
                  n.mousewheel.animateSlider(t)
                : n.mousewheel.animateSlider(t),
              n.mousewheel.releaseScroll(t))
            )
              return !0
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          )
        },
        animateSlider(e) {
          const t = this
          return (
            (e.delta >= 6 && w.now() - t.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit('scroll', e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit('scroll', e.raw)),
            (t.mousewheel.lastScrollTime = new c.Date().getTime()),
            !1)
          )
        },
        releaseScroll(e) {
          const t = this
          const n = t.params.mousewheel
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
          } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
            return !0
          return !1
        },
        enable() {
          const e = this
          const t = ee.event()
          if (e.params.cssMode)
            return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0
          if (!t) return !1
          if (e.mousewheel.enabled) return !1
          let n = e.$el
          return (
            e.params.mousewheel.eventsTarged !== 'container' &&
              (n = m(e.params.mousewheel.eventsTarged)),
            n.on('mouseenter', e.mousewheel.handleMouseEnter),
            n.on('mouseleave', e.mousewheel.handleMouseLeave),
            n.on(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !0),
            !0
          )
        },
        disable() {
          const e = this
          const t = ee.event()
          if (e.params.cssMode)
            return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0
          if (!t) return !1
          if (!e.mousewheel.enabled) return !1
          let n = e.$el
          return (
            e.params.mousewheel.eventsTarged !== 'container' &&
              (n = m(e.params.mousewheel.eventsTarged)),
            n.off(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !1),
            !0
          )
        },
      }
      const te = {
        update() {
          const e = this
          const t = e.params.navigation
          if (e.params.loop) return
          const { $nextEl: n, $prevEl: r } = e.navigation
          r &&
            r.length > 0 &&
            (e.isBeginning
              ? r.addClass(t.disabledClass)
              : r.removeClass(t.disabledClass),
            r[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](t.lockClass)),
            n &&
              n.length > 0 &&
              (e.isEnd
                ? n.addClass(t.disabledClass)
                : n.removeClass(t.disabledClass),
              n[
                e.params.watchOverflow && e.isLocked
                  ? 'addClass'
                  : 'removeClass'
              ](t.lockClass))
        },
        onPrevClick(e) {
          e.preventDefault(),
            (this.isBeginning && !this.params.loop) || this.slidePrev()
        },
        onNextClick(e) {
          e.preventDefault(),
            (this.isEnd && !this.params.loop) || this.slideNext()
        },
        init() {
          const e = this
          const t = e.params.navigation
          if (!t.nextEl && !t.prevEl) return
          let n, r
          t.nextEl &&
            ((n = m(t.nextEl)),
            e.params.uniqueNavElements &&
              typeof t.nextEl == 'string' &&
              n.length > 1 &&
              e.$el.find(t.nextEl).length === 1 &&
              (n = e.$el.find(t.nextEl))),
            t.prevEl &&
              ((r = m(t.prevEl)),
              e.params.uniqueNavElements &&
                typeof t.prevEl == 'string' &&
                r.length > 1 &&
                e.$el.find(t.prevEl).length === 1 &&
                (r = e.$el.find(t.prevEl))),
            n && n.length > 0 && n.on('click', e.navigation.onNextClick),
            r && r.length > 0 && r.on('click', e.navigation.onPrevClick),
            w.extend(e.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: r,
              prevEl: r && r[0],
            })
        },
        destroy() {
          const e = this
          const { $nextEl: t, $prevEl: n } = e.navigation
          t &&
            t.length &&
            (t.off('click', e.navigation.onNextClick),
            t.removeClass(e.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off('click', e.navigation.onPrevClick),
              n.removeClass(e.params.navigation.disabledClass))
        },
      }
      const se = {
        update() {
          const e = this
          const t = e.rtl
          const n = e.params.pagination
          if (
            !n.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            e.pagination.$el.length === 0
          )
            return
          const r =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length
          const o = e.pagination.$el
          let l
          const d = e.params.loop
            ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length
          if (
            (e.params.loop
              ? ((l = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                l > r - 1 - 2 * e.loopedSlides && (l -= r - 2 * e.loopedSlides),
                l > d - 1 && (l -= d),
                l < 0 && e.params.paginationType !== 'bullets' && (l = d + l))
              : (l = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            n.type === 'bullets' &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const r = e.pagination.bullets
            let d, c, h
            if (
              (n.dynamicBullets &&
                ((e.pagination.bulletSize = r
                  .eq(0)
                  [e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                o.css(
                  e.isHorizontal() ? 'width' : 'height',
                  e.pagination.bulletSize * (n.dynamicMainBullets + 4) + 'px'
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += l - e.previousIndex),
                  e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        n.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (d = l - e.pagination.dynamicBulletIndex),
                (c = d + (Math.min(r.length, n.dynamicMainBullets) - 1)),
                (h = (c + d) / 2)),
              r.removeClass(
                `${n.bulletActiveClass} ${n.bulletActiveClass}-next ${n.bulletActiveClass}-next-next ${n.bulletActiveClass}-prev ${n.bulletActiveClass}-prev-prev ${n.bulletActiveClass}-main`
              ),
              o.length > 1)
            )
              r.each((e, t) => {
                const r = m(t)
                const o = r.index()
                o === l && r.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (o >= d &&
                      o <= c &&
                      r.addClass(n.bulletActiveClass + '-main'),
                    o === d &&
                      r
                        .prev()
                        .addClass(n.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(n.bulletActiveClass + '-prev-prev'),
                    o === c &&
                      r
                        .next()
                        .addClass(n.bulletActiveClass + '-next')
                        .next()
                        .addClass(n.bulletActiveClass + '-next-next'))
              })
            else {
              const t = r.eq(l)
              const o = t.index()
              if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const t = r.eq(d)
                const l = r.eq(c)
                for (let i = d; i <= c; i += 1)
                  r.eq(i).addClass(n.bulletActiveClass + '-main')
                if (e.params.loop)
                  if (o >= r.length - n.dynamicMainBullets) {
                    for (let i = n.dynamicMainBullets; i >= 0; i -= 1)
                      r.eq(r.length - i).addClass(n.bulletActiveClass + '-main')
                    r.eq(r.length - n.dynamicMainBullets - 1).addClass(
                      n.bulletActiveClass + '-prev'
                    )
                  } else
                    t
                      .prev()
                      .addClass(n.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(n.bulletActiveClass + '-prev-prev'),
                      l
                        .next()
                        .addClass(n.bulletActiveClass + '-next')
                        .next()
                        .addClass(n.bulletActiveClass + '-next-next')
                else
                  t
                    .prev()
                    .addClass(n.bulletActiveClass + '-prev')
                    .prev()
                    .addClass(n.bulletActiveClass + '-prev-prev'),
                    l
                      .next()
                      .addClass(n.bulletActiveClass + '-next')
                      .next()
                      .addClass(n.bulletActiveClass + '-next-next')
              }
            }
            if (n.dynamicBullets) {
              const o = Math.min(r.length, n.dynamicMainBullets + 4)
              const l =
                (e.pagination.bulletSize * o - e.pagination.bulletSize) / 2 -
                h * e.pagination.bulletSize
              const d = t ? 'right' : 'left'
              r.css(e.isHorizontal() ? d : 'top', l + 'px')
            }
          }
          if (
            (n.type === 'fraction' &&
              (o
                .find('.' + n.currentClass)
                .text(n.formatFractionCurrent(l + 1)),
              o.find('.' + n.totalClass).text(n.formatFractionTotal(d))),
            n.type === 'progressbar')
          ) {
            let t
            t = n.progressbarOpposite
              ? e.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : e.isHorizontal()
              ? 'horizontal'
              : 'vertical'
            const r = (l + 1) / d
            let c = 1
            let h = 1
            t === 'horizontal' ? (c = r) : (h = r),
              o
                .find('.' + n.progressbarFillClass)
                .transform(`translate3d(0,0,0) scaleX(${c}) scaleY(${h})`)
                .transition(e.params.speed)
          }
          n.type === 'custom' && n.renderCustom
            ? (o.html(n.renderCustom(e, l + 1, d)),
              e.emit('paginationRender', e, o[0]))
            : e.emit('paginationUpdate', e, o[0]),
            o[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](n.lockClass)
        },
        render() {
          const e = this
          const t = e.params.pagination
          if (
            !t.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            e.pagination.$el.length === 0
          )
            return
          const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length
          const r = e.pagination.$el
          let o = ''
          if (t.type === 'bullets') {
            const l = e.params.loop
              ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length
            for (let i = 0; i < l; i += 1)
              t.renderBullet
                ? (o += t.renderBullet.call(e, i, t.bulletClass))
                : (o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`)
            r.html(o), (e.pagination.bullets = r.find('.' + t.bulletClass))
          }
          t.type === 'fraction' &&
            ((o = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            r.html(o)),
            t.type === 'progressbar' &&
              ((o = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              r.html(o)),
            t.type !== 'custom' &&
              e.emit('paginationRender', e.pagination.$el[0])
        },
        init() {
          const e = this
          const t = e.params.pagination
          if (!t.el) return
          let n = m(t.el)
          n.length !== 0 &&
            (e.params.uniqueNavElements &&
              typeof t.el == 'string' &&
              n.length > 1 &&
              (n = e.$el.find(t.el)),
            t.type === 'bullets' && t.clickable && n.addClass(t.clickableClass),
            n.addClass(t.modifierClass + t.type),
            t.type === 'bullets' &&
              t.dynamicBullets &&
              (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            t.type === 'progressbar' &&
              t.progressbarOpposite &&
              n.addClass(t.progressbarOppositeClass),
            t.clickable &&
              n.on('click', '.' + t.bulletClass, function (t) {
                t.preventDefault()
                let n = m(this).index() * e.params.slidesPerGroup
                e.params.loop && (n += e.loopedSlides), e.slideTo(n)
              }),
            w.extend(e.pagination, { $el: n, el: n[0] }))
        },
        destroy() {
          const e = this.params.pagination
          if (
            !e.el ||
            !this.pagination.el ||
            !this.pagination.$el ||
            this.pagination.$el.length === 0
          )
            return
          const t = this.pagination.$el
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off('click', '.' + e.bulletClass)
        },
      }
      const ie = {
        setTranslate() {
          const e = this
          if (!e.params.scrollbar.el || !e.scrollbar.el) return
          const { scrollbar: t, rtlTranslate: n, progress } = e
          const { dragSize: r, trackSize: o, $dragEl: l, $el: d } = t
          const c = e.params.scrollbar
          let h = r
          let m = (o - r) * progress
          n
            ? ((m = -m),
              m > 0 ? ((h = r - m), (m = 0)) : -m + r > o && (h = o + m))
            : m < 0
            ? ((h = r + m), (m = 0))
            : m + r > o && (h = o - m),
            e.isHorizontal()
              ? (l.transform(`translate3d(${m}px, 0, 0)`),
                (l[0].style.width = h + 'px'))
              : (l.transform(`translate3d(0px, ${m}px, 0)`),
                (l[0].style.height = h + 'px')),
            c.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (d[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(() => {
                ;(d[0].style.opacity = 0), d.transition(400)
              }, 1e3)))
        },
        setTransition(e) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(e)
        },
        updateSize() {
          const e = this
          if (!e.params.scrollbar.el || !e.scrollbar.el) return
          const { scrollbar: t } = e
          const { $dragEl: n, $el: r } = t
          ;(n[0].style.width = ''), (n[0].style.height = '')
          const o = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight
          const l = e.size / e.virtualSize
          const d = l * (o / e.size)
          let c
          ;(c =
            e.params.scrollbar.dragSize === 'auto'
              ? o * l
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (n[0].style.width = c + 'px')
              : (n[0].style.height = c + 'px'),
            (r[0].style.display = l >= 1 ? 'none' : ''),
            e.params.scrollbar.hide && (r[0].style.opacity = 0),
            w.extend(t, {
              trackSize: o,
              divider: l,
              moveDivider: d,
              dragSize: c,
            }),
            t.$el[
              e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'
            ](e.params.scrollbar.lockClass)
        },
        getPointerPosition(e) {
          return this.isHorizontal()
            ? e.type === 'touchstart' || e.type === 'touchmove'
              ? e.targetTouches[0].clientX
              : e.clientX
            : e.type === 'touchstart' || e.type === 'touchmove'
            ? e.targetTouches[0].clientY
            : e.clientY
        },
        setDragPosition(e) {
          const { scrollbar: t, rtlTranslate: n } = this
          const { $el: r, dragSize: o, trackSize: l, dragStartPos: d } = t
          let c
          ;(c =
            (t.getPointerPosition(e) -
              r.offset()[this.isHorizontal() ? 'left' : 'top'] -
              (d !== null ? d : o / 2)) /
            (l - o)),
            (c = Math.max(Math.min(c, 1), 0)),
            n && (c = 1 - c)
          const h =
            this.minTranslate() +
            (this.maxTranslate() - this.minTranslate()) * c
          this.updateProgress(h),
            this.setTranslate(h),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart(e) {
          const t = this
          const n = t.params.scrollbar
          const { scrollbar: r, $wrapperEl: o } = t
          const { $el: l, $dragEl: d } = r
          ;(t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === d[0] || e.target === d
                ? r.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? 'left' : 'top'
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            o.transition(100),
            d.transition(100),
            r.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            l.transition(0),
            n.hide && l.css('opacity', 1),
            t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
            t.emit('scrollbarDragStart', e)
        },
        onDragMove(e) {
          const { scrollbar: t, $wrapperEl: n } = this
          const { $el: r, $dragEl: o } = t
          this.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            t.setDragPosition(e),
            n.transition(0),
            r.transition(0),
            o.transition(0),
            this.emit('scrollbarDragMove', e))
        },
        onDragEnd(e) {
          const t = this
          const n = t.params.scrollbar
          const { scrollbar: r, $wrapperEl: o } = t
          const { $el: l } = r
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css('scroll-snap-type', ''), o.transition('')),
            n.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = w.nextTick(() => {
                l.css('opacity', 0), l.transition(400)
              }, 1e3))),
            t.emit('scrollbarDragEnd', e),
            n.snapOnRelease && t.slideToClosest())
        },
        enableDraggable() {
          const e = this
          if (!e.params.scrollbar.el) return
          const {
            scrollbar: t,
            touchEventsTouch: n,
            touchEventsDesktop: r,
            params: o,
          } = e
          const d = t.$el[0]
          const c = !(!y.passiveListener || !o.passiveListeners) && {
            passive: !1,
            capture: !1,
          }
          const h = !(!y.passiveListener || !o.passiveListeners) && {
            passive: !0,
            capture: !1,
          }
          y.touch
            ? (d.addEventListener(n.start, e.scrollbar.onDragStart, c),
              d.addEventListener(n.move, e.scrollbar.onDragMove, c),
              d.addEventListener(n.end, e.scrollbar.onDragEnd, h))
            : (d.addEventListener(r.start, e.scrollbar.onDragStart, c),
              l.addEventListener(r.move, e.scrollbar.onDragMove, c),
              l.addEventListener(r.end, e.scrollbar.onDragEnd, h))
        },
        disableDraggable() {
          const e = this
          if (!e.params.scrollbar.el) return
          const {
            scrollbar: t,
            touchEventsTouch: n,
            touchEventsDesktop: r,
            params: o,
          } = e
          const d = t.$el[0]
          const c = !(!y.passiveListener || !o.passiveListeners) && {
            passive: !1,
            capture: !1,
          }
          const h = !(!y.passiveListener || !o.passiveListeners) && {
            passive: !0,
            capture: !1,
          }
          y.touch
            ? (d.removeEventListener(n.start, e.scrollbar.onDragStart, c),
              d.removeEventListener(n.move, e.scrollbar.onDragMove, c),
              d.removeEventListener(n.end, e.scrollbar.onDragEnd, h))
            : (d.removeEventListener(r.start, e.scrollbar.onDragStart, c),
              l.removeEventListener(r.move, e.scrollbar.onDragMove, c),
              l.removeEventListener(r.end, e.scrollbar.onDragEnd, h))
        },
        init() {
          const e = this
          if (!e.params.scrollbar.el) return
          const { scrollbar: t, $el: n } = e
          const r = e.params.scrollbar
          let o = m(r.el)
          e.params.uniqueNavElements &&
            typeof r.el == 'string' &&
            o.length > 1 &&
            n.find(r.el).length === 1 &&
            (o = n.find(r.el))
          let l = o.find('.' + e.params.scrollbar.dragClass)
          l.length === 0 &&
            ((l = m(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
            o.append(l)),
            w.extend(t, { $el: o, el: o[0], $dragEl: l, dragEl: l[0] }),
            r.draggable && t.enableDraggable()
        },
        destroy() {
          this.scrollbar.disableDraggable()
        },
      }
      const ae = {
        setTransform(e, progress) {
          const { rtl: t } = this
          const n = m(e)
          const r = t ? -1 : 1
          const p = n.attr('data-swiper-parallax') || '0'
          let o = n.attr('data-swiper-parallax-x')
          let l = n.attr('data-swiper-parallax-y')
          const d = n.attr('data-swiper-parallax-scale')
          const c = n.attr('data-swiper-parallax-opacity')
          if (
            (o || l
              ? ((o = o || '0'), (l = l || '0'))
              : this.isHorizontal()
              ? ((o = p), (l = '0'))
              : ((l = p), (o = '0')),
            (o = o.includes('%')
              ? parseInt(o, 10) * progress * r + '%'
              : o * progress * r + 'px'),
            (l = l.includes('%')
              ? parseInt(l, 10) * progress + '%'
              : l * progress + 'px'),
            c != null)
          ) {
            const e = c - (c - 1) * (1 - Math.abs(progress))
            n[0].style.opacity = e
          }
          if (d == null) n.transform(`translate3d(${o}, ${l}, 0px)`)
          else {
            const e = d - (d - 1) * (1 - Math.abs(progress))
            n.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
          }
        },
        setTranslate() {
          const e = this
          const { $el: t, slides: n, progress, snapGrid: r } = e
          t
            .children(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
            )
            .each((t, n) => {
              e.parallax.setTransform(n, progress)
            }),
            n.each((t, n) => {
              let o = n.progress
              e.params.slidesPerGroup > 1 &&
                e.params.slidesPerView !== 'auto' &&
                (o += Math.ceil(t / 2) - progress * (r.length - 1)),
                (o = Math.min(Math.max(o, -1), 1)),
                m(n)
                  .find(
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                  )
                  .each((t, n) => {
                    e.parallax.setTransform(n, o)
                  })
            })
        },
        setTransition(e = this.params.speed) {
          const { $el: t } = this
          t.find(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
          ).each((t, n) => {
            const r = m(n)
            let o = parseInt(r.attr('data-swiper-parallax-duration'), 10) || e
            e === 0 && (o = 0), r.transition(o)
          })
        },
      }
      const ne = {
        getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) return 1
          const t = e.targetTouches[0].pageX
          const n = e.targetTouches[0].pageY
          const r = e.targetTouches[1].pageX
          const o = e.targetTouches[1].pageY
          return Math.sqrt((r - t) ** 2 + (o - n) ** 2)
        },
        onGestureStart(e) {
          const t = this
          const n = t.params.zoom
          const r = t.zoom
          const { gesture: o } = r
          if (
            ((r.fakeGestureTouched = !1),
            (r.fakeGestureMoved = !1),
            !y.gestures)
          ) {
            if (
              e.type !== 'touchstart' ||
              (e.type === 'touchstart' && e.targetTouches.length < 2)
            )
              return
            ;(r.fakeGestureTouched = !0),
              (o.scaleStart = ne.getDistanceBetweenTouches(e))
          }
          ;(o.$slideEl && o.$slideEl.length) ||
          ((o.$slideEl = m(e.target).closest('.' + t.params.slideClass)),
          o.$slideEl.length === 0 && (o.$slideEl = t.slides.eq(t.activeIndex)),
          (o.$imageEl = o.$slideEl.find(
            'img, svg, canvas, picture, .swiper-zoom-target'
          )),
          (o.$imageWrapEl = o.$imageEl.parent('.' + n.containerClass)),
          (o.maxRatio = o.$imageWrapEl.attr('data-swiper-zoom') || n.maxRatio),
          o.$imageWrapEl.length !== 0)
            ? (o.$imageEl && o.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (o.$imageEl = void 0)
        },
        onGestureChange(e) {
          const t = this.params.zoom
          const n = this.zoom
          const { gesture: r } = n
          if (!y.gestures) {
            if (
              e.type !== 'touchmove' ||
              (e.type === 'touchmove' && e.targetTouches.length < 2)
            )
              return
            ;(n.fakeGestureMoved = !0),
              (r.scaleMove = ne.getDistanceBetweenTouches(e))
          }
          r.$imageEl &&
            r.$imageEl.length !== 0 &&
            ((n.scale = y.gestures
              ? e.scale * n.currentScale
              : (r.scaleMove / r.scaleStart) * n.currentScale),
            n.scale > r.maxRatio &&
              (n.scale = r.maxRatio - 1 + (n.scale - r.maxRatio + 1) ** 0.5),
            n.scale < t.minRatio &&
              (n.scale = t.minRatio + 1 - (t.minRatio - n.scale + 1) ** 0.5),
            r.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`))
        },
        onGestureEnd(e) {
          const t = this.params.zoom
          const n = this.zoom
          const { gesture: r } = n
          if (!y.gestures) {
            if (!n.fakeGestureTouched || !n.fakeGestureMoved) return
            if (
              e.type !== 'touchend' ||
              (e.type === 'touchend' &&
                e.changedTouches.length < 2 &&
                !k.android)
            )
              return
            ;(n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1)
          }
          r.$imageEl &&
            r.$imageEl.length !== 0 &&
            ((n.scale = Math.max(Math.min(n.scale, r.maxRatio), t.minRatio)),
            r.$imageEl
              .transition(this.params.speed)
              .transform(`translate3d(0,0,0) scale(${n.scale})`),
            (n.currentScale = n.scale),
            (n.isScaling = !1),
            n.scale === 1 && (r.$slideEl = void 0))
        },
        onTouchStart(e) {
          const t = this.zoom
          const { gesture: n, image } = t
          n.$imageEl &&
            n.$imageEl.length !== 0 &&
            (image.isTouched ||
              (k.android && e.cancelable && e.preventDefault(),
              (image.isTouched = !0),
              (image.touchesStart.x =
                e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX),
              (image.touchesStart.y =
                e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY)))
        },
        onTouchMove(e) {
          const t = this
          const n = t.zoom
          const { gesture: r, image, velocity: o } = n
          if (!r.$imageEl || r.$imageEl.length === 0) return
          if (((t.allowClick = !1), !image.isTouched || !r.$slideEl)) return
          image.isMoved ||
            ((image.width = r.$imageEl[0].offsetWidth),
            (image.height = r.$imageEl[0].offsetHeight),
            (image.startX = w.getTranslate(r.$imageWrapEl[0], 'x') || 0),
            (image.startY = w.getTranslate(r.$imageWrapEl[0], 'y') || 0),
            (r.slideWidth = r.$slideEl[0].offsetWidth),
            (r.slideHeight = r.$slideEl[0].offsetHeight),
            r.$imageWrapEl.transition(0),
            t.rtl &&
              ((image.startX = -image.startX), (image.startY = -image.startY)))
          const l = image.width * n.scale
          const d = image.height * n.scale
          if (!(l < r.slideWidth && d < r.slideHeight)) {
            if (
              ((image.minX = Math.min(r.slideWidth / 2 - l / 2, 0)),
              (image.maxX = -image.minX),
              (image.minY = Math.min(r.slideHeight / 2 - d / 2, 0)),
              (image.maxY = -image.minY),
              (image.touchesCurrent.x =
                e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX),
              (image.touchesCurrent.y =
                e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY),
              !image.isMoved && !n.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(image.minX) === Math.floor(image.startX) &&
                  image.touchesCurrent.x < image.touchesStart.x) ||
                  (Math.floor(image.maxX) === Math.floor(image.startX) &&
                    image.touchesCurrent.x > image.touchesStart.x))
              )
                return void (image.isTouched = !1)
              if (
                !t.isHorizontal() &&
                ((Math.floor(image.minY) === Math.floor(image.startY) &&
                  image.touchesCurrent.y < image.touchesStart.y) ||
                  (Math.floor(image.maxY) === Math.floor(image.startY) &&
                    image.touchesCurrent.y > image.touchesStart.y))
              )
                return void (image.isTouched = !1)
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (image.isMoved = !0),
              (image.currentX =
                image.touchesCurrent.x - image.touchesStart.x + image.startX),
              (image.currentY =
                image.touchesCurrent.y - image.touchesStart.y + image.startY),
              image.currentX < image.minX &&
                (image.currentX =
                  image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8),
              image.currentX > image.maxX &&
                (image.currentX =
                  image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8),
              image.currentY < image.minY &&
                (image.currentY =
                  image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8),
              image.currentY > image.maxY &&
                (image.currentY =
                  image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8),
              o.prevPositionX || (o.prevPositionX = image.touchesCurrent.x),
              o.prevPositionY || (o.prevPositionY = image.touchesCurrent.y),
              o.prevTime || (o.prevTime = Date.now()),
              (o.x =
                (image.touchesCurrent.x - o.prevPositionX) /
                (Date.now() - o.prevTime) /
                2),
              (o.y =
                (image.touchesCurrent.y - o.prevPositionY) /
                (Date.now() - o.prevTime) /
                2),
              Math.abs(image.touchesCurrent.x - o.prevPositionX) < 2 &&
                (o.x = 0),
              Math.abs(image.touchesCurrent.y - o.prevPositionY) < 2 &&
                (o.y = 0),
              (o.prevPositionX = image.touchesCurrent.x),
              (o.prevPositionY = image.touchesCurrent.y),
              (o.prevTime = Date.now()),
              r.$imageWrapEl.transform(
                `translate3d(${image.currentX}px, ${image.currentY}px,0)`
              )
          }
        },
        onTouchEnd() {
          const e = this.zoom
          const { gesture: t, image, velocity: n } = e
          if (!t.$imageEl || t.$imageEl.length === 0) return
          if (!image.isTouched || !image.isMoved)
            return (image.isTouched = !1), void (image.isMoved = !1)
          ;(image.isTouched = !1), (image.isMoved = !1)
          let r = 300
          let o = 300
          const l = n.x * r
          const d = image.currentX + l
          const c = n.y * o
          const h = image.currentY + c
          n.x !== 0 && (r = Math.abs((d - image.currentX) / n.x)),
            n.y !== 0 && (o = Math.abs((h - image.currentY) / n.y))
          const m = Math.max(r, o)
          ;(image.currentX = d), (image.currentY = h)
          const f = image.width * e.scale
          const v = image.height * e.scale
          ;(image.minX = Math.min(t.slideWidth / 2 - f / 2, 0)),
            (image.maxX = -image.minX),
            (image.minY = Math.min(t.slideHeight / 2 - v / 2, 0)),
            (image.maxY = -image.minY),
            (image.currentX = Math.max(
              Math.min(image.currentX, image.maxX),
              image.minX
            )),
            (image.currentY = Math.max(
              Math.min(image.currentY, image.maxY),
              image.minY
            )),
            t.$imageWrapEl
              .transition(m)
              .transform(
                `translate3d(${image.currentX}px, ${image.currentY}px,0)`
              )
        },
        onTransitionEnd() {
          const e = this.zoom
          const { gesture: t } = e
          t.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (t.$imageEl && t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
            t.$imageWrapEl && t.$imageWrapEl.transform('translate3d(0,0,0)'),
            (e.scale = 1),
            (e.currentScale = 1),
            (t.$slideEl = void 0),
            (t.$imageEl = void 0),
            (t.$imageWrapEl = void 0))
        },
        toggle(e) {
          const t = this.zoom
          t.scale && t.scale !== 1 ? t.out() : t.in(e)
        },
        in(e) {
          const t = this
          const n = t.zoom
          const r = t.params.zoom
          const { gesture: o, image } = n
          if (
            (o.$slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (o.$slideEl = t.$wrapperEl.children(
                    '.' + t.params.slideActiveClass
                  ))
                : (o.$slideEl = t.slides.eq(t.activeIndex)),
              (o.$imageEl = o.$slideEl.find(
                'img, svg, canvas, picture, .swiper-zoom-target'
              )),
              (o.$imageWrapEl = o.$imageEl.parent('.' + r.containerClass))),
            !o.$imageEl || o.$imageEl.length === 0)
          )
            return
          let l, d, c, h, m, f, v, w, y, x, E, T, S, C, A, M, $, k
          o.$slideEl.addClass('' + r.zoomedSlideClass),
            void 0 === image.touchesStart.x && e
              ? ((l =
                  e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX),
                (d =
                  e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY))
              : ((l = image.touchesStart.x), (d = image.touchesStart.y)),
            (n.scale = o.$imageWrapEl.attr('data-swiper-zoom') || r.maxRatio),
            (n.currentScale =
              o.$imageWrapEl.attr('data-swiper-zoom') || r.maxRatio),
            e
              ? (($ = o.$slideEl[0].offsetWidth),
                (k = o.$slideEl[0].offsetHeight),
                (c = o.$slideEl.offset().left),
                (h = o.$slideEl.offset().top),
                (m = c + $ / 2 - l),
                (f = h + k / 2 - d),
                (y = o.$imageEl[0].offsetWidth),
                (x = o.$imageEl[0].offsetHeight),
                (E = y * n.scale),
                (T = x * n.scale),
                (S = Math.min($ / 2 - E / 2, 0)),
                (C = Math.min(k / 2 - T / 2, 0)),
                (A = -S),
                (M = -C),
                (v = m * n.scale),
                (w = f * n.scale),
                v < S && (v = S),
                v > A && (v = A),
                w < C && (w = C),
                w > M && (w = M))
              : ((v = 0), (w = 0)),
            o.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${v}px, ${w}px,0)`),
            o.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${n.scale})`)
        },
        out() {
          const e = this
          const t = e.zoom
          const n = e.params.zoom
          const { gesture: r } = t
          r.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (r.$slideEl = e.$wrapperEl.children(
                  '.' + e.params.slideActiveClass
                ))
              : (r.$slideEl = e.slides.eq(e.activeIndex)),
            (r.$imageEl = r.$slideEl.find(
              'img, svg, canvas, picture, .swiper-zoom-target'
            )),
            (r.$imageWrapEl = r.$imageEl.parent('.' + n.containerClass))),
            r.$imageEl &&
              r.$imageEl.length !== 0 &&
              ((t.scale = 1),
              (t.currentScale = 1),
              r.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
              r.$imageEl
                .transition(300)
                .transform('translate3d(0,0,0) scale(1)'),
              r.$slideEl.removeClass('' + n.zoomedSlideClass),
              (r.$slideEl = void 0))
        },
        enable() {
          const e = this
          const t = e.zoom
          if (t.enabled) return
          t.enabled = !0
          const n = !(
            e.touchEvents.start !== 'touchstart' ||
            !y.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 }
          const r = !y.passiveListener || { passive: !1, capture: !0 }
          const o = '.' + e.params.slideClass
          y.gestures
            ? (e.$wrapperEl.on('gesturestart', o, t.onGestureStart, n),
              e.$wrapperEl.on('gesturechange', o, t.onGestureChange, n),
              e.$wrapperEl.on('gestureend', o, t.onGestureEnd, n))
            : e.touchEvents.start === 'touchstart' &&
              (e.$wrapperEl.on(e.touchEvents.start, o, t.onGestureStart, n),
              e.$wrapperEl.on(e.touchEvents.move, o, t.onGestureChange, r),
              e.$wrapperEl.on(e.touchEvents.end, o, t.onGestureEnd, n),
              e.touchEvents.cancel &&
                e.$wrapperEl.on(e.touchEvents.cancel, o, t.onGestureEnd, n)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              '.' + e.params.zoom.containerClass,
              t.onTouchMove,
              r
            )
        },
        disable() {
          const e = this
          const t = e.zoom
          if (!t.enabled) return
          e.zoom.enabled = !1
          const n = !(
            e.touchEvents.start !== 'touchstart' ||
            !y.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 }
          const r = !y.passiveListener || { passive: !1, capture: !0 }
          const o = '.' + e.params.slideClass
          y.gestures
            ? (e.$wrapperEl.off('gesturestart', o, t.onGestureStart, n),
              e.$wrapperEl.off('gesturechange', o, t.onGestureChange, n),
              e.$wrapperEl.off('gestureend', o, t.onGestureEnd, n))
            : e.touchEvents.start === 'touchstart' &&
              (e.$wrapperEl.off(e.touchEvents.start, o, t.onGestureStart, n),
              e.$wrapperEl.off(e.touchEvents.move, o, t.onGestureChange, r),
              e.$wrapperEl.off(e.touchEvents.end, o, t.onGestureEnd, n),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, o, t.onGestureEnd, n)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              '.' + e.params.zoom.containerClass,
              t.onTouchMove,
              r
            )
        },
      }
      const re = {
        loadInSlide(e, t = !0) {
          const n = this
          const r = n.params.lazy
          if (void 0 === e) return
          if (n.slides.length === 0) return
          const o =
            n.virtual && n.params.virtual.enabled
              ? n.$wrapperEl.children(
                  `.${n.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : n.slides.eq(e)
          let l = o.find(
            `.${r.elementClass}:not(.${r.loadedClass}):not(.${r.loadingClass})`
          )
          !o.hasClass(r.elementClass) ||
            o.hasClass(r.loadedClass) ||
            o.hasClass(r.loadingClass) ||
            (l = l.add(o[0])),
            l.length !== 0 &&
              l.each((e, l) => {
                const d = m(l)
                d.addClass(r.loadingClass)
                const c = d.attr('data-background')
                const h = d.attr('data-src')
                const f = d.attr('data-srcset')
                const v = d.attr('data-sizes')
                const w = d.parent('picture')
                n.loadImage(d[0], h || c, f, v, !1, () => {
                  if (n != null && n && (!n || n.params) && !n.destroyed) {
                    if (
                      (c
                        ? (d.css('background-image', `url("${c}")`),
                          d.removeAttr('data-background'))
                        : (f &&
                            (d.attr('srcset', f), d.removeAttr('data-srcset')),
                          v && (d.attr('sizes', v), d.removeAttr('data-sizes')),
                          w.length &&
                            w.children('source').each((e, t) => {
                              const n = m(t)
                              n.attr('data-srcset') &&
                                (n.attr('srcset', n.attr('data-srcset')),
                                n.removeAttr('data-srcset'))
                            }),
                          h && (d.attr('src', h), d.removeAttr('data-src'))),
                      d.addClass(r.loadedClass).removeClass(r.loadingClass),
                      o.find('.' + r.preloaderClass).remove(),
                      n.params.loop && t)
                    ) {
                      const e = o.attr('data-swiper-slide-index')
                      if (o.hasClass(n.params.slideDuplicateClass)) {
                        const t = n.$wrapperEl.children(
                          `[data-swiper-slide-index="${e}"]:not(.${n.params.slideDuplicateClass})`
                        )
                        n.lazy.loadInSlide(t.index(), !1)
                      } else {
                        const t = n.$wrapperEl.children(
                          `.${n.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                        )
                        n.lazy.loadInSlide(t.index(), !1)
                      }
                    }
                    n.emit('lazyImageReady', o[0], d[0]),
                      n.params.autoHeight && n.updateAutoHeight()
                  }
                }),
                  n.emit('lazyImageLoad', o[0], d[0])
              })
        },
        load() {
          const e = this
          const { $wrapperEl: t, params: n, slides: r, activeIndex: o } = e
          const l = e.virtual && n.virtual.enabled
          const d = n.lazy
          let c = n.slidesPerView
          function h(e) {
            if (l) {
              if (
                t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`)
                  .length
              )
                return !0
            } else if (r[e]) return !0
            return !1
          }
          function f(e) {
            return l ? m(e).attr('data-swiper-slide-index') : m(e).index()
          }
          if (
            (c === 'auto' && (c = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
          )
            t.children('.' + n.slideVisibleClass).each((t, n) => {
              const r = l ? m(n).attr('data-swiper-slide-index') : m(n).index()
              e.lazy.loadInSlide(r)
            })
          else if (c > 1)
            for (let i = o; i < o + c; i += 1) h(i) && e.lazy.loadInSlide(i)
          else e.lazy.loadInSlide(o)
          if (d.loadPrevNext)
            if (c > 1 || (d.loadPrevNextAmount && d.loadPrevNextAmount > 1)) {
              const t = d.loadPrevNextAmount
              const n = c
              const l = Math.min(o + n + Math.max(t, n), r.length)
              const m = Math.max(o - Math.max(n, t), 0)
              for (let i = o + c; i < l; i += 1) h(i) && e.lazy.loadInSlide(i)
              for (let i = m; i < o; i += 1) h(i) && e.lazy.loadInSlide(i)
            } else {
              const r = t.children('.' + n.slideNextClass)
              r.length > 0 && e.lazy.loadInSlide(f(r))
              const o = t.children('.' + n.slidePrevClass)
              o.length > 0 && e.lazy.loadInSlide(f(o))
            }
        },
      }
      const oe = {
        LinearSpline(e, t) {
          const n = (function () {
            let e, t, n
            return (r, o) => {
              for (t = -1, e = r.length; e - t > 1; )
                (n = (e + t) >> 1), r[n] <= o ? (t = n) : (e = n)
              return e
            }
          })()
          let r, o
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((o = n(this.x, e)),
                  (r = o - 1),
                  ((e - this.x[r]) * (this.y[o] - this.y[r])) /
                    (this.x[o] - this.x[r]) +
                    this.y[r])
                : 0
            }),
            this
          )
        },
        getInterpolateFunction(e) {
          const t = this
          t.controller.spline ||
            (t.controller.spline = t.params.loop
              ? new oe.LinearSpline(t.slidesGrid, e.slidesGrid)
              : new oe.LinearSpline(t.snapGrid, e.snapGrid))
        },
        setTranslate(e, t) {
          const n = this
          const r = n.controller.control
          let o, l
          function d(e) {
            const t = n.rtlTranslate ? -n.translate : n.translate
            n.params.controller.by === 'slide' &&
              (n.controller.getInterpolateFunction(e),
              (l = -n.controller.spline.interpolate(-t))),
              (l && n.params.controller.by !== 'container') ||
                ((o =
                  (e.maxTranslate() - e.minTranslate()) /
                  (n.maxTranslate() - n.minTranslate())),
                (l = (t - n.minTranslate()) * o + e.minTranslate())),
              n.params.controller.inverse && (l = e.maxTranslate() - l),
              e.updateProgress(l),
              e.setTranslate(l, n),
              e.updateActiveIndex(),
              e.updateSlidesClasses()
          }
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i += 1)
              r[i] !== t && r[i] instanceof V && d(r[i])
          else r instanceof V && t !== r && d(r)
        },
        setTransition(e, t) {
          const n = this
          const r = n.controller.control
          let i
          function o(t) {
            t.setTransition(e, n),
              e !== 0 &&
                (t.transitionStart(),
                t.params.autoHeight &&
                  w.nextTick(() => {
                    t.updateAutoHeight()
                  }),
                t.$wrapperEl.transitionEnd(() => {
                  r &&
                    (t.params.loop &&
                      n.params.controller.by === 'slide' &&
                      t.loopFix(),
                    t.transitionEnd())
                }))
          }
          if (Array.isArray(r))
            for (i = 0; i < r.length; i += 1)
              r[i] !== t && r[i] instanceof V && o(r[i])
          else r instanceof V && t !== r && o(r)
        },
      }
      const le = {
        makeElFocusable: (e) => (e.attr('tabIndex', '0'), e),
        makeElNotFocusable: (e) => (e.attr('tabIndex', '-1'), e),
        addElRole: (e, t) => (e.attr('role', t), e),
        addElLabel: (e, label) => (e.attr('aria-label', label), e),
        disableEl: (e) => (e.attr('aria-disabled', !0), e),
        enableEl: (e) => (e.attr('aria-disabled', !1), e),
        onEnterKey(e) {
          const t = this
          const n = t.params.a11y
          if (e.keyCode !== 13) return
          const r = m(e.target)
          t.navigation &&
            t.navigation.$nextEl &&
            r.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(n.lastSlideMessage)
              : t.a11y.notify(n.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              r.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(n.firstSlideMessage)
                : t.a11y.notify(n.prevSlideMessage)),
            t.pagination &&
              r.is('.' + t.params.pagination.bulletClass) &&
              r[0].click()
        },
        notify(e) {
          const t = this.a11y.liveRegion
          t.length !== 0 && (t.html(''), t.html(e))
        },
        updateNavigation() {
          const e = this
          if (e.params.loop || !e.navigation) return
          const { $nextEl: t, $prevEl: n } = e.navigation
          n &&
            n.length > 0 &&
            (e.isBeginning
              ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n))
              : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n))),
            t &&
              t.length > 0 &&
              (e.isEnd
                ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t))
                : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)))
        },
        updatePagination() {
          const e = this
          const t = e.params.a11y
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.bullets.each((n, r) => {
              const o = m(r)
              e.a11y.makeElFocusable(o),
                e.a11y.addElRole(o, 'button'),
                e.a11y.addElLabel(
                  o,
                  t.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    o.index() + 1
                  )
                )
            })
        },
        init() {
          const e = this
          e.$el.append(e.a11y.liveRegion)
          const t = e.params.a11y
          let n, r
          e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl),
            n &&
              (e.a11y.makeElFocusable(n),
              e.a11y.addElRole(n, 'button'),
              e.a11y.addElLabel(n, t.nextSlideMessage),
              n.on('keydown', e.a11y.onEnterKey)),
            r &&
              (e.a11y.makeElFocusable(r),
              e.a11y.addElRole(r, 'button'),
              e.a11y.addElLabel(r, t.prevSlideMessage),
              r.on('keydown', e.a11y.onEnterKey)),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.on(
                'keydown',
                '.' + e.params.pagination.bulletClass,
                e.a11y.onEnterKey
              )
        },
        destroy() {
          const e = this
          let t, n
          e.a11y.liveRegion &&
            e.a11y.liveRegion.length > 0 &&
            e.a11y.liveRegion.remove(),
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
            t && t.off('keydown', e.a11y.onEnterKey),
            n && n.off('keydown', e.a11y.onEnterKey),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.off(
                'keydown',
                '.' + e.params.pagination.bulletClass,
                e.a11y.onEnterKey
              )
        },
      }
      const de = {
        init() {
          const e = this
          if (!e.params.history) return
          if (!c.history || !c.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            )
          const t = e.history
          ;(t.initialized = !0),
            (t.paths = de.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                c.addEventListener('popstate', e.history.setHistoryPopState))
        },
        destroy() {
          const e = this
          e.params.history.replaceState ||
            c.removeEventListener('popstate', e.history.setHistoryPopState)
        },
        setHistoryPopState() {
          ;(this.history.paths = de.getPathValues()),
            this.history.scrollToSlide(
              this.params.speed,
              this.history.paths.value,
              !1
            )
        },
        getPathValues() {
          const e = c.location.pathname
            .slice(1)
            .split('/')
            .filter((e) => e !== '')
          const t = e.length
          return { key: e[t - 2], value: e[t - 1] }
        },
        setHistory(e, t) {
          if (!this.history.initialized || !this.params.history.enabled) return
          const n = this.slides.eq(t)
          let r = de.slugify(n.attr('data-history'))
          c.location.pathname.includes(e) || (r = `${e}/${r}`)
          const o = c.history.state
          ;(o && o.value === r) ||
            (this.params.history.replaceState
              ? c.history.replaceState({ value: r }, null, r)
              : c.history.pushState({ value: r }, null, r))
        },
        slugify: (text) =>
          text
            .toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
        scrollToSlide(e, t, n) {
          const r = this
          if (t)
            for (let i = 0, o = r.slides.length; i < o; i += 1) {
              const o = r.slides.eq(i)
              if (
                de.slugify(o.attr('data-history')) === t &&
                !o.hasClass(r.params.slideDuplicateClass)
              ) {
                const t = o.index()
                r.slideTo(t, e, n)
              }
            }
          else r.slideTo(0, e, n)
        },
      }
      const pe = {
        onHashCange() {
          const e = this
          e.emit('hashChange')
          const t = l.location.hash.replace('#', '')
          if (t !== e.slides.eq(e.activeIndex).attr('data-hash')) {
            const n = e.$wrapperEl
              .children(`.${e.params.slideClass}[data-hash="${t}"]`)
              .index()
            if (void 0 === n) return
            e.slideTo(n)
          }
        },
        setHash() {
          const e = this
          if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
            if (
              e.params.hashNavigation.replaceState &&
              c.history &&
              c.history.replaceState
            )
              c.history.replaceState(
                null,
                null,
                '#' + e.slides.eq(e.activeIndex).attr('data-hash') || ''
              ),
                e.emit('hashSet')
            else {
              const t = e.slides.eq(e.activeIndex)
              const n = t.attr('data-hash') || t.attr('data-history')
              ;(l.location.hash = n || ''), e.emit('hashSet')
            }
        },
        init() {
          const e = this
          if (
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
            return
          e.hashNavigation.initialized = !0
          const t = l.location.hash.replace('#', '')
          if (t) {
            const n = 0
            for (let i = 0, r = e.slides.length; i < r; i += 1) {
              const r = e.slides.eq(i)
              if (
                (r.attr('data-hash') || r.attr('data-history')) === t &&
                !r.hasClass(e.params.slideDuplicateClass)
              ) {
                const t = r.index()
                e.slideTo(t, n, e.params.runCallbacksOnInit, !0)
              }
            }
          }
          e.params.hashNavigation.watchState &&
            m(c).on('hashchange', e.hashNavigation.onHashCange)
        },
        destroy() {
          const e = this
          e.params.hashNavigation.watchState &&
            m(c).off('hashchange', e.hashNavigation.onHashCange)
        },
      }
      const ce = {
        run() {
          const e = this
          const t = e.slides.eq(e.activeIndex)
          let n = e.params.autoplay.delay
          t.attr('data-swiper-autoplay') &&
            (n = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = w.nextTick(() => {
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    e.slidePrev(e.params.speed, !0, !0),
                    e.emit('autoplay'))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                      e.emit('autoplay'))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                : e.params.loop
                ? (e.loopFix(),
                  e.slideNext(e.params.speed, !0, !0),
                  e.emit('autoplay'))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
                : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
                e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }, n))
        },
        start() {
          return (
            void 0 === this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit('autoplayStart'),
            this.autoplay.run(),
            !0)
          )
        },
        stop() {
          const e = this
          return (
            !!e.autoplay.running &&
            void 0 !== e.autoplay.timeout &&
            (e.autoplay.timeout &&
              (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
            (e.autoplay.running = !1),
            e.emit('autoplayStop'),
            !0)
          )
        },
        pause(e) {
          const t = this
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              e !== 0 && t.params.autoplay.waitForTransition
                ? (t.$wrapperEl[0].addEventListener(
                    'transitionend',
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    t.autoplay.onTransitionEnd
                  ))
                : ((t.autoplay.paused = !1), t.autoplay.run())))
        },
      }
      const he = {
        setTranslate() {
          const e = this
          const { slides: t } = e
          for (let i = 0; i < t.length; i += 1) {
            const t = e.slides.eq(i)
            let n = -t[0].swiperSlideOffset
            e.params.virtualTranslate || (n -= e.translate)
            let r = 0
            e.isHorizontal() || ((r = n), (n = 0))
            const o = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(t[0].progress), 0)
              : 1 + Math.min(Math.max(t[0].progress, -1), 0)
            t.css({ opacity: o }).transform(`translate3d(${n}px, ${r}px, 0px)`)
          }
        },
        setTransition(e) {
          const t = this
          const { slides: n, $wrapperEl: r } = t
          if ((n.transition(e), t.params.virtualTranslate && e !== 0)) {
            let e = !1
            n.transitionEnd(() => {
              if (e) return
              if (!t || t.destroyed) return
              ;(e = !0), (t.animating = !1)
              const n = ['webkitTransitionEnd', 'transitionend']
              for (let i = 0; i < n.length; i += 1) r.trigger(n[i])
            })
          }
        },
      }
      const ue = {
        setTranslate() {
          const {
            $el: e,
            $wrapperEl: t,
            slides: n,
            width: r,
            height: o,
            rtlTranslate: l,
            size: d,
          } = this
          const c = this.params.cubeEffect
          const h = this.isHorizontal()
          const f = this.virtual && this.params.virtual.enabled
          let v
          let w = 0
          c.shadow &&
            (h
              ? ((v = t.find('.swiper-cube-shadow')),
                v.length === 0 &&
                  ((v = m('<div class="swiper-cube-shadow"></div>')),
                  t.append(v)),
                v.css({ height: r + 'px' }))
              : ((v = e.find('.swiper-cube-shadow')),
                v.length === 0 &&
                  ((v = m('<div class="swiper-cube-shadow"></div>')),
                  e.append(v))))
          for (let i = 0; i < n.length; i += 1) {
            const e = n.eq(i)
            let t = i
            f && (t = parseInt(e.attr('data-swiper-slide-index'), 10))
            let r = 90 * t
            let o = Math.floor(r / 360)
            l && ((r = -r), (o = Math.floor(-r / 360)))
            const progress = Math.max(Math.min(e[0].progress, 1), -1)
            let v = 0
            let y = 0
            let x = 0
            t % 4 == 0
              ? ((v = 4 * -o * d), (x = 0))
              : (t - 1) % 4 == 0
              ? ((v = 0), (x = 4 * -o * d))
              : (t - 2) % 4 == 0
              ? ((v = d + 4 * o * d), (x = d))
              : (t - 3) % 4 == 0 && ((v = -d), (x = 3 * d + 4 * d * o)),
              l && (v = -v),
              h || ((y = v), (v = 0))
            const E = `rotateX(${h ? 0 : -r}deg) rotateY(${
              h ? r : 0
            }deg) translate3d(${v}px, ${y}px, ${x}px)`
            if (
              (progress <= 1 &&
                progress > -1 &&
                ((w = 90 * t + 90 * progress),
                l && (w = 90 * -t - 90 * progress)),
              e.transform(E),
              c.slideShadows)
            ) {
              let t = h
                ? e.find('.swiper-slide-shadow-left')
                : e.find('.swiper-slide-shadow-top')
              let n = h
                ? e.find('.swiper-slide-shadow-right')
                : e.find('.swiper-slide-shadow-bottom')
              t.length === 0 &&
                ((t = m(
                  `<div class="swiper-slide-shadow-${
                    h ? 'left' : 'top'
                  }"></div>`
                )),
                e.append(t)),
                n.length === 0 &&
                  ((n = m(
                    `<div class="swiper-slide-shadow-${
                      h ? 'right' : 'bottom'
                    }"></div>`
                  )),
                  e.append(n)),
                t.length && (t[0].style.opacity = Math.max(-progress, 0)),
                n.length && (n[0].style.opacity = Math.max(progress, 0))
            }
          }
          if (
            (t.css({
              '-webkit-transform-origin': `50% 50% -${d / 2}px`,
              '-moz-transform-origin': `50% 50% -${d / 2}px`,
              '-ms-transform-origin': `50% 50% -${d / 2}px`,
              'transform-origin': `50% 50% -${d / 2}px`,
            }),
            c.shadow)
          )
            if (h)
              v.transform(
                `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${
                  -r / 2
                }px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`
              )
            else {
              const e = Math.abs(w) - 90 * Math.floor(Math.abs(w) / 90)
              const t =
                1.5 -
                (Math.sin((2 * e * Math.PI) / 360) / 2 +
                  Math.cos((2 * e * Math.PI) / 360) / 2)
              const n = c.shadowScale
              const r = c.shadowScale / t
              const l = c.shadowOffset
              v.transform(
                `scale3d(${n}, 1, ${r}) translate3d(0px, ${o / 2 + l}px, ${
                  -o / 2 / r
                }px) rotateX(-90deg)`
              )
            }
          const y = R.isSafari || R.isWebView ? -d / 2 : 0
          t.transform(
            `translate3d(0px,0,${y}px) rotateX(${
              this.isHorizontal() ? 0 : w
            }deg) rotateY(${this.isHorizontal() ? -w : 0}deg)`
          )
        },
        setTransition(e) {
          const { $el: t, slides: n } = this
          n
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(e),
            this.params.cubeEffect.shadow &&
              !this.isHorizontal() &&
              t.find('.swiper-cube-shadow').transition(e)
        },
      }
      const me = {
        setTranslate() {
          const e = this
          const { slides: t, rtlTranslate: n } = e
          for (let i = 0; i < t.length; i += 1) {
            const r = t.eq(i)
            let progress = r[0].progress
            e.params.flipEffect.limitRotation &&
              (progress = Math.max(Math.min(r[0].progress, 1), -1))
            let o = -180 * progress
            let l = 0
            let d = -r[0].swiperSlideOffset
            let c = 0
            if (
              (e.isHorizontal()
                ? n && (o = -o)
                : ((c = d), (d = 0), (l = -o), (o = 0)),
              (r[0].style.zIndex = -Math.abs(Math.round(progress)) + t.length),
              e.params.flipEffect.slideShadows)
            ) {
              let t = e.isHorizontal()
                ? r.find('.swiper-slide-shadow-left')
                : r.find('.swiper-slide-shadow-top')
              let n = e.isHorizontal()
                ? r.find('.swiper-slide-shadow-right')
                : r.find('.swiper-slide-shadow-bottom')
              t.length === 0 &&
                ((t = m(
                  `<div class="swiper-slide-shadow-${
                    e.isHorizontal() ? 'left' : 'top'
                  }"></div>`
                )),
                r.append(t)),
                n.length === 0 &&
                  ((n = m(
                    `<div class="swiper-slide-shadow-${
                      e.isHorizontal() ? 'right' : 'bottom'
                    }"></div>`
                  )),
                  r.append(n)),
                t.length && (t[0].style.opacity = Math.max(-progress, 0)),
                n.length && (n[0].style.opacity = Math.max(progress, 0))
            }
            r.transform(
              `translate3d(${d}px, ${c}px, 0px) rotateX(${l}deg) rotateY(${o}deg)`
            )
          }
        },
        setTransition(e) {
          const t = this
          const { slides: n, activeIndex: r, $wrapperEl: o } = t
          if (
            (n
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .transition(e),
            t.params.virtualTranslate && e !== 0)
          ) {
            let e = !1
            n.eq(r).transitionEnd(function () {
              if (e) return
              if (!t || t.destroyed) return
              ;(e = !0), (t.animating = !1)
              const n = ['webkitTransitionEnd', 'transitionend']
              for (let i = 0; i < n.length; i += 1) o.trigger(n[i])
            })
          }
        },
      }
      const fe = {
        setTranslate() {
          const {
            width: e,
            height: t,
            slides: n,
            $wrapperEl: r,
            slidesSizesGrid: o,
          } = this
          const l = this.params.coverflowEffect
          const d = this.isHorizontal()
          const c = this.translate
          const h = d ? e / 2 - c : t / 2 - c
          const f = d ? l.rotate : -l.rotate
          const v = l.depth
          for (let i = 0, e = n.length; i < e; i += 1) {
            const e = n.eq(i)
            const t = o[i]
            const r = ((h - e[0].swiperSlideOffset - t / 2) / t) * l.modifier
            let c = d ? f * r : 0
            let w = d ? 0 : f * r
            let y = -v * Math.abs(r)
            let x = l.stretch
            typeof x == 'string' &&
              x.includes('%') &&
              (x = (parseFloat(l.stretch) / 100) * t)
            let E = d ? 0 : x * r
            let T = d ? x * r : 0
            let S = 1 - (1 - l.scale) * Math.abs(r)
            Math.abs(T) < 0.001 && (T = 0),
              Math.abs(E) < 0.001 && (E = 0),
              Math.abs(y) < 0.001 && (y = 0),
              Math.abs(c) < 0.001 && (c = 0),
              Math.abs(w) < 0.001 && (w = 0),
              Math.abs(S) < 0.001 && (S = 0)
            const C = `translate3d(${T}px,${E}px,${y}px)  rotateX(${w}deg) rotateY(${c}deg) scale(${S})`
            if (
              (e.transform(C),
              (e[0].style.zIndex = 1 - Math.abs(Math.round(r))),
              l.slideShadows)
            ) {
              let t = d
                ? e.find('.swiper-slide-shadow-left')
                : e.find('.swiper-slide-shadow-top')
              let n = d
                ? e.find('.swiper-slide-shadow-right')
                : e.find('.swiper-slide-shadow-bottom')
              t.length === 0 &&
                ((t = m(
                  `<div class="swiper-slide-shadow-${
                    d ? 'left' : 'top'
                  }"></div>`
                )),
                e.append(t)),
                n.length === 0 &&
                  ((n = m(
                    `<div class="swiper-slide-shadow-${
                      d ? 'right' : 'bottom'
                    }"></div>`
                  )),
                  e.append(n)),
                t.length && (t[0].style.opacity = r > 0 ? r : 0),
                n.length && (n[0].style.opacity = -r > 0 ? -r : 0)
            }
          }
          if (y.pointerEvents || y.prefixedPointerEvents) {
            r[0].style.perspectiveOrigin = h + 'px 50%'
          }
        },
        setTransition(e) {
          this.slides
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(e)
        },
      }
      const ge = {
        init() {
          const e = this
          const { thumbs: t } = e.params
          const n = e.constructor
          t.swiper instanceof n
            ? ((e.thumbs.swiper = t.swiper),
              w.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              w.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : w.isObject(t.swiper) &&
              ((e.thumbs.swiper = new n(
                w.extend({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (e.thumbs.swiperCreated = !0)),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on('tap', e.thumbs.onThumbClick)
        },
        onThumbClick() {
          const e = this
          const t = e.thumbs.swiper
          if (!t) return
          const n = t.clickedIndex
          const r = t.clickedSlide
          if (r && m(r).hasClass(e.params.thumbs.slideThumbActiveClass)) return
          if (n == null) return
          let o
          if (
            ((o = t.params.loop
              ? parseInt(m(t.clickedSlide).attr('data-swiper-slide-index'), 10)
              : n),
            e.params.loop)
          ) {
            let t = e.activeIndex
            e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
              (e.loopFix(),
              (e._clientLeft = e.$wrapperEl[0].clientLeft),
              (t = e.activeIndex))
            const n = e.slides
              .eq(t)
              .prevAll(`[data-swiper-slide-index="${o}"]`)
              .eq(0)
              .index()
            const r = e.slides
              .eq(t)
              .nextAll(`[data-swiper-slide-index="${o}"]`)
              .eq(0)
              .index()
            o = void 0 === n ? r : void 0 === r ? n : r - t < t - n ? r : n
          }
          e.slideTo(o)
        },
        update(e) {
          const t = this
          const n = t.thumbs.swiper
          if (!n) return
          const r =
            n.params.slidesPerView === 'auto'
              ? n.slidesPerViewDynamic()
              : n.params.slidesPerView
          const o = t.params.thumbs.autoScrollOffset
          const l = o && !n.params.loop
          if (t.realIndex !== n.realIndex || l) {
            let d
            let c
            let h = n.activeIndex
            if (n.params.loop) {
              n.slides.eq(h).hasClass(n.params.slideDuplicateClass) &&
                (n.loopFix(),
                (n._clientLeft = n.$wrapperEl[0].clientLeft),
                (h = n.activeIndex))
              const e = n.slides
                .eq(h)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index()
              const r = n.slides
                .eq(h)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index()
              ;(d =
                void 0 === e
                  ? r
                  : void 0 === r
                  ? e
                  : r - h == h - e
                  ? h
                  : r - h < h - e
                  ? r
                  : e),
                (c = t.activeIndex > t.previousIndex ? 'next' : 'prev')
            } else
              (d = t.realIndex), (c = d > t.previousIndex ? 'next' : 'prev')
            l && (d += c === 'next' ? o : -1 * o),
              n.visibleSlidesIndexes &&
                !n.visibleSlidesIndexes.includes(d) &&
                (n.params.centeredSlides
                  ? (d =
                      d > h
                        ? d - Math.floor(r / 2) + 1
                        : d + Math.floor(r / 2) - 1)
                  : d > h && (d = d - r + 1),
                n.slideTo(d, e ? 0 : void 0))
          }
          let d = 1
          const c = t.params.thumbs.slideThumbActiveClass
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (d = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (d = 1),
            (d = Math.floor(d)),
            n.slides.removeClass(c),
            n.params.loop || (n.params.virtual && n.params.virtual.enabled))
          )
            for (let i = 0; i < d; i += 1)
              n.$wrapperEl
                .children(`[data-swiper-slide-index="${t.realIndex + i}"]`)
                .addClass(c)
          else
            for (let i = 0; i < d; i += 1)
              n.slides.eq(t.realIndex + i).addClass(c)
        },
      }
      const ve = [
        F,
        X,
        W,
        j,
        Q,
        Z,
        _,
        {
          name: 'mousewheel',
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: 'container',
            },
          },
          create() {
            w.extend(this, {
              mousewheel: {
                enabled: !1,
                enable: ee.enable.bind(this),
                disable: ee.disable.bind(this),
                handle: ee.handle.bind(this),
                handleMouseEnter: ee.handleMouseEnter.bind(this),
                handleMouseLeave: ee.handleMouseLeave.bind(this),
                animateSlider: ee.animateSlider.bind(this),
                releaseScroll: ee.releaseScroll.bind(this),
                lastScrollTime: w.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
              },
            })
          },
          on: {
            init() {
              const e = this
              !e.params.mousewheel.enabled &&
                e.params.cssMode &&
                e.mousewheel.disable(),
                e.params.mousewheel.enabled && e.mousewheel.enable()
            },
            destroy() {
              const e = this
              e.params.cssMode && e.mousewheel.enable(),
                e.mousewheel.enabled && e.mousewheel.disable()
            },
          },
        },
        {
          name: 'navigation',
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden',
              lockClass: 'swiper-button-lock',
            },
          },
          create() {
            w.extend(this, {
              navigation: {
                init: te.init.bind(this),
                update: te.update.bind(this),
                destroy: te.destroy.bind(this),
                onNextClick: te.onNextClick.bind(this),
                onPrevClick: te.onPrevClick.bind(this),
              },
            })
          },
          on: {
            init() {
              this.navigation.init(), this.navigation.update()
            },
            toEdge() {
              this.navigation.update()
            },
            fromEdge() {
              this.navigation.update()
            },
            destroy() {
              this.navigation.destroy()
            },
            click(e) {
              const t = this
              const { $nextEl: n, $prevEl: r } = t.navigation
              if (
                t.params.navigation.hideOnClick &&
                !m(e.target).is(r) &&
                !m(e.target).is(n)
              ) {
                let e
                n
                  ? (e = n.hasClass(t.params.navigation.hiddenClass))
                  : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                  !0 === e
                    ? t.emit('navigationShow', t)
                    : t.emit('navigationHide', t),
                  n && n.toggleClass(t.params.navigation.hiddenClass),
                  r && r.toggleClass(t.params.navigation.hiddenClass)
              }
            },
          },
        },
        {
          name: 'pagination',
          params: {
            pagination: {
              el: null,
              bulletElement: 'span',
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: 'bullets',
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: (e) => e,
              formatFractionTotal: (e) => e,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              modifierClass: 'swiper-pagination-',
              currentClass: 'swiper-pagination-current',
              totalClass: 'swiper-pagination-total',
              hiddenClass: 'swiper-pagination-hidden',
              progressbarFillClass: 'swiper-pagination-progressbar-fill',
              progressbarOppositeClass:
                'swiper-pagination-progressbar-opposite',
              clickableClass: 'swiper-pagination-clickable',
              lockClass: 'swiper-pagination-lock',
            },
          },
          create() {
            w.extend(this, {
              pagination: {
                init: se.init.bind(this),
                render: se.render.bind(this),
                update: se.update.bind(this),
                destroy: se.destroy.bind(this),
                dynamicBulletIndex: 0,
              },
            })
          },
          on: {
            init() {
              this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange() {
              const e = this
              ;(e.params.loop || void 0 === e.snapIndex) &&
                e.pagination.update()
            },
            snapIndexChange() {
              const e = this
              e.params.loop || e.pagination.update()
            },
            slidesLengthChange() {
              const e = this
              e.params.loop && (e.pagination.render(), e.pagination.update())
            },
            snapGridLengthChange() {
              const e = this
              e.params.loop || (e.pagination.render(), e.pagination.update())
            },
            destroy() {
              this.pagination.destroy()
            },
            click(e) {
              const t = this
              if (
                t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                t.pagination.$el.length > 0 &&
                !m(e.target).hasClass(t.params.pagination.bulletClass)
              ) {
                !0 ===
                t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                  ? t.emit('paginationShow', t)
                  : t.emit('paginationHide', t),
                  t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
              }
            },
          },
        },
        {
          name: 'scrollbar',
          params: {
            scrollbar: {
              el: null,
              dragSize: 'auto',
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: 'swiper-scrollbar-lock',
              dragClass: 'swiper-scrollbar-drag',
            },
          },
          create() {
            w.extend(this, {
              scrollbar: {
                init: ie.init.bind(this),
                destroy: ie.destroy.bind(this),
                updateSize: ie.updateSize.bind(this),
                setTranslate: ie.setTranslate.bind(this),
                setTransition: ie.setTransition.bind(this),
                enableDraggable: ie.enableDraggable.bind(this),
                disableDraggable: ie.disableDraggable.bind(this),
                setDragPosition: ie.setDragPosition.bind(this),
                getPointerPosition: ie.getPointerPosition.bind(this),
                onDragStart: ie.onDragStart.bind(this),
                onDragMove: ie.onDragMove.bind(this),
                onDragEnd: ie.onDragEnd.bind(this),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            })
          },
          on: {
            init() {
              this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update() {
              this.scrollbar.updateSize()
            },
            resize() {
              this.scrollbar.updateSize()
            },
            observerUpdate() {
              this.scrollbar.updateSize()
            },
            setTranslate() {
              this.scrollbar.setTranslate()
            },
            setTransition(e) {
              this.scrollbar.setTransition(e)
            },
            destroy() {
              this.scrollbar.destroy()
            },
          },
        },
        {
          name: 'parallax',
          params: { parallax: { enabled: !1 } },
          create() {
            w.extend(this, {
              parallax: {
                setTransform: ae.setTransform.bind(this),
                setTranslate: ae.setTranslate.bind(this),
                setTransition: ae.setTransition.bind(this),
              },
            })
          },
          on: {
            beforeInit() {
              this.params.parallax.enabled &&
                ((this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0))
            },
            init() {
              this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate() {
              this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition(e) {
              this.params.parallax.enabled && this.parallax.setTransition(e)
            },
          },
        },
        {
          name: 'zoom',
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: 'swiper-zoom-container',
              zoomedSlideClass: 'swiper-slide-zoomed',
            },
          },
          create() {
            const e = this
            const t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            }
            'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
              .split(' ')
              .forEach((n) => {
                t[n] = ne[n].bind(e)
              }),
              w.extend(e, { zoom: t })
            let n = 1
            Object.defineProperty(e.zoom, 'scale', {
              get: () => n,
              set(t) {
                if (n !== t) {
                  const n = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0
                  const r = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0
                  e.emit('zoomChange', t, n, r)
                }
                n = t
              },
            })
          },
          on: {
            init() {
              const e = this
              e.params.zoom.enabled && e.zoom.enable()
            },
            destroy() {
              this.zoom.disable()
            },
            touchStart(e) {
              this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd(e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap(e) {
              const t = this
              t.params.zoom.enabled &&
                t.zoom.enabled &&
                t.params.zoom.toggle &&
                t.zoom.toggle(e)
            },
            transitionEnd() {
              const e = this
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.zoom.onTransitionEnd()
            },
            slideChange() {
              const e = this
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.params.cssMode &&
                e.zoom.onTransitionEnd()
            },
          },
        },
        {
          name: 'lazy',
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: 'swiper-lazy',
              loadingClass: 'swiper-lazy-loading',
              loadedClass: 'swiper-lazy-loaded',
              preloaderClass: 'swiper-lazy-preloader',
            },
          },
          create() {
            w.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: re.load.bind(this),
                loadInSlide: re.loadInSlide.bind(this),
              },
            })
          },
          on: {
            beforeInit() {
              const e = this
              e.params.lazy.enabled &&
                e.params.preloadImages &&
                (e.params.preloadImages = !1)
            },
            init() {
              const e = this
              e.params.lazy.enabled &&
                !e.params.loop &&
                e.params.initialSlide === 0 &&
                e.lazy.load()
            },
            scroll() {
              const e = this
              e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            },
            resize() {
              const e = this
              e.params.lazy.enabled && e.lazy.load()
            },
            scrollbarDragMove() {
              const e = this
              e.params.lazy.enabled && e.lazy.load()
            },
            transitionStart() {
              const e = this
              e.params.lazy.enabled &&
                (e.params.lazy.loadOnTransitionStart ||
                  (!e.params.lazy.loadOnTransitionStart &&
                    !e.lazy.initialImageLoaded)) &&
                e.lazy.load()
            },
            transitionEnd() {
              const e = this
              e.params.lazy.enabled &&
                !e.params.lazy.loadOnTransitionStart &&
                e.lazy.load()
            },
            slideChange() {
              const e = this
              e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
            },
          },
        },
        {
          name: 'controller',
          params: { controller: { control: void 0, inverse: !1, by: 'slide' } },
          create() {
            w.extend(this, {
              controller: {
                control: this.params.controller.control,
                getInterpolateFunction: oe.getInterpolateFunction.bind(this),
                setTranslate: oe.setTranslate.bind(this),
                setTransition: oe.setTransition.bind(this),
              },
            })
          },
          on: {
            update() {
              const e = this
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline)
            },
            resize() {
              const e = this
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline)
            },
            observerUpdate() {
              const e = this
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline)
            },
            setTranslate(e, t) {
              this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition(e, t) {
              this.controller.control && this.controller.setTransition(e, t)
            },
          },
        },
        {
          name: 'a11y',
          params: {
            a11y: {
              enabled: !0,
              notificationClass: 'swiper-notification',
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide',
              paginationBulletMessage: 'Go to slide {{index}}',
            },
          },
          create() {
            const e = this
            w.extend(e, {
              a11y: {
                liveRegion: m(
                  `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                ),
              },
            }),
              Object.keys(le).forEach((t) => {
                e.a11y[t] = le[t].bind(e)
              })
          },
          on: {
            init() {
              this.params.a11y.enabled &&
                (this.a11y.init(), this.a11y.updateNavigation())
            },
            toEdge() {
              this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge() {
              this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate() {
              this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy() {
              this.params.a11y.enabled && this.a11y.destroy()
            },
          },
        },
        {
          name: 'history',
          params: { history: { enabled: !1, replaceState: !1, key: 'slides' } },
          create() {
            w.extend(this, {
              history: {
                init: de.init.bind(this),
                setHistory: de.setHistory.bind(this),
                setHistoryPopState: de.setHistoryPopState.bind(this),
                scrollToSlide: de.scrollToSlide.bind(this),
                destroy: de.destroy.bind(this),
              },
            })
          },
          on: {
            init() {
              const e = this
              e.params.history.enabled && e.history.init()
            },
            destroy() {
              const e = this
              e.params.history.enabled && e.history.destroy()
            },
            transitionEnd() {
              const e = this
              e.history.initialized &&
                e.history.setHistory(e.params.history.key, e.activeIndex)
            },
            slideChange() {
              const e = this
              e.history.initialized &&
                e.params.cssMode &&
                e.history.setHistory(e.params.history.key, e.activeIndex)
            },
          },
        },
        {
          name: 'hash-navigation',
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create() {
            w.extend(this, {
              hashNavigation: {
                initialized: !1,
                init: pe.init.bind(this),
                destroy: pe.destroy.bind(this),
                setHash: pe.setHash.bind(this),
                onHashCange: pe.onHashCange.bind(this),
              },
            })
          },
          on: {
            init() {
              const e = this
              e.params.hashNavigation.enabled && e.hashNavigation.init()
            },
            destroy() {
              const e = this
              e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            },
            transitionEnd() {
              const e = this
              e.hashNavigation.initialized && e.hashNavigation.setHash()
            },
            slideChange() {
              const e = this
              e.hashNavigation.initialized &&
                e.params.cssMode &&
                e.hashNavigation.setHash()
            },
          },
        },
        {
          name: 'autoplay',
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create() {
            const e = this
            w.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: ce.run.bind(e),
                start: ce.start.bind(e),
                stop: ce.stop.bind(e),
                pause: ce.pause.bind(e),
                onVisibilityChange() {
                  document.visibilityState === 'hidden' &&
                    e.autoplay.running &&
                    e.autoplay.pause(),
                    document.visibilityState === 'visible' &&
                      e.autoplay.paused &&
                      (e.autoplay.run(), (e.autoplay.paused = !1))
                },
                onTransitionEnd(t) {
                  e &&
                    !e.destroyed &&
                    e.$wrapperEl &&
                    t.target === this &&
                    (e.$wrapperEl[0].removeEventListener(
                      'transitionend',
                      e.autoplay.onTransitionEnd
                    ),
                    e.$wrapperEl[0].removeEventListener(
                      'webkitTransitionEnd',
                      e.autoplay.onTransitionEnd
                    ),
                    (e.autoplay.paused = !1),
                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                },
              },
            })
          },
          on: {
            init() {
              const e = this
              e.params.autoplay.enabled &&
                (e.autoplay.start(),
                document.addEventListener(
                  'visibilitychange',
                  e.autoplay.onVisibilityChange
                ))
            },
            beforeTransitionStart(e, t) {
              const n = this
              n.autoplay.running &&
                (t || !n.params.autoplay.disableOnInteraction
                  ? n.autoplay.pause(e)
                  : n.autoplay.stop())
            },
            sliderFirstMove() {
              const e = this
              e.autoplay.running &&
                (e.params.autoplay.disableOnInteraction
                  ? e.autoplay.stop()
                  : e.autoplay.pause())
            },
            touchEnd() {
              const e = this
              e.params.cssMode &&
                e.autoplay.paused &&
                !e.params.autoplay.disableOnInteraction &&
                e.autoplay.run()
            },
            destroy() {
              const e = this
              e.autoplay.running && e.autoplay.stop(),
                document.removeEventListener(
                  'visibilitychange',
                  e.autoplay.onVisibilityChange
                )
            },
          },
        },
        {
          name: 'effect-fade',
          params: { fadeEffect: { crossFade: !1 } },
          create() {
            w.extend(this, {
              fadeEffect: {
                setTranslate: he.setTranslate.bind(this),
                setTransition: he.setTransition.bind(this),
              },
            })
          },
          on: {
            beforeInit() {
              if (this.params.effect !== 'fade') return
              this.classNames.push(this.params.containerModifierClass + 'fade')
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              }
              w.extend(this.params, e), w.extend(this.originalParams, e)
            },
            setTranslate() {
              this.params.effect === 'fade' && this.fadeEffect.setTranslate()
            },
            setTransition(e) {
              this.params.effect === 'fade' && this.fadeEffect.setTransition(e)
            },
          },
        },
        {
          name: 'effect-cube',
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create() {
            w.extend(this, {
              cubeEffect: {
                setTranslate: ue.setTranslate.bind(this),
                setTransition: ue.setTransition.bind(this),
              },
            })
          },
          on: {
            beforeInit() {
              if (this.params.effect !== 'cube') return
              this.classNames.push(this.params.containerModifierClass + 'cube'),
                this.classNames.push(this.params.containerModifierClass + '3d')
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              }
              w.extend(this.params, e), w.extend(this.originalParams, e)
            },
            setTranslate() {
              this.params.effect === 'cube' && this.cubeEffect.setTranslate()
            },
            setTransition(e) {
              this.params.effect === 'cube' && this.cubeEffect.setTransition(e)
            },
          },
        },
        {
          name: 'effect-flip',
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create() {
            w.extend(this, {
              flipEffect: {
                setTranslate: me.setTranslate.bind(this),
                setTransition: me.setTransition.bind(this),
              },
            })
          },
          on: {
            beforeInit() {
              if (this.params.effect !== 'flip') return
              this.classNames.push(this.params.containerModifierClass + 'flip'),
                this.classNames.push(this.params.containerModifierClass + '3d')
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              }
              w.extend(this.params, e), w.extend(this.originalParams, e)
            },
            setTranslate() {
              this.params.effect === 'flip' && this.flipEffect.setTranslate()
            },
            setTransition(e) {
              this.params.effect === 'flip' && this.flipEffect.setTransition(e)
            },
          },
        },
        {
          name: 'effect-coverflow',
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create() {
            w.extend(this, {
              coverflowEffect: {
                setTranslate: fe.setTranslate.bind(this),
                setTransition: fe.setTransition.bind(this),
              },
            })
          },
          on: {
            beforeInit() {
              this.params.effect === 'coverflow' &&
                (this.classNames.push(
                  this.params.containerModifierClass + 'coverflow'
                ),
                this.classNames.push(this.params.containerModifierClass + '3d'),
                (this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0))
            },
            setTranslate() {
              this.params.effect === 'coverflow' &&
                this.coverflowEffect.setTranslate()
            },
            setTransition(e) {
              this.params.effect === 'coverflow' &&
                this.coverflowEffect.setTransition(e)
            },
          },
        },
        {
          name: 'thumbs',
          params: {
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: 'swiper-slide-thumb-active',
              thumbsContainerClass: 'swiper-container-thumbs',
            },
          },
          create() {
            w.extend(this, {
              thumbs: {
                swiper: null,
                init: ge.init.bind(this),
                update: ge.update.bind(this),
                onThumbClick: ge.onThumbClick.bind(this),
              },
            })
          },
          on: {
            beforeInit() {
              const { thumbs: e } = this.params
              e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            },
            slideChange() {
              this.thumbs.swiper && this.thumbs.update()
            },
            update() {
              this.thumbs.swiper && this.thumbs.update()
            },
            resize() {
              this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate() {
              this.thumbs.swiper && this.thumbs.update()
            },
            setTransition(e) {
              const t = this.thumbs.swiper
              t && t.setTransition(e)
            },
            beforeDestroy() {
              const e = this.thumbs.swiper
              e && this.thumbs.swiperCreated && e && e.destroy()
            },
          },
        },
      ]
      void 0 === V.use &&
        ((V.use = V.Class.use), (V.installModule = V.Class.installModule)),
        V.use(ve)
      t.default = V
    },
  },
])
