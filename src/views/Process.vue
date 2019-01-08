<template>
  <PoseTransition appear mode="out-in">
    <route-section class="process">
      <div class="row">
        <h2>How It Gets Done</h2>
        <p class="lead">My Process to Building a Site</p>
      </div>
      <!-- /.row -->

      <div class="row col2">
        <div class="block">
          <h3>Discovery</h3>
          <p>
            Every project should begin with a discovery phase. The objective is
            to learn about a project, specifically, its requirements and goals.
            By obtaining this knowledge and combining it with a study on the
            client&rsquo;s market and competition a strong, objective focused
            design can be crafted.
          </p>
        </div>

        <div class="block">
          <pull-quote class="quote">
            Iteration is a cornerstone of impactful design.
          </pull-quote>
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        <h3>Design</h3>
        <p>
          In discovering what a clients needs and wants out of their site, much
          of the design legwork is already done. Taking that knowledge, a layout
          focused on delivering results can be formed. Iteration is a
          cornerstone of impactful design. With this in mind, I like to start on
          paper putting out as many ideas as I can following the general
          guidelines of the project. I take the best 1 or 2 ideas into Photoshop
          or straight into the browser, whichever is more efficient for the
          project at hand.
        </p>
      </div>
      <!-- /.row -->

      <div class="row col2">
        <div class="block">
          <h4>Build</h4>
          <p>
            Once I have a mockup or draft site that the client is pleased with,
            the design is layered onto a CMS. Utilizing the latest techniques
            such as responsive design helps ensure that a client's site is
            compatible with as many devices as possible and the major browsers.
          </p>
        </div>

        <div class="block">
          <h4>Launch & Evaluation</h4>
          <p>
            Once a site is built to a client's satisfaction and is ensured to
            deliver the best experience on as many devices and browsers as
            possible, the site goes live! But as any web professional will
            attest, this is truly only the beginning of a site's life. Using
            analysis and evaluation once a site has launched, pages can be
            tweaked to improve search results and user engagement.
          </p>
        </div>
      </div>
      <!-- /.row -->

      <div class="row col2">
        <div class="block">
          <h4>Services I Offer</h4>
          <ul>
            <li>Web Design</li>
            <li>Front-end Development</li>
            <li>Wordpress CMS Development</li>
            <li>Concrete5 CMS Development</li>
            <li>Graphic/Print Design</li>
          </ul>
        </div>

        <div class="block">
          <h4>Technologies I Can Use</h4>
          <ul>
            <li>Pencil and paper</li>
            <li>HTML5/CSS3</li>
            <li>jQuery</li>
            <li>Aurelia Framework</li>
            <li>Vue.js Library</li>
            <li>Wordpress CMS</li>
            <li>PHP</li>
            <li>.NET MVC</li>
          </ul>
        </div>
      </div>
      <!-- /.row -->
    </route-section>
  </PoseTransition>
</template>

<script>
import posed, { PoseTransition } from 'vue-pose'
import PullQuote from '@/components/pull-quote.vue'

export default {
  name: 'process',
  components: {
    PullQuote,
    PoseTransition,
    RouteSection: posed.section({
      enter: {
        opacity: 1,
        y: 0,
        beforeChildren: true,
        transition: { duration: 420, delay: 0, ease: 'easeInOut' }
      },
      exit: {
        opacity: 0,
        y: '100%',
        transition: { duration: 240, ease: 'easeInOut' }
      }
    })
  }
}
</script>

<style scoped lang="scss">
.process {
  min-height: 100vh;
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
    grid-template-columns: 2fr minmax(auto, 30.8rem) 1fr 2fr;
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
    grid-column: 2 / span 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.05rem;
  }
}

.lead {
  margin-top: 0.525rem;
  font-size: $size-mdl;
  text-transform: uppercase;
}

.quote {
  margin-top: 2.8rem;
}
</style>
