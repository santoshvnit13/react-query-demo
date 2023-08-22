import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {QueryClientProvider,QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import './App.css';
import { RQSuperHeroePage } from './components/RQSuperoHero.page'
import { ParallelQueriesPage } from './components/ParallelQueries.page'
import { DynamicParallel } from './components/DynamicParallelQueries'
import { DependentQueriesPage } from './components/DependentQueriesPage'

const queryClient=new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>

            <Route path='/rq-dependent' element={<DependentQueriesPage email="vishwas@codevolution.com"/>}>

            </Route>
            <Route path='/rq-dynamic-parallel' element={<DynamicParallel heroIds={[1,3]}/>}>

            </Route>
            <Route path='/rq-parallel' element={<ParallelQueriesPage/>}>

            </Route>
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroePage/>}>

            </Route>
            <Route path='/super-heroes' element={ <SuperHeroesPage />}>
             
            </Route>
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}>
              
            </Route>
            <Route path='/' element={ <HomePage />}>
             
            </Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpem={false} position='bottom-right'/>
      </QueryClientProvider>
  );
}

export default App;
