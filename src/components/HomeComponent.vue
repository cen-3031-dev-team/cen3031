<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="validateAccount">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" v-model="account.email">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
               <label>Password:</label>
            <input type="text" class="form-control" v-model="account.password">
          </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Login</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          account:{}
        }
    },
    methods: {
      validateAccount(){
        let uri = 'http://localhost:4000/accounts/validate';
        this.axios.post(uri, this.account).then(() => {
          this.$router.push({name: 'account'});
        });
      }
    }
  }
</script>
