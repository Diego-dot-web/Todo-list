import createTopbar from './Topbar';
import addTodoButton from './addTodoButton';
import sideTopbar from './createTopbar';
import createList from './listSection';
import './style.css';
import { createUtilities } from './utilitiesSection';



sideTopbar();
createUtilities();
createList();
createTopbar();
addTodoButton();