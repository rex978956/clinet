<template>
  <div style="margin:5%">
    <div>
      <b-jumbotron bg-variant="light" text-variant="dark" border-variant="dark">
        <template v-slot:header>{{title}}</template>

        <template v-slot:lead>{{description}}</template>
      </b-jumbotron>
    </div>
    <div>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Overview" active>
            <b-card-body v-for="(content, index) in overview" :key="index">
              <b-card-title>{{content.title}}</b-card-title>
              <b-card-text>{{content.text}}</b-card-text>
              <hr />
            </b-card-body>
          </b-tab>
          <b-tab title="Syllabus">
            <b-list-group>
              <b-list-group-item
                button
                v-for="(lesson, index) in lessons"
                :key="index"
                v-b-toggle="`collapse-${index}`"
              >
                {{lesson.title}}
                <!-- Elements to collapse -->
                <b-collapse :id="`collapse-${index}`" class="mt-2">
                  <b-card>
                    {{lesson.text}}
                    <b-button
                      :href="`${$route.params.courseid}/${lesson.id}`"
                      variant="outline-primary"
                      style="float:right;"
                    >GO</b-button>
                  </b-card>
                </b-collapse>
                <b-collapse id="collapse-b" class="mt-2">
                  <b-card>I am collapsible content B!</b-card>
                </b-collapse>
              </b-list-group-item>
            </b-list-group>
          </b-tab>
        </b-tabs>
      </b-card>
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
      course: [],
      title: "",
      description: "",
      overview: [],
      lessons: []
    };
  },
  methods: {
    getCourse() {
      const path =
        "http://163.13.127.158:5555/course/" + this.$route.params.courseid;
      axios
        .get(path)
        .then(res => {
          this.course = res.data.course;
          this.title = res.data.course.title;
          this.description = res.data.course.description;
          this.overview = res.data.course.overview;
          this.lessons = res.data.course.lessons;
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