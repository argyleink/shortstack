const paint_name = 'powdered-gradient'
const params = [
  `--${paint_name}-hue`,
  `--${paint_name}-step-size`,
  `--${paint_name}-step-width`,
]

registerPaint(paint_name, class PowderedGradient {
  static get inputProperties() {
    return params
  }

  paint(ctx, bounds, props) {
    const { width:w, height:h } = bounds
    const [
      step_width = .1
    ] = this.parseProps(props)

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (this.lesserRandom() < (1 - x / 100)) continue

        ctx.beginPath()
        ctx.arc(x, y, step_width + this.greaterRandom(), 0, 2 * Math.PI)
        ctx.fillStyle = `hsl(
          0 
          0%
          100%
          / 10%
        )`
        ctx.fill()
      }
    }
  }

  parseProps(props) {
    return params.map(param =>
      parseInt(props.get(param).toString()) || undefined)
  }

  lesserRandom() {
    return Math.random() - Math.random()
  }

  greaterRandom() {
    return Math.random()
  }
})