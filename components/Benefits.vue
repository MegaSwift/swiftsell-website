<template>
  <section id="benefits" class="benefits">
    <v-container>
      <div class="contentWrapper">
        <div>
          <!-- header  -->
          <header>
            <h2 data-aos="fade-up" data-aos-duration="400">
              Experience the Benefits of SwiftSell
            </h2>
            <h4 data-aos="fade-up" data-aos-duration="800">
              Streamline Your Operations, Boost Sales, and Stay Ahead of the
              Competition.
            </h4>
          </header>
          <!-- content  -->
          <div class="content__grid">
            <div
              data-aos="fade-up"
              :data-aos-duration="index + 5 + 2 + '00'"
              v-for="(items, index) in benefits"
              :key="index + 233321"
              class="content__card"
            >
              <div class="flexGap">
                <div class="d-flex align-center justify-center h-100">
                  <svg
                    :class="items.svgType"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M24.6667 16.8667V21.8C24.6667 25.96 20.7867 29.3333 16 29.3333C11.2134 29.3333 7.33337 25.96 7.33337 21.8V16.8667C7.33337 21.0267 11.2134 24 16 24C20.7867 24 24.6667 21.0267 24.6667 16.8667Z"
                      stroke="#CF5050"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.6667 10.2C24.6667 11.4133 24.3334 12.5333 23.7467 13.4933C22.32 15.84 19.3867 17.3333 16 17.3333C12.6134 17.3333 9.68004 15.84 8.25338 13.4933C7.66671 12.5333 7.33337 11.4133 7.33337 10.2C7.33337 8.12001 8.3067 6.24 9.8667 4.88C11.44 3.50667 13.6 2.66667 16 2.66667C18.4 2.66667 20.56 3.50667 22.1334 4.86667C23.6934 6.24001 24.6667 8.12001 24.6667 10.2Z"
                      stroke="#CF5050"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.6667 10.2V16.8667C24.6667 21.0267 20.7867 24 16 24C11.2134 24 7.33337 21.0267 7.33337 16.8667V10.2C7.33337 6.04001 11.2134 2.66667 16 2.66667C18.4 2.66667 20.56 3.50667 22.1334 4.86667C23.6934 6.24001 24.6667 8.12001 24.6667 10.2Z"
                      stroke="#CF5050"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3>{{ items.title }}</h3>
              </div>
              <p>{{ items.subtitle }}</p>
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
      benefits: [
        {
          title: "Streamline Sales",
          subtitle:
            "SwiftSell simplifies the sales process by providing a centralized platform to create and manage your product catalog, track stock levels, generate invoices, and process transactions.",
          svgType: "danger",
        },
        {
          title: "Reliable Support",
          subtitle:
            "SwiftSell offers dedicated customer support to assist you with any questions or issues. Our team is ready to provide prompt assistance and ensure a smooth experience with the platform.",
          svgType: "pending",
        },
        {
          title: "Scalable Solution",
          subtitle:
            "Whether you have a small business or a growing enterprise, SwiftSell is designed to scale with your needs. You can easily add more products, expand your operations, and accommodate increasing sales volume.",
          svgType: "danger",
        },
        {
          title: "Data-Driven Decision Making",
          subtitle:
            "SwiftSell provides valuable insights into your sales performance, inventory trends, customer preferences, and employee productivity.",
          svgType: "inactive",
        },
        {
          title: "Powerful Point of Sale (POS)",
          subtitle:
            "The integrated POS system in SwiftSell allows you to process transactions seamlessly. Accept various payment methods, apply discounts, and provide a smooth checkout experience for your customers.",
          svgType: "dark",
        },
        {
          title: "Efficient Inventory ",
          subtitle:
            "With SwiftSell, you can easily track and manage your inventory levels, ensuring you have the right products in stock at all times. Real-time inventory updates and alerts help you avoid stockouts and optimize your supply chain.",
          svgType: "pending",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>