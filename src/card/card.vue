<template>
    <div :class="classes">
        <div :class="headClasses" v-if="showHead"><slot name="title">
            <p v-if="title">
                <span>{{title}}</span>
            </p>
        </slot></div>
        <div :class="extraClasses" v-if="showExtra"><slot name="extra"></slot></div>
        <div :class="bodyClasses" :style="bodyStyles"><slot></slot></div>
    </div>
</template>
<script>
const config = require('./schema.json')
const {bordered, disHover, padding, title} = config.properties

const prefixCls = 'lego-card'
const defaultPadding = 16
export default {
  name: 'Card',
  components: {},
  props: {
    bordered: {
      type: Boolean,
      default: bordered.default
    },
    disHover: {
      type: Boolean,
      default: disHover.default
    },
    shadow: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Number,
      default: padding.default
    },
    title: {
      type: String,
      default: title.default
    }
  },
  data () {
    return {
      showHead: true,
      showExtra: true
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-bordered`]: this.bordered && !this.shadow,
          [`${prefixCls}-dis-hover`]: this.disHover || this.shadow,
          [`${prefixCls}-shadow`]: this.shadow
        }
      ]
    },
    headClasses () {
      return `${prefixCls}-head`
    },
    extraClasses () {
      return `${prefixCls}-extra`
    },
    bodyClasses () {
      return `${prefixCls}-body`
    },
    bodyStyles () {
      if (this.padding !== defaultPadding) {
        return {
          padding: `${this.padding}px`
        }
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.showHead = this.title || this.$slots.title !== undefined
    this.showExtra = this.$slots.extra !== undefined
  }
}
</script>
