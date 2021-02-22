<template>
    <div class="intro-block">
        <!-- <img src="../img/logo.png" class="logo"/> -->
        <h1 class="title">Introduction</h1>
        <img src="../img/sample.png" class="sample"/>
        <img src="../img/sample.png" class="sample"/>
        <p class="content">This is a fantastic website where you can create your own test paper</p>
        <p class="content">You are free to choose the test format and add questions to the test.</p>
        <p class="content">The site also allows multiple people to work together on the test paper, and you can leave your own comments on the different questions to remind the co-authors.</p>

        <img src="../img/sample.png" class="sample2"/>
        <img src="../img/sample.png" class="sample2"/>

    </div>
</template>

<style scoped>
.intro-block{
    background-image:linear-gradient(to top right,#2C5364,#203A43,#0F2027);
    width:100%;
    min-width: 1400px;
    height:90vh;
    height:100%;
    box-sizing: border-box;
    padding:40px;
}
.title{
    font-size:48px;
    color:white;
    margin:0;
    text-align: left;
}
.content{
    text-align: left;
    color:white;
}
.sample{
    float:right;
    width:30%;
    margin:-2em 1em 3em 1em;
    clear:right;
}
.sample2{
    float:left;
    width:30%;
    margin:-2em 1em 3em 1em;
}
.logo{
    float:left;
}
</style>