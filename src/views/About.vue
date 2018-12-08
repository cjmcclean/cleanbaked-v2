<template>
  <section class="about">
    <div class="row">
      <h2>The Clean Baked Project</h2>

      <p>
        Whew! This is a major rebuild and redesign after letting my personal web
        presence languish for several years. This project is also a
        consolidation of my web presences. Previously, my portfolio and resume
        were kept under the &ldquo;Wheeler Central Studios&rdquo; brand, and the
        &ldquo;Clean Baked Studios&rdquo; brand was a joint venture between a
        friend and I. After the project had been defunct for several years I
        decided this was a more interesting brand, so it&rsquo;s being
        appropriated for this project! :D
      </p>

      <p>
        As I&rsquo;m starting from the ground up, it's a great opportunity to
        play with all the latest tools! This project is built with ES6
        Javascript compiled by Babel configured by Webpack with linting and
        hinting provided by eslint and Prettier.js. I'm using the Vue.js
        library, along with Vue-Router. I&rsquo;m compiling the project using
        their provided Vue-CLI. The site will be built to support PWA
        capabilities, while being responsive to all device sizes. I'm using the
        latest CSS modules such as Grid Layout and Flexbox, using a mobile-first
        design methodology.
      </p>

      <h2>About Me</h2>

      <p>
        I am a {{ myAge }}-year old native of Houston, TX, and have spent most
        of my life here. I taught myself HTML and CSS in 2007, turning a
        life-long love of technology into a career. Since then I have been
        expanding my repertoire, learning Javascript (mostly jQuery-based) and a
        bit of PHP. I have a background in Advertising through my Bachelor of
        Arts in Communications&ndash;Advertising/PR from the University of
        Houston (UH), which I graduated from in 2009. <br /><br />
        I love to play Ultimate Frisbee, which I do as often as possible. I am
        also an avid snowboarder, and I go whenever the chance presents itself.
        When I'm not on the slopes or on the field, I like to keep things
        relaxed: dinners, gaming, and movie nights are my preferred activities.
        Now you know a little about me! =)
      </p>

      <h2>My Design Philosophy</h2>

      <p>
        I have a strong belief that design is extremely important. Everything
        that can be designed, should be. When design and function meet, beauty
        is achieved. To this end I work hard to understand my client&rsquo;s
        needs and goals. This helps ensure my work maximizes my clients&rsquo;
        ROI. <br /><br />
        I also love to be on the bleeding edge of technology. While keeping up
        with and using the latest techniques is something I am devoted to,
        it&lsquo;s also something that helps ensure my work is highly compatible
        and accessible. <br /><br />
        If these sound like desirable traits to have in your designer, then send
        me an email below!
      </p>

      <btn btn-theme="btn-blue" :onClick="resumeClick" ref="resumeBtn">
        My Resume
      </btn>

      <btn btn-theme="btn-yellow" :onClick="contactClick" ref="contactBtn">
        Get In Touch
      </btn>
    </div>
    <!-- /.row -->
  </section>
</template>

<script>
import Btn from '@/components/btn.vue'

export default {
  name: 'about',
  components: {
    Btn
  },
  data: function() {
    return {
      dateOfBirth: new Date('06/20/1986'),
      today: new Date()
    }
  },
  computed: {
    myAge: function() {
      let age = this.today.getFullYear() - this.dateOfBirth.getFullYear()
      const m = this.today.getMonth() - this.dateOfBirth.getMonth()
      // if necessary offset age by -1 for month of year
      if (
        m < 0 ||
        (m === 0 && this.today.getDate() < this.dateOfBirth.getDate())
      ) {
        age = age - 1
      }

      return age
    }
  },
  methods: {
    contactClick() {
      this.$router.push('contact')
    },
    resumeClick() {
      // eslint-disable-next-line
      console.log(this.$refs.resumeBtn)
      this.$refs.resumeBtn.value = '@/assets/myResume_2013.pdf'
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  margin-right: -24px;
  margin-left: -24px;
  padding: 1.05rem;

  // MIN-width: 900px
  @media (min-width: 56.25em) {
    padding: 2.8rem;
  }

  // MIN-width: 1140px
  @media screen and (min-width: 71.25em) {
    display: grid;
    grid-template-columns: 2fr minmax(auto, 30.8rem) 2fr 1fr;
  }
}

.row {
  // MIN-width: 1140px
  @media screen and (min-width: 71.25em) {
    grid-column: 2 / span 1;
  }
}

.col2 {
  // MIN-width: 1140px
  @media screen and (min-width: 71.25em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.525rem;
  }
}
</style>
