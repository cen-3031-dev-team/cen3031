<template>
<div>
    <!--  -->
</div>
</template>

<script>
    export default {
        data() 
    	{
    		return {
                // ...
    		}
    	},

        methods: {
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