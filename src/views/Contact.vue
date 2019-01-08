<template>
  <PoseTransition mode="out-in">
    <route-section class="contact" pre-enter-pose="init" :pose="state">
      <header class="row"><h2>Get In Touch</h2></header>

      <!--
        @submit handles any form of submission.
        .prevent keeps the event from bubbling around and doing anything else.
      -->
      <form class="row" @submit.prevent="handleSubmit">
        <form-group>
          <input
            class="group-input"
            id="contactName"
            type="text"
            required
            :class="contact.name !== '' ? 'valued' : ''"
            v-model="contact.name"
          />
          <label class="group-label" for="contactName">
            What&rsquo;s your name?
          </label>
        </form-group>

        <form-group>
          <select
            class="group-select"
            id="contactMethod"
            required
            :class="contact.method.type !== '' ? 'valued' : ''"
            v-model="contact.method.type"
          >
            <option
              v-for="option in contact.method.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
          <label class="group-label" for="contactMethod">
            What&rsquo;s the best way to reach you?
          </label>
        </form-group>

        <form-group v-show="contact.method.type === 'tel'">
          <input
            class="group-input"
            id="contactNumber"
            type="tel"
            :class="contact.phone !== '' ? 'valued' : ''"
            :required="contact.method.type === 'tel'"
            v-model="contact.phone"
          />
          <label class="group-label" for="contactNumber">
            What&rsquo;s the best number to reach you at?
          </label>
        </form-group>

        <form-group v-show="contact.method.type === 'email'">
          <input
            class="group-input"
            id="contactEmail"
            type="email"
            :class="contact.email !== '' ? 'valued' : ''"
            :required="contact.method.type === 'email'"
            v-model="contact.email"
          />
          <label class="group-label" for="contactEmail">
            What&rsquo;s your email?
          </label>
        </form-group>

        <form-group>
          <textarea
            class="group-textarea"
            id="contactInquiry"
            required
            :class="contact.inquiry !== '' ? 'valued' : ''"
            v-model="contact.inquiry"
          >
          </textarea>
          <label class="group-label" for="contactInquiry">
            Briefly, what&rsquo;s the nature of your inquiry?
          </label>
        </form-group>

        <button class="btn btn-green" type="submit">Let&rsquo;s Talk!</button>
      </form>

      <cb-svg class="bg-svg" viewBox="0 0 1302.94 985" role="none">
        <!-- xmlns="http://www.w3.org/2000/svg" -->
        <path
          d="M1302.94 785l-222 200-953-270L0 229.85 341.94 0l752 94 180 225z"
        />
      </cb-svg>
    </route-section>
  </PoseTransition>
</template>

<script>
import posed, { PoseTransition } from 'vue-pose'
import FormGroup from '@/components/form-group.vue'

export default {
  name: 'contact',
  props: {
    state: {
      type: String,
      default: 'enter'
    }
  },
  data: function() {
    return {
      contact: {
        name: '',
        email: '',
        phone: '',
        inquiry: '',
        method: {
          type: 'email',
          options: [
            { text: 'Email', value: 'email' },
            { text: 'Phone', value: 'tel' }
          ]
        }
      }
    }
  },
  components: {
    PoseTransition,
    RouteSection: posed.section({
      init: {
        opacity: 0,
        y: '100%'
      },
      enter: {
        opacity: 1,
        y: 0,
        beforeChildren: true,
        transition: { duration: 420, delay: 0, ease: 'easeInOut' }
      },
      out: {
        opacity: 0,
        y: '-100%',
        transition: { duration: 240, ease: 'easeInOut' }
      }
    }),
    CbSvg: posed.svg({
      init: {
        // opacity: 0,
        transform: 'rotate(120)'
      },
      enter: {
        // opacity: 1,
        transform: 'rotate(0)',
        transition: { duration: 420, delay: 0, ease: 'easeIn' }
      }
    }),
    FormGroup
  },
  methods: {
    handleSubmit: function(event) {
      // Send data to the server or update your stores and such.
      // eslint-disable-next-line
      console.log(event)
    }
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    // eslint-disable-next-line
    console.log(to, from, next)
  }
}
</script>

<style scoped lang="scss">
.contact {
  position: relative;
  min-height: 100vh;
  margin-right: -24px;
  margin-left: -24px;
  // padding: 2.8rem 5.6rem;
  padding: 1.05rem;
  background: $cb-white;
  color: $cb-black;

  // nested
  h2,
  form,
  button {
    position: relative;
    z-index: 10;
  }

  h2 {
    color: $cb-black;
  }

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

.bg-svg {
  position: absolute;
  top: -20vh;
  right: -20vh;
  z-index: 0;
  width: 125vh;
  height: 125vh;
  transition: transform 0.625s $easeInOutQuad;
  transform: translate3d(0, 0, 0);

  // nested
  & > path {
    fill: $cb-yellow;
  }

  // MIN-width: 1600px
  @media screen and (min-width: 100em) {
    transform: rotate(16deg) translate3d(-4vh, -15vh, 0) scale(1.4);
  }
}

.group-label {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0;
  color: $cb-black;
  transition: transform 0.2s $easeInOutQuad;
  transform-origin: left center;
}

%input {
  display: block;
  min-width: 300px;
  width: auto;
  margin-top: 0;
  padding: 0.75em 1px;
  background: transparent;
  border: none;
  border-bottom: 1px solid $cb-gray-dark;
  color: $cb-black;
  font-size: 0.83333rem;
  line-height: 1.3;

  // state
  &:hover + .group-label,
  &:focus + .group-label {
    color: $cb-orange;
  }

  &[required] + .group-label {
    // nested
    &::after {
      content: '*';
      display: inline-block;
      position: relative;
      color: $cb-red;
      transform: scale(1.1);
    }
  }

  // MIN-width: 640px
  @media screen and (min-width: 40em) {
    min-width: 420px;
  }
}

.group-input,
.group-select,
.group-textarea {
  @extend %input;

  // state
  &.valued + .group-label,
  &:focus + .group-label {
    transform: scale(0.86);
  }
}

.group-select {
  & option {
    color: $cb-black;
  }
}

.group-textarea {
  height: 5.6rem;
}
</style>
