<template>
    <div>
        <h1>Device Page</h1>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function logout() {
        localStorage.removeItem('token');
        router.push('/login');
    }
</script>
