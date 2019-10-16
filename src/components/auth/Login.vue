<template lang="pug">
    v-layout.fill-height.align-center.justify-center
        v-flex.sm12.sm8.md4
            v-card.elevation-12
                v-toolbar.dark(color="primary")
                    v-toolbar-title Login Form
                    v-spacer
                v-card-text
                    v-form
                        v-text-field(
                            prepend-icon="person",
                            name="login",
                            label="Login or email",
                            type="text"
                            v-model="user"
                        )
                        v-text-field(
                            prepend-icon="lock",
                            name="password",
                            label="Password",
                            type="password",
                            v-model="password"
                        )
                v-card-actions
                    v-spacer
                    v-btn(
                        color="default",
                        @click.prepend="registration"
                    ) registration
                    v-btn(
                        color="primary",
                        @click.prepend="login"
                    ) Login
                   
                       

</template>

<script>
export default {
    name: "login",
    data: () => {
        return {
            user: "",
            password: ""
        }
    },
    methods: {
        async login() {
            let resp = await this.$store.dispatch("login", { user: this.user, password: this.password } )
            if ( resp.status != 200 ) {
                this.$notify({
                    group: "alerts",
                    title: resp.status,
                    text: resp.msg,
                    type: 'error',
                })
                return
            }

            this.$router.push({ path: '/' })
        },
        registration() {
            this.$router.push({ path: '/registration' })
        }
    },
    mouted() {
    }
}
</script>

