<template>
  <div id="app" style="margin:0 5%">
    <div id="header" style="margin-bottom:2%;">
      <h1>{{title}}</h1>
    </div>
    <div id="content" style="display:flex;flex-direction: row; justify-content:space-between;">
      <div id="player" style="width:60%;">
        <b-embed type="iframe" aspect="16by9" :src="url"></b-embed>
      </div>
      <div id="practice-list" style="width:35%; height:40%;">
        <b-card no-body class="mb-1" v-for="(practice, index) in practices" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="`acollapse-${index}`">{{practice.title}}</b-button>
          </b-card-header>
          <b-collapse :id="`acollapse-${index}`">
            <b-card-body>
              <b-card-text>
                <p>{{practice.text}}</p>
                <p class="text-center">
                  <code class="highlighter-rouge">{{practice.url}}</code>
                </p>
                <div
                  id="flag"
                  style="display:flex; flex-direction:row; justify-content:space-between;"
                >
                  <b-form-input
                    id="input"
                    v-model="flag"
                    placeholder="flag{xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}"
                    style="margin-right:5%;"
                  ></b-form-input>
                  <b-button href="#" variant="outline-primary">Submit</b-button>
                </div>
              </b-card-text>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
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
      title: "",
      url: "",
      description: "",
      practices: [],
      flag: ""
    };
  },
  methods: {
    getCourse() {
      const path =
        "http://163.13.127.158:5555/lesson/" + this.$route.params.lessonid;
      axios
        .get(path)
        .then(res => {
          this.title = res.data.lesson.title;
          this.url = res.data.lesson.url;
          this.description = res.data.lesson.description;
          this.practices = res.data.lesson.practices;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
  created() {
    this.getCourse();
  }
};
</script>