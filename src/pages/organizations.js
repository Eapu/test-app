import Link from 'next/link';
import Container from '../../components/container'

const people = [
    {db:'gdb1', name:'ele'},
    {db:'gdb2', name:'fra'},
    {db:'gdb3', name:'ped'},
]

export default function Organizations() {


    return <div>
    <Container>
    <div>

        {organizations.map(e => (
            <div>
            <Link as={`/${e.db}/${e.name}`} href="/[gdb]/[person]">
                <a>Navigate to {e.name}'s {e.db}</a>
            </Link>
            </div>
        ))}
        </div>
        </Container>
    </div>
}



/**
const people = [
    {db:'gdb1', name:'ele'},
    {db:'gdb2', name:'fra'},
    {db:'gdb3', name:'ped'},
]
export default function Details() {
    return <div>
    <Container>
    <div>
        {people.map(e => (
            <div>
            <Link as={`/${e.db}/${e.name}`} href="/[gdb]/[person]">
                <a>Navigate to {e.name}'s {e.db}</a>
            </Link>
            </div>
        ))}
        </div>
        </Container>
    </div>
}
 */