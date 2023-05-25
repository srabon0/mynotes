<template>
    <div>
        <Ncard class="card">
            <h3>{{ authState }}</h3>
            <div class="input-container">
            <input type="email" name="email" id="">
            <input type="password" name="email" id="">
            </div>

            <NButton>Submit</NButton>
            <p @click="toggleAuthState">
          {{
            authState === "Login"
              ? "Don't have an account? Create one now"
              : "Already have an account? Go ahead an log in"
          }}
        </p>
        </Ncard>
    </div> 
</template>

<script setup lang="ts" >
const authState = ref<"Login" |"Signup" >("Login");

const toggleAuthState = ()=>{
    if(authState.value ==="Login") authState.value="Signup";
    else authState.value = "Login"
}
</script>

<style scoped>
.card {
  padding: 1rem;
  width: 25rem;
}

.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}

p {
  color: blue;
  font-size: 0.5rem;
  cursor: pointer;
}

.error {
  color: red;
}
</style>