import { Dropdown } from 'react-bootstrap';
import './SortDropdown.css'

function SortDropdown({selected, onSortChange}) {
    return (
        <Dropdown onSelect = {(eventkey, event) => onSortChange(event.target.textContent)}>
            <Dropdown.Toggle id="dropdown-btn">
                {selected}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>First Name</Dropdown.Item>
                <Dropdown.Item>Last Name</Dropdown.Item>
                <Dropdown.Item>Age</Dropdown.Item>
            </Dropdown.Menu>
            
        </Dropdown>
    );
}

export default SortDropdown;