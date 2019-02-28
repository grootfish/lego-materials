<style lang="less" scoped>
  li{list-style: none;}
</style>
<template>
  <Card style="width:350px">

    <a href="#" slot="extra" @click.prevent="changeLimit">换一换</a>
    <ul>
      <li v-for="item in movieList" :key="item.name">
        <a :href="item.url" target="_blank">{{ item.name }}</a>
        <span>{{ item.rate }}</span>
      </li>
    </ul>
  </Card>
</template>
<script>
import shuffle from 'lodash/shuffle'
export default {
  data () {
    return {
      movieList: [
        {
          name: '肖申克的救赎',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: '这个杀手不太冷',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: '霸王别姬',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: '阿甘正传',
          url: 'https://movie.douban.com/subject/1292720/',
          rate: 9.4
        },
        {
          name: '美丽人生',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: '千与千寻',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: '辛德勒的名单',
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: '海上钢琴师',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: '机器人总动员',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        },
        {
          name: '盗梦空间',
          url: 'https://movie.douban.com/subject/3541415/',
          rate: 9.2
        }
      ]
    }
  },
  methods: {
    changeLimit () {
      this.movieList = shuffle(this.movieList)
    }
  }
}
</script>
