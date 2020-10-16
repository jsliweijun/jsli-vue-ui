<template>
  <div class="wrapper" :class="{ error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $$event.target.value)"
      @focus="$emit('focus', $$event.target.value)"
      @blur="$emit('blur', $$event.target.value)"
    />
    <template v-if="error">
      <icon class="icon-error" name="error"></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "GInput",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  data() {
    return {};
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/var.scss";
.wrapper {
  // 水平一行
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  // input 与其他 icon 文字提示信息增加距离
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  // 默认样式
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
