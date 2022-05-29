<template>
    <div class="container">
        <div class="d-flex">
            <div class="category bg-light p-2">
                <div>
                    <input type="checkbox" id="cat-1" class="me-2">
                    <label for="cat-1">Kids</label>
                </div>
                <div>
                    <input type="checkbox" id="cat-2" class="me-2">
                    <label for="cat-2">Women</label>
                </div>
                <div>
                    <input type="checkbox" id="cat-3" class="me-2">
                    <label for="cat-3">Men</label>
                </div>
            </div>
            <div class="search-item">
                <div class="search-product">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .category{
        width: 20%;
    }
    .search-item{
        width: 75%;
    }
    .search-product{
        display: flex;
        row-gap:20px;
        column-gap:20px;
        margin-top: 20px;
        flex-wrap:wrap;
    }
</style>