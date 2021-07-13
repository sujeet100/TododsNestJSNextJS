import Head from 'next/head'
import Todos from '../components/todos.js'
import Layout from '../components/layout.js';
import {AddTodo} from '../components/add-todo.js';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>My Todos</title>
        </Head>
          <AddTodo/>
          <Todos/>
      </Layout>
  )
}
