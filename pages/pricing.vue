<template>
  <section id="pricing" class="pricing">
    <div>
      <div class="contentWrapper">
        <div class="">
          <!-- header  -->
          <header>
            <h2 data-aos="fade-up" data-aos-duration="400">Choose Your Plan</h2>
            <h4 data-aos="fade-up" data-aos-duration="800">
              Choose the Pricing Plan that Suits Your Inventory Management
              Goals.
            </h4>
          </header>
          <!-- pricing  -->
          <div class="py-4">
            <v-row class="content__row">
              <v-col
                class="col-12 col-sm-6 col-md-auto"
                v-for="(item, index) in plans"
                :key="index"
              >
                <v-card
                  :class="['content__card', index === darkIndex ? 'dark' : '']"
                  @click="handleBg(index)"
                >
                  <!-- title  -->
                  <h4>{{ item.plan }}</h4>
                  <!-- subtitle -->
                  <p class="subtitle">
                    Kickstart product research in your business at no cost
                  </p>
                  <!-- amount -->
                  <!-- <p class="amount">$0 <span>/Month</span></p> -->
                  <!-- button  -->
                  <v-btn
                    class="Btn"
                    height="48"
                    width="100%"
                    outlined
                    color="[
                      index === darkIndex
                        ? 'var(--primaryColor)'
                        : 'var(--secondaryColor)',
                    ]"
                  >
                    Get Started
                  </v-btn>
                  <!-- list of content  -->

                  <div>
                    <div
                      v-for="(feature, fIndex) in item.features"
                      :key="fIndex"
                    >
                      <div class="py-1">
                        <item-logo>
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
                        </item-logo>
                        <span class="pt-1">
                          {{ feature }}
                        </span>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PricingInformation from "../data/dummydata.js";
export default {
  data() {
    return {
      plans: PricingInformation,
      darkIndex: 0,
    };
  },
  methods: {
    handleBg(index) {
      this.darkIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list {
  display: flex;
  align-items: center;
  gap: 5px;
}
svg {
  vertical-align: middle;
}
</style>
