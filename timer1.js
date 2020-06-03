let args = process.argv.slice(2)

const sorted = args.map(arg => Number(arg)).sort((a, b) => a - b)

for (let i = 0; i < sorted.length; i++) {
  let num = sorted[i]
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000); 
};