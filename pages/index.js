import Head from 'next/head'
import UserList from '../components/UserList'
import { useCollection } from '../hooks/useCollection'


export default function Home() {

  const { documents: users } = useCollection('users')

  console.log(users)

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nextjs and Firebase Starter Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        Home
        {users && <UserList users={users} />}

      </div>
    </div>
  )
}
