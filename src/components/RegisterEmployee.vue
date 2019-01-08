<template>
    <v-form>
        <v-container>
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-card-actions>
                            <v-flex xs3>
                                <v-text-field
                                        v-model="name"
                                        label="Nome do funcionário"
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                            </v-flex>
                            <v-flex xs3>
                                <v-text-field
                                        v-model="email"
                                        label="Email"
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                            </v-flex>
                            <v-flex xs3>
                                <v-text-field
                                        v-model="age"
                                        label="Idade"
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-btn color="blue" @click="submitEmployee">Cadastrar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                name:"",
                age:0,
                email:""
            }
        },
        beforeCreate: async function() {
            if (!this.$store.getters.isUserLogin) {
                this.$router.push('/');
            }
        },
        methods: {
            submitEmployee: async function() {
                await this.$http.post(process.env.VUE_APP_CREATE_EMPLOYEES_ENDPOINT, {"name": this.name, "age": this.age, "email": this.email})
                    .then(res => {
                        return res.json();
                    })
                    .then(() => {
                        this.$router.push('/employee');
                    })
            }
        }
    }
</script>
