import { h, defineComponent, toRef } from 'vue'
import { useStyle } from '../../../_mixins'
import NIconSwitchTransition from '../../icon-switch-transition'
import style from './styles/index.cssr'

export default defineComponent({
  name: 'BaseLoading',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    scale: {
      type: Number,
      default: 1
    },
    radius: {
      type: Number,
      default: 100
    },
    strokeWidth: {
      type: Number,
      default: 28
    },
    stroke: {
      type: String,
      default: undefined
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    useStyle('-base-loading', style, toRef(props, 'clsPrefix'))
  },
  render () {
    const { clsPrefix, radius, strokeWidth, stroke, scale } = this
    const scaledRadius = radius / scale
    return (
      <div class={`${clsPrefix}-base-loading`} role="img" aria-label="loading">
        <NIconSwitchTransition>
          {{
            default: () =>
              this.show ? (
                <div
                  class={`${clsPrefix}-base-loading__container`}
                  role="loading-container"
                >
                  <div class={`${clsPrefix}-base-loading__container-layer`}>
                    <div
                      class={`${clsPrefix}-base-loading__container-layer-left`}
                    >
                      <svg
                        class={`${clsPrefix}-base-loading__svg`}
                        viewBox={`0 0 ${2 * scaledRadius} ${2 * scaledRadius}`}
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: stroke }}
                      >
                        <circle
                          fill="none"
                          stroke="currentColor"
                          stroke-width={strokeWidth}
                          stroke-linecap="round"
                          cx={scaledRadius}
                          cy={scaledRadius}
                          r={radius - strokeWidth / 2}
                          stroke-dasharray={4.91 * radius}
                          stroke-dashoffset={2.46 * radius}
                        />
                      </svg>
                    </div>
                    <div
                      class={`${clsPrefix}-base-loading__container-layer-patch`}
                    >
                      <svg
                        class={`${clsPrefix}-base-loading__svg`}
                        viewBox={`0 0 ${2 * scaledRadius} ${2 * scaledRadius}`}
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: stroke }}
                      >
                        <circle
                          fill="none"
                          stroke="currentColor"
                          stroke-width={strokeWidth}
                          stroke-linecap="round"
                          cx={scaledRadius}
                          cy={scaledRadius}
                          r={radius - strokeWidth / 2}
                          stroke-dasharray={4.91 * radius}
                          stroke-dashoffset={2.46 * radius}
                        />
                      </svg>
                    </div>
                    <div
                      class={`${clsPrefix}-base-loading__container-layer-right`}
                    >
                      <svg
                        class={`${clsPrefix}-base-loading__svg`}
                        viewBox={`0 0 ${2 * scaledRadius} ${2 * scaledRadius}`}
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: stroke }}
                      >
                        <circle
                          fill="none"
                          stroke="currentColor"
                          stroke-width={strokeWidth}
                          stroke-linecap="round"
                          cx={scaledRadius}
                          cy={scaledRadius}
                          r={radius - strokeWidth / 2}
                          stroke-dasharray={4.91 * radius}
                          stroke-dashoffset={2.46 * radius}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key="placeholder"
                  class={`${clsPrefix}-base-loading__placeholder`}
                >
                  {this.$slots}
                </div>
              )
          }}
        </NIconSwitchTransition>
      </div>
    )
  }
})
