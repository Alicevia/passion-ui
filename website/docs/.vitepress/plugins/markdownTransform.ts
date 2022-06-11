

export function MarkDownTransform() {

   return {
    name: 'passion-ui-md-transform',
    enforce:'pre',
     transform(code,id){
      if (!id.endsWith('.md')) return
      let allComponents = `<script setup>
      let tempAC = import.meta.globEager('@/components/**/*.vue');
      let demos={}
      for (let key in tempAC) {
        demos[key.slice(6,-4)]=tempAC[key].default
      }
      </script>\n`
      code = allComponents + code
      return `${code}\n`
 
    }
   }
}