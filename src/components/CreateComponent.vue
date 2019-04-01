<template>
<div>
    <div class="row">
        <ul style ="margin-left:20%; margin-bottom:1%;" class="nav">
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

    <form class="forms" @submit.prevent="accountAction">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-text">Email:</label>
                    <input type="text" class="form-control" v-model="account.email">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
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

        <div class="form-group">
            <button style="margin-left:62%;" class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
</template>

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