<script setup>
import { RouterLink } from 'vue-router';
import Avatar from '@/components/Avatar.vue';
import { CardContainer, CardBody, CardItem } from '@/components/card/card-3d';
</script>

<template>
  <div class="mt-24 mb-4 ml-4 mr-4 max-w-screen">
    <!--Left Column-->
    <div class="flex flex-row gap-4 flex-wrap justify-center">
      <div class="lg:basis-3/10 basis-full lg:max-w-3/10 max-w-full">
        <div class="lg:sticky lg:top-24">
          <Avatar class="g-hoverable"></Avatar>
          <!-- <div class="g-card g-hoverable g-pushable avatar"></div> -->
          <!-- <img :src="ImageAvatar" style="width: 100%; padding-top: 10%;" alt="<strong>Zhaoyang Zhang</strong>" />
        </div> -->
          <p class="text-center text-xl font-bold p-2">
            <strong>Zhaoyang Zhang</strong>
          </p>
          <p class="text-center p-2"> Applied Scientist at <b>AWS AI Lab</b></p>
          <p class="text-center p-2"> <b>Before</b>: <br> Senior Scientist at <b>Tencent ARC Lab</b> <br> Ph.D. at MMLab, <b>The Chinese University of Hong Kong</b></p>
                      <p class="text-center p-2">
              <b>Research Interests</b>
              <br> 🤖  Reinforcement Learning
              <br> 🧠  Image/Video generation
              <br> &#9889  Efficient AI
              <br> 📷  Computational Photography
            </p>
          <div class="flex flex-wrap gap-4 justify-center p-2">
            <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0);"
              @click="showMail()">
              <i class="fa fa-envelope"></i> Email</a>
            <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="./resume/ZY_CV.pdf" target="_blank">
              <i class="fa fa-file-text"></i> Resume</a>
            <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="https://scholar.google.com/citations?user=Pf6o7uAAAAAJ" target="_blank">
              <i class="fa fa-graduation-cap"></i> Scholar</a>
            <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="https://www.linkedin.com/in/zhaoyang%EF%BC%88%E5%BC%A0%E5%85%86%E9%98%B3%EF%BC%89-zhang-89b518289/" target="_blank">
              <i class="fa fa-linkedin"></i> Linkedin</a>
          </div>
        </div>
      </div>
      <!--Right Column-->
      <div class="lg:basis-6/10 basis-full lg:max-w-6/10 max-w-full">
        <p class="text-xl font-bold p-4">Biography</p>
        <p class="p-4 leading-relaxed text-left">
I’m currently an Applied Scientist on the Fundamental Research team at AWS AI Lab. I’m fortunate to work with <a class="link" href="https://pages.ucsd.edu/~ztu/">Prof. Zhuowen Tu</a> and <a class="link" href="https://web.cs.ucla.edu/~soatto/">Prof. Stefano Soatto</a>.

Before joining Amazon, I was a Senior Research Scientist at Tencent ARC Lab, where I worked with <a class="link" href="https://www.linkedin.com/in/YingShanProfile/">Dr. Ying Shan</a> and <a class="link" href="https://xinntao.github.io/">Dr. Xintao Wang</a>.

