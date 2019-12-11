export default class Painty {
  static get inputProperties() {
    return [
      '--painty-hue-start',
      '--painty-step-size',
      '--painty-step-width',
    ]
  }

  paint(ctx, bounds, props) {
    const { width:w, height:h } = bounds

    const start_hue = parseInt(props.get('--painty-hue-start').toString())
    const step_size = parseInt(props.get('--painty-step-size').toString())
    const step_width = parseInt(props.get('--painty-step-width').toString())

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        ctx.fillStyle = `hsl(
          ${start_hue + x * step_size} 
          ${50 + x}% 
          ${50 + y}%
        )`
        ctx.fillRect(x * step_width, y * step_width, step_width, step_width)
      }
    }
  }
}

if (typeof registerPaint === undefined) 
  console.warn('register paint not supported')
else
  registerPaint('painty', Painty)