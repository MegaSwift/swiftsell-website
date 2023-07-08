<template>
  <section id="faq" class="faq">
    <v-container>
      <div class="contentWrapper">
        <div>
          <h2 data-aos="fade-up" data-aos-duration="400">FAQs</h2>
          <div class="expansionsWrapper">
            <v-expansion-panels flat v-model="panels">
              <v-expansion-panel v-for="(faq, index) in faqs" :key="index" class="panel-item">
                <v-expansion-panel-header
                  :expand-icon="
                    panelExpanded && currentPanel === index
                      ? 'mdi-close'
                      : 'mdi-plus'
                  "
                  @click="toggleExpand(index)"
                >
                  {{ faq.question }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="expandedContent">
                    {{ faq.answer }}
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
      panels: null,
      currentPanel: null,
      panelExpanded: false,
      faqs: [
        {
          question: "What is Swiftsell?",
          answer: "Swiftsell is a comprehensive business management software designed to streamline operations, enhance productivity, and boost sales for various types of businesses.",
        },
        {
          question: "What features does Swiftsell offer?",
          answer: "TSwiftsell offers a range of features, including inventory management, point of sale (POS), staff management, customer management, sales reporting, purchase management, and more.",
        },
        {
          question: "Can Swiftsell be customized to fit my business needs?",
          answer: "Yes, Swiftsell can be tailored to meet the specific requirements of your business. It offers customizable workflows, category management, and the ability to add services, allowing you to configure the system according to your unique processes.",
        },
        {
          question: "Is Swiftsell suitable for small businesses?",
          answer: "Absolutely! Swiftsell is designed to cater to businesses of all sizes, including small businesses. Its user-friendly interface and scalable features make it ideal for startups and growing enterprises.",
        },
        {
          question: "Can I access Swiftsell from multiple devices?",
          answer: "Yes, Swiftsell is a cloud-based solution, which means you can access it from any device with an internet connection. It provides the flexibility to manage your business on-the-go.",
        },
        {
          question: "Is Swiftsell available on multiple platforms?",
          answer: "Yes, Swiftsell is available across various platforms, including web, desktop, and mobile devices. You can access Swiftsell through a web browser on your computer, install the desktop application for offline use, and download the mobile app from both the App Store (for iOS devices) and Play Store (for Android devices).",
        },
        {
          question: "How do I switch between online and offline mode in Swiftsell?",
          answer: "Switching between online and offline mode in Swiftsell is seamless. The software automatically detects your internet connectivity status. When you have a stable internet connection, Swiftsell operates in online mode. If you lose internet connectivity, it will automatically switch to offline mode and continue functioning until the connection is restored.",
        },
        {
          question: "Are there any differences between the web, desktop, and mobile versions of Swiftsell?",
          answer: "The core features and functionality of Swiftsell remain consistent across all platforms. However, there may be slight variations in the user interface and layout to accommodate the different screen sizes and device capabilities. Rest assured that regardless of the platform you choose, you'll have access to Swiftsell's powerful tools and features.",
        },
        {
          question: "Is my data secure with Swiftsell?",
          answer: "Swiftsell takes data security seriously. It employs industry-standard security measures, including data encryption, secure server infrastructure, and regular backups, to ensure the confidentiality and integrity of your business data.",
        },
        {
          question: "Does Swiftsell provide customer support?",
          answer: "Yes, Swiftsell offers customer support to assist you with any queries or technical issues you may encounter. The support team is available to provide guidance and ensure a smooth experience with the software.",
        },
        {
          question: "How can I get started with Swiftsell?",
          answer: "Getting started with Swiftsell is easy. You can visit our website and sign up for a trial or contact our sales team to discuss your specific requirements and pricing options.",
        },
        {
          question: "Is there training available for using Swiftsell?",
          answer: "Yes, Swiftsell provides training resources, tutorials, and documentation to help you get up to speed with the software. Additionally, the support team is available to assist you in the onboarding process and address any questions you may have.",
        }
      ],
    };
  },
  methods: {
    toggleExpand(index) {
      if (this.currentPanel === index) {
        this.panelExpanded = false;
        this.currentPanel = null;
      } else {
        this.currentPanel = index;
        this.panelExpanded = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
