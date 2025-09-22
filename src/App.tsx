import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homapage'
import Authentication from './pages/authentication'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{ duration: 7500 }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/authentication" element={<Authentication/>} />
          <Route path="/authentication/:action" element={<Authentication/>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App