<style lang="less">
    @import "../src/styles/index.less";
</style>
<style lang="less" scoped>
nav {
    padding:20px 10px;
    margin-bottom: 40px;
    ul { display: flex; flex-wrap: wrap; }
    li { display: inline-block; }
    li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
}
.container{ width:1200px;margin: 0 auto;display: block; }
.v-link-active { color: #bbb; }
</style>
<template id="app">
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/card">Card</router-link></li>
                <li><router-link to="/divider">Divider</router-link></li>
                <li><router-link to="/floor">Floor</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
