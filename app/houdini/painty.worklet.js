const paint_name = 'painty'
const params = [
  `--${paint_name}-hue-start`,
  `--${paint_name}-step-size`,
  `--${paint_name}-step-width`,
]

registerPaint(paint_name, class Painty {
  static get inputProperties() {
    return params
  }

  paint(ctx, bounds, props) {
    const { width:w, height:h } = bounds
    const [
      start_hue = 0, 
      step_size = 10, 
      step_width = 25
    ] = this.parseProps(props)

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

  parseProps(props) {
    return params.map(param =>
      parseInt(props.get(param).toString()) || undefined)
  }
})

// CSS.registerProperty({
//   name: `--painty-hue-start`,
//   syntax: '<number>',
//   inherits: false,
//   initialValue: 0,
// })

// CSS.registerProperty({
//   name: `--painty-step-size`,
//   syntax: '<number>',
//   inherits: false,
//   initialValue: 10,
// })

// CSS.registerProperty({
//   name: `--painty-step-width`,
//   syntax: '<number>',
//   inherits: false,
//   initialValue: 20,
// })