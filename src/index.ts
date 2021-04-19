import FindGuitarTester from './FindGuitarTester';
import './styles/style.scss';

const tester = new FindGuitarTester();

document.getElementById('root').innerText = tester.result;