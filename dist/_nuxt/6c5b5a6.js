;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    413(e, t, n) {
      e.exports = n.p + 'img/BR.f1176cf.png'
    },
    414(e, t, n) {
      e.exports = n.p + 'img/LAN.82dda58.png'
    },
    415(e, t, n) {
      e.exports = n.p + 'img/LAS.47db45b.png'
    },
    416(e, t, n) {
      e.exports = n.p + 'img/NA.1745b31.png'
    },
    417(e, t, n) {
      e.exports = n.p + 'img/undefined.47db45b.png'
    },
    418(e, t, n) {
      const map = {
        './BR.png': 413,
        './LAN.png': 414,
        './LAS.png': 415,
        './NA.png': 416,
        './undefined.png': 417,
      }
      function o(e) {
        const t = c(e)
        return n(t)
      }
      function c(e) {
        if (!n.o(map, e)) {
          const t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return map[e]
      }
      ;(o.keys = function () {
        return Object.keys(map)
      }),
        (o.resolve = c),
        (e.exports = o),
        (o.id = 418)
    },
    419(e, t, n) {
      'use strict'
      const o = {
        props: {
          def: {
            type: Object,
            default() {
              return { league: '', division: '' }
            },
          },
        },
        data() {
          return {
            leagues: [
              'Unranked',
              'Bronze',
              'Silver',
              'Gold',
              'Platinum',
              'Diamond',
              'Master',
              'Grandmaster',
              'Challenger',
            ],
            divisions: ['IV', 'III', 'II', 'I'],
          }
        },
        methods: {
          onChange() {
            this.$emit('changed', this.def.league)
          },
          onChangeDivision() {
            this.$emit('pickedDivision', this.def.division)
          },
        },
      }
      const c = n(21)
      const r = n(27)
      const l = n.n(r)
      const d = n(162)
      const h = n(381)
      const v = n(133)
      const m = n(382)
      const f = n(437)
      const x = n(388)
      const component = Object(c.a)(
        o,
        function () {
          const e = this
          const t = e.$createElement
          const o = e._self._c || t
          return o(
            'v-row',
            { attrs: { align: 'center', 'no-gutters': '' } },
            [
              o(
                'v-col',
                { attrs: { cols: '5', md: '5', sm: '10' } },
                [
                  o('v-select', {
                    attrs: {
                      color: 'accent3',
                      'item-color': 'opposite',
                      items: e.leagues,
                      rules: [
                        function (e) {
                          return !!e || 'Necesario'
                        },
                      ],
                      required: '',
                      label: 'Liga',
                    },
                    on: {
                      change(t) {
                        return e.onChange()
                      },
                    },
                    scopedSlots: e._u([
                      {
                        key: 'selection',
                        fn(data) {
                          return [
                            o(
                              'v-avatar',
                              [
                                o('v-img', {
                                  attrs: {
                                    'max-height': '40',
                                    'max-width': '40',
                                    src: n(399)('./' + data.item + '.png'),
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v('\n        ' + e._s(data.item) + '\n      '),
                          ]
                        },
                      },
                      {
                        key: 'item',
                        fn(data) {
                          return [
                            [
                              o(
                                'v-avatar',
                                [
                                  o('v-img', {
                                    attrs: {
                                      'max-height': '40',
                                      'max-width': '40',
                                      src: n(399)('./' + data.item + '.png'),
                                    },
                                  }),
                                ],
                                1
                              ),
                              e._v(
                                '\n          ' + e._s(data.item) + '\n        '
                              ),
                            ],
                          ]
                        },
                      },
                    ]),
                    model: {
                      value: e.def.league,
                      callback(t) {
                        e.$set(e.def, 'league', t)
                      },
                      expression: 'def.league',
                    },
                  }),
                ],
                1
              ),
              e._v(' '),
              o('v-spacer'),
              e._v(' '),
              o(
                'v-col',
                { attrs: { cols: '5', md: '5', sm: '10' } },
                [
                  e.def.league &&
                  e.def.league !== 'Challenger' &&
                  e.def.league !== 'Grandmaster' &&
                  e.def.league !== 'Master' &&
                  e.def.league !== 'Unranked'
                    ? o('v-select', {
                        attrs: {
                          items: e.divisions,
                          rules: [
                            function (e) {
                              return !!e || 'Necesario'
                            },
                          ],
                          required: '',
                          color: 'accent3',
                          'item-color': 'opposite',
                          label: 'División',
                        },
                        on: {
                          change(t) {
                            return e.onChangeDivision(t)
                          },
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: 'selection',
                              fn(data) {
                                return [
                                  o(
                                    'v-avatar',
                                    [
                                      o('v-img', {
                                        attrs: {
                                          'max-height': '40',
                                          'max-width': '40',
                                          src: n(399)(
                                            './' + e.def.league + '.png'
                                          ),
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  e._v(
                                    '\n        ' +
                                      e._s(e.def.league) +
                                      ' ' +
                                      e._s(data.item) +
                                      '\n      '
                                  ),
                                ]
                              },
                            },
                            {
                              key: 'item',
                              fn(data) {
                                return [
                                  [
                                    o('v-img', {
                                      staticClass: 'mr-3',
                                      attrs: {
                                        src: n(399)(
                                          './' + e.def.league + '.png'
                                        ),
                                        'max-height': '50',
                                        'max-width': '50',
                                      },
                                    }),
                                    e._v(
                                      '\n          ' +
                                        e._s(e.def.league) +
                                        ' ' +
                                        e._s(data.item) +
                                        '\n        '
                                    ),
                                  ],
                                ]
                              },
                            },
                          ],
                          null,
                          !1,
                          3245841755
                        ),
                        model: {
                          value: e.def.division,
                          callback(t) {
                            e.$set(e.def, 'division', t)
                          },
                          expression: 'def.division',
                        },
                      })
                    : e._e(),
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
      t.a = component.exports
      l()(component, {
        VAvatar: d.a,
        VCol: h.a,
        VImg: v.a,
        VRow: m.a,
        VSelect: f.a,
        VSpacer: x.a,
      })
    },
    427(e, t, n) {
      'use strict'
      n(6), n(5), n(168)
      const o = n(412)
      const c = {
        props: { required: { type: Boolean, default: !1 } },
        data() {
          return { champions: Object.values(o), pickedChampions: [] }
        },
        methods: {
          onChange(e) {
            this.pickedChampions = []
            for (let i = 0; i < e.length; i++)
              this.pickedChampions.push(e[i].key)
            this.$emit('changed', this.pickedChampions)
          },
        },
      }
      const r = n(21)
      const l = n(27)
      const d = n.n(l)
      const h = n(456)
      const v = n(162)
      const m = n(133)
      const component = Object(r.a)(
        c,
        function () {
          const e = this
          const t = e.$createElement
          const n = e._self._c || t
          return n('v-autocomplete', {
            attrs: {
              color: 'accent3',
              'item-color': 'opposite',
              items: e.champions,
              clearable: '',
              multiple: '',
              label: 'Campeones',
              'item-text': 'name',
              'item-value': 'name',
              autocomplete: '',
              'return-object': '',
            },
            on: {
              change(t) {
                return e.onChange(t)
              },
            },
            scopedSlots: e._u([
              {
                key: 'selection',
                fn(data) {
                  return [
                    n(
                      'v-avatar',
                      [
                        n('v-img', {
                          attrs: {
                            'max-height': '30',
                            'max-width': '30',
                            src: data.item.icon,
                          },
                        }),
                      ],
                      1
                    ),
                    e._v('\n    ' + e._s(data.item.name) + '\n  '),
                  ]
                },
              },
              {
                key: 'item',
                fn(data) {
                  return [
                    [
                      n(
                        'v-avatar',
                        [
                          n('v-img', {
                            attrs: {
                              src: data.item.icon,
                              'max-height': '30',
                              'max-width': '30',
                            },
                          }),
                        ],
                        1
                      ),
                      e._v('\n      ' + e._s(data.item.name) + '\n    '),
                    ],
                  ]
                },
              },
            ]),
          })
        },
        [],
        !1,
        null,
        null,
        null
      )
      t.a = component.exports
      d()(component, { VAutocomplete: h.a, VAvatar: v.a, VImg: m.a })
    },
    429(e, t, n) {
      let content = n(430)
      typeof content == 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(12).default)('50788f08', content, !0, { sourceMap: !1 })
    },
    430(e, t, n) {
      ;(t = n(11)(!1)).push([
        e.i,
        '.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}',
        '',
      ]),
        (e.exports = t)
    },
    439(e, t, n) {
      'use strict'
      const o = {
        model: { prop: 'def', event: 'defchange' },
        props: { def: { type: String, default: '' } },
        data() {
          return { servers: ['LAS', 'BR', 'LAN', 'NA'] }
        },
        computed: {
          defLocal: {
            get() {
              return this.def
            },
            set(e) {
              this.$emit('defchange', e)
            },
          },
        },
      }
      const c = n(21)
      const r = n(27)
      const l = n.n(r)
      const d = n(162)
      const h = n(133)
      const v = n(437)
      const component = Object(c.a)(
        o,
        function () {
          const e = this
          const t = e.$createElement
          const o = e._self._c || t
          return o('v-select', {
            attrs: {
              color: 'accent3',
              'item-color': 'opposite',
              items: e.servers,
              rules: [
                function (e) {
                  return !!e || 'Necesario'
                },
              ],
              required: '',
              label: 'Servidor',
            },
            scopedSlots: e._u([
              {
                key: 'selection',
                fn(data) {
                  return [
                    o(
                      'v-avatar',
                      [
                        o('v-img', {
                          attrs: {
                            'max-width': '40',
                            src: n(418)('./' + data.item + '.png'),
                          },
                        }),
                      ],
                      1
                    ),
                    e._v('\n    ' + e._s(data.item) + '\n  '),
                  ]
                },
              },
              {
                key: 'item',
                fn(data) {
                  return [
                    [
                      o('v-img', {
                        staticClass: 'mr-5',
                        attrs: {
                          src: n(418)('./' + data.item + '.png'),
                          'max-height': '50',
                          'max-width': '50',
                        },
                      }),
                      e._v('\n      ' + e._s(data.item) + '\n    '),
                    ],
                  ]
                },
              },
            ]),
            model: {
              value: e.defLocal,
              callback(t) {
                e.defLocal = t
              },
              expression: 'defLocal',
            },
          })
        },
        [],
        !1,
        null,
        null,
        null
      )
      t.a = component.exports
      l()(component, { VAvatar: d.a, VImg: h.a, VSelect: v.a })
    },
    456(e, t, n) {
      'use strict'
      n(10), n(9), n(6), n(5), n(8), n(62)
      const o = n(1)
      const c = (n(429), n(437))
      const r = n(366)
      const l = n(45)
      const d = n(0)
      function h(object, e) {
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
      function v(e) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? h(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                )
              })
        }
        return e
      }
      const m = v(
        v({}, c.b),
        {},
        { offsetY: !0, offsetOverflow: !0, transition: !1 }
      )
      t.a = c.a.extend({
        name: 'v-autocomplete',
        props: {
          allowOverflow: { type: Boolean, default: !0 },
          autoSelectFirst: { type: Boolean, default: !1 },
          filter: {
            type: Function,
            default(e, t, n) {
              return n.toLocaleLowerCase().includes(t.toLocaleLowerCase())
            },
          },
          hideNoData: Boolean,
          menuProps: {
            type: c.a.options.props.menuProps.type,
            default() {
              return m
            },
          },
          noFilter: Boolean,
          searchInput: { type: String, default: void 0 },
        },
        data() {
          return { lazySearch: this.searchInput }
        },
        computed: {
          classes() {
            return v(
              v({}, c.a.options.computed.classes.call(this)),
              {},
              {
                'v-autocomplete': !0,
                'v-autocomplete--is-selecting-index': this.selectedIndex > -1,
              }
            )
          },
          computedItems() {
            return this.filteredItems
          },
          selectedValues() {
            const e = this
            return this.selectedItems.map(function (t) {
              return e.getValue(t)
            })
          },
          hasDisplayedItems() {
            const e = this
            return this.hideSelected
              ? this.filteredItems.some(function (t) {
                  return !e.hasItem(t)
                })
              : this.filteredItems.length > 0
          },
          currentRange() {
            return this.selectedItem == null
              ? 0
              : String(this.getText(this.selectedItem)).length
          },
          filteredItems() {
            const e = this
            return !this.isSearching ||
              this.noFilter ||
              this.internalSearch == null
              ? this.allItems
              : this.allItems.filter(function (t) {
                  return e.filter(
                    t,
                    String(e.internalSearch),
                    String(e.getText(t))
                  )
                })
          },
          internalSearch: {
            get() {
              return this.lazySearch
            },
            set(e) {
              ;(this.lazySearch = e), this.$emit('update:search-input', e)
            },
          },
          isAnyValueAllowed() {
            return !1
          },
          isDirty() {
            return this.searchIsDirty || this.selectedItems.length > 0
          },
          isSearching() {
            return (
              (this.multiple && this.searchIsDirty) ||
              (this.searchIsDirty &&
                this.internalSearch !== this.getText(this.selectedItem))
            )
          },
          menuCanShow() {
            return (
              !!this.isFocused && (this.hasDisplayedItems || !this.hideNoData)
            )
          },
          $_menuProps() {
            const e = c.a.options.computed.$_menuProps.call(this)
            return (
              (e.contentClass = 'v-autocomplete__content '
                .concat(e.contentClass || '')
                .trim()),
              v(v({}, m), e)
            )
          },
          searchIsDirty() {
            return this.internalSearch != null && this.internalSearch !== ''
          },
          selectedItem() {
            const e = this
            return this.multiple
              ? null
              : this.selectedItems.find(function (i) {
                  return e.valueComparator(
                    e.getValue(i),
                    e.getValue(e.internalValue)
                  )
                })
          },
          listData() {
            const data = c.a.options.computed.listData.call(this)
            return (
              (data.props = v(
                v({}, data.props),
                {},
                {
                  items: this.virtualizedItems,
                  noFilter:
                    this.noFilter ||
                    !this.isSearching ||
                    !this.filteredItems.length,
                  searchInput: this.internalSearch,
                }
              )),
              data
            )
          },
        },
        watch: {
          filteredItems: 'onFilteredItemsChanged',
          internalValue: 'setSearch',
          isFocused(e) {
            e
              ? (document.addEventListener('copy', this.onCopy),
                this.$refs.input && this.$refs.input.select())
              : (document.removeEventListener('copy', this.onCopy),
                this.updateSelf())
          },
          isMenuActive(e) {
            !e && this.hasSlot && (this.lazySearch = void 0)
          },
          items(e, t) {
            ;(t && t.length) ||
              !this.hideNoData ||
              !this.isFocused ||
              this.isMenuActive ||
              !e.length ||
              this.activateMenu()
          },
          searchInput(e) {
            this.lazySearch = e
          },
          internalSearch: 'onInternalSearchChanged',
          itemText: 'updateSelf',
        },
        created() {
          this.setSearch()
        },
        methods: {
          onFilteredItemsChanged(e, t) {
            const n = this
            e !== t &&
              (this.setMenuIndex(-1),
              this.$nextTick(function () {
                n.internalSearch &&
                  (e.length === 1 || n.autoSelectFirst) &&
                  (n.$refs.menu.getTiles(), n.setMenuIndex(0))
              }))
          },
          onInternalSearchChanged() {
            this.updateMenuDimensions()
          },
          updateMenuDimensions() {
            this.isMenuActive &&
              this.$refs.menu &&
              this.$refs.menu.updateDimensions()
          },
          changeSelectedIndex(e) {
            this.searchIsDirty ||
              (this.multiple && e === d.v.left
                ? this.selectedIndex === -1
                  ? (this.selectedIndex = this.selectedItems.length - 1)
                  : this.selectedIndex--
                : this.multiple && e === d.v.right
                ? this.selectedIndex >= this.selectedItems.length - 1
                  ? (this.selectedIndex = -1)
                  : this.selectedIndex++
                : (e !== d.v.backspace && e !== d.v.delete) ||
                  this.deleteCurrentItem())
          },
          deleteCurrentItem() {
            if (!this.readonly) {
              const e = this.selectedItems.length - 1
              if (this.selectedIndex !== -1 || e === 0) {
                const t = this.selectedItems[this.selectedIndex]
                if (!this.getDisabled(t)) {
                  const n =
                    this.selectedIndex === e
                      ? this.selectedIndex - 1
                      : this.selectedItems[this.selectedIndex + 1]
                      ? this.selectedIndex
                      : -1
                  n === -1
                    ? this.setValue(this.multiple ? [] : void 0)
                    : this.selectItem(t),
                    (this.selectedIndex = n)
                }
              } else this.selectedIndex = e
            }
          },
          clearableCallback() {
            ;(this.internalSearch = void 0),
              c.a.options.methods.clearableCallback.call(this)
          },
          genInput() {
            const input = r.a.options.methods.genInput.call(this)
            return (
              (input.data = Object(l.a)(input.data, {
                attrs: {
                  'aria-activedescendant': Object(d.n)(
                    this.$refs.menu,
                    'activeTile.id'
                  ),
                  autocomplete: Object(d.n)(
                    input.data,
                    'attrs.autocomplete',
                    'off'
                  ),
                },
                domProps: { value: this.internalSearch },
              })),
              input
            )
          },
          genInputSlot() {
            const slot = c.a.options.methods.genInputSlot.call(this)
            return (slot.data.attrs.role = 'combobox'), slot
          },
          genSelections() {
            return this.hasSlot || this.multiple
              ? c.a.options.methods.genSelections.call(this)
              : []
          },
          onClick(e) {
            this.isDisabled ||
              (this.selectedIndex > -1
                ? (this.selectedIndex = -1)
                : this.onFocus(),
              this.isAppendInner(e.target) || this.activateMenu())
          },
          onInput(e) {
            if (!(this.selectedIndex > -1) && e.target) {
              const t = e.target
              const n = t.value
              t.value && this.activateMenu(),
                (this.internalSearch = n),
                (this.badInput = t.validity && t.validity.badInput)
            }
          },
          onKeyDown(e) {
            const t = e.keyCode
            c.a.options.methods.onKeyDown.call(this, e),
              this.changeSelectedIndex(t)
          },
          onSpaceDown(e) {},
          onTabDown(e) {
            c.a.options.methods.onTabDown.call(this, e), this.updateSelf()
          },
          onUpDown(e) {
            e.preventDefault(), this.activateMenu()
          },
          selectItem(e) {
            c.a.options.methods.selectItem.call(this, e), this.setSearch()
          },
          setSelectedItems() {
            c.a.options.methods.setSelectedItems.call(this),
              this.isFocused || this.setSearch()
          },
          setSearch() {
            const e = this
            this.$nextTick(function () {
              ;(e.multiple && e.internalSearch && e.isMenuActive) ||
                (e.internalSearch =
                  !e.selectedItems.length || e.multiple || e.hasSlot
                    ? null
                    : e.getText(e.selectedItem))
            })
          },
          updateSelf() {
            ;(this.searchIsDirty || this.internalValue) &&
              (this.valueComparator(
                this.internalSearch,
                this.getValue(this.internalValue)
              ) ||
                this.setSearch())
          },
          hasItem(e) {
            return this.selectedValues.includes(this.getValue(e))
          },
          onCopy(e) {
            if (this.selectedIndex !== -1) {
              const t = this.selectedItems[this.selectedIndex]
              const n = this.getText(t)
              e.clipboardData.setData('text/plain', n),
                e.clipboardData.setData(
                  'text/vnd.vuetify.autocomplete.item+plain',
                  n
                ),
                e.preventDefault()
            }
          },
        },
      })
    },
    624(e, t, n) {
      'use strict'
      n(28)
      const o = n(412)
      const c = n(446)
      const r = {
        props: {
          champions: {
            type: Array,
            default() {
              return []
            },
          },
        },
        data() {
          return {
            listOfSkins: Object.assign(c),
            listOfChampions: Object.assign(o),
            skins: [],
            pickedSkins: [],
          }
        },
        watch: {
          champions() {
            this.getSkins()
          },
        },
        methods: {
          getSkins() {
            const e = this
            this.skins = []
            let t = ''
            this.champions.forEach(function (n) {
              for (
                let o = function (i) {
                    e.listOfChampions[i].key == n &&
                      (e.skins.push({ header: e.listOfChampions[i].name }),
                      e.listOfSkins.forEach(function (o) {
                        o.id === n &&
                          o.info.forEach(function (n) {
                            n.isBase ||
                              ((t = (t =
                                'https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/').concat(
                                n.tilePath.slice(40)
                              )),
                              e.skins.push({
                                name: n.name,
                                group: e.listOfChampions[i].name,
                                code: n.id,
                                avatar: t,
                              }))
                          })
                      }))
                  },
                  i = 0;
                i < e.listOfChampions.length;
                i++
              )
                o(i)
            })
          },
          onChange(e) {
            this.pickedSkins = []
            for (let i = 0; i < e.length; i++) this.pickedSkins.push(e[i].code)
            this.$emit('changed', this.pickedSkins)
          },
        },
      }
      const l = n(21)
      const d = n(27)
      const h = n.n(d)
      const v = n(456)
      const m = n(162)
      const f = n(133)
      const component = Object(l.a)(
        r,
        function () {
          const e = this
          const t = e.$createElement
          const n = e._self._c || t
          return n('v-autocomplete', {
            attrs: {
              color: 'accent3',
              'item-color': 'opposite',
              items: e.skins,
              clearable: '',
              multiple: '',
              label: 'Aspectos',
              'item-text': 'name',
              'item-value': 'code',
              autocomplete: '',
              'return-object': '',
            },
            on: {
              change(t) {
                return e.onChange(t)
              },
            },
            scopedSlots: e._u([
              {
                key: 'selection',
                fn(data) {
                  return [
                    n(
                      'v-avatar',
                      [
                        n('v-img', {
                          attrs: {
                            'max-height': '30',
                            'max-width': '30',
                            src: data.item.avatar,
                          },
                        }),
                      ],
                      1
                    ),
                    e._v('\n    ' + e._s(data.item.name) + '\n  '),
                  ]
                },
              },
              {
                key: 'item',
                fn(data) {
                  return [
                    [
                      n(
                        'v-avatar',
                        [
                          n('v-img', {
                            attrs: {
                              src: data.item.avatar,
                              'max-height': '100',
                              'max-width': '100',
                            },
                          }),
                        ],
                        1
                      ),
                      e._v('\n      ' + e._s(data.item.name) + '\n    '),
                    ],
                  ]
                },
              },
            ]),
          })
        },
        [],
        !1,
        null,
        null,
        null
      )
      t.a = component.exports
      h()(component, { VAutocomplete: v.a, VAvatar: m.a, VImg: f.a })
    },
    687(e, t, n) {
      'use strict'
      n.r(t)
      n(76)
      const o = n(24)
      const c = n(427)
      const r = n(439)
      const l = n(624)
      const d = n(419)
      const h = {
        components: {
          ServerPicker: r.a,
          ChampionsPicker: c.a,
          SkinPicker: l.a,
          LeaguePicker: d.a,
        },
        data() {
          return {
            valid: !0,
            loading: !1,
            account: {
              previous_rank: {},
              solo_rank: {},
              flex_rank: {},
              tft_rank: {},
              blue_essence: '',
              orange_essence: '',
              rp: '',
              champions: [],
              skins: [],
              icons: 0,
            },
          }
        },
        methods: {
          sellAccount() {
            const e = this
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.$refs.form.validate(),
                            (e.loading = !0),
                            (e.account.owner = e.$store.state.user._id),
                            (t.prev = 3),
                            (t.next = 6),
                            e.$axios
                              .post('/accounts', e.account)
                              .then(e.$router.push('vendida'))
                          )
                        case 6:
                          t.next = 11
                          break
                        case 8:
                          ;(t.prev = 8),
                            (t.t0 = t.catch(3)),
                            (e.error = t.t0.response.data.message)
                        case 11:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[3, 8]]
                )
              })
            )()
          },
          pickPreviousLeague(e) {
            this.account.previous_rank.league = e
          },
          pickPreviousDivision(e) {
            this.account.previous_rank.division = e
          },
          pickSoloLeague(e) {
            this.account.solo_rank.league = e
          },
          pickSoloDivision(e) {
            this.account.solo_rank.division = e
          },
          pickFlexLeague(e) {
            this.account.flex_rank.league = e
          },
          pickFlexDivision(e) {
            this.account.flex_rank.division = e
          },
          pickTftLeague(e) {
            this.account.tft_rank.league = e
          },
          pickTftDivision(e) {
            this.account.tft_rank.division = e
          },
          pickChampions(e) {
            this.account.champions = e
          },
          pickSkins(e) {
            this.account.skins = e
          },
          pickServer(e) {
            this.account.server = e
          },
        },
        head() {
          return { title: 'Vender cuenta' }
        },
      }
      const v = n(21)
      const m = n(27)
      const f = n.n(m)
      const x = n(157)
      const k = n(156)
      const _ = n(44)
      const I = n(381)
      const S = n(398)
      const y = n(392)
      const C = n(385)
      const D = n(158)
      const w = n(382)
      const O = n(388)
      const V = n(366)
      const component = Object(v.a)(
        h,
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
                        'v-card',
                        { staticClass: 'pb-5' },
                        [
                          n(
                            'v-row',
                            { attrs: { 'no-gutters': '' } },
                            [
                              n('v-card-title', [
                                e._v('Anterior temporada solo/dúo'),
                              ]),
                              e._v(' '),
                              n(
                                'v-card-text',
                                [
                                  n('LeaguePicker', {
                                    on: {
                                      changed: e.pickPreviousLeague,
                                      pickedDivision: e.pickPreviousDivision,
                                    },
                                  }),
                                ],
                                1
                              ),
                              e._v(' '),
                              n('v-card-title', [e._v('Solo/dúo')]),
                              e._v(' '),
                              n(
                                'v-card-text',
                                [
                                  n('LeaguePicker', {
                                    on: {
                                      changed: e.pickSoloLeague,
                                      pickedDivision: e.pickSoloDivision,
                                    },
                                  }),
                                ],
                                1
                              ),
                              e._v(' '),
                              n('v-card-title', [e._v('Flexible')]),
                              e._v(' '),
                              n(
                                'v-card-text',
                                [
                                  n('LeaguePicker', {
                                    on: {
                                      changed: e.pickFlexLeague,
                                      pickedDivision: e.pickFlexDivision,
                                    },
                                  }),
                                ],
                                1
                              ),
                              e._v(' '),
                              n('v-card-title', [e._v('TFT')]),
                              e._v(' '),
                              n(
                                'v-card-text',
                                [
                                  n('LeaguePicker', {
                                    on: {
                                      changed: e.pickTftLeague,
                                      pickedDivision: e.pickTftDivision,
                                    },
                                  }),
                                ],
                                1
                              ),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('ServerPicker', {
                                        on: { defchange: e.pickServer },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n('v-spacer'),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('v-text-field', {
                                        attrs: {
                                          rules: [
                                            function (e) {
                                              return !!e || 'Necesario'
                                            },
                                          ],
                                          color: 'opposite',
                                          label: 'Iconos',
                                          type: 'number',
                                        },
                                        model: {
                                          value: e.account.icons,
                                          callback(t) {
                                            e.$set(e.account, 'icons', t)
                                          },
                                          expression: 'account.icons',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('v-text-field', {
                                        attrs: { label: 'Nombre de usuario' },
                                        model: {
                                          value: e.account.username,
                                          callback(t) {
                                            e.$set(e.account, 'username', t)
                                          },
                                          expression: 'account.username',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n('v-spacer'),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('v-text-field', {
                                        attrs: {
                                          type: 'password',
                                          label: 'Contraseña',
                                        },
                                        model: {
                                          value: e.account.password,
                                          callback(t) {
                                            e.$set(e.account, 'password', t)
                                          },
                                          expression: 'account.password',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('ChampionsPicker', {
                                        on: { changed: e.pickChampions },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n('v-spacer'),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('SkinPicker', {
                                        attrs: {
                                          champions: e.account.champions,
                                        },
                                        on: { changed: e.pickSkins },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('v-text-field', {
                                        attrs: {
                                          required: '',
                                          rules: [
                                            function (e) {
                                              return !!e || 'Necesario'
                                            },
                                          ],
                                          color: 'opposite',
                                          label: 'Riot Points',
                                          type: 'number',
                                        },
                                        model: {
                                          value: e.account.rp,
                                          callback(t) {
                                            e.$set(e.account, 'rp', t)
                                          },
                                          expression: 'account.rp',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n('v-spacer'),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('v-text-field', {
                                        attrs: {
                                          required: '',
                                          rules: [
                                            function (e) {
                                              return !!e || 'Necesario'
                                            },
                                          ],
                                          color: 'opposite',
                                          label: 'Nivel',
                                          type: 'number',
                                        },
                                        model: {
                                          value: e.account.level,
                                          callback(t) {
                                            e.$set(e.account, 'level', t)
                                          },
                                          expression: 'account.level',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('v-text-field', {
                                        attrs: {
                                          required: '',
                                          rules: [
                                            function (e) {
                                              return !!e || 'Necesario'
                                            },
                                          ],
                                          color: 'opposite',
                                          label: 'Escencia azul',
                                          type: 'number',
                                        },
                                        model: {
                                          value: e.account.blue_essence,
                                          callback(t) {
                                            e.$set(e.account, 'blue_essence', t)
                                          },
                                          expression: 'account.blue_essence',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n('v-spacer'),
                              e._v(' '),
                              n(
                                'v-col',
                                { attrs: { cols: '5', md: '5', sm: '10' } },
                                [
                                  n(
                                    'v-card-text',
                                    [
                                      n('v-text-field', {
                                        attrs: {
                                          required: '',
                                          rules: [
                                            function (e) {
                                              return !!e || 'Necesario'
                                            },
                                          ],
                                          color: 'opposite',
                                          label: 'Escencia naranja',
                                          type: 'number',
                                        },
                                        model: {
                                          value: e.account.orange_essence,
                                          callback(t) {
                                            e.$set(
                                              e.account,
                                              'orange_essence',
                                              t
                                            )
                                          },
                                          expression: 'account.orange_essence',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              e._v(' '),
                              n(
                                'v-col',
                                {
                                  staticClass: 'text-center',
                                  attrs: { cols: '12' },
                                },
                                [
                                  n(
                                    'v-btn',
                                    {
                                      attrs: {
                                        loading: e.loading,
                                        disabled: !e.valid,
                                        color: 'accent2',
                                      },
                                      on: {
                                        click(t) {
                                          return e.sellAccount()
                                        },
                                      },
                                    },
                                    [
                                      n('v-icon', { attrs: { left: '' } }, [
                                        e._v('mdi-checkbox-marked-circle'),
                                      ]),
                                      e._v(
                                        '\n              Vender cuenta\n            '
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
      f()(component, {
        VBtn: x.a,
        VCard: k.a,
        VCardText: _.c,
        VCardTitle: _.d,
        VCol: I.a,
        VContainer: S.a,
        VContent: y.a,
        VForm: C.a,
        VIcon: D.a,
        VRow: w.a,
        VSpacer: O.a,
        VTextField: V.a,
      })
    },
  },
])
