import FindInstrument from './FindInstrument';
import './styles/style.scss';

const tester = new FindInstrument();

document.getElementById('root').innerText = tester.result;
