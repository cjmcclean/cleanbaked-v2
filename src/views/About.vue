<template>
  <section class="about">
    <h2>About Me</h2>

    <p>
      I am a 26-year old native of Houston, TX, and have spent most of my life
      here. I taught myself HTML and CSS in 2007, turning a life-long love of
      technology into a career. Since then I have been expanding my repertoire,
      learning Javascript (mostly jQuery-based) and a bit of PHP. I have a
      background in Advertising through my Bachelor of Arts in
      Communications-Advertising/PR from the University of Houston (UH), which I
      graduated from in 2009. <br /><br />
      I love to play Ultimate Frisbee, which I do as often as possible. I am
      also an avid snowboarder, and I go whenever the chance presents itself.
      When I'm not on the slopes or on the field, I like to keep things relaxed:
      dinners, gaming, and movie nights are my preferred activities. Now you
      know a little about me! =)
    </p>

    <h2>My Design Philosophy</h2>

    <p>
      I have a strong belief that design is extremely important. Everything that
      can be designed, should be. When design and function meet, beauty is
      achieved. To this end I work hard to understand my client's needs and
      goals. This helps ensure my work maximizes my clients' ROI. <br /><br />
      I also love to be on the bleeding edge of technology. While keeping up
      with and using the latest techniques is something I am devoted to,
      it&lsquo;s also something that helps ensure my work is highly compatible
      and accessible. <br /><br />
      If these sound like desirable traits to have in your designer, then send
      me an email below!
    </p>

    <btn :onClick="resumeClick" ref="resumeBtn">My Resume</btn>
  </section>
</template>

<script>
import Btn from '@/components/btn.vue'

export default {
  name: 'about',
  components: {
    Btn
  },
  methods: {
    resumeClick() {
      this.$refs.resumeBtn.value = '@/assets/myResume_2013.pdf'
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  padding: 0 16% 4% 12%;
}
</style>
