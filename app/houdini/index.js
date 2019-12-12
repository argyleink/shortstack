(async function() {
  if (CSS['paintWorklet'] === undefined)
    await import('https://unpkg.com/css-paint-polyfill/dist/css-paint-polyfill.js')

  const registrar = new Set([
    'painty.worklet.js',
  ])
  
  registrar.forEach(worklet =>
    CSS.paintWorklet.addModule(`/houdini/${worklet}`))
})()