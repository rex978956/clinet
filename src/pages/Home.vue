<template>
  <div>
    <b-tabs content-class="mt-3" align="left" style="margin:3% 10%">
      <b-tab v-for="(type, field) in cards" :key="field" :title="field">
        <b-card-group deck style="margin:3%">
          <b-card
            v-for="(card, index) in type"
            :key="index"
            :title="card.title"
            :img-src="`https://picsum.photos/600/300/?image=${index+10}`"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            border-variant="dark"
          >
            <b-card-text>{{card.text}}</b-card-text>
            <b-button :href="`/course/${card.id}`" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-card-group>
      </b-tab>
      <b-tab title="Disabled" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import * as Layout from "@/components";
import axios from "axios";

export default {
  components: {
    ...Layout
  },
  data() {
    return {
      cards: []
    };
  },
  methods: {
    getCards() {
      const path = "http://163.13.127.158:5555/cards";
      axios
        .get(path)
        .then(res => {
          this.cards = res.data.cards;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
  created() {
    this.getCards();
  }
};
</script>