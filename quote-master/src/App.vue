<template>

    <div class="container">
        <app-header :quoteCount="quotes.length" :maxCount="maxQuotes"></app-header>
        <app-new-quote @quoteAdded='onNewQuote' ></app-new-quote>
        <app-quote-card :quotes='quotes' @onDelete='onDelete'></app-quote-card>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on Quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteCard from './components/QuoteCard'
import NewQuote from './components/NewQuote'
import Header from './components/Header'
    export default {
        data: function() {
            return {
                quotes: [
                    'Just one normal Quote'
                ],
                maxQuotes: 10
            }
        },
        components: {
            'app-quote-card': QuoteCard,
            'app-new-quote': NewQuote,
            'app-header': Header
        },
        methods: {
            onNewQuote(quote) {
                if(this.quotes.length >= this.maxQuotes){
                    alert("Please delete a quote, before adding one!!")
                    return;
                }
                this.quotes.push(quote);
            },
            onDelete(index) {
               this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
