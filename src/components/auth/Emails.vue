<template lang="pug">
    v-card
        v-toolbar.dark(color="default")
            v-toolbar-title 
                 v-icon email
                 | Emails  
            v-spacer
        v-card-text
            template(
                v-for="(email, index) in emails"
            )
                v-text-field(
                    name="email[]",
                    label="email",
                    type="text"
                    v-model="emails[index]"
                    :key="index"
                )
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
    name: "emails",
    props: [ "emails"],
    // data: () => {
    //     return {
    //         emails: [],
    //     }
    // },
    methods: {
        add() {
            this.emails.push("")
        },
        clear() {
            this.emails = []
        }
    },
}
</script>

