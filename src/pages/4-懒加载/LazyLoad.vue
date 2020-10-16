<template>

    <img :class="['lazy',className]" :src="defaultImg" :data-origin="url">
</template>
<script>
export default {
    props: {
        url: {
            type: String
        },
        defaultImg: {
            type: String,
            default: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2RiZGJkYiIgZD0iTTk5MiAwSDMyQzEyLjggMCAwIDEyLjggMCAzMnY5NjBjMCAxOS4yIDEyLjggMzIgMzIgMzJoOTYwYzE5LjIgMCAzMi0xMi44IDMyLTMyVjMyYzAtMTkuMi0xMi44LTMyLTMyLTMyek05NjAgNjR2Njg0LjhsLTE2Ni40LTE5MmMtNi40LTYuNC0xMi44LTEyLjgtMjUuNi0xMi44cy0xOS4yIDYuNC0yNS42IDEyLjhsLTE0Ny4yIDE2MC0yNjguOC0zNTguNGMtNi40LTYuNC0xMi44LTEyLjgtMjUuNi0xMi44cy0xOS4yIDYuNC0yNS42IDEyLjhMNjQgNjY1LjZWNjRoODk2ek02NCA5NjB2LTE3OS4ybDIzNi44LTM0NS42TDU3NiA3ODcuMmM2LjQgNi40IDEyLjggMTIuOCAyNS42IDEyLjhzMTkuMi02LjQgMjUuNi0xMi44TDc2OCA2MjcuMmwxOTIgMjE3LjZWOTYwSDY0eiIgIC8+PHBhdGggZmlsbD0iI2RiZGJkYiIgZD0iTTcwNCA0NjcuMmM3Ni44IDAgMTQ3LjItNjQgMTQ3LjItMTQ3LjJzLTY0LTE0Ny4yLTE0Ny4yLTE0Ny4yUzU2My4yIDI0My4yIDU2My4yIDMyMHM2NCAxNDcuMiAxNDAuOCAxNDcuMnogbTAtMjI0YzQ0LjggMCA4My4yIDM4LjQgODMuMiA4My4ycy0zOC40IDc2LjgtODMuMiA3Ni44UzYyNy4yIDM2NC44IDYyNy4yIDMyMHMzMi03Ni44IDc2LjgtNzYuOHoiICAvPjwvc3ZnPg=="
        },
        className: {
            type: String,
            default: ''
        }
    }
}
</script>
    