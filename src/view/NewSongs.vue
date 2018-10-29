<template>
  <div >
    <mt-swipe :auto="4000" class="NewSongs-swip">
      <mt-swipe-item><a><img src="http://imge.kugou.com/mobilebanner/20180928/20180928210844969036.jpg"></a></mt-swipe-item>
      <mt-swipe-item><a><img src="http://imge.kugou.com/mobilebanner/20180928/20180928210844969036.jpg"></a></mt-swipe-item>
      <mt-swipe-item><a><img src="http://imge.kugou.com/mobilebanner/20180928/20180928210844969036.jpg"></a></mt-swipe-item>
    </mt-swipe>
    <mt-cell v-for="(song, index) in songList" :title="song.title" style="text-align: left">
      <span> <img slot="icon" src="../assets/images/download_icon.png" width="24" height="24"></span>
    </mt-cell>
  </div>

</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'new-songs',
  data () {
    return {
      songList: []
    }
  },
  created () {
    this.getSong()
  },
  methods: {
    getSong () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      })
      this.$http.get('http://localhost:8081/static/data.json').then(({data}) => {
        // console.log(data.result)
        this.songList = data.result
      }).then(() => {
        Indicator.close()
      })
    }
  }
}
</script>

<style scoped>
 .NewSongs-swip{
   height: 150px;
 }

</style>
