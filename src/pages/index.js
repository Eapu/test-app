import Head from 'next/head'
import Container from '../../components/container'
import fetch from 'isomorphic-fetch'
import Users from '../../components/users'


const Index = (props) => {
    return (
        <div>
        <Head>
            <title>test app</title>
        </Head>
        <Container>
           <Users users={props.users} />
           
        </Container> 
        </div>
    );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch(" https://reqres.in/api/users");
  const resJSON = await res.json();
  return {
    users: resJSON.data
    };
};

export default Index;

/**
  Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    users: data
  };
};

 */
