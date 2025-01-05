<script setup>
  import img1 from '@/assets/img/4349.jpeg'
  import img2 from '@/assets/img/4349.jpeg'

  const imagesTest = Object.fromEntries(
    Object.entries(
      import.meta.glob('@/assets/img/*.{jpg,png}', { eager: true })
    ).map(([path, module]) => [
      path.split('/').pop().split('.')[0], // key: filename without extension
      module.default // value: image path
    ])
  )
  const images = [
    {
      src: img1,
      title: '不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img2,
      title:
        '不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img1,
      title: '不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img2,
      title:
        '不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img1,
      title: '不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img2,
      title:
        '不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img1,
      title: '不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img2,
      title:
        '不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img1,
      title: '不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    },
    {
      src: img2,
      title:
        '不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」不只是我們共創的里程碑，也象徵著「幸福永續」',
      link: '#'
    }
  ]
</script>
<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <div class="py-10">
        <div class="flex flex-col items-center justify-center gap-5 text-2xl">
          <div>未來親子野餐日陪伴孩子10週年啦！</div>
          <div>不只是我們共創的里程碑，也象徵著「幸福永續」</div>
          <div>期待能陪伴孩子，朝著更美好的未來邁進！</div>
          <div>更多歡樂、甜蜜的親子時光，</div>
          <div>就從今年的10歲生日派對開始吧！</div>
        </div>
      </div>
      <div class="py-10">
        <Swiper :swiperItems="images" />
      </div>
    </div>
  </div>
</template>
