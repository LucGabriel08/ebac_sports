import BarraLateral from './containers/BarraLateral'
import ListaDeTarefa from './containers/BarraLateral/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefa />
      </Container>
    </>
  )
}

export default App
