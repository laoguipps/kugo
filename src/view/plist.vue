<template>
    <div class="plist">
      <mt-cell v-for="(plist,index) in plistList" :title="plist.title" is-link
              :to="plist.location" :label="plist.countPlay" :key="index" style="text-align: left">
        <img slot="icon" :src="plist.imgUrl" width="60" height="60">
      </mt-cell>
    </div>
</template>
<script type="text/ecmascript-6">
import MtCell from "mint-ui/packages/cell/src/cell"
import { Indicator } from 'mint-ui'

export default {
  components: {MtCell},
  data () {
    return {
      plistList: []
    }
  },
  created () {
    this.getPlistList()
  },
  methods: {
    getPlistList () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      })
      this.$http.get('http://localhost:8081/static/plist.json').then(({data}) => {
        console.log(data.data)
        this.plistList = data.data
      }).then(() => {
        Indicator.close()
      })
    }
  }
}
</script>
