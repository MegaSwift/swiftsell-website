<template>
  <section id="hero" class="hero">
    <v-container>
      <v-row class="contentRow">
        <!-- text  -->
        <div class="col-12 col-md-6 left">
          <aside>
            <p class="highlight">
              Unlock the potential of your business with SwiftSell
            </p>
            <h1>Power Your Business with SwiftSell</h1>
            <p class="subtitle">
              The all-in-one platform designed to revolutionize your sales and
              inventory management
            </p>
            <!-- button  -->
            <v-btn
              color="var(--primaryColor)"
              height="48"
              elevation="0"
              class="Btn"
            >
              <span>Get Started</span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33331 8.5H12.6666"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 3.83325L12.6667 8.49992L8 13.1666"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </v-btn>
          </aside>
        </div>
        <!-- image  -->
        <div class="col-12 col-md-6 right">
          <div class="imgContainer">
            <div>
              <img src="/image/hero.png" alt="Hero" />
            </div>
          </div>
        </div>
        <!-- stats  -->
        <div class="col-12 d-none d-md-block transIn">
          <div class="stats">
            <div class="flexGap">
              <div class="d-flex align-center justify-center h-100">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M18.5 13.15V16.85C18.5 19.97 15.59 22.5 12 22.5C8.41 22.5 5.5 19.97 5.5 16.85V13.15C5.5 16.27 8.41 18.5 12 18.5C15.59 18.5 18.5 16.27 18.5 13.15Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5 8.15C18.5 9.06 18.25 9.9 17.81 10.62C16.74 12.38 14.54 13.5 12 13.5C9.46 13.5 7.26 12.38 6.19 10.62C5.75 9.9 5.5 9.06 5.5 8.15C5.5 6.59 6.22999 5.18 7.39999 4.16C8.57999 3.13 10.2 2.5 12 2.5C13.8 2.5 15.42 3.13 16.6 4.15C17.77 5.18 18.5 6.59 18.5 8.15Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5 8.15V13.15C18.5 16.27 15.59 18.5 12 18.5C8.41 18.5 5.5 16.27 5.5 13.15V8.15C5.5 5.03 8.41 2.5 12 2.5C13.8 2.5 15.42 3.13 16.6 4.15C17.77 5.18 18.5 6.59 18.5 8.15Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>24/7 Customer support</span>
            </div>
            <div class="flexGap">
              <div class="d-flex align-center justify-center h-100">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M18.5 13.15V16.85C18.5 19.97 15.59 22.5 12 22.5C8.41 22.5 5.5 19.97 5.5 16.85V13.15C5.5 16.27 8.41 18.5 12 18.5C15.59 18.5 18.5 16.27 18.5 13.15Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5 8.15C18.5 9.06 18.25 9.9 17.81 10.62C16.74 12.38 14.54 13.5 12 13.5C9.46 13.5 7.26 12.38 6.19 10.62C5.75 9.9 5.5 9.06 5.5 8.15C5.5 6.59 6.22999 5.18 7.39999 4.16C8.57999 3.13 10.2 2.5 12 2.5C13.8 2.5 15.42 3.13 16.6 4.15C17.77 5.18 18.5 6.59 18.5 8.15Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5 8.15V13.15C18.5 16.27 15.59 18.5 12 18.5C8.41 18.5 5.5 16.27 5.5 13.15V8.15C5.5 5.03 8.41 2.5 12 2.5C13.8 2.5 15.42 3.13 16.6 4.15C17.77 5.18 18.5 6.59 18.5 8.15Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>100% Efficient</span>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>