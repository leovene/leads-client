<template>
    <v-form>
        <v-container>
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-card-actions>
                            <v-flex xs3>
                                <v-text-field
                                        v-model="userName"
                                        label="Nome de usuário"
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                            </v-flex>
                            <v-flex xs3>
                                <v-text-field
                                        v-model="password"
                                        :type="'password'"
                                        label="Senha"
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                                <small v-if="error">Login ou senha inválida</small>
                            </v-flex>
                            <v-btn color="blue" @click="submitLogin">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                userName: "",
                password: "",
                error: false
            }
        },
        methods: {
            submitLogin: async function() {
                await this.$http.post(process.env.VUE_APP_LOGIN_ENDPOINT, {"userName": this.userName, "password": this.password})
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        if (res != null && res == true) {
                            this.$store.dispatch('updateUserLogin',true);
                            this.$router.push('/employee');
                            return res;
                        } else {
                            this.error = true;
                        }
                    })
            }
        }
    }
</script>

<style>

</style>