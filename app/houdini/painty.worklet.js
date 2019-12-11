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
    const [start_hue, step_size, step_width] = this.parseProps(props)

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
      parseInt(props.get(param).toString()))
  }
})