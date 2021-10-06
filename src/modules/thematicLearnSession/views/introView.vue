<template>
    <div class="intro-view-container">
        <div class="intro-view-container-title">
            Welcome to <br/>{{placeName}}!
        </div>
        <div class="intro-view-container-button">
            <v-btn>Start the adventure!</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            placeName: "Madrid"
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap');
.intro-view-container {
    display: flex;
    width: 100%;
    height: 100%;
    background: black;
    align-items: center;
    justify-content: center;
    .intro-view-container-title {
        font-family: "Sedgwick Ave";
        color: whitesmoke;
        font-size: 6em;
    }
}
</style>