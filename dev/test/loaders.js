import path from 'path'
import test from 'ava'
import webpack from 'webpack'
import MemoryFS from 'memory-fs'

const fs = new MemoryFS()

const testFixture = (loaderName, fixture, options = {}) => {
  const fileName = `./fixtures/${fixture}`

  const config = {
    context: __dirname,
    entry: fileName,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|mdx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'stage-0', 'react'],
                plugins: ['transform-runtime']
              }
            },
            {
              loader: path.resolve(__dirname, '../lib', loaderName),
              options
            }
          ]
        }
      ]
    }
  }
  const compiler = webpack(config)

  compiler.outputFileSystem = fs

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)

      const module = stats.toJson().modules.find(m => m.name === fileName)
        .source

      resolve(module)
    })
  })
}

test('scope-loader renders', async t => {
  const result = await testFixture('scope-loader.js', '_hello.js', {
    config: 'config.js',
    components: {
      Beep: () => false,
      Boop: () => false
    }
  })
  t.snapshot(result)
})

test('mdx-loader renders', async t => {
  const result = await testFixture('mdx-loader.js', 'hello.mdx')
  t.snapshot(result)
})

test('jsx-loader renders', async t => {
  const result = await testFixture('jsx-loader.js', 'hello.jsx')
  t.snapshot(result)
})
