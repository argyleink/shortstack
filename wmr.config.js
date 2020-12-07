import postcss from 'postcss';

export default function(config) {
  const processor = postcss();

  config.plugins.push({
    name: 'postcss',
    async transform(code, id) {
      console.log(code, id)
      if (!/\.css$/.test(id)) return;
      return (await processor.process(code, { from: id, to: id })).css;
    }
  });
}