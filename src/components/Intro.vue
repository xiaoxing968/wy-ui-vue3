<template>
  <div class="features">
    <ul style="display: flex">
      <li v-for="(feat,i) in features" :key="i">
        <div>
          <div class="home-icon">
            <svg>
              <use :xlink:href="`#icon-${feat.icon}`"></use>
            </svg>
            <h1>{{ feat.title }}</h1>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "intro",
  setup() {
    const features = [
      {
        icon: 'Vue',
        title: 'Vue3',
      },
      {
        icon: 'typescript_',
        title: 'TypeScript',
      },
    ]
    return {
      features
    }
  },
}

</script>
<style scoped lang="less">
.features {
  & li {
    height: 100%;

    .home-icon {
      display: flex;
      align-items: center;

      & .iconfont {
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>