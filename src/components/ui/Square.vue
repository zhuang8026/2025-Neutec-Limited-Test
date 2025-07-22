<template>
    <div class="square" ref="squareRef">
        <div class="square-dom" :style="{ 'offset-path': `path('${pathTopLeft}')` }" />
        <div class="square-dom" :style="{ 'offset-path': `path('${pathBottomRight}')` }" />
        <div class="square-box" />
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, computed, watch, watchEffect, onMounted } from 'vue';

    const squareRef = ref();
    const pathTopLeft = ref('');
    const pathBottomRight = ref('');

    // 因 offset-path 不接受斷行，需去除空格& '\n'
    const buildPath = (path: string) => path.replace(/\s+/g, ' ').trim();

    const updatePaths = () => {
        const rect = squareRef.value?.getBoundingClientRect();
        if (!rect) return;

        const w = rect.width;
        const h = rect.height;
        const r = 10; // 圓角半徑

        // 左下角起始點
        pathTopLeft.value = buildPath(
            `M${r},2 
            H${w - r} 
            A${r},${r},0,0,1,${w - 2},${r} 
            V${h - r} 
            A${r},${r},0,0,1,${w - r},${h - 2} 
            H${r} 
            A${r},${r},0,0,1,2,${h - r} 
            V${r} A${r},${r},0,0,1,${r},2`
        );

        // 右下角起始點
        pathBottomRight.value = buildPath(`
            M${w - r},${h - 2} 
            H${r} 
            A${r},${r},0,0,1,2,${h - r} 
            V${r} 
            A${r},${r},0,0,1,${r},2 
            H${w - r} 
            A${r},${r},0,0,1,${w - 2},${r} 
            V${h - r} 
            A${r},${r},0,0,1,${w - r},${h - 2}
        `);
    };

    onMounted(() => {
        updatePaths();

        window.addEventListener('resize', updatePaths);

        const observer = new ResizeObserver(updatePaths);
        if (squareRef.value) observer.observe(squareRef.value);
    });
</script>

<style lang="scss" scoped>
    .square {
        position: relative;
        width: 100%;
        height: 100%;
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
            border: 3px solid #777; // 3, 4
            overflow: hidden;
        }

        .square-dom {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            width: 15%; // 4,20
            height: 3px; // 3,4
            background-color: white;
            border-radius: 4px;

            offset-rotate: auto;
            offset-distance: 0%;
            animation: move 2s ease infinite;
        }

        // .animation-top-left {
        //     offset-path: path(
        //         'M10,2  H110  A10,10,0,0,1,118,10  V110  A10,10,0,0,1,110,118  H10  A10,10,0,0,1,2,110  V10  A10,10,0,0,1,10,0'
        //     );
        // }

        // .animation-bottom-right {
        //     offset-path: path(
        //         'M110,118  H10  A10,10,0,0,1,2,110  V10  A10,10,0,0,1,10,2  H110  A10,10,0,0,1,118,10  V110  A10,10,0,0,1,110,118'
        //     );
        // }
    }

    @keyframes move {
        50% {
            offset-distance: 50%;
        } // 右下 停頓
        100% {
            offset-distance: 100%;
        } // 左上 停頓
    }
</style>
