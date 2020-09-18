;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    631(e, t, n) {
      let content = n(632)
      typeof content == 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(12).default)('12a190a6', content, !0, { sourceMap: !1 })
    },
    632(e, t, n) {
      ;(t = n(11)(!1)).push([
        e.i,
        '.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}',
        '',
      ]),
        (e.exports = t)
    },
    676(e, t, n) {
      'use strict'
      n.r(t)
      n(76)
      const r = n(24)
      const o = {
        data() {
          return {
            valid: !1,
            loading: !1,
            acceptPolicies: !1,
            acceptTerms: !1,
            usernames: [],
            newuser: { username: '', email: '', password: '' },
            error: !1,
            errorMessage: '',
            emailRules: [
              function (e) {
                return !!e || 'El email es necesario'
              },
              function (e) {
                return /.+@.+\..+/.test(e) || 'El email tiene que ser válido'
              },
            ],
            usernameRules: [],
            passwordRules: [
              function (e) {
                return !!e || 'La contraseña es necesaria'
              },
              function (e) {
                return (
                  e.length > 7 ||
                  'La contraseña tiene que tener por lo menos 8 carácteres'
                )
              },
            ],
          }
        },
        created() {
          this.initialize()
        },
        methods: {
          register() {
            const e = this
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.loading = !0),
                            e.$refs.form.validate(),
                            (t.prev = 2),
                            (t.next = 5),
                            e.$axios.post('/users', e.newuser)
                          )
                        case 5:
                          e.$router.push('/'), (t.next = 12)
                          break
                        case 8:
                          ;(t.prev = 8),
                            (t.t0 = t.catch(2)),
                            (e.error = !0),
                            (e.errorMessage = t.t0)
                        case 12:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[2, 8]]
                )
              })
            )()
          },
          initialize() {
            const e = this
            this.$axios.get('/usernames').then(function (t) {
              ;(e.usernames = t.data),
                (e.usernameRules = [
                  function (e) {
                    return !!e || 'El nombre de usuario es necesario'
                  },
                  function (e) {
                    return (
                      e.length > 4 ||
                      'El nombre tiene que tener más de 4 carácteres'
                    )
                  },
                  function (t) {
                    for (let i = 0; i < e.usernames.length; i++)
                      if (t == e.usernames[i])
                        return 'El nombre de usuario ya está ocupado'
                    return !0
                  },
                ])
            })
          },
          close() {
            this.loading = !1
          },
        },
      }
      const c = n(21)
      const l = n(27)
      const d = n.n(l)
      const f = n(383)
      const m = n(157)
      const v = n(156)
      const h = n(44)
      const x = (n(10), n(9), n(6), n(8), n(17), n(18), n(5), n(1))
      const w = (n(631), n(222), n(35))
      const k = n(39)
      function y(object, e) {
        const t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(object)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function C(e) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? y(Object(source), !0).forEach(function (t) {
                Object(x.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : y(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                )
              })
        }
        return e
      }
      const O = n(199).a.extend({
        name: 'v-checkbox',
        props: {
          indeterminate: Boolean,
          indeterminateIcon: {
            type: String,
            default: '$checkboxIndeterminate',
          },
          offIcon: { type: String, default: '$checkboxOff' },
          onIcon: { type: String, default: '$checkboxOn' },
        },
        data() {
          return { inputIndeterminate: this.indeterminate }
        },
        computed: {
          classes() {
            return C(
              C({}, k.a.options.computed.classes.call(this)),
              {},
              {
                'v-input--selection-controls': !0,
                'v-input--checkbox': !0,
                'v-input--indeterminate': this.inputIndeterminate,
              }
            )
          },
          computedIcon() {
            return this.inputIndeterminate
              ? this.indeterminateIcon
              : this.isActive
              ? this.onIcon
              : this.offIcon
          },
          validationState() {
            if (!this.disabled || this.inputIndeterminate)
              return this.hasError && this.shouldValidate
                ? 'error'
                : this.hasSuccess
                ? 'success'
                : this.hasColor !== null
                ? this.computedColor
                : void 0
          },
        },
        watch: {
          indeterminate(e) {
            const t = this
            this.$nextTick(function () {
              return (t.inputIndeterminate = e)
            })
          },
          inputIndeterminate(e) {
            this.$emit('update:indeterminate', e)
          },
          isActive() {
            this.indeterminate && (this.inputIndeterminate = !1)
          },
        },
        methods: {
          genCheckbox() {
            return this.$createElement(
              'div',
              { staticClass: 'v-input--selection-controls__input' },
              [
                this.$createElement(
                  w.a,
                  this.setTextColor(this.validationState, {
                    props: {
                      dense: this.dense,
                      dark: this.dark,
                      light: this.light,
                    },
                  }),
                  this.computedIcon
                ),
                this.genInput(
                  'checkbox',
                  C(
                    C({}, this.attrs$),
                    {},
                    {
                      'aria-checked': this.inputIndeterminate
                        ? 'mixed'
                        : this.isActive.toString(),
                    }
                  )
                ),
                this.genRipple(this.setTextColor(this.rippleState)),
              ]
            )
          },
          genDefaultSlot() {
            return [this.genCheckbox(), this.genLabel()]
          },
        },
      })
      const _ = n(381)
      const I = n(398)
      const j = n(392)
      const $ = n(385)
      const P = n(158)
      const R = n(382)
      const V = n(366)
      const component = Object(c.a)(
        o,
        function () {
          const e = this
          const t = e.$createElement
          const n = e._self._c || t
          return n(
            'v-content',
            [
              n(
                'v-container',
                [
                  n(
                    'v-row',
                    { attrs: { align: 'center', justify: 'center' } },
                    [
                      n(
                        'v-card',
                        { attrs: { width: '500' } },
                        [
                          n(
                            'v-form',
                            {
                              ref: 'form',
                              model: {
                                value: e.valid,
                                callback(t) {
                                  e.valid = t
                                },
                                expression: 'valid',
                              },
                            },
                            [
                              n(
                                'v-container',
                                { staticClass: 'px-10' },
                                [
                                  n(
                                    'v-row',
                                    {
                                      staticClass: 'px-5',
                                      attrs: {
                                        align: 'center',
                                        justify: 'center',
                                        'no-gutters': '',
                                      },
                                    },
                                    [
                                      n(
                                        'v-col',
                                        {
                                          staticClass: 'px-0',
                                          attrs: { cols: '12' },
                                        },
                                        [
                                          n(
                                            'v-alert',
                                            {
                                              attrs: {
                                                dismissible: '',
                                                type: 'error',
                                              },
                                              on: { input: e.close },
                                              model: {
                                                value: e.error,
                                                callback(t) {
                                                  e.error = t
                                                },
                                                expression: 'error',
                                              },
                                            },
                                            [
                                              e._v(
                                                '\n                  ' +
                                                  e._s(e.errorMessage) +
                                                  '\n                '
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      e._v(' '),
                                      n(
                                        'v-col',
                                        { attrs: { cols: '12' } },
                                        [
                                          n(
                                            'v-card-title',
                                            { staticClass: 'justify-center' },
                                            [e._v('Registrarse')]
                                          ),
                                        ],
                                        1
                                      ),
                                      e._v(' '),
                                      n(
                                        'v-col',
                                        { attrs: { cols: '12' } },
                                        [
                                          n('v-text-field', {
                                            attrs: {
                                              rules: e.emailRules,
                                              label: 'E-mail',
                                              required: '',
                                              outlined: '',
                                            },
                                            model: {
                                              value: e.newuser.email,
                                              callback(t) {
                                                e.$set(e.newuser, 'email', t)
                                              },
                                              expression: 'newuser.email',
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      e._v(' '),
                                      n(
                                        'v-col',
                                        { attrs: { cols: '12' } },
                                        [
                                          n('v-text-field', {
                                            attrs: {
                                              rules: e.usernameRules,
                                              label: 'Nombre de usuario',
                                              required: '',
                                              outlined: '',
                                            },
                                            model: {
                                              value: e.newuser.username,
                                              callback(t) {
                                                e.$set(e.newuser, 'username', t)
                                              },
                                              expression: 'newuser.username',
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      e._v(' '),
                                      n(
                                        'v-col',
                                        { attrs: { cols: '12' } },
                                        [
                                          n('v-text-field', {
                                            attrs: {
                                              label: 'Contraseña',
                                              type: 'password',
                                              rules: e.passwordRules,
                                              required: '',
                                              outlined: '',
                                            },
                                            model: {
                                              value: e.newuser.password,
                                              callback(t) {
                                                e.$set(e.newuser, 'password', t)
                                              },
                                              expression: 'newuser.password',
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      e._v(' '),
                                      n(
                                        'v-col',
                                        { attrs: { cols: '12' } },
                                        [
                                          n(
                                            'v-checkbox',
                                            {
                                              attrs: {
                                                rules: [
                                                  function (e) {
                                                    return !!e || ''
                                                  },
                                                ],
                                                required: '',
                                                color: 'opposite',
                                              },
                                              model: {
                                                value: e.acceptTerms,
                                                callback(t) {
                                                  e.acceptTerms = t
                                                },
                                                expression: 'acceptTerms',
                                              },
                                            },
                                            [
                                              n(
                                                'span',
                                                {
                                                  attrs: { slot: 'label' },
                                                  slot: 'label',
                                                },
                                                [
                                                  e._v(
                                                    'He leído y acepto los\n                    '
                                                  ),
                                                  n(
                                                    'a',
                                                    {
                                                      staticClass:
                                                        'opposite--text',
                                                      attrs: {
                                                        href:
                                                          '/terminos-y-condiciones',
                                                        target: '_blank',
                                                      },
                                                      on: {
                                                        click(e) {
                                                          e.stopPropagation()
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        'Términos y Condiciones de uso'
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      e._v(' '),
                                      n(
                                        'v-col',
                                        { attrs: { cols: '12' } },
                                        [
                                          n(
                                            'v-checkbox',
                                            {
                                              attrs: {
                                                rules: [
                                                  function (e) {
                                                    return !!e || ''
                                                  },
                                                ],
                                                required: '',
                                                color: 'opposite',
                                              },
                                              model: {
                                                value: e.acceptPolicies,
                                                callback(t) {
                                                  e.acceptPolicies = t
                                                },
                                                expression: 'acceptPolicies',
                                              },
                                            },
                                            [
                                              n(
                                                'span',
                                                {
                                                  attrs: { slot: 'label' },
                                                  slot: 'label',
                                                },
                                                [
                                                  e._v(
                                                    'He leído y acepto las\n                    '
                                                  ),
                                                  n(
                                                    'a',
                                                    {
                                                      staticClass:
                                                        'opposite--text',
                                                      attrs: {
                                                        href:
                                                          '/politicas-de-privacidad',
                                                        target: '_blank',
                                                      },
                                                      on: {
                                                        click(e) {
                                                          e.stopPropagation()
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        'Políticas de privacidad'
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      e._v(' '),
                                      n(
                                        'v-col',
                                        {
                                          staticClass: 'my-3',
                                          attrs: { cols: 'auto' },
                                        },
                                        [
                                          n(
                                            'v-btn',
                                            {
                                              staticClass: 'text-center',
                                              attrs: {
                                                disabled: !e.valid,
                                                loading: e.loading,
                                                color: 'accent2',
                                              },
                                              on: {
                                                click(t) {
                                                  return e.register()
                                                },
                                              },
                                            },
                                            [
                                              n(
                                                'v-icon',
                                                { attrs: { left: '' } },
                                                [
                                                  e._v(
                                                    'mdi-checkbox-marked-circle'
                                                  ),
                                                ]
                                              ),
                                              e._v(
                                                '\n                  Registrarse\n                '
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
      t.default = component.exports
      d()(component, {
        VAlert: f.a,
        VBtn: m.a,
        VCard: v.a,
        VCardTitle: h.d,
        VCheckbox: O,
        VCol: _.a,
        VContainer: I.a,
        VContent: j.a,
        VForm: $.a,
        VIcon: P.a,
        VRow: R.a,
        VTextField: V.a,
      })
    },
  },
])
