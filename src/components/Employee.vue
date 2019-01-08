<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-btn color="green" @click="submitNovo">Novo</v-btn>
                    <v-list two-line>
                        <template v-for="(item, index) in getEmployeeList">
                            <v-list-tile :key="index">
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.email"></v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-btn color="blue" @click="submitUpdate(item)">Editar</v-btn>
                                <v-btn color="red" @click="submitDelete(item)">Excluir</v-btn>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "employee",
        computed: {
            getEmployeeList() {
                return this.$store.getters.getEmployeeList;
            }
        },
        methods: {
            submitNovo() {
                this.$router.push('/create');
            },
            submitUpdate(employee) {
                this.$store.dispatch('updateEmployee',employee);
                this.$router.push('/update');
            },
            submitDelete: async function(item) {
                await this.$http.post(`${process.env.VUE_APP_DELETE_EMPLOYEES_ENDPOINT}/${item.id}`)
                    .then(res => {
                        return res.json();
                    });
                await this.$http.get(process.env.VUE_APP_LIST_EMPLOYEES_ENDPOINT)
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        this.$store.dispatch('updateEmployeeList',res);
                    });
            }
        },
        beforeCreate: async function() {
            if (!this.$store.getters.isUserLogin) {
                this.$router.push('/');
            } else {
                await this.$http.get(process.env.VUE_APP_LIST_EMPLOYEES_ENDPOINT)
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        this.$store.dispatch('updateEmployeeList',res);
                    });
            }
        }
    }
</script>

<stye>

</stye>