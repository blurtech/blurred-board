import React from 'react'
import BoardStoreService from 'src/classes/services/BoardStoreService'
import Loader from 'src/components/shared/Loader'
import App from 'src/components/App'
import { IInfo } from 'src/classes/models/IInfo'

const Main = () => {
  const [board, setBoard] = React.useState<IInfo>()

  React.useEffect(() => {
    BoardStoreService.getInfo().then(result => setBoard(result.data))
  }, [])

  return board ? <App store={board} /> : <Loader />
}

export default Main
