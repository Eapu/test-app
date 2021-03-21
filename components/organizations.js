
import Router from 'next/router';

const Organizations = (props) => {
    return (
        <div>
    { (props) ? (
        <div>
        <button type="button" className="btn btn-primary" onClick={e => Router.push('organizations/new_organization')} >create</button>
        {
              props.organizations.map(organization => (
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                 key={organization.id} onClick={e => Router.push('/organizations/[id]', `/organizations/${organization.id}`)}>
                    <div>
                        <h5>{organization.id}</h5>
                        <p>{organization.name}</p>
                    </div>
                </li>  
            ))
        }
        </div>):(
            <div>
            <p>Create an organization</p>
            <button type="button" className="btn btn-primary" onClick={e => Router.push('organizations/new_organization')} >create</button>
            </div>
            )}
        </div>
    );
}

export default Organizations;
