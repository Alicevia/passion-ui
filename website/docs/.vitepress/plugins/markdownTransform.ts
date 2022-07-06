

export function MarkDownTransform() {
   return {
    name: 'passion-ui-md-transform',
    enforce:'pre',
     transform(code,id){
      if (!id.endsWith('.md')) return
      if (id.endsWith('docs/index.md')) return

      let allComponents = `<script setup>
      let tempPassion= import.meta.globEager('@/components/**/*.vue');
      let demos={}
      for (let key in tempPassion) {
        demos[key.slice(6,-4)]=tempPassion[key].default
      }
      </script>\n`
      code = allComponents + code
      return `${code}\n`
    }
   }
}