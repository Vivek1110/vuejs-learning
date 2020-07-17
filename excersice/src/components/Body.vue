<template>
    <div class="row">
            <app-server-list></app-server-list>
            <div class="col-xs-12 col-sm-6">
                <p>{{status}}</p>
            </div>
        </div>
</template>
<script>
import ServerList from './ServerList'
export default {
    data: function() {
        return {
            status: 'Server Details are currently not updated'
        }
    },
    components: {
        'app-server-list': ServerList,
    }
}
</script>