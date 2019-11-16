<template>
  <div class="shadow-sm mb-5 bg-white rounded">
    <b-navbar toggleable="lg" type="light" variant="light" sticky>
      <b-navbar-brand href="/">Happy Hacker</b-navbar-brand>
      <b-navbar-toggle target="nav-Left nav-Right"></b-navbar-toggle>

      <!-- 有 is-nav 才會動 -->
      <b-collapse id="nav-Left" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">課程</b-nav-item>
          <b-nav-item href="#">關於我們</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-collapse id="nav-Right" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="test" right>
            <b-dropdown-item href="#">M</b-dropdown-item>
            <b-dropdown-item href="#">E</b-dropdown-item>
            <b-dropdown-item href="#">O</b-dropdown-item>
            <b-dropdown-item href="#">W</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <img src="https://placekitten.com/g/30/30" alt="Kitten" />
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {}
};
</script>