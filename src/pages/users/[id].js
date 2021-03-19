import {useRouter} from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../../components/Container'
const UserProfile = ({user}) => {

  const router = useRouter();
  const {id} = router.query;
  return (
    <Container>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt="" style={{borderRadius:'50%'}}/>
          </div>
          <div className="card-body text-center">
            <h3>
            {user.id}-{user.first_name}
            </h3>
            <p>{user.email}</p>
          </div>

        </div>
      </div>
    </div>
      
    </Container>
  );
}
UserProfile.getInitialProps = async (ctx) => {
  //console.log(ctx.query.id)
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
  const resJSON = await res.json();
  //console.log(resJSON)
  return {user:resJSON.data}
}
export default UserProfile;
