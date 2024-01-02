<template>
  <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl m-5 flex-col">
    <Title text="Edgar Rojas" />
    <ul>
      <li>
        Github:
        <a
          href="https://github.com/edmidev"
          target="_blank"
          class="text-emerald-600"
          >edmidev</a
        >
      </li>
    </ul>
    <div class="md:flex-grow mt-5">
      <Title text="How to deploy" />
      <Paragraph text="Follow the next instructions:" />

      <pre class="language-bash shiki shiki-themes material-theme-lighter material-theme-palenight">
        <code>
          <span class="line" line="1"><span style="color: #90A4AE; font-style: italic;"># Clone project</span></span>
          <span class="line" line="2"><span style="color:orange">git</span><span style="color: #91B859"> clone</span><span style="color: #91B859"> https://github.com/edmidev/yodev.git</span></span>
          <span class="line" line="3"><span emptylineplaceholder="true"></span></span>
          <span class="line" line="4"><span style="color: #90A4AE; font-style: italic;"># Move into project</span></span>
          <span class="line" line="5"><span style="color:orange">cd</span><span style="color: #91B859"> yodev</span></span>
          <span class="line" line="6"><span emptylineplaceholder="true"></span></span>
          <span class="line" line="7"><span style="color: #90A4AE; font-style: italic;"># Install dependencies</span></span>
          <span class="line" line="8"><span style="color:orange">npm</span><span style="color: #91B859"> install</span></span>
          <span class="line" line="9"><span emptylineplaceholder="true"></span></span>
          <span class="line" line="10"><span style="color: #90A4AE; font-style: italic;"># Run project</span></span>
          <span class="line" line="11"><span style="color:orange">npm</span><span style="color: #91B859"> run dev</span></span>
      </code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Paragraph from "~/components/home/paragraph.vue";
import Title from "~/components/home/title.vue";
import Subtitle from "~/components/home/subtitle.vue";
import ListItem from "~/components/home/list-item.vue";
</script>

<style></style>
