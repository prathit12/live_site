<template>
<About></About>
<Experience></Experience>
<Education></Education>
<Skills></Skills>
</template>

<script>
import About from './About.vue'
import Experience from './Experience.vue'
import Education from './Education.vue'
import Skills from './Skills.vue'

export default {
  name: 'HomeIndex',
 components: {
    About,
    Experience,
    Education,
    Skills,
  },
}
</script>
