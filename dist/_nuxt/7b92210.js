;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    644(t, e, n) {
      'use strict'
      n(17), n(18), n(5), n(62)
      const r = n(20)
      const o = (n(645), n(437))
      const c = n(35)
      const l = n(82)
      const h = n(2)
      e.a = h.default.extend({
        name: 'v-data-footer',
        props: {
          options: { type: Object, required: !0 },
          pagination: { type: Object, required: !0 },
          itemsPerPageOptions: {
            type: Array,
            default() {
              return [5, 10, 15, -1]
            },
          },
          prevIcon: { type: String, default: '$prev' },
          nextIcon: { type: String, default: '$next' },
          firstIcon: { type: String, default: '$first' },
          lastIcon: { type: String, default: '$last' },
          itemsPerPageText: {
            type: String,
            default: '$vuetify.dataFooter.itemsPerPageText',
          },
          itemsPerPageAllText: {
            type: String,
            default: '$vuetify.dataFooter.itemsPerPageAll',
          },
          showFirstLastPage: Boolean,
          showCurrentPage: Boolean,
          disablePagination: Boolean,
          disableItemsPerPage: Boolean,
          pageText: { type: String, default: '$vuetify.dataFooter.pageText' },
        },
        computed: {
          disableNextPageIcon() {
            return (
              this.options.itemsPerPage <= 0 ||
              this.options.page * this.options.itemsPerPage >=
                this.pagination.itemsLength ||
              this.pagination.pageStop < 0
            )
          },
          computedDataItemsPerPageOptions() {
            const t = this
            return this.itemsPerPageOptions.map(function (option) {
              return Object(r.a)(option) === 'object'
                ? option
                : t.genDataItemsPerPageOption(option)
            })
          },
        },
        methods: {
          updateOptions(t) {
            this.$emit('update:options', Object.assign({}, this.options, t))
          },
          onFirstPage() {
            this.updateOptions({ page: 1 })
          },
          onPreviousPage() {
            this.updateOptions({ page: this.options.page - 1 })
          },
          onNextPage() {
            this.updateOptions({ page: this.options.page + 1 })
          },
          onLastPage() {
            this.updateOptions({ page: this.pagination.pageCount })
          },
          onChangeItemsPerPage(t) {
            this.updateOptions({ itemsPerPage: t, page: 1 })
          },
          genDataItemsPerPageOption(option) {
            return {
              text:
                option === -1
                  ? this.$vuetify.lang.t(this.itemsPerPageAllText)
                  : String(option),
              value: option,
            }
          },
          genItemsPerPageSelect() {
            let t = this.options.itemsPerPage
            const e = this.computedDataItemsPerPageOptions
            return e.length <= 1
              ? null
              : (e.find(function (e) {
                  return e.value === t
                }) || (t = e[0]),
                this.$createElement(
                  'div',
                  { staticClass: 'v-data-footer__select' },
                  [
                    this.$vuetify.lang.t(this.itemsPerPageText),
                    this.$createElement(o.a, {
                      attrs: { 'aria-label': this.itemsPerPageText },
                      props: {
                        disabled: this.disableItemsPerPage,
                        items: e,
                        value: t,
                        hideDetails: !0,
                        auto: !0,
                        minWidth: '75px',
                      },
                      on: { input: this.onChangeItemsPerPage },
                    }),
                  ]
                ))
          },
          genPaginationInfo() {
            let t = ['–']
            if (this.pagination.itemsLength && this.pagination.itemsPerPage) {
              const e = this.pagination.itemsLength
              const n = this.pagination.pageStart + 1
              const r =
                e < this.pagination.pageStop || this.pagination.pageStop < 0
                  ? e
                  : this.pagination.pageStop
              t = this.$scopedSlots['page-text']
                ? [
                    this.$scopedSlots['page-text']({
                      pageStart: n,
                      pageStop: r,
                      itemsLength: e,
                    }),
                  ]
                : [this.$vuetify.lang.t(this.pageText, n, r, e)]
            }
            return this.$createElement(
              'div',
              { class: 'v-data-footer__pagination' },
              t
            )
          },
          genIcon(t, e, label, n) {
            return this.$createElement(
              l.a,
              {
                props: {
                  disabled: e || this.disablePagination,
                  icon: !0,
                  text: !0,
                },
                on: { click: t },
                attrs: { 'aria-label': label },
              },
              [this.$createElement(c.a, n)]
            )
          },
          genIcons() {
            const t = []
            const e = []
            return (
              t.push(
                this.genIcon(
                  this.onPreviousPage,
                  this.options.page === 1,
                  this.$vuetify.lang.t('$vuetify.dataFooter.prevPage'),
                  this.$vuetify.rtl ? this.nextIcon : this.prevIcon
                )
              ),
              e.push(
                this.genIcon(
                  this.onNextPage,
                  this.disableNextPageIcon,
                  this.$vuetify.lang.t('$vuetify.dataFooter.nextPage'),
                  this.$vuetify.rtl ? this.prevIcon : this.nextIcon
                )
              ),
              this.showFirstLastPage &&
                (t.unshift(
                  this.genIcon(
                    this.onFirstPage,
                    this.options.page === 1,
                    this.$vuetify.lang.t('$vuetify.dataFooter.firstPage'),
                    this.$vuetify.rtl ? this.lastIcon : this.firstIcon
                  )
                ),
                e.push(
                  this.genIcon(
                    this.onLastPage,
                    this.options.page >= this.pagination.pageCount ||
                      this.options.itemsPerPage === -1,
                    this.$vuetify.lang.t('$vuetify.dataFooter.lastPage'),
                    this.$vuetify.rtl ? this.firstIcon : this.lastIcon
                  )
                )),
              [
                this.$createElement(
                  'div',
                  { staticClass: 'v-data-footer__icons-before' },
                  t
                ),
                this.showCurrentPage &&
                  this.$createElement('span', [this.options.page.toString()]),
                this.$createElement(
                  'div',
                  { staticClass: 'v-data-footer__icons-after' },
                  e
                ),
              ]
            )
          },
        },
        render() {
          return this.$createElement('div', { staticClass: 'v-data-footer' }, [
            this.genItemsPerPageSelect(),
            this.genPaginationInfo(),
            this.genIcons(),
          ])
        },
      })
    },
    645(t, e, n) {
      let content = n(646)
      typeof content == 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('79d48750', content, !0, { sourceMap: !1 })
    },
    646(t, e, n) {
      ;(e = n(11)(!1)).push([
        t.i,
        '.v-data-footer{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;font-size:.75rem;padding:0 8px}.v-data-footer .v-btn{color:inherit}.v-application--is-ltr .v-data-footer__icons-before .v-btn:last-child{margin-right:7px}.v-application--is-ltr .v-data-footer__icons-after .v-btn:first-child,.v-application--is-rtl .v-data-footer__icons-before .v-btn:last-child{margin-left:7px}.v-application--is-rtl .v-data-footer__icons-after .v-btn:first-child{margin-right:7px}.v-data-footer__pagination{display:block;text-align:center}.v-application--is-ltr .v-data-footer__pagination{margin:0 32px 0 24px}.v-application--is-rtl .v-data-footer__pagination{margin:0 24px 0 32px}.v-data-footer__select{display:flex;align-items:center;flex:0 0 0;justify-content:flex-end;white-space:nowrap}.v-application--is-ltr .v-data-footer__select{margin-right:14px}.v-application--is-rtl .v-data-footer__select{margin-left:14px}.v-data-footer__select .v-select{flex:0 1 0;padding:0;position:static}.v-application--is-ltr .v-data-footer__select .v-select{margin:13px 0 13px 34px}.v-application--is-rtl .v-data-footer__select .v-select{margin:13px 34px 13px 0}.v-data-footer__select .v-select__selections{flex-wrap:nowrap}.v-data-footer__select .v-select__selections .v-select__selection--comma{font-size:.75rem}',
        '',
      ]),
        (t.exports = e)
    },
    663(t, e, n) {
      'use strict'
      n(10), n(9)
      const r = n(25)
      const o = (n(26), n(30), n(168), n(6), n(5), n(8), n(14), n(1))
      const c = n(664)
      const l = n(644)
      const h = n(13)
      const d = n(0)
      const f = n(7)
      function m(object, t) {
        const e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function y(t) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? m(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : m(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      e.a = h.a.extend({
        name: 'v-data-iterator',
        props: y(
          y({}, c.a.options.props),
          {},
          {
            itemKey: { type: String, default: 'id' },
            value: {
              type: Array,
              default() {
                return []
              },
            },
            singleSelect: Boolean,
            expanded: {
              type: Array,
              default() {
                return []
              },
            },
            mobileBreakpoint: { type: [Number, String], default: 600 },
            singleExpand: Boolean,
            loading: [Boolean, String],
            noResultsText: {
              type: String,
              default: '$vuetify.dataIterator.noResultsText',
            },
            noDataText: { type: String, default: '$vuetify.noDataText' },
            loadingText: {
              type: String,
              default: '$vuetify.dataIterator.loadingText',
            },
            hideDefaultFooter: Boolean,
            footerProps: Object,
            selectableKey: { type: String, default: 'isSelectable' },
          }
        ),
        data() {
          return { selection: {}, expansion: {}, internalCurrentItems: [] }
        },
        computed: {
          everyItem() {
            const t = this
            return (
              !!this.selectableItems.length &&
              this.selectableItems.every(function (i) {
                return t.isSelected(i)
              })
            )
          },
          someItems() {
            const t = this
            return this.selectableItems.some(function (i) {
              return t.isSelected(i)
            })
          },
          sanitizedFooterProps() {
            return Object(d.d)(this.footerProps)
          },
          selectableItems() {
            const t = this
            return this.internalCurrentItems.filter(function (e) {
              return t.isSelectable(e)
            })
          },
          isMobile() {
            return (
              this.$vuetify.breakpoint.width !== 0 &&
              this.$vuetify.breakpoint.width <
                parseInt(this.mobileBreakpoint, 10)
            )
          },
        },
        watch: {
          value: {
            handler(t) {
              const e = this
              this.selection = t.reduce(function (t, n) {
                return (t[Object(d.n)(n, e.itemKey)] = n), t
              }, {})
            },
            immediate: !0,
          },
          selection(t, e) {
            Object(d.j)(Object.keys(t), Object.keys(e)) ||
              this.$emit('input', Object.values(t))
          },
          expanded: {
            handler(t) {
              const e = this
              this.expansion = t.reduce(function (t, n) {
                return (t[Object(d.n)(n, e.itemKey)] = !0), t
              }, {})
            },
            immediate: !0,
          },
          expansion(t, e) {
            const n = this
            if (!Object(d.j)(t, e)) {
              const r = Object.keys(t).filter(function (e) {
                return t[e]
              })
              const o = r.length
                ? this.items.filter(function (i) {
                    return r.includes(String(Object(d.n)(i, n.itemKey)))
                  })
                : []
              this.$emit('update:expanded', o)
            }
          },
        },
        created() {
          const t = this
          ;[
            ['disable-initial-sort', 'sort-by'],
            ['filter', 'custom-filter'],
            ['pagination', 'options'],
            ['total-items', 'server-items-length'],
            ['hide-actions', 'hide-default-footer'],
            ['rows-per-page-items', 'footer-props.items-per-page-options'],
            ['rows-per-page-text', 'footer-props.items-per-page-text'],
            ['prev-icon', 'footer-props.prev-icon'],
            ['next-icon', 'footer-props.next-icon'],
          ].forEach(function (e) {
            const n = Object(r.a)(e, 2)
            const o = n[0]
            const c = n[1]
            t.$attrs.hasOwnProperty(o) && Object(f.a)(o, c, t)
          })
          ;['expand', 'content-class', 'content-props', 'content-tag'].forEach(
            function (e) {
              t.$attrs.hasOwnProperty(e) && Object(f.d)(e)
            }
          )
        },
        methods: {
          toggleSelectAll(t) {
            for (
              var e = Object.assign({}, this.selection), i = 0;
              i < this.selectableItems.length;
              i++
            ) {
              const n = this.selectableItems[i]
              if (this.isSelectable(n)) {
                const r = Object(d.n)(n, this.itemKey)
                t ? (e[r] = n) : delete e[r]
              }
            }
            ;(this.selection = e),
              this.$emit('toggle-select-all', {
                items: this.internalCurrentItems,
                value: t,
              })
          },
          isSelectable(t) {
            return !1 !== Object(d.n)(t, this.selectableKey)
          },
          isSelected(t) {
            return !!this.selection[Object(d.n)(t, this.itemKey)] || !1
          },
          select(t) {
            const e =
              !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
            const n =
              !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
            if (this.isSelectable(t)) {
              const r = this.singleSelect
                ? {}
                : Object.assign({}, this.selection)
              const o = Object(d.n)(t, this.itemKey)
              if ((e ? (r[o] = t) : delete r[o], this.singleSelect && n)) {
                const c = Object.keys(this.selection)
                const l =
                  c.length && Object(d.n)(this.selection[c[0]], this.itemKey)
                l &&
                  l !== o &&
                  this.$emit('item-selected', {
                    item: this.selection[l],
                    value: !1,
                  })
              }
              ;(this.selection = r),
                n && this.$emit('item-selected', { item: t, value: e })
            }
          },
          isExpanded(t) {
            return this.expansion[Object(d.n)(t, this.itemKey)] || !1
          },
          expand(t) {
            const e =
              !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
            const n = this.singleExpand ? {} : Object.assign({}, this.expansion)
            const r = Object(d.n)(t, this.itemKey)
            e ? (n[r] = !0) : delete n[r],
              (this.expansion = n),
              this.$emit('item-expanded', { item: t, value: e })
          },
          createItemProps(t) {
            const e = this
            return {
              item: t,
              select(n) {
                return e.select(t, n)
              },
              isSelected: this.isSelected(t),
              expand(n) {
                return e.expand(t, n)
              },
              isExpanded: this.isExpanded(t),
              isMobile: this.isMobile,
            }
          },
          genEmptyWrapper(content) {
            return this.$createElement('div', content)
          },
          genEmpty(t, e) {
            if (t === 0 && this.loading) {
              const n =
                this.$slots.loading || this.$vuetify.lang.t(this.loadingText)
              return this.genEmptyWrapper(n)
            }
            if (t === 0) {
              const r =
                this.$slots['no-data'] || this.$vuetify.lang.t(this.noDataText)
              return this.genEmptyWrapper(r)
            }
            if (e === 0) {
              const o =
                this.$slots['no-results'] ||
                this.$vuetify.lang.t(this.noResultsText)
              return this.genEmptyWrapper(o)
            }
            return null
          },
          genItems(t) {
            const e = this
            const n = this.genEmpty(
              t.originalItemsLength,
              t.pagination.itemsLength
            )
            return n
              ? [n]
              : this.$scopedSlots.default
              ? this.$scopedSlots.default(
                  y(
                    y({}, t),
                    {},
                    {
                      isSelected: this.isSelected,
                      select: this.select,
                      isExpanded: this.isExpanded,
                      expand: this.expand,
                    }
                  )
                )
              : this.$scopedSlots.item
              ? t.items.map(function (t) {
                  return e.$scopedSlots.item(e.createItemProps(t))
                })
              : []
          },
          genFooter(t) {
            if (this.hideDefaultFooter) return null
            const data = {
              props: y(
                y({}, this.sanitizedFooterProps),
                {},
                { options: t.options, pagination: t.pagination }
              ),
              on: {
                'update:options'(e) {
                  return t.updateOptions(e)
                },
              },
            }
            const e = Object(d.o)('footer.', this.$scopedSlots)
            return this.$createElement(l.a, y({ scopedSlots: e }, data))
          },
          genDefaultScopedSlot(t) {
            const e = y(
              y({}, t),
              {},
              {
                someItems: this.someItems,
                everyItem: this.everyItem,
                toggleSelectAll: this.toggleSelectAll,
              }
            )
            return this.$createElement(
              'div',
              { staticClass: 'v-data-iterator' },
              [
                Object(d.q)(this, 'header', e, !0),
                this.genItems(t),
                this.genFooter(t),
                Object(d.q)(this, 'footer', e, !0),
              ]
            )
          },
        },
        render() {
          const t = this
          return this.$createElement(c.a, {
            props: this.$props,
            on: {
              'update:options'(e, n) {
                return !Object(d.j)(e, n) && t.$emit('update:options', e)
              },
              'update:page'(e) {
                return t.$emit('update:page', e)
              },
              'update:items-per-page'(e) {
                return t.$emit('update:items-per-page', e)
              },
              'update:sort-by'(e) {
                return t.$emit('update:sort-by', e)
              },
              'update:sort-desc'(e) {
                return t.$emit('update:sort-desc', e)
              },
              'update:group-by'(e) {
                return t.$emit('update:group-by', e)
              },
              'update:group-desc'(e) {
                return t.$emit('update:group-desc', e)
              },
              pagination(e, n) {
                return !Object(d.j)(e, n) && t.$emit('pagination', e)
              },
              'current-items'(e) {
                ;(t.internalCurrentItems = e), t.$emit('current-items', e)
              },
              'page-count'(e) {
                return t.$emit('page-count', e)
              },
            },
            scopedSlots: { default: this.genDefaultScopedSlot },
          })
        },
      })
    },
    664(t, e, n) {
      'use strict'
      n(10), n(9), n(6), n(5), n(8)
      const r = n(56)
      const o = (n(136), n(1))
      const c = (n(220), n(14), n(0))
      const l = n(2)
      function h(object, t) {
        const e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function d(t) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? h(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      e.a = l.default.extend({
        name: 'v-data',
        inheritAttrs: !1,
        props: {
          items: {
            type: Array,
            default() {
              return []
            },
          },
          options: {
            type: Object,
            default() {
              return {}
            },
          },
          sortBy: {
            type: [String, Array],
            default() {
              return []
            },
          },
          sortDesc: {
            type: [Boolean, Array],
            default() {
              return []
            },
          },
          customSort: { type: Function, default: c.B },
          mustSort: Boolean,
          multiSort: Boolean,
          page: { type: Number, default: 1 },
          itemsPerPage: { type: Number, default: 10 },
          groupBy: {
            type: [String, Array],
            default() {
              return []
            },
          },
          groupDesc: {
            type: [Boolean, Array],
            default() {
              return []
            },
          },
          customGroup: { type: Function, default: c.t },
          locale: { type: String, default: 'en-US' },
          disableSort: Boolean,
          disablePagination: Boolean,
          disableFiltering: Boolean,
          search: String,
          customFilter: { type: Function, default: c.A },
          serverItemsLength: { type: Number, default: -1 },
        },
        data() {
          let t = {
            page: this.page,
            itemsPerPage: this.itemsPerPage,
            sortBy: Object(c.D)(this.sortBy),
            sortDesc: Object(c.D)(this.sortDesc),
            groupBy: Object(c.D)(this.groupBy),
            groupDesc: Object(c.D)(this.groupDesc),
            mustSort: this.mustSort,
            multiSort: this.multiSort,
          }
          return (
            this.options && (t = Object.assign(t, this.options)),
            { internalOptions: t }
          )
        },
        computed: {
          itemsLength() {
            return this.serverItemsLength >= 0
              ? this.serverItemsLength
              : this.filteredItems.length
          },
          pageCount() {
            return this.internalOptions.itemsPerPage <= 0
              ? 1
              : Math.ceil(this.itemsLength / this.internalOptions.itemsPerPage)
          },
          pageStart() {
            return this.internalOptions.itemsPerPage !== -1 && this.items.length
              ? (this.internalOptions.page - 1) *
                  this.internalOptions.itemsPerPage
              : 0
          },
          pageStop() {
            return this.internalOptions.itemsPerPage === -1
              ? this.itemsLength
              : this.items.length
              ? Math.min(
                  this.itemsLength,
                  this.internalOptions.page * this.internalOptions.itemsPerPage
                )
              : 0
          },
          isGrouped() {
            return !!this.internalOptions.groupBy.length
          },
          pagination() {
            return {
              page: this.internalOptions.page,
              itemsPerPage: this.internalOptions.itemsPerPage,
              pageStart: this.pageStart,
              pageStop: this.pageStop,
              pageCount: this.pageCount,
              itemsLength: this.itemsLength,
            }
          },
          filteredItems() {
            let t = this.items.slice()
            return (
              !this.disableFiltering &&
                this.serverItemsLength <= 0 &&
                (t = this.customFilter(t, this.search)),
              t
            )
          },
          computedItems() {
            let t = this.filteredItems.slice()
            return (
              !this.disableSort &&
                this.serverItemsLength <= 0 &&
                (t = this.sortItems(t)),
              !this.disablePagination &&
                this.serverItemsLength <= 0 &&
                (t = this.paginateItems(t)),
              t
            )
          },
          groupedItems() {
            return this.isGrouped ? this.groupItems(this.computedItems) : null
          },
          scopedProps() {
            return {
              sort: this.sort,
              sortArray: this.sortArray,
              group: this.group,
              items: this.computedItems,
              options: this.internalOptions,
              updateOptions: this.updateOptions,
              pagination: this.pagination,
              groupedItems: this.groupedItems,
              originalItemsLength: this.items.length,
            }
          },
          computedOptions() {
            return d({}, this.options)
          },
        },
        watch: {
          computedOptions: {
            handler(t, e) {
              Object(c.j)(t, e) || this.updateOptions(t)
            },
            deep: !0,
            immediate: !0,
          },
          internalOptions: {
            handler(t, e) {
              Object(c.j)(t, e) || this.$emit('update:options', t)
            },
            deep: !0,
            immediate: !0,
          },
          page(t) {
            this.updateOptions({ page: t })
          },
          'internalOptions.page'(t) {
            this.$emit('update:page', t)
          },
          itemsPerPage(t) {
            this.updateOptions({ itemsPerPage: t })
          },
          'internalOptions.itemsPerPage'(t) {
            this.$emit('update:items-per-page', t)
          },
          sortBy(t) {
            this.updateOptions({ sortBy: Object(c.D)(t) })
          },
          'internalOptions.sortBy'(t, e) {
            !Object(c.j)(t, e) &&
              this.$emit(
                'update:sort-by',
                Array.isArray(this.sortBy) ? t : t[0]
              )
          },
          sortDesc(t) {
            this.updateOptions({ sortDesc: Object(c.D)(t) })
          },
          'internalOptions.sortDesc'(t, e) {
            !Object(c.j)(t, e) &&
              this.$emit(
                'update:sort-desc',
                Array.isArray(this.sortDesc) ? t : t[0]
              )
          },
          groupBy(t) {
            this.updateOptions({ groupBy: Object(c.D)(t) })
          },
          'internalOptions.groupBy'(t, e) {
            !Object(c.j)(t, e) &&
              this.$emit(
                'update:group-by',
                Array.isArray(this.groupBy) ? t : t[0]
              )
          },
          groupDesc(t) {
            this.updateOptions({ groupDesc: Object(c.D)(t) })
          },
          'internalOptions.groupDesc'(t, e) {
            !Object(c.j)(t, e) &&
              this.$emit(
                'update:group-desc',
                Array.isArray(this.groupDesc) ? t : t[0]
              )
          },
          multiSort(t) {
            this.updateOptions({ multiSort: t })
          },
          'internalOptions.multiSort'(t) {
            this.$emit('update:multi-sort', t)
          },
          mustSort(t) {
            this.updateOptions({ mustSort: t })
          },
          'internalOptions.mustSort'(t) {
            this.$emit('update:must-sort', t)
          },
          pageCount: {
            handler(t) {
              this.$emit('page-count', t)
            },
            immediate: !0,
          },
          computedItems: {
            handler(t) {
              this.$emit('current-items', t)
            },
            immediate: !0,
          },
          pagination: {
            handler(t, e) {
              Object(c.j)(t, e) || this.$emit('pagination', this.pagination)
            },
            immediate: !0,
          },
        },
        methods: {
          toggle(t, e, n, r, o, l) {
            let h = e.slice()
            let desc = n.slice()
            const d = h.findIndex(function (e) {
              return e === t
            })
            return (
              d < 0
                ? (l || ((h = []), (desc = [])), h.push(t), desc.push(!1))
                : d >= 0 && !desc[d]
                ? (desc[d] = !0)
                : o
                ? (desc[d] = !1)
                : (h.splice(d, 1), desc.splice(d, 1)),
              (Object(c.j)(h, e) && Object(c.j)(desc, n)) || (r = 1),
              { by: h, desc, page: r }
            )
          },
          group(t) {
            const e = this.toggle(
              t,
              this.internalOptions.groupBy,
              this.internalOptions.groupDesc,
              this.internalOptions.page,
              !0,
              !1
            )
            const n = e.by
            const r = e.desc
            const o = e.page
            this.updateOptions({ groupBy: n, groupDesc: r, page: o })
          },
          sort(t) {
            if (Array.isArray(t)) return this.sortArray(t)
            const e = this.toggle(
              t,
              this.internalOptions.sortBy,
              this.internalOptions.sortDesc,
              this.internalOptions.page,
              this.mustSort,
              this.multiSort
            )
            const n = e.by
            const r = e.desc
            const o = e.page
            this.updateOptions({ sortBy: n, sortDesc: r, page: o })
          },
          sortArray(t) {
            const e = this
            const n = t.map(function (s) {
              const i = e.internalOptions.sortBy.findIndex(function (t) {
                return t === s
              })
              return i > -1 && e.internalOptions.sortDesc[i]
            })
            this.updateOptions({ sortBy: t, sortDesc: n })
          },
          updateOptions(t) {
            this.internalOptions = d(
              d(d({}, this.internalOptions), t),
              {},
              {
                page:
                  this.serverItemsLength < 0
                    ? Math.max(
                        1,
                        Math.min(
                          t.page || this.internalOptions.page,
                          this.pageCount
                        )
                      )
                    : t.page || this.internalOptions.page,
              }
            )
          },
          sortItems(t) {
            let e = this.internalOptions.sortBy
            let n = this.internalOptions.sortDesc
            return (
              this.internalOptions.groupBy.length &&
                ((e = [].concat(
                  Object(r.a)(this.internalOptions.groupBy),
                  Object(r.a)(e)
                )),
                (n = [].concat(
                  Object(r.a)(this.internalOptions.groupDesc),
                  Object(r.a)(n)
                ))),
              this.customSort(t, e, n, this.locale)
            )
          },
          groupItems(t) {
            return this.customGroup(
              t,
              this.internalOptions.groupBy,
              this.internalOptions.groupDesc
            )
          },
          paginateItems(t) {
            return (
              this.serverItemsLength === -1 &&
                t.length <= this.pageStart &&
                (this.internalOptions.page = Math.max(
                  1,
                  this.internalOptions.page - 1
                )),
              t.slice(this.pageStart, this.pageStop)
            )
          },
        },
        render() {
          return (
            this.$scopedSlots.default &&
            this.$scopedSlots.default(this.scopedProps)
          )
        },
      })
    },
  },
])
