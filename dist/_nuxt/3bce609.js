;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    457(t, e, n) {
      const o = n(19)
      o(o.S, 'Math', {
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
    677(t, e, n) {
      'use strict'
      n.r(e)
      n(457)
      const o = {
        layout: 'admin',
        components: {},
        data() {
          return {
            data: {},
            eloboostsDone: 0,
            eloboostsUnasigned: 0,
            eloboostPercentage: 0,
            coachingsDone: 0,
            coachingsUnasigned: 0,
            coachingPercentage: 0,
            accountsVerified: 0,
            accountsSold: 0,
            accountsPercentage: 0,
            usersPercentage: 0,
            usersAdmin: 0,
            usersBoosters: 0,
            users: 0,
            interval: {},
            value: 0,
          }
        },
        computed: {
          eloboostsLength() {
            return this.data.eloboosts ? this.data.eloboosts.length : 0
          },
          coachingsLength() {
            return this.data.coachings ? this.data.coachings.length : 0
          },
          accountsLength() {
            return this.data.accounts ? this.data.accounts.length : 0
          },
          usersLength() {
            return this.data.users ? this.data.users.length : 0
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
                )),
                t.data.accounts.forEach(function (e) {
                  e.status == 1
                    ? t.accountsSold++
                    : e.status == 2 && t.accountsVerified++
                }),
                (t.accountsPercentage = t.getPercentage(
                  t.accountsSold,
                  t.data.accounts.length
                )),
                t.data.users.forEach(function (e) {
                  e.role == 1
                    ? t.usersBoosters++
                    : e.role == 2
                    ? t.usersAdmin++
                    : t.users++
                }),
                (t.usersPercentage = t.getPercentage(
                  t.data.users.length - t.usersAdmin - t.usersBoosters,
                  t.data.users.length
                ))
            }),
              this.$axios
                .get('/boosters/5f449484681c06162c82dccd')
                .then(function (e) {
                  t.eloboostsUnasigned = e.data.length
                }),
              this.$axios
                .get('/coachs/5f449484681c06162c82dccd')
                .then(function (e) {
                  t.coachingsUnasigned = e.data.length
                })
          },
          getPercentage(t, e) {
            return Math.trunc((100 * t) / e)
          },
        },
        head() {
          return { title: 'Panel de administración' }
        },
      }
      const c = n(21)
      const r = n(27)
      const l = n.n(r)
      const v = n(156)
      const d = n(381)
      const h = n(398)
      const _ = n(29)
      const f = n(103)
      const m = n(382)
      const w = n(458)
      const x = n.n(w)
      const P = n(47)
      const component = Object(c.a)(
        o,
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n(
            'v-container',
            [
              n(
                'v-row',
                { staticClass: 'flex-child' },
                [
                  n(
                    'v-col',
                    { staticClass: 'd-flex' },
                    [
                      n(
                        'v-row',
                        {
                          attrs: {
                            justify: 'center',
                            align: 'center',
                            'align-content': 'center',
                          },
                        },
                        [
                          n(
                            'v-col',
                            { attrs: { cols: 'auto' } },
                            [
                              n(
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
                                  n(
                                    'v-container',
                                    [
                                      n(
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
                                      n(
                                        'v-row',
                                        {
                                          attrs: {
                                            justify: 'space-between',
                                            align: 'center',
                                          },
                                        },
                                        [
                                          n(
                                            'v-col',
                                            { attrs: { cols: 'auto' } },
                                            [
                                              n(
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
                                          n(
                                            'v-col',
                                            {
                                              staticClass: 'text-center',
                                              attrs: { cols: 'auto' },
                                            },
                                            [
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(t.eloboostsDone) +
                                                    ' completados\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(t.eloboostsUnasigned) +
                                                    ' sin asignar\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(
                                                      t.eloboostsLength -
                                                        t.eloboostsDone
                                                    ) +
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
                          n(
                            'v-col',
                            { attrs: { cols: 'auto' } },
                            [
                              n(
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
                                  n(
                                    'v-container',
                                    [
                                      n(
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
                                      n(
                                        'v-row',
                                        {
                                          attrs: {
                                            justify: 'space-between',
                                            align: 'center',
                                          },
                                        },
                                        [
                                          n(
                                            'v-col',
                                            { attrs: { cols: 'auto' } },
                                            [
                                              n(
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
                                          n(
                                            'v-col',
                                            {
                                              staticClass: 'text-center',
                                              attrs: { cols: 'auto' },
                                            },
                                            [
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(t.coachingsDone) +
                                                    ' completados\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(t.coachingsUnasigned) +
                                                    ' sin asignar\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(
                                                      t.coachingsLength -
                                                        t.coachingsDone
                                                    ) +
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
                          t._v(' '),
                          n(
                            'v-col',
                            { attrs: { cols: 'auto' } },
                            [
                              n(
                                'v-card',
                                {
                                  directives: [
                                    {
                                      name: 'ripple',
                                      rawName: 'v-ripple',
                                      value: { class: 'red--text' },
                                      expression: '{ class: `red--text` }',
                                    },
                                  ],
                                  staticClass: 'd-inline-block',
                                  attrs: { color: 'red lighten-3' },
                                },
                                [
                                  n(
                                    'v-container',
                                    [
                                      n(
                                        'v-row',
                                        {
                                          staticClass: 'title',
                                          attrs: { justify: 'center' },
                                        },
                                        [
                                          t._v(
                                            '\n                ' +
                                              t._s(t.accountsLength) +
                                              ' CUENTAS\n              '
                                          ),
                                        ]
                                      ),
                                      t._v(' '),
                                      n(
                                        'v-row',
                                        {
                                          attrs: {
                                            justify: 'space-between',
                                            align: 'center',
                                          },
                                        },
                                        [
                                          n(
                                            'v-col',
                                            { attrs: { cols: 'auto' } },
                                            [
                                              n(
                                                'v-progress-circular',
                                                {
                                                  attrs: {
                                                    rotate: 180,
                                                    size: 100,
                                                    width: 10,
                                                    value: t.accountsPercentage,
                                                    color: 'red darken-2',
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    '\n                    ' +
                                                      t._s(
                                                        t.accountsPercentage
                                                      ) +
                                                      '%\n                  '
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          t._v(' '),
                                          n(
                                            'v-col',
                                            {
                                              staticClass: 'text-center',
                                              attrs: { cols: 'auto' },
                                            },
                                            [
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(t.accountsSold) +
                                                    ' vendidas\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(t.accountsVerified) +
                                                    ' en venta\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(
                                                      t.accountsLength -
                                                        t.accountsSold -
                                                        t.accountsVerified
                                                    ) +
                                                    ' sin\n                    verificar\n                  '
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
                          n(
                            'v-col',
                            { attrs: { cols: 'auto' } },
                            [
                              n(
                                'v-card',
                                {
                                  directives: [
                                    {
                                      name: 'ripple',
                                      rawName: 'v-ripple',
                                      value: { class: 'blue--text' },
                                      expression: '{ class: `blue--text` }',
                                    },
                                  ],
                                  staticClass: 'd-inline-block',
                                  attrs: { color: 'blue lighten-3' },
                                },
                                [
                                  n(
                                    'v-container',
                                    [
                                      n(
                                        'v-row',
                                        {
                                          staticClass: 'title',
                                          attrs: { justify: 'center' },
                                        },
                                        [
                                          t._v(
                                            '\n                ' +
                                              t._s(t.usersLength) +
                                              ' USUARIOS\n              '
                                          ),
                                        ]
                                      ),
                                      t._v(' '),
                                      n(
                                        'v-row',
                                        {
                                          attrs: {
                                            justify: 'space-between',
                                            align: 'center',
                                          },
                                        },
                                        [
                                          n(
                                            'v-col',
                                            { attrs: { cols: 'auto' } },
                                            [
                                              n(
                                                'v-progress-circular',
                                                {
                                                  attrs: {
                                                    rotate: 180,
                                                    size: 100,
                                                    width: 10,
                                                    value: t.usersPercentage,
                                                    color: 'blue darken-2',
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    '\n                    ' +
                                                      t._s(t.usersPercentage) +
                                                      '%\n                  '
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          t._v(' '),
                                          n(
                                            'v-col',
                                            {
                                              staticClass: 'text-center',
                                              attrs: { cols: 'auto' },
                                            },
                                            [
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(t.usersAdmin) +
                                                    ' administradores\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(t.usersBoosters) +
                                                    ' boosters\n                  '
                                                ),
                                              ]),
                                              t._v(' '),
                                              n('v-list-item-subtitle', [
                                                t._v(
                                                  '\n                    ' +
                                                    t._s(
                                                      t.usersLength -
                                                        t.usersAdmin -
                                                        t.usersBoosters
                                                    ) +
                                                    '\n                    vendedores\n                  '
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
        VCol: d.a,
        VContainer: h.a,
        VListItemSubtitle: _.b,
        VProgressCircular: f.a,
        VRow: m.a,
      }),
        x()(component, { Ripple: P.a })
    },
  },
])
