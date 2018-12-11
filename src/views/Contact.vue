<template>
  <div class="contact">
    <h2>Get In Touch</h2>

    <!-- @submit handles any form of submission. -->
    <!--
      .prevent keeps the event from bubbling around and doing anything else.
    -->
    <form @submit.prevent="handleSubmit">
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
          v-model="method"
        >
          <option
            v-for="option in methodOptions"
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

      <form-group v-show="method === 'tel'">
        <input
          class="group-input"
          id="contactNumber"
          type="tel"
          :class="contact.phone !== '' ? 'valued' : ''"
          :required="method === 'tel'"
          v-model="contact.phone"
        />
        <label class="group-label" for="contactNumber">
          What&rsquo;s the best number to reach you at?
        </label>
      </form-group>

      <form-group v-show="method === 'email'">
        <input
          class="group-input"
          id="contactEmail"
          type="email"
          :class="contact.email !== '' ? 'valued' : ''"
          :required="method === 'email'"
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
          v-model="contact.inquiry"
        >
        </textarea>
        <label class="group-label" for="contactInquiry">
          Briefly, what&rsquo;s the nature of your inquiry?
        </label>
      </form-group>

      <button class="btn btn-green" type="submit">Let&rsquo;s Talk!</button>
      <!--
        <btn btn-theme="btn-green" ref="contactMeBtn" :onClick="formSubmit">Submit</btn>
      -->
    </form>
  </div>
</template>

<script>
import FormGroup from '@/components/form-group.vue'

export default {
  name: 'contact',
  components: {
    FormGroup
  },
  data: function() {
    return {
      contact: {
        name: '',
        email: '',
        phone: '',
        inquiry: ''
      },
      method: 'email',
      methodOptions: [
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'tel' }
      ]
    }
  },
  methods: {
    handleSubmit() {
      // Send data to the server or update your stores and such.
    }
  }
}
</script>

<style scoped lang="scss">
.contact {
  flex: 1 1 auto;
  min-height: 100vh;
  margin-right: -24px;
  margin-left: -24px;
  padding: 2.8rem 5.6rem;
  background: $cb-plum;
  color: $cb-gray-light;

  h2 {
    color: $cb-white;
  }
}

.group-label {
  position: absolute;
  left: 0;
  margin-top: 0;
  transition: transform 0.2s $easeInOutQuad;
}

%input {
  min-width: 300px;
  width: auto;
  border: none;
  padding: 0.75em 1px;
  background: transparent;
  border-bottom: 1px solid $cb-gray-dark;
  color: $cb-white;
  font-size: 0.83333rem;
  line-height: 1.3;

  &:hover + .group-label,
  &:focus + .group-label {
    color: $cb-yellow;
  }

  &[required] + .group-label {
    // nested rule(s)
    &::after {
      content: '*';
      display: inline-block;
      position: relative;
      color: $cb-red;
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 640px) {
    min-width: 420px;
  }
}

.group-input {
  @extend %input;

  & + .group-label {
    top: calc(1.4rem + 0.75em);
  }

  &.valued + .group-label,
  &:focus + .group-label {
    transform: translateY(-(1.4rem + 0.75rem));
  }
}

.group-select,
.group-textarea {
  @extend %input;

  & + .group-label {
    top: 0;
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
