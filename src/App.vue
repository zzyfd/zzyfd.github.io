<script setup>
import GModal from './components/util/GModal.vue'
import GButton from './components/util/GButton.vue'
</script>

<template>
  <div :class="'g-header-bar' + (isNavOpen ? ' responsive' : '')" id="header-bar">
    <a href="javascript:void(0);" class="active" @click="isNavOpen = false">
      <Transition name="fade" mode="out-in">
        <b :key="$route.name"> {{ $route.name }}</b>
      </Transition>
    </a>
    <Transition name="slide-right" mode="out-in">
      <div class="item" v-if="$route.name == 'About Me'">
        <a href="https://scholar.google.com/citations?user=Pf6o7uAAAAAJ" class="right" @click="isNavOpen = false">
          <i class="fa fa-graduation-cap"></i> <b>Google Scholar</b>
        </a>
        <!-- <a href="https://github.com/jiangyitong" class="right" @click="isNavOpen = false">
          <i class="fa fa-github"></i> <b>Github</b>
        </a> -->
      </div>
      <div class="item" v-else-if="$route.name == 'Uni-ISP'">
        <a class="right" href="https://arxiv.org/abs/2406.01003" @click="isNavOpen = false">
          <i class="fa fa-file"></i> <b>ArXiv Paper</b>
        </a>
        <a class="right" @click="isNavOpen = false">
          <i class="fa fa-code"></i> <b>Code (TBA)</b>
        </a>
        <RouterLink class="right" to="/dataset/five-cam" @click="isNavOpen = false">
          <i class="fa fa-database"></i> <b>FiveCam Dataset</b>
        </RouterLink>
      </div>
      <div class="item" v-else-if="$route.name == 'FiveCam Dataset'">
        <RouterLink class="right" to="/project/uni-isp" @click="isNavOpen = false">
          <i class="fa fa-file"></i> <b>Uni-ISP Project Page</b>
        </RouterLink>
      </div>
      <div class="item" v-else-if="$route.name == 'NVComposer'">
        <a class="right" href="https://arxiv.org/abs/2412.03517" @click="isNavOpen = false">
          <i class="fa fa-file"></i> <b>ArXiv Paper</b>
        </a>
        <a class="right" href="javascript:void(0);" @click="showNVComposerDemoModal">
          <i class="fa fa-gamepad"></i> <b>Demo</b>
        </a>
        <a class="right" href="https://github.com/TencentARC/NVComposer" @click="isNavOpen = false;">
          <i class="fa fa-code"></i> <b>Code</b>
        </a>
      </div>
      <div class="item" v-else-if="$route.name == 'ToonComposer'">
        <a class="right" href="https://arxiv.org/abs/2508.10881" @click="isNavOpen = false">
          <i class="fa fa-file"></i> <b>ArXiv Paper</b>
        </a>
        <a class="right" href="javascript:void(0);" @click="showToonComposerDemoModal">
          <i class="fa fa-gamepad"></i> <b>Demo</b>
        </a>
        <a class="right" href="https://github.com/TencentARC/ToonComposer" @click="isNavOpen = false;">
          <i class="fa fa-code"></i> <b>Code</b>
        </a>
      </div>
    </Transition>
    <a href="javascript:void(0);" class="icon" @click="isNavOpen = !isNavOpen">
      <i :class="'fa ' + (isNavOpen ? 'fa-close' : 'fa-bars')"></i>
    </a>
  </div>

  <RouterView v-slot="{ Component }">
    <Transition name="scale" mode="out-in">
      <Component :is="Component" @showModal="showModal" @showNVComposerDemoModal="showNVComposerDemoModal" @showToonComposerDemoModal="showToonComposerDemoModal"/>
    </Transition>
  </RouterView>

  <div class=" w-full footer text-center p-4 text-gray-400 z-100">
    <p><small>Anonymized data may be collected. <a style="color: black;" href="javascript:void(0);"
          @click="showModal('Anonymized Statistics', '\n This page records anonymized browsing history, including links clicked, duration of stay, and browser language settings. This data will be used for statistical analysis only.')">More
          Details</a> <br> Special thanks to <a href="https://lg-li.github.io/" target="_blank" class="link">lg-li.github.io</a> for the page design</small></p>
  </div>

  <g-modal v-bind:show.sync="modal.isOpen" @closeModal="closeModal">
    <div style="font-size: x-large; font-weight: bold; padding-bottom: 10px;">{{ modal.title }}</div>
    <div v-html="modal.content"></div>
    <div slot="action" style="text-align: right; padding-top: 10px;">
      <g-button class="g-relative" @click.native="modal.isOpen = false" style="margin: 0; cursor: pointer;"><i
          :class="'fa fa-' + modal.closeButtonIcon"></i> {{ modal.closeButtonText }}</g-button>
    </div>
  </g-modal>

