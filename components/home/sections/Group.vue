<template>
<div class="group py-4  px-2">
    <div class="row col-sm-11 col-xl-10 mx-auto m-0 justify-content-center">

        <div class="d-flex col-6 col-md-3 p-2 justify-content-center align-items-center"> <span class="me-2"><img src="~/assets/imges/groupImgs/bitex.png" alt=""></span> <h2 class="m-0">Bitex</h2> </div>
        <div class="d-flex col-6 col-md-3 p-2 justify-content-center align-items-center"><span class="me-2"><img src="~/assets/imges/groupImgs/dogcoin.png" alt=""></span> <h2 class="m-0">Dogcoin</h2> </div>
        <div class="d-flex col-6 col-md-3 p-2 justify-content-center align-items-center"> <span class="me-2"><img src="~/assets/imges/groupImgs/nem.png" alt=""></span><h2 class="m-0">Nem</h2> </div>
        <div class="d-flex col-6 col-md-3 p-2 justify-content-center align-items-center"> <span class="me-2"><img src="~/assets/imges/groupImgs/monero.png" alt=""></span><h2 class="m-0">Monero</h2> </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.group{
    background: url("~/assets/imges/groupImgs/group-bg.png");
    background-size: 150%;
    background-position: 100%;
    position: relative;
    z-index: 0;
    @media (min-width: 768px) {
    background-size: cover;
    
  }
    &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #F5F5FF;
        z-index: -1;
        opacity: 0.92;
    }
img{
    width: 28px;
}
h2{
    font-weight: 600;
}
}
</style>