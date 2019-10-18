<template lang="pug">
    v-card
        v-toolbar.dark(color="default")
            v-toolbar-title 
                 v-icon phone
                 | Phones  
            v-spacer
        v-card-text
            v-row(
                v-for="(phone, index) in phones" :key="index"
            )
                v-col(
                    cols=10
                )
                    v-text-field(
                        name="phone[]",
                        label="phone",
                        type="text"
                        v-model="phones[index]"
                        :key="index"
                    )
                v-col(
                    cols=2
                )
                    v-icon(
                        color="primary"
                        @click="remove(index)"
                    ) delete
        v-card-actions
            v-spacer
            v-btn(
                color="default",
                @click.prepend="add"
            ) Add
            v-btn(
                color="primary",
                @click.prepend="clear"
            ) Clear
                   
                       

</template>

<script>
export default {
    name: "Phones",
    props: [ "phones"],
    // data: () => {
    //     return {
    //         phones: [],
    //     }
    // },
    methods: {
        add() {
            this.phones.push("")
        },
        clear() {
            this.phones = []
        },
        remove: function(value) {
            this.phones.splice(value, 1)
        }
    },
}
</script>

