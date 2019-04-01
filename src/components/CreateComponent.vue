<template>
<div class="row justify-content-md-center">
    <div class="col-md-6">
        <ul class="nav py-3">
            <li class="nav-item">
                <button class="btn btn-outline-primary mr-1 waves-effect">
                    <a @click="action = 'Validate'">Log in</a>
                </button>
            </li>

            <li class="nav-item">
                <button class="btn btn-outline-primary mr-1 waves-effect">
                    <a @click="action = 'Create'">Register</a>
                </button>
            </li>
        </ul>
    </div>

    <div class="w-100"></div>

    <form class="forms justify-content-md-center col-md-6" @submit.prevent="accountAction">
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label class="form-text">Email:</label>
                    <input type="text" class="form-control" v-model="account.email">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label class="form-text">Password:</label>
                    <input type="password" class="form-control" v-model="account.password">
                </div>
            </div>
        </div>

        <div class="row" v-show="action === 'Create'">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-text">Confirm password:</label>
                    <input type="password" class="form-control" v-model="account.confirmPassword">
                </div>
            </div>
        </div>

        <div class="form-group text-center">
            <button class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
</template>

<style>
/* making it so we can change all the headers to the same font */
.headers {
    margin-top:5%;
    font-size:45px;
}
.forms {
    margin-top:5%;
    margin: auto;
    border-width: medium;
    border: 1px solid lightgray;
    border-radius: 20px;
    padding: 10px;
    width:60%;
}
.form-text {
    font-size:18px;
    font-family:inherit;
}
</style>

<script>
export default {
    data() {
        return {
            account: {},
            action: 'Validate'
        }
    },

    methods: {
        accountAction()
        {
            if (this.action === 'Validate')
            {
                this.validateAccount()
            }
            else if (this.action === 'Create')
            {
                this.createAccount()
            }
        },

        createAccount()
        {
            let uri = 'http://localhost:4000/accounts/add'

            this.axios.post(uri, this.account).then(() => {
                this.$router.push({
                    name: 'account'
                })
            })
        },

        validateAccount()
        {
            let uri = 'http://localhost:4000/accounts/validate'

            this.axios.post(uri, this.account).then(() => {
                this.$router.push({name: 'account'})
            })
        },
    }
}
</script>