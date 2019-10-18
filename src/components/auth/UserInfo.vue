<template lang="pug">
    v-card
        v-toolbar.dark(color="default")
            v-toolbar-title 
                 v-icon person
                 | User Info   
            v-spacer
        v-card-text
            v-text-field(
                name="login",
                label="Login",
                type="text"
                v-model="userInfo.login"
            )
            v-text-field(
                name="first_name",
                label="First Name",
                type="text"
                v-model="userInfo.first_name"
            )
            v-text-field(
                name="middle_name",
                label="Middle Name",
                type="text"
                v-model="userInfo.middle_name"
            )
            v-text-field(
                name="last_name",
                label="last Name",
                type="text"
                v-model="userInfo.last_name"
            )

</template>

<script>

export default {
    name: "UserInfo",
    props: [ "userInfo" ],
}
</script>