I earned my Ph.D. at MMLab, The Chinese University of Hong Kong, advised by <a class="link" href="https://scholar.google.com/citations?user=-B5JgjsAAAAJ&hl=zh-TW">Prof. Xiaogang Wang</a>, <a class="link" href="http://luoping.me/">Prof. Ping Luo</a>, and <a class="link" href="https://gujinwei.org">Prof. Jinwei Gu</a>. 
My research interests include efficient reinforcement learning, image/video generation and editing, and efficient deep learning.
        </p>
        <p class="px-4 pb-4 leading-relaxed text-left">
          <!-- <b>I am open to opportunities.</b> Feel free to reach out! -->
        </p>
        <p class="text-xl font-bold p-4">News</p>
        <div class="pl-4 pr-4 pb-4">
          <p> <b>2026.4</b> Our recent RL-aware on-policy distillation work <a class="link" href="https://arxiv.org/abs/2602.22495">RLAD</a> has been accepted at <b>ICML 2026</b>. </p>
          <p> <b>2026.4</b> Two papers of RL for image editting and panoramic video generation  are accepted at <b>CVPR 2026</b>, please check <a class="link" href="https://sparkstj.github.io/talk2move//">Talk2Move</a> (Highlight) and CubeComposer (Coming soon...). </p>
          <p> <b>2026.1</b> Our work <a class="link" href="https://sparkstj.github.io/talk2move//">Talk2Move</a>  has been released. </p>
          <p> <b>2026.1</b> Two papers are accepted at <b>ICLR 2026</b>, please check <a class="link" href="https://lg-li.github.io/project/tooncomposer/">ToonComposer</a> and <a class="link" href="https://liyaowei-stu.github.io/project/IC_Custom/">IC-Custom</a>. </p>
          <p> <b>2025.8</b> One paper <a class="link" href="https://liyaowei-stu.github.io/project/BlobCtrl/">BlobCtrl</a>  is accepted at <b>SIGGRAPH Asia 2025</b>.</p>
          <p> <b>2025.3</b> Three papers are accepted at <b>SIGGRAPH 2025</b>, please check <a class="link" href="https://yxbian23.github.io/project/video-painter">VideoPainter</a> ,<a class="link" href="https://shiyi-zh0408.github.io/projectpages/FlexiAct">FlexiAct</a> and <a class="link" href="https://zhuang2002.github.io/Cobra">Cobra</a>. </p>
          <p> <b>2025.2</b> Two papers are accepted at <b>CVPR 2025</b>, please check <a class="link" href="https://lg-li.github.io/project/nvcomposer/">NVComposer</a> and <a class="link" href="https://onevfall.github.io/project_page/ditctrl/">DiTCtrl</a>. </p>
          <p> <b>2024.12</b> Two papers are accepted at <b>AAAI 2025</b>, please check please check <a class="link" href="https://liyaowei-stu.github.io/project/ImageConductor/">ImageConductor</a> and  <a class="link" href="https://github.com/cure-lab/MotionCraft/">MotionCraft</a>.  </p>
          <p> <b>2024.9</b> Two papers are accepted at <b>NeurIPS 2024</b>, please check <a class="link" href="https://github.com/mira-space/MiraData ">MiraData</a> and <a class="link" href="https://github.com/MC-E/ReVideo ">ReVideo</a>. </p>

        </div>
        <p class="text-xl font-bold p-4">Selected Publication</p>
        <div class="flex flex-col gap-3 max-w-full">
          <CardContainer class="w-full max-w-full" v-for="researchItem in researchItems" :key="researchItem.title"
            :container-class="'p-0'">
            <CardBody
              class="group/card relative w-full max-w-full h-auto rounded-xl border border-black/[0.1] bg-white p-4 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] g-shadow pointer-events-auto">
              <div class="flex flex-row gap-4 items-center" style="transform-style: preserve-3d;">
                <CardItem :translate-z="55" class="shrink-0">
                  <img :src="researchItem.background" alt="cover"
                    class="w-30 h-60 sm:w-40 sm:h-40 md:w-50 md:h-40 lg:w-50 lg:h-40 rounded-lg object-cover shadow-xl" />
                </CardItem>
                <div class="flex-1 min-w-0" style="transform-style: preserve-3d;">
                  <CardItem :translate-z="50" class="text-lg font-bold text-neutral-700 dark:text-white">
                    <span class="w-full">{{ researchItem.title }}</span>
                  </CardItem>
                  <CardItem as="p" :translate-z="40" class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    <b class="text-neutral-500 dark:text-neutral-400"><span v-html="researchItem.venue"></span><br /></b>
                    <span v-html="researchItem.authors"></span>
                    <span v-if="researchItem.note" class="block text-xs italic text-neutral-500 dark:text-neutral-400 mt-1">
                      {{ researchItem.note }}
                    </span>
                  </CardItem>
                  <CardItem :translate-z="60" class="shrink-0">
                    <div class="mt-3 flex flex-wrap gap-2">
                      <template v-for="operationItem in researchItem.operations" :key="operationItem.buttonName">
                        <a v-if="operationItem.action == 'modal'"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0)"
                          @click="$emit('showModal', operationItem.modalTitle, operationItem.modalContent)"><i
                            :class="'fa ' + operationItem.buttonIcon"></i> {{ operationItem.buttonName }}</a>
                        <a v-else-if="operationItem.action == 'nvcomposer-demo-modal'"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0)"
                          @click="$emit('showNVComposerDemoModal')"><i :class="'fa ' + operationItem.buttonIcon"></i> {{
                            operationItem.buttonName }}</a>
                        <a v-else-if="operationItem.action == 'tooncomposer-demo-modal'"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0)"
                          @click="$emit('showToonComposerDemoModal')"><i :class="'fa ' + operationItem.buttonIcon"></i> {{
                            operationItem.buttonName }}</a>
                        <a v-else-if="operationItem.action == 'link' && operationItem.link"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative"
                          :href="operationItem.link"><i :class="'fa ' + operationItem.buttonIcon"></i> {{
                            operationItem.buttonName }}</a>
                        <span v-else-if="operationItem.action == 'link' && !operationItem.link"
                          class="g-button g-non-selectable g-relative opacity-50 cursor-not-allowed">
                          <i :class="'fa ' + operationItem.buttonIcon"></i> {{ operationItem.buttonName }}
                          <span class="text-xs ml-1">(coming soon)</span>
                        </span>
                        <RouterLink v-else-if="operationItem.action == 'route' && operationItem.link"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative" :to="operationItem.link">
                          <i :class="'fa ' + operationItem.buttonIcon"></i> {{ operationItem.buttonName }}
                        </RouterLink>
                        <span v-else-if="operationItem.action == 'route' && !operationItem.link"
                          class="g-button g-non-selectable g-relative opacity-50 cursor-not-allowed">
                          <i :class="'fa ' + operationItem.buttonIcon"></i> {{ operationItem.buttonName }}
                          <span class="text-xs ml-1">(coming soon)</span>
                        </span>
                      </template>
                    </div>
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <!--Services-->
        <p class="text-xl font-bold p-4">Services</p>
        <div class="pl-4 pr-4 pb-4">
          <p> <b>Conference Reviewer</b>
            <br> CVPR / ICCV / ECCV / NeurIPS / ICML / ICLR / SIGGRAPH  
          </p>
          <p> <b>Journal Reviewer</b>
            <br> IEEE TPAMI / IJCV
          </p>
        </div>

        <!-- <p class="text-xl font-bold p-4">Teaching</p>
        <div class="pl-4 pr-4 pb-4">
          <p> <b>CSCI3330 Teaching Assistant</b> <br>Fundamentals of Applied Computer Vision (2024 Spring) </p>
          <p> <b>CSCI2720 Teaching Assistant</b> <br>Building Web Applications (2024 Fall) </p>
          <p> <b>CSCI3310 Teaching Assistant</b> <br>Mobile Computing and Applications Development (2025 Spring) </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = `Zhaoyang's Homepage`
  },
  data() {
    return {
      researchItems: [
                {
          title: 'Reinforcement-aware Ditillation for LLM Reasoning',
          authors: '<strong>Zhaoyang Zhang</strong>, Shuli Jiang, Yantao Shen, Yuting Zhang, Dhananjay Ram, Shuo Yang, Wei Xia, Zhuowen Tu, Stefano Soatto',
          venue: 'ICML 2026',
          date: '2026/04',
          background: './pub-images/RLAD.png',
          // note: 'Corresponding Author',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: ''
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: ''
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: ''
            }
          ]
        },
        {
          title: 'Talk2Move: Reinforcement Learning for Text-Instructed Object-Level Geometric Transformation in Scenes',
          authors: 'Jing Tan, <strong>Zhaoyang Zhang</strong>, Yantao Shen, Jiarui Cai, Shuo Yang, Jiajun Wu, Wei Xia, Zhuowen Tu, Stefano Soatto',
          venue: 'CVPR 2026 (Highlight)',
          date: '2026/02',
          background: './pub-images/Talk2Move.png',
          note: 'Corresponding Author',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://arxiv.org/abs/2601.02356'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://github.com/sparkstj/Talk2Move'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://sparkstj.github.io/talk2move/'
            }
          ]
        },
        {
          title: 'BlobCtrl: Taming Controllable Blob for Element-level Image Editing',
          authors: 'Yaowei Li, Lingen Li, <strong>Zhaoyang Zhang</strong>, Xiaoyu Li, Guangzhi Wang, Hongxiang Li, Xiaodong Cun, Ying Shan, Yuexian Zou',
          venue: 'SIGGRAPH Asia 2025',
          date: '2025/9',
          background: './pub-images/blob.jpg',
          note: 'Project Lead',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://dl.acm.org/doi/10.1145/3757377.3763897'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://liyaowei-stu.github.io/project/BlobCtrl'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/TencentARC/BlobCtrl'
            }
          ]
        },
        {
          title: 'VideoPainter: Any-length Video Inpainting and Editing with Plug-and-Play Context Control',
          authors: 'Yuxuan Bian, <strong>Zhaoyang Zhang</strong>, Xuan Ju, Mingdeng Cao, Liangbin Xie, Ying Shan, Qiang Xu',
          venue: 'SIGGRAPH 2025 ',
          date: '2025/3',
          background: './pub-images/VideoPainter.png',
          note: 'Project Lead',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://dl.acm.org/doi/10.1145/3721238.3730673'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://yxbian23.github.io/project/video-painter'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/TencentARC/VideoPainter'
            }
          ]
        },
        {
          title: 'FlexiAct: Towards Flexible Action Control in Heterogeneous Scenarios',
          authors: 'Shiyi Zhang, Junhao Zhuang, <strong>Zhaoyang Zhang</strong>, Ying Shan, Yansong Tang',
          venue: 'SIGGRAPH 2025 ',
          date: '2025/3',
          background: './pub-images/Flexiact.png',
          note: 'Project Lead',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://dl.acm.org/doi/pdf/10.1145/3721238.3730683'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://shiyi-zh0408.github.io/projectpages/FlexiAct'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/shiyi-zh0408/FlexiAct'
            }
          ]
        },
        {
          title: 'Cobra: Efficient Line Art COlorization with BRoAder References',
          authors: 'Junhao Zhuang, Lingen Li, Xuan Ju, <strong>Zhaoyang Zhang</strong>, Chun Yuan, Ying Shan',
          venue: 'SIGGRAPH 2025 ',
          date: '2025/3',
          background: './pub-images/Cobra.png',
          note: 'Project Lead',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://dl.acm.org/doi/10.1145/3721238.3730660'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://zhuang2002.github.io/Cobra/'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/Zhuang2002/Cobra'
            }
          ]
        },

        {
          title: 'NVComposer: Boosting Generative Novel View Synthesis with Multiple Sparse and Unposed Images',
          authors: 'Lingen Li, <strong>Zhaoyang Zhang</strong>, Yaowei Li, Jiale Xu, Wenbo Hu, Xiaoyu Li, Weihao Cheng, Jinwei Gu, Tianfan Xue, Ying Shan',
          venue: 'CVPR 2025 ',
          date: '2025/2',
          background: './pub-images/nv.jpg',
          note: 'Project Lead, * Equal Contribution',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://openaccess.thecvf.com/content/CVPR2025/html/Li_NVComposer_Boosting_Generative_Novel_View_Synthesis_with_Multiple_Sparse_and_CVPR_2025_paper.html'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://lg-li.github.io/project/nvcomposer/'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/TencentARC/NVComposer'
            }
          ]
        },


        {
          title: 'Image Conductor: Precision Control for Interactive Video Synthesis',
          authors: 'Yaowei Li, Xintao Wang, <strong>Zhaoyang Zhang</strong>, Zhouxia Wang, Ziyang Yuan, Liangbin Xie, Yuexian Zou, Ying Shan',
          venue: 'AAAI 2025 ',
          date: '2024/10',
          background: './pub-images/ic.png',
          note: 'Project Lead',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://ojs.aaai.org/index.php/AAAI/article/download/32533/34688'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://liyaowei-stu.github.io/project/ImageConductor/'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/liyaowei-stu/ImageConductor?tab=readme-ov-file'
            }
          ]
        },

        {
          title: 'MiraData: A Large-Scale Video Dataset with Long Durations and Structured Captions',
          authors: 'Xuan Ju*, Yiming Gao*, <strong>Zhaoyang Zhang</strong>*, Ziyang Yuan, Xintao Wang, Ailing Zeng, Yu Xiong, Qiang Xu, Ying Shan',
          venue: 'NeurIPS 2025 ',
          date: '2024/6',
          background: './pub-images/mira.jpg',
          note: 'Project Lead, * Equal Contribution',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://arxiv.org/abs/2407.06358v1'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://mira-space.github.io/'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/mira-space/MiraData'
            }
          ]
        },

        {
          title: 'Cached Transformers: Improving Transformers with Differentiable Memory Cache',
          authors: '<strong>Zhaoyang Zhang</strong>, Wenqi Shao, Yixiao Ge, Xiaogang Wang, Jinwei Gu, Ping Luo',
          venue: 'AAAI 2024 ',
          date: '2023/10',
          background: './pub-images/cache.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://ojs.aaai.org/index.php/AAAI/article/view/29636/31079'
            },
          ]
        },

        {
          title: 'Omniquant: Omnidirectionally calibrated quantization for large language models',
          authors: 'Wenqi Shao, Mengzhao Chen, <strong>Zhaoyang Zhang</strong>, Peng Xu, Lirui Zhao, Zhiqian Li, Kaipeng Zhang, Peng Gao, Yu Qiao, Ping Luo',
          venue: 'ICLR 2024 (Spotlight)',
          date: '2023/10',
          background: './pub-images/OmniQuant.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://arxiv.org/abs/2308.13137'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://github.com/OpenGVLab/OmniQuant'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/OpenGVLab/OmniQuant'
            }
          ]
        },



        {
          title: 'AutoDIR: Automatic all-in-one image restoration with latent diffusion',
          authors: 'Yitong Jiang*, <strong>Zhaoyang Zhang</strong>*, Tianfan Xue, Jinwei Gu',
          venue: 'ECCV 2024',
          date: '2024/09',
          background: './pub-images/AutoDIR.png',
          note: '* Equal Contribution',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://arxiv.org/abs/2310.10123'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://jiangyitong.github.io/AutoDIR_webpage/'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/jiangyitong/AutoDIR'
            }
          ]
        },
        {
          title: 'Real-time Controllable Denoising for Image and Video',
          authors: '<strong>Zhaoyang Zhang</strong>*, Yitong Jiang*, Wenqi Shao, Xiaogang Wang, Ping Luo, Kaimo Lin, Jinwei Gu',
          venue: 'CVPR 2023',
          date: '2023/12',
          background: './pub-images/Real-time_Controllable.png',
          note: '* Equal Contribution',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://openaccess.thecvf.com/content/CVPR2023/papers/Zhang_Real-Time_Controllable_Denoising_for_Image_and_Video_CVPR_2023_paper.pdf'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://zzyfd.github.io/RCD-page/'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/jiangyitong/RCD?tab=readme-ov-file'
            }
          ]
        },
        {
          title: 'Differentiable Dynamic Quantization with Mixed Precision and Adaptive Resolution',
          authors: '<strong>Zhaoyang Zhang</strong>, Wenqi Shao, Jinwei Gu, Xiaogang Wang, Ping Luo',
          venue: 'ICML 2021 (Spotlight) ',
          date: '2021/5',
          background: './pub-images/ddq.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://proceedings.mlr.press/v139/zhang21r/zhang21r.pdf'
            },
                        {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/d-li14/dgconv.pytorch'
            }
          ]
        },
        {
          title: 'STAR: A structure-aware lightweight transformer for real-time image enhancement',
          authors: '<strong>Zhaoyang Zhang</strong>, <strong>Yitong Jiang</strong>, Jun Jiang, Xiaogang Wang, Ping Luo, Jinwei Gu',
          venue: 'ICCV 2021',
          date: '2021/10',
          background: './pub-images/STAR.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://openaccess.thecvf.com/content/ICCV2021/papers/Zhang_STAR_A_Structure-Aware_Lightweight_Transformer_for_Real-Time_Image_Enhancement_ICCV_2021_paper.pdf'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/zzyfd/STAR-pytorch'
            }
          ]
        },


        {
          title: 'Differentiable learning-to-group channels via groupable convolutional neural networks',
          authors: '<strong>Zhaoyang Zhang</strong>, Jingyu Li, Wenqi Shao, Zhanglin Peng, Ruimao Zhang, Xiaogang Wang, Ping Luo',
          venue: 'ICCV 2019',
          date: '2019/10',
          background: './pub-images/dgc.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://openaccess.thecvf.com/content_ICCV_2019/html/Zhang_Differentiable_Learning-to-Group_Channels_via_Groupable_Convolutional_Neural_Networks_ICCV_2019_paper.html'
            },

          ]
        },

        {
          title: 'Temporal Sequence Distillation: Towards Few-Frame Action Recognition in Videos',
          authors: '<strong>Zhaoyang Zhang</strong>,  Zhanghui Kuang, Ping Luo, Litong Feng, Wei Zhang',
          venue: 'ACM MM 2018',
          date: '2018/8',
          background: './pub-images/tsd.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://dl.acm.org/doi/pdf/10.1145/3240508.3240534'
            },

          ]
        },

      ]
    }
  },
  methods: {
    navTo(id) {
      // child = document.getElementById(id)
      // window.scrollTo(0, 0)
      // window.scrollTo(0, child.offsetTop - 60)
    },
    showMail() {
      this.$emit('showModal', 'Email Address',
        '<p style=\'text-align: center\'><i class=\'fa-3x fa fa-beat fa-envelope\'></i></p><p style=\'text-align: center\'>zhaoyangzhang9#8o2iink.cuhk.edu.hk</p>'.replace('9#8o2i', '@l'))
    }
  }
}
</script>

<style scoped>
.avatar {
  /* background-position: bottom; */
  background-repeat: no-repea !important;
  background-size: cover !important;
  height: 150px;
  width: 150px;
}

/* Marquee title scrolling for long text */
/* .max-w-60vw {
  max-width: 60vw;
} */

.animate-infinite-scroll {
  display: inline-block;
  white-space: nowrap;
  will-change: transform;
  animation: marquee-scroll 14s linear infinite;
}

.animate-infinite-scroll span {
  display: inline-block;
  padding-right: 2rem;
  /* gap between repeats */
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
