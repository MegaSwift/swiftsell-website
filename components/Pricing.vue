<template>
  <section id="pricing" class="pricing">
    <v-container>
      <div class="contentWrapper">
        <div>
          <!-- header  -->
          <header>
            <h2 data-aos="fade-up" data-aos-duration="400">Choose Your Plan</h2>
            <h4 data-aos="fade-up" data-aos-duration="800">
              Choose the Pricing Plan that Suits Your Inventory Management
              Goals.
            </h4>
          </header>
          <!-- pricing  -->
          <v-row class="content__row">
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              class="col-12 col-sm-6 col-md-4"
            >
              <div class="content__card">
                <!-- title  -->
                <h4>Free</h4>
                <!-- subtitle -->
                <p class="subtitle">
                  Kickstart product research in your business at no cost
                </p>
                <!-- amount -->
                <p class="amount">$0 <span>/Month</span></p>
                <!-- button  -->
                <v-btn
                  class="Btn"
                  height="48"
                  width="100%"
                  outlined
                  color="var(--secondaryColor)"
                >
                  Get Started
                </v-btn>
                <!-- list of content  -->
                <ul>
                  <li v-for="n in 3" :key="n + 322211">
                    <div class="d-flex align-center">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.5"
                          width="16"
                          height="16"
                          rx="8"
                          fill="#B5B5B5"
                        />
                        <path
                          d="M12 5.75L6.5 11.25L4 8.75"
                          stroke="#E8E8E8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <span>Access to Dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              class="col-12 col-sm-6 col-md-4"
            >
              <div class="content__card dark">
                <!-- title  -->
                <h4>Pro</h4>
                <!-- subtitle -->
                <p class="subtitle">
                  Kickstart product research in your business at no cost
                </p>
                <!-- amount -->
                <p class="amount">$0 <span>/Month</span></p>
                <!-- button  -->
                <v-btn
                  class="Btn"
                  height="48"
                  width="100%"
                  color="var(--primaryColor)"
                >
                  Get Started
                </v-btn>
                <!-- list of content  -->
                <ul>
                  <li v-for="n in 3" :key="n + 322211">
                    <div class="d-flex align-center">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.5"
                          width="16"
                          height="16"
                          rx="8"
                          fill="#8AB0DD"
                        />
                        <path
                          d="M12 5.75L6.5 11.25L4 8.75"
                          stroke="#E8E8E8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <span>Access to Dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              class="col-12 col-sm-12 col-md-4"
            >
              <div class="content__card">
                <!-- title  -->
                <h4>Business</h4>
                <!-- subtitle -->
                <p class="subtitle">
                  Kickstart product research in your business at no cost
                </p>
                <!-- amount -->
                <p class="amount">$90 <span>/Month</span></p>
                <!-- button  -->
                <v-btn
                  class="Btn"
                  height="48"
                  width="100%"
                  outlined
                  color="var(--secondaryColor)"
                >
                  Get Started
                </v-btn>
                <!-- list of content  -->
                <ul>
                  <li v-for="n in 3" :key="n + 322211">
                    <div class="d-flex align-center">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.5"
                          width="16"
                          height="16"
                          rx="8"
                          fill="#B5B5B5"
                        />
                        <path
                          d="M12 5.75L6.5 11.25L4 8.75"
                          stroke="#E8E8E8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Access to Dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </v-row>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>