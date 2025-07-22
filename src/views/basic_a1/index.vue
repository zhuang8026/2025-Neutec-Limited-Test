<template>
    <div class="basic-a1">
        <div class="square-view" :style="{ gridTemplateColumns: `repeat(${squareCols}, 1fr)` }">
            <Square v-for="(num, index) in squareCount" :key="index" />
        </div>

        <br />

        <!-- 數量按鈕 -->
        <div class="button-items">
            <button
                v-for="(btn, index) in btnList"
                :key="index"
                :class="{ active: selected === btn }"
                @click="changeView(btn)"
            >
                {{ btn }}
            </button>
        </div>
        <br />

        <!-- 亂數開關 -->
        <div class="radio-items">
            <input type="radio" id="all" name="contact" value="email" checked />
            <label for="all">all</label>

            <input type="radio" id="random" name="contact" value="email" />
            <label for="random">random</label>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, computed, watch, watchEffect, onMounted } from 'vue';

    import Square from '@/components/ui/Square.vue';

    const btnList = reactive<string[]>(['1x1', '3x3', '5x5', '10x10']);
    const selected = ref('1x1');

    const changeView = (btn: string) => {
        selected.value = btn;
    };

    // 行排
    const squareCols = computed(() => {
        const [cols] = selected.value.split('x').map(Number);
        return cols;
    });

    // 總數計算
    const squareCount = computed(() => {
        let [cols, rows] = selected.value.split('x').map(Number);
        console.log(cols, rows);
        return cols * rows;
    });
</script>

<style lang="scss" scoped>
    .basic-a1 {
        width: 100vw;
        height: 100vh;
        padding: 1rem;

        .square-view {
            width: 90vw;
            height: 90vw;
            margin: 0 auto;

            display: grid;
            gap: 0.2rem;
            // grid-template-columns: repeat(1, 1fr);
        }
        .radio-items {
            display: flex;
        }
        .active {
            background-color: red;
        }
    }

    button {
        cursor: pointer;
        margin: 0 0.5rem;
        padding: 0 0.5rem;
        border-radius: 1rem;
        transition: 0.3s;
        &:hover {
            background-color: aquamarine;
        }
    }

    input {
        margin: 0 0.5rem;
    }
</style>
