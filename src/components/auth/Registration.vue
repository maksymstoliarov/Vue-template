<template lang="pug">
    v-layout.fill-height.align-center.justify-center
        v-flex.sm12.md10
            v-card.elevation-12
                v-toolbar.dark(color="primary")
                    v-toolbar-title Registration
                    v-spacer
                v-card-text
                    v-form
                        v-row
                            v-col(
                                cols="12"
                                md="7"
                            )
                                user-info(:userInfo="user")

                                v-text-field(
                                    prepend-icon="lock",
                                    name="password",
                                    label="Password",
                                    type="password",
                                    v-model="password"
                                )
                                v-text-field(
                                    prepend-icon="lock",
                                    name="confirm_password",
                                    label="Confirm Password",
                                    type="password",
                                    v-model="confirm_password"
                                )

                            v-col(
                                cols="12"
                                md="5"
                            )
                                emails(:emails="emails")
                                br
                                phones(:phones="phones")
               
                v-card-actions
                    v-spacer
                    v-btn(
                        color="default",
                        @click.prepend="toLogin"
                    ) Login
                    v-btn(
                        color="primary",
                        @click.prepend="registration"
                    ) registration
                    v-spacer

</template>

<script>

import Emails from './Emails'
import Phones from './Phones'
import UserInfo from './UserInfo'

export default {
    name: "login",
    components: {
        Emails,
        Phones,
        UserInfo
    },
    data: () => {
        return {
            user: {
                login: "",
                first_name: "",
                last_name: "",
                middle_name: "",
            },
            password: "",
            confirm_password: "",
            emails: [ "" ],
            phones: [ "" ]
        }
    },
    methods: {
        async registration() {
            let resp = await this.$store.dispatch("registration", {
                first_name: this.user.first_name,
                middle_name: this.user.middle_name,
                last_name: this.user.last_name,
                login: this.user.login,

                emails: this.emails,
                phones: this.phones,

                password: this.password,
                password_repeat: this.confirm_password,
            })
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
       toLogin() {
           this.$router.push({ path: '/login' })
       }
    }
}
</script>

