import Link from 'next/link';
import Container from '../../components/container';
import Router from 'next/router';
import Head from 'next/head';
import Organizations from '../../components/organizations';

const DashOrganizations = (props) => {
    return (
        <div>
        <Head>
            <title>test app</title>
        </Head>
        <Container>
          <Organizations organizations={props.organizations} />
        </Container> 
        </div>
    );
};
export default DashOrganizations;


DashOrganizations.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:8080/organizations/");
  const organizations = await res.json();
  console.log(organizations)
  return {
    organizations: organizations
  };
};



