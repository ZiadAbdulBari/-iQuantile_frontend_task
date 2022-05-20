<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/registration" class="nav-link active" aria-current="page" href="#">Registration</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link active" aria-current="page" href="#">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link active" aria-current="page" href="#">Cart</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>