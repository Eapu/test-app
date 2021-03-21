import Link from 'next/link';
import Container from '../../../components/container'
import {useRouter} from 'next/router'

export default function Organizations({organization}) {
  const router = useRouter();
  const {id} = router.query;
  
    return <div>
   <Container>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
        
          <div className="card-body text-center">
            <h3>
            {organization.id}-{organization.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </div>
}
 



Organizations.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:8080/organizations/${ctx.query.id}`);
  const organization = await res.json();
  return {
    organization: organization
  };
};



