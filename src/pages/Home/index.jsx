// Components
import trash from '../../assets/trash.svg'
// React
// style css
import './style.css'

function Home() {

  const users = [
    {
      id:'1', 
      name: 'Jósimo', 
      age: '25',
      email: 'rone@mail.com',
    },
    {
      id:'2', 
      name: 'Camila', 
      age: '24',
      email: 'camilah@mail.com',
    },
  ]
   return (
    <>
      <section id="center">
        <div className="container">
          <form>
            <h1>Cadastro de Usuário</h1>
            <input placeholder= 'Nome' name='nome' type="text" />
            <input placeholder= 'Idade' name='idade' type="number" />
            <input placeholder= 'Email' name='email' type="email" />
            <button type='button'>Cadastrar</button>
          </form>
          
          {users.map(users => (
          <div key={users.id} className="card" > 
            <div>
            <p>Nome: {users.name} </p>
            <p>Idade: {users.age} </p>
            <p>Email: {users.email} </p>
          </div>
          <button>
            <img src={trash} alt='Lixeira' />
          </button>
        </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
