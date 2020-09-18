;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    684(e, t, r) {
      'use strict'
      r.r(t)
      r(76)
      const n = r(24)
      const o = {
        layout: 'admin',
        components: {},
        data() {
          return {
            dialog: !1,
            search: '',
            rols: [
              { name: 'Administrador', code: '2' },
              { name: 'Booster', code: '1' },
              { name: 'Usuario', code: '0' },
            ],
            headers: [
              { text: 'Usuario', value: 'username' },
              { text: 'Email', value: 'email' },
              { text: 'Rol', value: 'rol' },
              { text: 'Acciones', value: 'actions', sortable: !1 },
            ],
            users: [],
            editedIndex: -1,
            editedItem: {},
            defaultItem: {},
          }
        },
        computed: {
          formTitle() {
            return this.editedIndex === -1 ? 'Nuevo usuario' : 'Editar usuario'
          },
        },
        watch: {
          dialog(e) {
            e || this.close()
          },
        },
        created() {
          this.initialize()
        },
        methods: {
          editUser(e) {
            const t = this
            return Object(n.a)(
              regeneratorRuntime.mark(function r() {
                let path
                return regeneratorRuntime.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (path = '/users/' + e),
                            (r.prev = 1),
                            (r.next = 4),
                            t.$axios.put(path, t.editedItem)
                          )
                        case 4:
                          r.next = 9
                          break
                        case 6:
                          ;(r.prev = 6),
                            (r.t0 = r.catch(1)),
                            (t.error = r.t0.response.data.message)
                        case 9:
                        case 'end':
                          return r.stop()
                      }
                  },
                  r,
                  null,
                  [[1, 6]]
                )
              })
            )()
          },
          addUser() {
            const e = this
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            e.$axios.post('/users', e.editedItem)
                          )
                        case 3:
                          t.next = 8
                          break
                        case 5:
                          ;(t.prev = 5),
                            (t.t0 = t.catch(0)),
                            (e.error = t.t0.response.data.message)
                        case 8:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 5]]
                )
              })
            )()
          },
          deleteUser(e) {
            const t = this
            return Object(n.a)(
              regeneratorRuntime.mark(function r() {
                let path
                return regeneratorRuntime.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (path = '/users/' + e),
                            (r.next = 4),
                            t.$axios.delete(path)
                          )
                        case 4:
                          r.next = 9
                          break
                        case 6:
                          ;(r.prev = 6),
                            (r.t0 = r.catch(0)),
                            (t.error = r.t0.response.data.message)
                        case 9:
                        case 'end':
                          return r.stop()
                      }
                  },
                  r,
                  null,
                  [[0, 6]]
                )
              })
            )()
          },
          initialize() {
            const e = this
            this.$axios.get('/users').then(function (t) {
              ;(e.users = t.data),
                e.users.forEach(function (e) {
                  switch (e.role) {
                    case 0:
                      e.rol = 'Usuario'
                      break
                    case 1:
                      e.rol = 'Booster'
                      break
                    case 2:
                      e.rol = 'Administrador'
                  }
                })
            })
          },
          editItem(e) {
            ;(this.editedIndex = this.users.indexOf(e)),
              (this.editedItem = Object.assign({}, e)),
              (this.dialog = !0)
          },
          deleteItem(e) {
            if (
              confirm('¿Estás seguro de que quieres eliminar este usuario?')
            ) {
              const t = this.users.indexOf(e)
              this.deleteUser(e._id), this.users.splice(t, 1)
            }
          },
          close() {
            const e = this
            ;(this.dialog = !1),
              this.$nextTick(function () {
                ;(e.editedItem = Object.assign({}, e.defaultItem)),
                  (e.editedIndex = -1)
              })
          },
          save() {
            this.editedIndex > -1
              ? (this.editUser(this.editedItem._id),
                Object.assign(this.users[this.editedIndex], this.editedItem))
              : (this.addUser(), this.users.push(this.editedItem)),
              this.initialize(),
              this.close()
          },
        },
        head() {
          return { title: 'Panel de administración' }
        },
      }
      const c = r(21)
      const d = r(27)
      const l = r.n(d)
      const v = r(157)
      const m = r(156)
      const f = r(44)
      const h = r(381)
      const x = r(398)
      const _ = r(672)
      const k = r(384)
      const I = r(158)
      const w = r(382)
      const V = r(437)
      const y = r(388)
      const C = r(366)
      const R = r(53)
      const U = r(394)
      const component = Object(c.a)(
        o,
        function () {
          const e = this
          const t = e.$createElement
          const r = e._self._c || t
          return r(
            'v-container',
            { attrs: { fluid: '' } },
            [
              r('v-data-table', {
                staticClass: 'elevation-1',
                attrs: {
                  'item-key': '_id',
                  headers: e.headers,
                  items: e.users,
                  search: e.search,
                  'sort-by': 'rol',
                },
                scopedSlots: e._u([
                  {
                    key: 'top',
                    fn() {
                      return [
                        r(
                          'v-toolbar',
                          { attrs: { flat: '' } },
                          [
                            r('v-card-title', [e._v('Usuarios')]),
                            e._v(' '),
                            r('v-spacer'),
                            e._v(' '),
                            r('v-text-field', {
                              attrs: {
                                'append-icon': 'mdi-magnify',
                                label: 'Buscar',
                                'single-line': '',
                                'hide-details': '',
                              },
                              model: {
                                value: e.search,
                                callback(t) {
                                  e.search = t
                                },
                                expression: 'search',
                              },
                            }),
                            e._v(' '),
                            r('v-spacer'),
                            e._v(' '),
                            r(
                              'v-dialog',
                              {
                                attrs: { 'max-height': '500' },
                                scopedSlots: e._u([
                                  {
                                    key: 'activator',
                                    fn(t) {
                                      const n = t.on
                                      return [
                                        r(
                                          'v-btn',
                                          e._g(
                                            {
                                              staticClass: 'mb-2',
                                              attrs: {
                                                color: 'primary',
                                                dark: '',
                                              },
                                            },
                                            n
                                          ),
                                          [
                                            r(
                                              'v-icon',
                                              { attrs: { left: '' } },
                                              [e._v('mdi-plus')]
                                            ),
                                            e._v('Nuevo usuario\n            '),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ]),
                                model: {
                                  value: e.dialog,
                                  callback(t) {
                                    e.dialog = t
                                  },
                                  expression: 'dialog',
                                },
                              },
                              [
                                e._v(' '),
                                r(
                                  'v-card',
                                  [
                                    r('v-card-title', [
                                      r('span', { staticClass: 'headline' }, [
                                        e._v(e._s(e.formTitle)),
                                      ]),
                                    ]),
                                    e._v(' '),
                                    r(
                                      'v-card-text',
                                      [
                                        r(
                                          'v-container',
                                          [
                                            r(
                                              'v-row',
                                              [
                                                r(
                                                  'v-col',
                                                  {
                                                    attrs: {
                                                      cols: '12',
                                                      sm: '6',
                                                      md: '4',
                                                    },
                                                  },
                                                  [
                                                    r('v-text-field', {
                                                      attrs: {
                                                        label:
                                                          'Nombre de usuario',
                                                      },
                                                      model: {
                                                        value:
                                                          e.editedItem.username,
                                                        callback(t) {
                                                          e.$set(
                                                            e.editedItem,
                                                            'username',
                                                            t
                                                          )
                                                        },
                                                        expression:
                                                          'editedItem.username',
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                e._v(' '),
                                                r(
                                                  'v-col',
                                                  {
                                                    attrs: {
                                                      cols: '12',
                                                      sm: '6',
                                                      md: '4',
                                                    },
                                                  },
                                                  [
                                                    r('v-text-field', {
                                                      attrs: {
                                                        type: 'password',
                                                        label: 'Contraseña',
                                                      },
                                                      model: {
                                                        value:
                                                          e.editedItem.password,
                                                        callback(t) {
                                                          e.$set(
                                                            e.editedItem,
                                                            'password',
                                                            t
                                                          )
                                                        },
                                                        expression:
                                                          'editedItem.password',
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                e._v(' '),
                                                r(
                                                  'v-col',
                                                  {
                                                    attrs: {
                                                      cols: '12',
                                                      sm: '6',
                                                      md: '4',
                                                    },
                                                  },
                                                  [
                                                    r('v-select', {
                                                      attrs: {
                                                        items: e.rols,
                                                        'item-text': 'name',
                                                        'item-value': 'code',
                                                        label: 'Rol',
                                                      },
                                                      model: {
                                                        value:
                                                          e.editedItem.role,
                                                        callback(t) {
                                                          e.$set(
                                                            e.editedItem,
                                                            'role',
                                                            t
                                                          )
                                                        },
                                                        expression:
                                                          'editedItem.role',
                                                      },
                                                    }),
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
                                    e._v(' '),
                                    r(
                                      'v-card-actions',
                                      [
                                        r('v-spacer'),
                                        e._v(' '),
                                        r(
                                          'v-btn',
                                          {
                                            attrs: {
                                              color: 'blue darken-1',
                                              text: '',
                                            },
                                            on: { click: e.close },
                                          },
                                          [e._v('Cancel')]
                                        ),
                                        e._v(' '),
                                        r(
                                          'v-btn',
                                          {
                                            attrs: {
                                              color: 'blue darken-1',
                                              text: '',
                                            },
                                            on: { click: e.save },
                                          },
                                          [e._v('Save')]
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
                      ]
                    },
                    proxy: !0,
                  },
                  {
                    key: 'item.actions',
                    fn(t) {
                      const n = t.item
                      return [
                        r(
                          'v-tooltip',
                          {
                            attrs: { bottom: '' },
                            scopedSlots: e._u(
                              [
                                {
                                  key: 'activator',
                                  fn(t) {
                                    const o = t.on
                                    const c = t.attrs
                                    return [
                                      r(
                                        'v-icon',
                                        e._g(
                                          e._b(
                                            {
                                              attrs: { small: '' },
                                              on: {
                                                click(t) {
                                                  return e.editItem(n)
                                                },
                                              },
                                            },
                                            'v-icon',
                                            c,
                                            !1
                                          ),
                                          o
                                        ),
                                        [
                                          e._v(
                                            '\n            mdi-pencil\n          '
                                          ),
                                        ]
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              !0
                            ),
                          },
                          [e._v(' '), r('span', [e._v('Editar este usuario')])]
                        ),
                        e._v(' '),
                        r(
                          'v-tooltip',
                          {
                            attrs: { bottom: '' },
                            scopedSlots: e._u(
                              [
                                {
                                  key: 'activator',
                                  fn(t) {
                                    const o = t.on
                                    const c = t.attrs
                                    return [
                                      r(
                                        'v-icon',
                                        e._g(
                                          e._b(
                                            {
                                              attrs: { small: '' },
                                              on: {
                                                click(t) {
                                                  return e.deleteItem(n)
                                                },
                                              },
                                            },
                                            'v-icon',
                                            c,
                                            !1
                                          ),
                                          o
                                        ),
                                        [
                                          e._v(
                                            '\n            mdi-delete\n          '
                                          ),
                                        ]
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              !0
                            ),
                          },
                          [
                            e._v(' '),
                            r('span', [e._v('Eliminar este usuario')]),
                          ]
                        ),
                      ]
                    },
                  },
                  {
                    key: 'no-data',
                    fn() {
                      return [
                        r(
                          'v-btn',
                          {
                            attrs: { color: 'primary' },
                            on: { click: e.initialize },
                          },
                          [e._v('Reset')]
                        ),
                      ]
                    },
                    proxy: !0,
                  },
                ]),
              }),
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
      t.default = component.exports
      l()(component, {
        VBtn: v.a,
        VCard: m.a,
        VCardActions: f.a,
        VCardText: f.c,
        VCardTitle: f.d,
        VCol: h.a,
        VContainer: x.a,
        VDataTable: _.a,
        VDialog: k.a,
        VIcon: I.a,
        VRow: w.a,
        VSelect: V.a,
        VSpacer: y.a,
        VTextField: C.a,
        VToolbar: R.a,
        VTooltip: U.a,
      })
    },
  },
])
