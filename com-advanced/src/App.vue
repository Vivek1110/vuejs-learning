<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComp='app-quote'">Quote</button>
                 <button @click="selectedComp='app-author'">Author</button>
                  <button @click="selectedComp='app-new'">New</button>
                  <hr>
                  <component :is='selectedComp'></component>
               <!-- <app-quote>
                   <h1 slot='quote'>Wonderful Quote</h1>
                   <p slot='title'>Quotes: </p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote'
import Author from './components/Author'
import New from './components/New'
    export default {
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New
        },
        data: function() {
            return {
                selectedComp: 'app-quote'
            }
        }
    }
</script>

<style scoped>
.container {
    padding: 30px;
}
h1 {
    color: brown;
}
</style>
