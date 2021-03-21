import Head from 'next/head'
import Navigation from './navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
Amplify.configure({...awsExports, ssr: true });
import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });


const Container = (props) => {
    return (
        <div>
        <Head>
            <title>test app</title>
            
        </Head>
        <AmplifyAuthenticator>
            <Navigation />
            <div className="container p-4">
                {props.children}
            </div>
        </AmplifyAuthenticator>
        </div>
    );
}


export default Container;
