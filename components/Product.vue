<template>
  <section id="products" class="product">
    <v-container>
      <div class="contentWrapper">
        <div>
          <!-- header  -->
          <header>
            <h2 data-aos="fade-up" data-aos-duration="400">
              Seamlessly Create and Manage Your Product
            </h2>
            <h4 data-aos="fade-up" data-aos-duration="800">
              Leverage powerful features and intuitive tools to gain valuable
              insights into your sales performance.
            </h4>
          </header>
          <!-- contents  -->
          <!-- tab items  -->
          <div class="content__tab__items">
            <div class="imageContainer d-none d-md-flex">
              <v-tabs-items
                style="width: 100%; background: transparent"
                v-model="tab"
              >
                <v-tab-item
                  style="min-height: 30rem"
                  class=""
                  v-for="(item, id) in products"
                  :key="id + 222111"
                >
                  <div class="relative">
                    <img
                      class="back"
                      :src="`/image/benefit/${item.desktopImg}.png`"
                      alt="benefit1"
                    />
                    <img
                      class="ontop absolute"
                      :src="`/image/benefit/${item.mobileImg}.png`"
                      alt="benefit2"
                    />
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </div>
            <div class="tabContents">
              <v-tabs-items
                style="width: 100%; background: transparent"
                v-model="tab"
              >
                <v-tab-item v-for="(item, id) in products" :key="id + 22211112">
                  <div>
                    <!-- title  -->
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
                      <h3>{{ item.title }}</h3>
                    </div>
                    <!-- list  -->
                    <ul>
                      <li
                        v-for="(items, index) in item.list"
                        :key="index + 231"
                      >
                        <div class="d-flex align-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                              stroke="#219653"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.34"
                              d="M7.75 12L10.58 14.83L16.25 9.17004"
                              stroke="#219653"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>{{ items }}</span>
                      </li>
                    </ul>
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
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </div>
          </div>
          <!-- tab controls -->
          <div class="content__tab">
            <nav>
              <button
                @click="mobilePrevNav"
                :disabled="tab === 0"
                :class="{ active: tab > 0 }"
                title="prev"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19.5"
                    fill="#F4F7FF"
                    stroke="var(--navLink)"
                  />
                  <path
                    d="M29 20.2746C29 20.6543 28.7178 20.9681 28.3518 21.0178L28.25 21.0246L15.066 21.024L19.829 25.7675C20.1225 26.0598 20.1235 26.5347 19.8313 26.8282C19.5656 27.095 19.149 27.1201 18.8549 26.9029L18.7706 26.8305L12.7206 20.8065C12.6819 20.7679 12.6483 20.7263 12.6198 20.6822C12.6117 20.669 12.6035 20.6554 12.5958 20.6416C12.5886 20.6297 12.5822 20.6174 12.5761 20.605C12.5676 20.5869 12.5593 20.5681 12.5518 20.5491C12.5457 20.5343 12.5406 20.52 12.536 20.5056C12.5304 20.4877 12.5251 20.4686 12.5204 20.4493C12.517 20.4358 12.5143 20.4227 12.5119 20.4097C12.5086 20.3903 12.5057 20.3701 12.5037 20.3498C12.502 20.3343 12.5009 20.3189 12.5003 20.3035C12.5002 20.2942 12.5 20.2844 12.5 20.2746L12.5004 20.2455C12.5009 20.2308 12.502 20.2161 12.5034 20.2014L12.5 20.2746C12.5 20.2273 12.5044 20.181 12.5128 20.1361C12.5147 20.1253 12.517 20.1143 12.5196 20.1034C12.5249 20.0808 12.5311 20.0591 12.5382 20.0377C12.5416 20.0272 12.5457 20.0158 12.55 20.0046C12.5588 19.982 12.5683 19.9605 12.5788 19.9396C12.5837 19.9297 12.5891 19.9194 12.5948 19.9092C12.6042 19.8925 12.6139 19.8767 12.6241 19.8613C12.6313 19.8504 12.6393 19.839 12.6476 19.8278L12.6541 19.8192C12.6743 19.7928 12.6962 19.7677 12.7197 19.7443L12.7206 19.7436L18.7706 13.7186C19.0641 13.4263 19.5389 13.4273 19.8312 13.7208C20.0969 13.9876 20.1203 14.4043 19.9018 14.6975L19.829 14.7814L15.068 19.524L28.25 19.5246C28.6642 19.5246 29 19.8604 29 20.2746Z"
                    fill="var(--navLink)"
                  />
                </svg>
              </button>
              <button @click="mobileNextNav" class="active" title="next">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19.5"
                    transform="rotate(-180 20 20)"
                    fill="#F4F7FF"
                    stroke="var(--navLink)"
                  />
                  <path
                    d="M11 19.7254C11 19.3457 11.2822 19.0319 11.6482 18.9822L11.75 18.9754L24.934 18.976L20.171 14.2325C19.8775 13.9402 19.8765 13.4653 20.1687 13.1718C20.4344 12.905 20.851 12.8799 21.1451 13.0971L21.2294 13.1695L27.2794 19.1935C27.3181 19.2321 27.3517 19.2737 27.3802 19.3178C27.3883 19.331 27.3965 19.3446 27.4042 19.3584C27.4114 19.3703 27.4178 19.3826 27.4239 19.395C27.4324 19.4131 27.4407 19.4319 27.4482 19.4509C27.4543 19.4657 27.4594 19.48 27.464 19.4944C27.4696 19.5123 27.4749 19.5314 27.4796 19.5507C27.483 19.5642 27.4857 19.5773 27.4881 19.5903C27.4914 19.6097 27.4943 19.6299 27.4963 19.6502C27.498 19.6657 27.4991 19.6811 27.4997 19.6965C27.4998 19.7058 27.5 19.7156 27.5 19.7254L27.4996 19.7545C27.499 19.7692 27.498 19.7839 27.4966 19.7986L27.5 19.7254C27.5 19.7727 27.4956 19.819 27.4872 19.8639C27.4853 19.8747 27.483 19.8857 27.4804 19.8966C27.4751 19.9192 27.4689 19.9409 27.4618 19.9623C27.4584 19.9728 27.4543 19.9842 27.45 19.9954C27.4412 20.018 27.4317 20.0395 27.4212 20.0604C27.4163 20.0703 27.4109 20.0806 27.4052 20.0908C27.3958 20.1075 27.3861 20.1233 27.3759 20.1387C27.3687 20.1496 27.3607 20.161 27.3524 20.1722L27.3459 20.1808C27.3257 20.2072 27.3038 20.2323 27.2803 20.2557L27.2794 20.2564L21.2294 26.2814C20.9359 26.5737 20.4611 26.5727 20.1688 26.2792C19.9031 26.0124 19.8797 25.5957 20.0982 25.3025L20.171 25.2186L24.932 20.476L11.75 20.4754C11.3358 20.4754 11 20.1396 11 19.7254Z"
                    fill="var(--navLink)"
                  />
                </svg>
              </button>
            </nav>
            <!-- control 1 -->
            <div>
              <div :class="{ active: tab === 0 }"></div>
              <button :class="{ active: tab === 0 }" @click="tab = 0">
                Inventory Management
              </button>
            </div>
            <!-- control 2 -->
            <div>
              <div :class="{ active: tab === 1 }"></div>
              <button :class="{ active: tab === 1 }" @click="tab = 1">
                Point Of Sales
              </button>
            </div>
            <!-- control 3 -->
            <div>
              <div :class="{ active: tab === 2 }"></div>
              <button :class="{ active: tab === 2 }" @click="tab = 2">
                Staff Management
              </button>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      products: [
        {
          title: "Inventory Management",
          desktopImg: 1,
          mobileImg: 2,
          list: [
            "Easily create and manage your product catalog",
            "Track stock levels and receive notifications for low inventory",
            "Set up automatic reordering for efficient inventory management",
            "Generate reports on product sales, stock movements, and profitability",
            "Implement barcode scanning for faster inventory tracking",
          ],
        },
        {
          title: "Point of Sales",
          desktopImg: 3,
          mobileImg: 4,
          list: [
            "Process sales transactions quickly and efficiently",
            "Accept various payment methods, including cash, and card",
            "Generate itemized receipts for customers",
            "Apply discounts and promotions to transactions",
            "Keep track of sales data and analytics for better decision-making",
          ],
        },
        {
          title: "Staff Management",
          desktopImg: 5,
          mobileImg: 6,
          list: [
            "Create and manage staff profiles, including their personal information and roles",
            "Assign access levels and permissions to control staff access to system features",
            "Track staff attendance and working hours",
            "Generate payroll reports and calculate staff earnings",
          ],
        },
      ],
    };
  },
  methods: {
    mobileNextNav() {
      if (this.tab < 2) {
        this.tab += 1;
      } else {
        this.tab = 0;
      }
    },
    mobilePrevNav() {
      if (this.tab > 0) {
        this.tab -= 1;
      }
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>