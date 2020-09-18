;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    457(t, e, o) {
      const n = o(19)
      n(n.S, 'Math', {
        trunc(t) {
          return (t > 0 ? Math.floor : Math.ceil)(t)
        },
      })
    },
    458(t, e) {
      t.exports = function (component, t) {
        const e =
          typeof component.exports == 'function'
            ? component.exports.extendOptions
            : component.options
        for (const i in (typeof component.exports == 'function' &&
          (e.directives = component.exports.options.directives),
        (e.directives = e.directives || {}),
        t))
          e.directives[i] = e.directives[i] || t[i]
      }
    },
    678(t, e, o) {
      'use strict'
      o.r(e)
      o(457)
      const n = {
        layout: 'booster',
        components: {},
        data() {
          return {
            data: {},
            eloboostsDone: 0,
            eloboostPercentage: 0,
            coachingsDone: 0,
            coachingPercentage: 0,
          }
        },
        computed: {
          eloboostsLength() {
            return this.data.eloboosts ? this.data.eloboosts.length : 0
          },
          coachingsLength() {
            return this.data.coachings ? this.data.coachings.length : 0
          },
        },
        beforeDestroy() {
          clearInterval(this.interval)
        },
        mounted() {
          const t = this
          this.getData(),
            (this.interval = setInterval(function () {
              if (t.value === 100) return (t.value = 0)
              t.value += 10
            }, 1e3))
        },
        methods: {
          getData() {
            const t = this
            this.$axios.get('/alldata').then(function (e) {
              ;(t.data = e.data),
                t.data.eloboosts.forEach(function (e) {
                  e.status == 1 && t.eloboostsDone++
                }),
                (t.eloboostPercentage = t.getPercentage(
                  t.eloboostsDone,
                  t.data.eloboosts.length
                )),
                t.data.coachings.forEach(function (e) {
                  e.status == 1 && t.coachingsDone++
                }),
                (t.coachingPercentage = t.getPercentage(
                  t.coachingsDone,
                  t.data.coachings.length
                ))
            })
          },
          getPercentage(t, e) {
            return Math.trunc((100 * t) / e)
          },
        },
        head() {
          return { title: 'Panel de booster' }
        },
      }
      const c = o(21)
      const r = o(27)
      const l = o.n(r)
      const v = o(156)
      const h = o(381)
      const d = o(398)
      const f = o(29)
      const _ = o(103)
      const m = o(382)
      const w = o(458)
      const x = o.n(w)
      const C = o(47)
      const component = Object(c.a)(
        n,
        function () {
          const t = this
          const e = t.$createElement
          const o = t._self._c || e
          return o(
            'v-container',
            [
              o(
                'v-row',
                { staticClass: 'flex-child' },
                [
                  o(
                    'v-col',
                    { staticClass: 'd-flex' },
                    [
                      o(
                        'v-row',
                        {
                          attrs: {
                            justify: 'center',
                            align: 'center',
                            'align-content': 'center',
                          },
                        },
                        [
                          o(
                            'v-col',
                            { attrs: { cols: 'auto' } },
                            [
                              o(
                                'v-card',
                                {
                                  directives: [
                                    {
                                      name: 'ripple',
                                      rawName: 'v-ripple',
                                      value: { class: 'green--text' },
                                      expression: '{ class: `green--text` }',
                                    },
                                  ],
                                  staticClass: 'd-inline-block',
                                  attrs: { color: 'green lighten-3' },
                                },
                                [
                                  o(
                                    'v-container',
                                    [
                                      o(
                                        'v-row',
                                        {
                                          staticClass: 'title',
                                          attrs: { justify: 'center' },
                                        },
                                        [
                                          t._v(
                                            '\n                ' +
                                              t._s(t.eloboostsLength) +
                                              ' ELOBOOSTS\n              '
                                          ),
                                        ]
                                      ),
                                      t._v(' '),
                                      o(
                                        'v-row',
                                        {
                                          attrs: {
                                            justify: 'center',
                                            align: 'center',
                                          },
                                        },
                                        [
                                          o(
                                            'v-col',
                                            { attrs: { cols: 'auto' } },
                                            [
                                              o(
                                                'v-progress-circular',
                                                {
                                                  attrs: {
                                                    rotate: 180,
                                                    size: 100,
                                                    width: 10,
                                                    value: t.eloboostPercentage,
                                                    color: 'green darken-2',
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    '\n                    ' +
                                                      t._s(
                                                        t.eloboostPercentage
                                                      ) +
                                                      '%\n                  '
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          t._v(' '),
                                          o(
                                            'v-col',
                                            {
                                              staticClass: 'text-center',
                                              attrs: { cols: 'auto' },
                                            },
                                            [
                                              o('v-list-item-title', [
                                                o('b', [
                                                  t._v(
                                                    t._s(t.eloboostsLength) +
                                                      ' Eloboosts'
                                                  ),
                                                ]),
                                              ]),
                                              t._v(' '),
                                              o('v-list-item-subtitle', [
                                                o('b', [
                                                  t._v(t._s(t.eloboostsDone)),
                                                ]),
                                                t._v(
                                                  ' completados\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              o('v-list-item-subtitle', [
                                                o('b', [
                                                  t._v(
                                                    t._s(
                                                      t.eloboostsLength -
                                                        t.eloboostsDone
                                                    )
                                                  ),
                                                ]),
                                                t._v(
                                                  ' sin completar\n                  '
                                                ),
                                              ]),
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
                          t._v(' '),
                          o(
                            'v-col',
                            { attrs: { cols: 'auto' } },
                            [
                              o(
                                'v-card',
                                {
                                  directives: [
                                    {
                                      name: 'ripple',
                                      rawName: 'v-ripple',
                                      value: { class: 'purple--text' },
                                      expression: '{ class: `purple--text` }',
                                    },
                                  ],
                                  staticClass: 'd-inline-block',
                                  attrs: { color: 'purple lighten-3' },
                                },
                                [
                                  o(
                                    'v-container',
                                    [
                                      o(
                                        'v-row',
                                        {
                                          staticClass: 'title',
                                          attrs: { justify: 'center' },
                                        },
                                        [
                                          t._v(
                                            '\n                ' +
                                              t._s(t.coachingsLength) +
                                              ' COACHINGS\n              '
                                          ),
                                        ]
                                      ),
                                      t._v(' '),
                                      o(
                                        'v-row',
                                        {
                                          attrs: {
                                            justify: 'space-between',
                                            align: 'center',
                                          },
                                        },
                                        [
                                          o(
                                            'v-col',
                                            { attrs: { cols: 'auto' } },
                                            [
                                              o(
                                                'v-progress-circular',
                                                {
                                                  attrs: {
                                                    rotate: 180,
                                                    size: 100,
                                                    width: 10,
                                                    value: t.coachingPercentage,
                                                    color: 'purple darken-2',
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    '\n                    ' +
                                                      t._s(
                                                        t.coachingPercentage
                                                      ) +
                                                      '%\n                  '
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          t._v(' '),
                                          o(
                                            'v-col',
                                            {
                                              staticClass: 'text-center',
                                              attrs: { cols: 'auto' },
                                            },
                                            [
                                              o('v-list-item-title', [
                                                o('b', [
                                                  t._v(
                                                    t._s(t.coachingsLength) +
                                                      ' Coachings'
                                                  ),
                                                ]),
                                              ]),
                                              t._v(' '),
                                              o('v-list-item-subtitle', [
                                                o('b', [
                                                  t._v(t._s(t.coachingsDone)),
                                                ]),
                                                t._v(
                                                  ' completados\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              o('v-list-item-subtitle', [
                                                o('b', [
                                                  t._v(
                                                    t._s(
                                                      t.coachingsLength -
                                                        t.coachingsDone
                                                    )
                                                  ),
                                                ]),
                                                t._v(
                                                  '\n                    sin completar\n                  '
                                                ),
                                              ]),
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
      l()(component, {
        VCard: v.a,
        VCol: h.a,
        VContainer: d.a,
        VListItemSubtitle: f.b,
        VListItemTitle: f.c,
        VProgressCircular: _.a,
        VRow: m.a,
      }),
        x()(component, { Ripple: C.a })
    },
  },
])
