<template>
    <button 
    :class="buttonClass">
    {{ text }}
    </button>
</template>

<script>
export default {
    name: "ActionButton",
    props: ["text"],
    data() {
        return {
            primary: true
        }
    },
    computed : {
        buttonClass() {
            return {
                primary: this.primary
            }
        }      }

}
</script>

<style scoped>
    button{
        @apply rounded px-5 py-3 font-medium;
    }
    .primary{
        @apply bg-brand-blue-1 text-white border-0  hover:shadow-blue;
    }
    .secondary{

    }
</style>>