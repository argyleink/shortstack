const paint_name = 'static-gradient'

registerPaint(paint_name, class StaticGradient {
  static get inputArguments() {
    return [
      '<angle>',
      '<color>',
      '<number>',
    ];
  }

  paint(ctx, bounds, props, args) {
    const { width:w, height:h } = bounds
    const start = 1.01
    const end = .495

    let [ direction, color, size ] = args

    direction = direction.toString()

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {

        switch (direction) {
          case '0deg':
            if (Math.random() < (start - y / (h*end))) continue
            break;
          case '90deg':
            if (Math.random() < (start - x / (w*end))) continue
            break;
          case '180deg':
            if (Math.random() > (start - y / (h*end))) continue
            break;
          case '270deg':
            if (Math.random() > (start - x / (w*end))) continue
            break;
        }

        ctx.fillStyle = color
        ctx.fillRect(x * size, y * size, size, size)
      }
    }
  }
})