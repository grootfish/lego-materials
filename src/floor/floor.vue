<template>
    <div :class="classes">
      <Card :bordered="false" :dis-hover="true" :padding="10">
        <div :class="headClasses" slot="title">
          <div class="floor-info">
              <img src="http://www.test.cai-inc.com/lunatone/assets/images/other-images/hotSupplier.png" alt="电子数码">
              <span class="sub-title">&nbsp;高端数码产品采购首选</span>
          </div>
        </div>
        <a class="link-more" href="https://zcy.gov.cn/eevees/search?fcid=8" slot="extra">
          查看更多 &gt;
        </a>
        <div :class="bodyClasses">
          层内容展示
        </div>
      </Card>
    </div>
</template>
<script>
import Card from '../card/card.vue'

const prefixCls = 'lego-floor'
export default {
  name: 'Floor',
  components: {Card},
  props: {

  },
  data () {
    return {

    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
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
    }
  },
  mounted () {
  }
}
</script>
