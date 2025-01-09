import pluginVue from 'esbuild-plugin-vue-next'
import {build,context} from "esbuild";
import {sassPlugin} from "esbuild-sass-plugin";

let ctx = await context({
  entryPoints: [
    {out: 'ram/scripts/script', in: './ram/index.js'},
    {out: 'manager/scripts/script', in: './manager/index.js'},
  ],
  bundle: true,
  minify: false,
  sourcemap: true,
  metafile: true,
  plugins: [
    pluginVue(),
    sassPlugin({
      loadPaths: [
        //"assets/admin/styles/",
        //"node_modules/@fortawesome/fontawesome-free/",
        //"node_modules/@fontsource/poppins/scss",
        "node_modules",
      ],
    }),
    {
      name: 'example',
      setup(build) {
        build.onEnd(result => {
          console.log(`build ended with ${result.errors.length} errors`)
        })
      },
    }
  ],
  logLevel: 'error',
  resolveExtensions: ['.js', '.vue', '.scss'],
  outdir: 'build',
})
await ctx.watch()
console.log('watching...')


