<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">设置按钮</g-button>
    <g-button :loading="true">loading按钮</g-button>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  data() {
    return {
      content: `
          <g-button>默认按钮</g-button>
          <g-button icon="setting">设置按钮</g-button>
          <g-button :loading="true">loading按钮</g-button>
      `,
    };
  },
  components: {
    "g-button": Button,
  },
};
</script>
