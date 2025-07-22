<template>
    <div class="basic_a1">
        <div class="square">
            <div class="square-dom animation-top-left" />
            <div class="square-dom animation-bottom-right" />
            <div class="square-box" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, computed, watch, watchEffect, onMounted } from 'vue';

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .basic_a1 {
        width: 100vw;
        height: 100vh;
        padding: 1rem;

        .square {
            position: relative;
            width: 120px;
            height: 120px;
            border-radius: 7px;
            overflow: hidden;

            .square-box {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                width: 100%;
                height: 100%;
                border-radius: 8px;
                border: 4px solid #777;
                overflow: hidden;
            }

            .square-dom {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 3;
                width: 30px;
                height: 5px;
                background-color: white;
                border-radius: 2px;

                offset-rotate: auto;
                offset-distance: 0%;
                animation: move 1s ease infinite;
            }
            .animation-top-left {
                offset-path: path(
                    'M10,2  H110  A10,10,0,0,1,118,10  V110  A10,10,0,0,1,110,118  H10  A10,10,0,0,1,2,110  V10  A10,10,0,0,1,10,0'
                );
            }

            .animation-bottom-right {
                offset-path: path(
                    'M110,118  H10  A10,10,0,0,1,2,110  V10  A10,10,0,0,1,10,2  H110  A10,10,0,0,1,118,10  V110  A10,10,0,0,1,110,118'
                );
            }
        }
    }
    @keyframes move {
        to {
            offset-distance: 100%;
        }
    }
</style>