</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
      modal: {
        isOpen: false,
        isTransparent: true,
        title: '',
        content: '',
        closeButtonText: 'OK',
        closeButtonIcon: 'check'
      }
    }
  },
  methods: {
    closeModal() {
      this.modal.isOpen = false
      this.modal.title = ''
      this.modal.content = ''
    },
    showModal(title, content, closeButtonText, closeButtonIcon) {
      this.modal.title = title
      this.modal.content = content
      this.modal.isOpen = true
      if (closeButtonText == null || closeButtonIcon == null) {
        this.modal.closeButtonText = 'OK'
        this.modal.closeButtonIcon = 'check'
      } else {
        this.modal.closeButtonText = closeButtonText
        this.modal.closeButtonIcon = closeButtonIcon
      }
    },
    showNVComposerDemoModal() {
      this.showModal("NVComposer Demo", '<div><p>Hugging Face ZeroGPU has a time limit for each user. Specifically, the quota for free users is around 120s ~ 180s. Consider run the demo on your local machine if you run out of your quota (GPU aborted during inference).</p><p>Select a demo server to continue... </p> <p style="text-align: center; font-size: x-large; font-weight: bold;"><a class="g-button g-hoverable g-pushable g-relative m-4" href="https://huggingface.co/spaces/TencentARC/NVComposer" style="cursor: pointer; padding: 20px;"><i class="fa fa-server"></i> Server 1</a> <a class="g-button g-hoverable g-pushable g-relative m-4" href="https://huggingface.co/spaces/l-li/NVComposer" style="cursor: pointer; padding: 20px;"><i class="fa fa-server"></i> Server 2</a></p> </div>', 'Close', 'times-circle')
    },
    showToonComposerDemoModal() {
      this.showModal("ToonComposer Demo Server", '<div><p>Hugging Face ZeroGPU has a time limit for each user. A single inference of ToonComposer takes about 210s. Consider run the demo on your local machine if you run out of your quota (GPU aborted during inference).</p> <p style="text-align: center; font-size: x-large; font-weight: bold;"><a class="g-button g-hoverable g-pushable g-relative m-4" href="https://huggingface.co/spaces/TencentARC/ToonComposer" style="cursor: pointer; padding: 20px;"><i class="fa fa-server"></i> Go to HF Space Demo</a> </p> </div>', 'Close', 'times-circle')
    }
  }
}
</script>

<style>
a {
  color: #666;
}

a:visited {
  color: #666;
}

.link {
  color: #666;
}

.link:visited {
  color: #888;
}

.heading {
  padding: 10px;
  color: #666;
  position: sticky;
  top: 60px;
  z-index: 99;
  border-radius: 15px;
  margin: 0;
}

@media screen and (min-width: 900px) {
  .mobile-only {
    display: none !important;
  }
}

/* ken-burn */
.ken-burn-wrapper {
  overflow: hidden;
  position: relative;
}

.ken-burn-wrapper .ken-burn-image {
  z-index: -1;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
}

.ken-burn-wrapper:hover .ken-burn-image {
  animation: move 30s ease-in-out infinite;
}

.ken-burn-wrapper:hover .ken-burn-image img {
  padding: 1%;
  width: 98%;
  filter: blur(0);
  opacity: 1.0;
  bottom: 0;
  position: relative;
  transform: scale(1.0);
}

.ken-burn-wrapper .ken-burn-image img {
  position: relative;
  padding: 1%;
  width: 98%;
  filter: blur(8px);
  transform: scale(1.05);
  transition: all 0.5s ease-in-out;
}

@keyframes move {
  0% {
    transform: scale(1) translate(0%, 0%);
  }

  25% {
    transform: scale(1.2) translate(-5%, -10%);
  }

  50% {
    transform: scale(1.2) translate(10%, 10%);
  }

  75% {
    transform: scale(1.2) translate(10%, -10%);
  }

  100% {
    transform: scale(1) translate(0%, 0%);
  }
}

.flipping {
  animation: flip 5s ease-in-out infinite;
}

@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }

  25% {
    transform: rotateY(30deg);
  }

  50% {
    transform: rotateY(0deg);
  }

  75% {
    transform: rotateY(-30deg);
  }

  100% {
    transform: rotateY(0deg);
  }
}

.footer {
  background-color: #ffffff;
  box-shadow: 0 -3px 4px #dadada;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
