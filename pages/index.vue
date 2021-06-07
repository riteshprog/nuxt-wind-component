<template>
  <div>
    <AccordiansBase />
    <FormulateInput
      v-model="value"
      :options="{
        first: 'First',
        second: 'Second',
        third: 'Third',
        fourth: 'Fourth',
      }"
      type="select"
      placeholder="Select an option"
      label="Which of your children is your favorite?"
    />
    <h1>This is heading</h1>
    <p><a @click="$refs.documentSlide.toggleOpen()">left</a></p>
    <p><a @click="$refs.document.toggleOpen()">right</a></p>
    <WTabsHorizontal
      ref="tabs"
      v-model="currentTabs"
      class="w-full -mb-px"
      :tabs="[
        { name: 'Documentation', icon: '' },
        {
          name: 'Verification methods (Portfolio-scale)',

          icon: '',
        },
      ]"
    />
    <WButtonBase>Save</WButtonBase>
    <LazyAccordiansBase :expandable="expandable">
      <template #header>
        <div class="p-4 sm:flex">According title</div>
      </template>
      <template #content class="space-y-2">
        <div class="md:flex bg-primary-600 p-4">
          <div class="md:w-6/12 text-white">
            <div class="text-xs font-medium"></div>
            <h2 class="font-medium text-lg leading-5 my-2">Dummy Text</h2>
          </div>
        </div>
      </template>
    </LazyAccordiansBase>
    <div class="bg-primary-900 text-white">
      <WButtonExpandable :expanded="true" class="border-b border-primary-700">
        <div class="w-full text-left text-xs font-semibold text-white">
          <WButtonBase type="nav" :class="['font-semibold text-primary-200']">
            <span v-if="expanded">ACHIEVE</span>
            <div
              v-remove-class-hover="'opacity-0'"
              :class="[
                {
                  hidden: expanded,
                },
                'opacity-0 absolute pl-13 z-20 -ml-1.5 transitions-opacity duration-150',
              ]"
            >
              <div
                class="
                  bg-primary-900
                  shadow-md
                  px-6
                  text-white
                  py-2
                  ml-16
                  rounded-md
                "
              >
                ACHIEVE
              </div>
            </div>
          </WButtonBase>
        </div>

        <template v-slot:buttons>
          <div class="mb-2">
            <WButtonBase type="subNav">
              <span v-if="expanded">Dashboard</span>
              <div
                v-remove-class-hover="'opacity-0'"
                :class="[
                  {
                    hidden: expanded,
                  },
                  'opacity-0 absolute pl-13 z-20 -ml-1.5 transitions-opacity duration-150',
                ]"
              >
                <div
                  class="
                    bg-primary-900
                    shadow-md
                    px-6
                    text-white
                    py-2
                    ml-16
                    rounded-md
                  "
                >
                  Dashboard
                </div>
              </div>
            </WButtonBase>
            <WButtonBase
              type="subNav"
              :class="[
                currentTab === 'Checklist'
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-600',
                'mt-2',
              ]"
              @click.native="
                $router.push(
                  `/shared-workspaces/${sharedWorkspace.portfolio_number}/scorecard`
                )
              "
            >
              <span v-if="expanded">Checklist</span>
              <div
                v-remove-class-hover="'opacity-0'"
                :class="[
                  {
                    hidden: expanded,
                  },
                  'opacity-0 absolute pl-13 z-20 -ml-1.5 transitions-opacity duration-150',
                ]"
              >
                <div
                  class="
                    bg-primary-900
                    shadow-md
                    px-6
                    text-white
                    py-2
                    ml-16
                    rounded-md
                  "
                >
                  Checklist
                </div>
              </div>
            </WButtonBase>
            <WButtonBase
              type="subNav"
              :class="[
                currentTab === 'Documents'
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-600',
                'mt-2',
              ]"
              @click.native="
                $router.push(
                  `/shared-workspaces/${sharedWorkspace.portfolio_number}/documents`
                )
              "
            >
              <span v-if="expanded">Documents</span>
              <div
                v-remove-class-hover="'opacity-0'"
                :class="[
                  {
                    hidden: expanded,
                  },
                  'opacity-0 absolute pl-13 z-20 -ml-1.5 transitions-opacity duration-150',
                ]"
              >
                <div
                  class="
                    bg-primary-900
                    shadow-md
                    px-6
                    text-white
                    py-2
                    ml-16
                    rounded-md
                  "
                >
                  Documents
                </div>
              </div>
            </WButtonBase>
            <WButtonBase
              type="subNav"
              :class="[
                currentTab === 'Reviews'
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-600',
                'mt-2',
              ]"
              @click.native="
                $router.push(
                  `/shared-workspaces/${sharedWorkspace.portfolio_number}/reviews`
                )
              "
            >
              <span v-if="expanded">Reviews</span>
              <div
                v-remove-class-hover="'opacity-0'"
                :class="[
                  {
                    hidden: expanded,
                  },
                  'opacity-0 absolute pl-13 z-20 -ml-1.5 transitions-opacity duration-150',
                ]"
              >
                <div
                  class="
                    bg-primary-900
                    shadow-md
                    px-6
                    text-white
                    py-2
                    ml-16
                    rounded-md
                  "
                >
                  Reviews
                </div>
              </div>
            </WButtonBase>
          </div>
        </template>
      </WButtonExpandable>
    </div>
    <div>
      <WButtonDropdown class="ml-3">
        <WButtonBase class="h-full" type="primaryInverted"
          >DropDown</WButtonBase
        >
        <template v-slot:customButtons>
          <WButtonBase type="neutral"> Add </WButtonBase>
          <WButtonBase type="neutral"> Add More </WButtonBase>
        </template>
      </WButtonDropdown>
    </div>
    <WLinkBase :link="'https://www.google.com'">Text-link</WLinkBase>
    <WLoadingSpinner />
    <WLoadingList />
    <WStepsHorizontal
      alignment="justify-around"
      :steps="[
        {
          name: 'SELECT 15 STRATEGIES',
          caption: '/15 selected',
        },
        {
          name: 'UPLOAD DOCUMENTS',
          caption: '/15 uploaded',
        },
        {
          name: 'SUBMIT FOR REVIEW',
        },
      ]"
    />
    <WStepsVertical
      :steps="[
        {
          name: 'SUBSCRIBE',
          status: registeredStatus,
          link: '/membership/register',
        },
        {
          name: 'CONFIRMATION',
          description: 'Review your subscription details.',
          status: registeredStatus ? 'complete' : '',
          link: registeredStatus ? '/membership/confirmation' : '#',
        },
        {
          name: 'PAYMENT',
          status: registeredStatus ? 'current' : '',
          link: '#',
        },
        {
          name: 'INFORMATION',
          status: '',
          link: '#',
        },
      ]"
    />

    <SlideoversOverlayLeft
      ref="documentSlide"
      title="hi"
      class="z-50"
      :side="'left-0'"
    >
      <template v-slot:content>
        <h1>Slide Over Lay</h1>
      </template>
    </SlideoversOverlayLeft>
    <SlideoversOverlayRight
      ref="document"
      title="hi"
      class="z-50"
      :side="'right-0'"
    >
      <template v-slot:content>
        <h1>Slide Over right</h1>
      </template>
    </SlideoversOverlayRight>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      currentTabs: 'Documentation',
    }
  },
  computed: {
    ...mapState({
      expandable: (state) => state.settings.expandable,
    }),
  },
}
</script>
