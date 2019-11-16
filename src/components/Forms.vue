<template>
  <div>
    <alert :message="message" v-if="showMessage"></alert>
    <b-form @submit="onSubmit">
      <b-form-group :label="title">
        <p>{{text}}</p>
        <b-form-checkbox
          v-for="option in options"
          v-model="selected"
          :key="option"
          :value="option"
          name="ques"
        >{{ option }}</b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "./Alert.vue";

export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      id: "",
      title: "",
      text: "",
      options: [],
      isMultiple: true,
      showMessage: false
    };
  },
  methods: {
    getQues() {
      const path = "http://localhost:5000/question";
      axios
        .get(path)
        .then(res => {
          this.id = res.data.question.id;
          this.title = res.data.question.title;
          this.text = res.data.question.text;
          this.options = res.data.question.options;
          this.isMultiple = res.data.question.isMultiple;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    postAns(payload) {
      const path = "http://localhost:5000/question";
      axios
        .post(path, payload)
        .then(() => {
          this.message = "ok!";
          this.showMessage = true;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          //   this.getBooks();
        });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        id: this.id,
        selected: this.selected.sort()
      };
      this.postAns(payload);
    }
  },
  created() {
    this.getQues();
  }
};
</script>