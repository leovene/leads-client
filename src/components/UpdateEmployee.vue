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
                                        :label=getEmployee.name
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                            </v-flex>
                            <v-flex xs3>
                                <v-text-field
                                        v-model="email"
                                        :label=getEmployee.email
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3>
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
        computed: {
          getEmployee() {
              return this.$store.getters.getEmployee;
          }
        },
        beforeCreate: async function() {
            if (!this.$store.getters.isUserLogin) {
                this.$router.push('/');
            }
        },
        methods: {
            submitEmployee: async function() {
                await this.$http.post(process.env.VUE_APP_UPDATE_EMPLOYEES_ENDPOINT, {"id": this.getEmployee.id, "name": this.name, "age": this.age, "email": this.email})
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
