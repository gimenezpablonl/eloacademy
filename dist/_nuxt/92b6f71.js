;(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    688(t, e, r) {
      'use strict'
      r.r(e)
      const n = {
        head() {
          return { title: 'Cuenta vendida' }
        },
      }
      const l = r(21)
      const o = r(27)
      const c = r.n(o)
      const d = r(156)
      const O = r(44)
      const v = r(381)
      const h = r(398)
      const w = r(133)
      const C = r(382)
      const E = r(40)
      const component = Object(l.a)(
        n,
        function () {
          const t = this.$createElement
          const e = this._self._c || t
          return e(
            'div',
            [
              e(
                'v-img',
                {
                  attrs: {
                    src: '/img/tf.jpg',
                    gradient: 'rgba(68,70,255,.5), rgba(10,238,28,.5)',
                  },
                },
                [
                  e(
                    'v-container',
                    { attrs: { fluid: '' } },
                    [
                      e(
                        'v-row',
                        [
                          e(
                            'v-col',
                            [
                              e(
                                'v-row',
                                {
                                  staticStyle: { height: '700px' },
                                  attrs: {
                                    align: 'center',
                                    justify: 'center',
                                  },
                                },
                                [
                                  e(
                                    'v-card',
                                    {
                                      attrs: {
                                        color: 'transparent',
                                        outlined: '',
                                      },
                                    },
                                    [
                                      e(
                                        'v-card-title',
                                        {
                                          staticClass:
                                            'white--text font-weight-bold display-1',
                                        },
                                        [
                                          this._v(
                                            '\n                TU CUENTA HA SIDO INGRESADA CORRECTAMENTE'
                                          ),
                                        ]
                                      ),
                                      this._v(' '),
                                      e(
                                        'v-card-text',
                                        { staticClass: 'white--text title' },
                                        [
                                          this._v(
                                            '\n                Ahora solo debes esperar a que verifiquemos la información, ya\n                puedes quedarte tranquilo :)\n              '
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  this._v(' '),
                                  e(
                                    'v-card',
                                    {
                                      attrs: {
                                        color: 'transparent',
                                        outlined: '',
                                        'max-width': '400',
                                      },
                                    },
                                    [
                                      e(
                                        'v-sheet',
                                        { attrs: { color: 'transparent' } },
                                        [
                                          e(
                                            'p',
                                            {
                                              staticClass: 'transparent--text',
                                            },
                                            [
                                              this._v(
                                                '\n                  ELOBOOST ELOBOOST ELOBOOST ELOBOOST ELOBOOST ELOBOOST\n                '
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        },
        [],
        !1,
        null,
        null,
        null
      )
      e.default = component.exports
      c()(component, {
        VCard: d.a,
        VCardText: O.c,
        VCardTitle: O.d,
        VCol: v.a,
        VContainer: h.a,
        VImg: w.a,
        VRow: C.a,
        VSheet: E.a,
      })
    },
  },
])
