<template>
  <div>
    <v-app-bar
      :clipped="clipped"
      fixed
      height="96"
      app
      color="#fff"
      elevate-on-scroll
      :elevation="1"
      class="topNav"
    >
      <v-container class="p-0">
        <div class="topBar">
          <!-- logo  -->
          <nuxt-link class="d-block" to="/">
            <div class="flexGap">
              <img src="/image/logo.png" alt="logo" />
              <span>Swiftsell</span>
            </div>
          </nuxt-link>
          <nav>
            <ul class="flexGap">
              <li><nuxt-link to="/about">About</nuxt-link></li>
              <li><nuxt-link to="#pricing">Pricing</nuxt-link></li>
              <li><nuxt-link to="#faq">FAQ</nuxt-link></li>
            </ul>
          </nav>
          <div class="flexGap loginSection">
            <v-btn
              color="var(--secondaryColor)"
              height="48"
              width="106"
              outlined
              elevation="0"
              class="Btn Btn__outlined"
              >Log In</v-btn
            >
            <v-btn
              color="var(--primaryColor)"
              height="48"
              width="181"
              class="Btn"
              elevation="0"
              >Sign-up For Free</v-btn
            >
          </div>
          <div class="hamburgerMenu">
            <v-menu
              transition="scroll-y-transition"
              bottom
              offset-y
              nudge-bottom="26"
              v-model="menuOpen"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  style="font-size: 3.5rem"
                  v-bind="attrs"
                  color="var(--primaryColor)"
                  v-on="on"
                  @click="menuOpen = !menuOpen"
                  >mdi-{{ menuOpen ? "close" : "menu" }}</v-icon
                >
              </template>
              <v-card elevation="0" class="pa-4 pb-2 relative mobileMenu">
                <ul class="nav-links mobile">
                  <li>
                    <nuxt-link to="/about">About</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#pricing">Pricing</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#faq">FAQ</nuxt-link>
                  </li>
                  <li class="btn-group">
                    <button class="w-100">Login</button>
                    <button class="w-100 mt-4">Sign-up For Free</button>
                  </li>
                </ul>
              </v-card>
            </v-menu>
          </div>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      menuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-menu__content {
  box-shadow: none !important;
  max-width: 100% !important;
  width: 100vw;
  &:has(.mobileMenu) {
    left: calc(100% - 12px) !important;
    transform: translateX(-100%);
    max-width: 38rem !important;
    overflow: hidden;
    border-radius: 0;
    .mobileMenu {
      background-color: white;
      overflow: hidden;
      border-radius: 0;
      &:has(div.sub-menu) {
        padding: 0 !important;
      }
    }
  }
}
</style>