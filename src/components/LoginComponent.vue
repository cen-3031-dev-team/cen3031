<template>
<div class="row justify-content-md-center">
    <form class="forms justify-content-md-center col-md-6 mt-3" @submit.prevent="accountAction">
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
            <div class="col">
                <div class="form-group">
                    <label class="form-text">Confirm Password:</label>
                    <input type="password" class="form-control" v-model="account.confirmPassword">
                </div>
            </div>
        </div>

        <div class="row py-3">
            <div class="col">
                <a href="#" class="login-switch"
                    @click.prevent='switchLoginMethod'
                >{{ loginMessage }}</a>
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

.login-switch {
    color: #615C5C;
}
.login-switch:hover {
    color: #2F2C2C;
}
</style>

<script>
export default {
    data() {
        return {
            account: {},
            action: 'Login'
        }
    },

    computed: {
        loginMessage()
        {
            return this.action === 'Login'
                ? 'Don\'t have an account yet? Click here to sign up for a trial.'
                : 'Already have an account? Click here to log in.'
        },
    },

    methods: {
        accountAction()
        {
            if (this.action === 'Login')
            {
                this.LoginAccount()
            }
            else if (this.action === 'Create')
            {
                this.createAccount()
            }
        },

        switchLoginMethod()
        {
            this.action = (this.action === 'Login')
                ? 'Create'
                : 'Login'
        },

        createAccount()
        {
            let uri = '/accounts/add'

            this.axios.post(uri, this.account).then(() => {
                this.$router.push({
                    name: 'account'
                })
            })
        },

        LoginAccount()
        {
            let uri = '/accounts/validate'

            this.axios.post(uri, this.account).then(() => {
                this.$router.push({name: 'account'})
            })
        },
    }
}
</script>