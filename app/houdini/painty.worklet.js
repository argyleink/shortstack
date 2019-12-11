export default class Painty {
  paint(ctx, bounds, props) {
    const { width:w, height:h } = bounds
    const start_hue = 100

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        ctx.fillStyle = `hsl(
          ${start_hue + x * 10} 
          ${50 + x}% 
          ${50 + y}%
        )`
        ctx.fillRect(x * 25, y * 25, 25, 25)
      }
    }
  }
}

if (typeof registerPaint === undefined) 
  console.warn('register paint not supported')
else
  registerPaint('painty', Painty)