<script setup>
  import { onMounted } from "vue";
  import { Tooltip, Modal, Collapse, initTWE } from "tw-elements";

  import BG from '@/assets/img/bg_all.gif'
  onMounted(() => {
    initTWE({ Tooltip, Modal, Collapse });
  });
</script>

<template>
  <div class="mt-16 flex justify-center" :style="{background: `url(${BG})`}">

    <div id="accordionExample">
  <div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 class="mb-0" id="headingOne">
      <button
        class="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        Accordion Item #1
        <span
          class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseOne"
      class="!visible"
      data-twe-collapse-item
      data-twe-collapse-show
      aria-labelledby="headingOne"
      data-twe-parent="#accordionExample">
      <div class="px-5 py-4">
        <strong>This is the first item's accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div
    class="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 class="mb-0" id="headingTwo">
      <button
        class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        Accordion Item #2
        <span
          class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingTwo"
      data-twe-parent="#accordionExample">
      <div class="px-5 py-4">
        <strong>This is the second item's accordion body.</strong> It is
        hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div
    class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button
        class="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
        Accordion Item #3
        <span
          class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseThree"
      class="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingThree"
      data-twe-parent="#accordionExample">
      <div class="px-5 py-4">
        <strong>This is the third item's accordion body.</strong> It is
        hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    <div>
      <button
  type="button"
  class="inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30"
  data-twe-toggle="modal"
  data-twe-target="#exampleModal"
  data-twe-ripple-init
  data-twe-ripple-color="light">

  Launch demo modal
</button>

<div
  data-twe-modal-init
  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
<div
    data-twe-modal-dialog-ref
    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
        <h5
          class="text-xl font-medium leading-normal text-surface dark:text-white"
          id="exampleModalLabel">
          Modal title
        </h5>
        <button
          type="button"
          class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
          data-twe-modal-dismiss
          aria-label="Close">
          <span class="[&>svg]:h-6 [&>svg]:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>

      <div class="relative flex-auto p-4" data-twe-modal-body-ref>
        Modal body text goes here.
      </div>

      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
        <button
          type="button"
          class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
          data-twe-modal-dismiss
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          class="ms-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
    <p class="text-lg">
      Hover the link to see the
      <a
        href="#"
        class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        data-twe-toggle="tooltip"
        title="Hi! I'm tooltip"
        >tooltip</a
      >
      <img src="/img/date.png">
    </p>
  </div>
</template>