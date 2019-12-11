(async function() {
  const registrar = new Set([
    { name: 'Painty', path: 'painty.worklet.js'}
  ])

  if (CSS['paintWorklet'] === undefined)
    await import('https://unpkg.com/css-paint-polyfill/dist/css-paint-polyfill.js')

  registrar.forEach(({path}) =>
    CSS.paintWorklet.addModule(`/houdini/${path}`))
})()