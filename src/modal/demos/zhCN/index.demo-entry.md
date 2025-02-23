# 模态框 Modal

它会弹出来，然后给你看点东西。

## 演示

```demo
basic.vue
controlled.vue
mask-closable.vue
custom-position.vue
preset-card.vue
preset-confirm.vue
preset-confirm-slot.vue
transform-origin.vue
nested-debug.vue
a11y-debug.vue
raw-debug.vue
dark-1-debug.vue
dark-2-debug.vue
dark-3-debug.vue
dark-4-debug.vue
dark-5-debug.vue
drawer-debug.vue
dark-6-debug.vue
dark-7-debug.vue
dark-8-debug.vue
dark-9-debug.vue
dark-10-debug.vue
```

## API

### Modal Props

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| auto-focus | `boolean` | `true` | 是否自动聚焦 Modal 第一个可聚焦的元素 | 2.24.2 |
| close-on-esc | `boolean` | `true` | 是否在摁下 Esc 键的时候关闭 Modal | 2.24.2 |
| display-directive | `'if' \| 'show'` | `'if'` | 使用何种指令控制模态框主体的条件渲染 |  |
| mask-closable | `boolean` | `true` | 点击遮罩时是否发出 `update:show` 事件 |  |
| preset | `'dialog' \| 'card'` | `undefined` | 模态框使用何种预设 |  |
| show | `boolean` | `false` | 是否展示 Modal |  |
| to | `string \| HTMLElement` | `body` | Modal 的挂载位置 |  |
| transform-origin | `'mouse' \| 'center'` | `'mouse'` | 模态框动画出现的位置 |  |
| trap-focus | `boolean` | `true` | 是否将焦点锁定在 Modal 内部 | 2.24.2 |
| z-index | `number` | `undefined` | Modal 的 z-index | 2.24.0 |
| on-after-enter | `() => void` | `undefined` | Modal 出现后的回调 |  |
| on-after-leave | `() => void` | `undefined` | Modal 关闭后的回调 |  |
| on-esc | `() => void` | `undefined` | 焦点在 Modal 内部时按下 Esc 键的回调 | 2.24.2 |
| on-mask-click | `() => void` | `undefined` | 点击遮罩时的回调 |  |
| on-update:show | `(value: boolean) => void` | `undefined` | 模态框更新是否展示状态的回调 |  |

### Modal（Card 预设）Props

参考 [Card props](card#Card-Props)

### Modal（Dialog 预设）Props

参考 [Dialog props](dialog#Dialog-Props)

### Modal（无预设）Slots

| 名称    | 参数 | 说明         |
| ------- | ---- | ------------ |
| default | `()` | 模态框的内容 |

### Modal（Card 预设）Slots

参考 [Card slots](card#Card-Slots)

### Modal（Dialog 预设）Slots

参考 [Dialog slots](dialog#Dialog-Slots)
