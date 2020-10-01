const paint_name = 'static-gradient'
const params = [
  `--${paint_name}-hue`,
  `--${paint_name}-step-width`,
]

registerPaint(paint_name, class StaticGradient {
  static get inputProperties() {
    return params
  }

  paint(ctx, bounds, props) {
    const { width:w, height:h } = bounds
    const [
      hue = 200, 
      step_width = 2
    ] = this.parseProps(props)

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (Math.random() < (1 - y / 100)) continue

        ctx.fillStyle = `hsl(
          ${hue} 
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