<template>
    <header :class="['w-full', 'text-sm', headerHeightClass]">
        <div class="fixed top-0 left-0 h-16 w-full">
            <div class="flex h-full flex-nowrap border-b border-solid border-brand-gray-1 mx-auto px-8">
                <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
                <nav class="ml-12 h-full">
                    <ul class="flex list-none h-full">
                        <li class="h-full ml-9 first:ml-0" v-for="menuItem in menuItems" :key="menuItem">
                            <a class="flex h-full items-center py-2.5" href="">{{ menuItem }}</a>
                        </li>
                    </ul>
                </nav>
                <div class="ml-auto flex items-center h-full py-2.5">
                    <profile-image v-if="isLoggedIn" />
                    <action-button v-else text="Sign In" type="primary" @click="loginUser" />
                </div>
            </div>
            <the-sub-nav v-if="isLoggedIn" />
        </div>
    </header>
    <the-hero />
</template>

<script>
import ActionButton from '../Shared/ActionButton.vue';
import ProfileImage from '../Navigation/ProfileImage.vue';
import TheHero from '../JobSearch/TheHero.vue';
import TheSubNav from '../Navigation/TheSubNav.vue'; 

export default {
    name: "MainNav",
    components: {
        ActionButton,
        ProfileImage,
        TheSubNav,
        TheHero
    },
    data() {
        return {
            company: "Job Career",
            url: "https://careers.google.com",
            menuItems: [
                "Teams",
                "Locations",
                "Life at Job Career",
                "How we hire",
                "Students",
                "Jobs"
            ],
            isLoggedIn: false,
        }
    },
    computed: {
        headerHeightClass() {
            return {
                "h-16": !this.isLoggedIn,
                "h-32": this.isLoggedIn
            }
        }
    },
     methods: {
    loginUser() {
        this.isLoggedIn = true
    }
    },
}
</script>