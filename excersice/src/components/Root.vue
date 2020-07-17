<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-body></app-body>
        <hr>
        <app-footer></app-footer>
    </div>
</template>
<script>
import Footer from './Footer'
import Header from './Header'
import Body from './Body'
export default {
    data: function() {
        return {

        }
    },
    components: {
        'app-footer': Footer,
        'app-header': Header,
        'app-body': Body
    }
    
}
</script>