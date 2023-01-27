<template>
    <div class="border-b border-solid w-full h-14 bg-white border-brand-gray-1">
        <div class="flex h-full items-center px-8">
        <div v-if="onJobResultsPage">
         <font-awesome-icon :icon="[' fas', 'search']" class="mr-3" />
         <span><span class="text-brand-green-1">1638</span> jobs matched</span>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "TheSubNav",
    data() {
        return {
            onJobResultsPage: true
        }
    }
}
</script>