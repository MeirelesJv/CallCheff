export function Teste() {
  return(

        <form method="POST" action="localhost:8080/users/login">
        <input type="email" name="email" placeholder="Email"/>
        <input type="password" name="password" placeholder="Senha"/>
        <button>Login</button>
        <a href="/cadastro">Cadastrar</a>
        </form>
        
  )
}