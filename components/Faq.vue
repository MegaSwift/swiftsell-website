<template>
  <section id="faq" class="faq">
    <v-container>
      <div class="contentWrapper">
        <div>
          <h2 data-aos="fade-up" data-aos-duration="400">FAQs</h2>
          <div class="expansionsWrapper">
            <v-expansion-panels flat v-model="panels">
              <v-expansion-panel v-for="n in 5" :key="n" class="panel-item">
                <v-expansion-panel-header
                  :expand-icon="
                    panelExpanded && currentPanel === n
                      ? 'mdi-close'
                      : 'mdi-plus'
                  "
                  @click="toggleExpand(n)"
                >
                  What is Swiftsell ?
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="expandedContent">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad
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