<template>
  <div class="about">
    <h1>hello {{their_name}}This is an about page</h1>
    <p>Lorem ipsum dolor sit amet, ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data(){
    return{
     their_name: this.$route.params.name
        }
    }
}

</script>